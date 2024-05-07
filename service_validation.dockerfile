FROM oven/bun:debian as base
WORKDIR /usr/src/app

FROM node:20 AS install
RUN mkdir -p /temp/prod
COPY package.json /temp/prod/
COPY prisma /temp/prod/prisma
RUN cd /temp/prod && bun install --frozen-lockfile --production && npx prisma generate

FROM base AS prerelease
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=install /temp/prod/prisma prisma
COPY . .

FROM base AS release
COPY --from=prerelease /usr/src/app/node_modules node_modules
COPY --from=prerelease /usr/src/app/prisma prisma
COPY --from=prerelease /usr/src/app/utilities utilities
COPY --from=prerelease /usr/src/app/services/validation-service services/validation-service
RUN bunx prisma generate

ENTRYPOINT [ "bun", "run", "services/validation-service/index.ts" ]