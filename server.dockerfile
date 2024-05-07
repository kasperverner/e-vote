FROM oven/bun:debian as base
WORKDIR /usr/src/app

FROM node:20 AS server-install
RUN mkdir -p /temp/server
COPY package.json /temp/server/
COPY prisma /temp/server/prisma
RUN cd /temp/server && npm install --production && npx prisma generate

FROM base AS frontend-install
RUN mkdir -p /temp/frontend
COPY /server/frontend/package.json /temp/frontend/
RUN cd /temp/frontend && bun install

FROM base AS build
RUN mkdir -p /temp/frontend
COPY /server/frontend /temp/frontend/
COPY --from=frontend-install /temp/frontend/node_modules /temp/frontend/node_modules
ENV VITE_CLERK_PUBLISHABLE_KEY=pk_test_cmljaC1tYXJ0aW4tNzMuY2xlcmsuYWNjb3VudHMuZGV2JA
ENV NODE_ENV=production
RUN cd /temp/frontend && bunx --bun vite build

FROM base AS prerelease
COPY . .
RUN rm -Rf /usr/src/app/server/frontend
COPY --from=server-install /temp/server/node_modules node_modules
COPY --from=server-install /temp/server/prisma prisma
COPY --from=build /temp/frontend/dist server/frontend/dist

FROM base as release
COPY --from=prerelease /usr/src/app/node_modules node_modules
COPY --from=prerelease /usr/src/app/prisma prisma
COPY --from=prerelease /usr/src/app/server server
COPY --from=prerelease /usr/src/app/services services

ENTRYPOINT [ "bun", "run", "server/index.ts" ]