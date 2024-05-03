FROM node:20-bullseye
WORKDIR /usr/srv/app
COPY api/package*.json ./
RUN npm install
COPY api .
COPY prisma /usr/srv/prisma
CMD [ "npm", "start" ]