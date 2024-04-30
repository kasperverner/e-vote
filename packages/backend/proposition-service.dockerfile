FROM node:20-bullseye
WORKDIR /usr/srv/app
COPY proposition-service/package*.json ./
RUN npm install
COPY proposition-service .
COPY prisma /usr/srv/prisma
CMD [ "npm", "start" ]