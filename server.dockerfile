FROM oven/bun:debian as base
WORKDIR /usr/src/app
RUN apt-get update -yq \
  && apt-get -yq install curl \
  && curl -L https://deb.nodesource.com/setup_20.x | bash \
  && apt-get update -yq \
  && apt-get install -yq \
  nodejs \
  npm

RUN apt update
# RUN apt upgrade
# RUN apt install -y curl
# RUN curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
# RUN apt install nodejs npm -y

FROM base AS server-install
RUN mkdir -p /temp/server
COPY package.json /temp/server/
RUN cd /temp/server && bun install

FROM base AS frontend-install
RUN mkdir -p /temp/frontend
COPY /server/frontend/package.json /temp/frontend/
RUN cd /temp/frontend && bun install

FROM base AS build
RUN mkdir -p /temp/frontend
COPY /server/frontend /temp/frontend/
COPY --from=frontend-install /temp/frontend/node_modules /temp/frontend/node_modules
ENV VITE_CLERK_PUBLISHABLE_KEY=pk_test_cmljaC1tYXJ0aW4tNzMuY2xlcmsuYWNjb3VudHMuZGV2JA
RUN cd /temp/frontend && bunx --bun vite build

FROM base AS prerelease
COPY . .
RUN rm -Rf /usr/src/app/server/frontend

FROM base as release
COPY --from=server-install /temp/server/node_modules node_modules
COPY --from=prerelease /usr/src/app/server server
COPY --from=prerelease /usr/src/app/prisma prisma
COPY --from=prerelease /usr/src/app/services services
COPY --from=build /temp/frontend/dist server/frontend/dist
RUN bunx prisma generate

ENTRYPOINT [ "bun", "run", "server/index.ts" ]