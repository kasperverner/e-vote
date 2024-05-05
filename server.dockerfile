FROM oven/bun:debian as base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/server
COPY package.json bun.lockb /temp/server/
RUN cd /temp/server && bun install --frozen-lockfile --production

RUN mkdir -p /temp/frontend
COPY /server/frontend/package.json /server/frontend/bun.lockb /temp/frontend/
RUN cd /temp/frontend && bun install --frozen-lockfile --production

FROM base AS build
RUN mkdir -p /temp/frontend
COPY /server/frontend /temp/frontend
COPY --from=install /temp/frontend/node_modules /temp/frontend/node_modules
ENV VITE_CLERK_PUBLISHABLE_KEY=pk_test_cmljaC1tYXJ0aW4tNzMuY2xlcmsuYWNjb3VudHMuZGV2JA
RUN cd /temp/frontend && bunx --bun vite build

FROM base AS prerelease
COPY . .
RUN rm -Rf /usr/src/app/server/frontend

FROM base as release
COPY --from=install /temp/server/node_modules node_modules
COPY --from=prerelease /usr/src/app/server server
COPY --from=prerelease /usr/src/app/prisma prisma
COPY --from=prerelease /usr/src/app/services services
COPY --from=build /temp/frontend/dist server/frontend/dist
RUN bunx prisma generate

ENTRYPOINT [ "bun", "run", "server/index.ts" ]