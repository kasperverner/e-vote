FROM oven/bun:debian as base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/prod/node_modules node_modules
COPY . .

FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/prisma prisma
COPY --from=prerelease /usr/src/app/utilities utilities
COPY --from=prerelease /usr/src/app/services/validation-service services/validation-service
RUN bunx prisma generate

ENTRYPOINT [ "bun", "run", "services/validation-service/index.ts" ]