FROM node:20-bullseye
WORKDIR /usr/srv/app
COPY ballot-service/package*.json ./
RUN npm install
COPY ballot-service .
COPY prisma /usr/srv/prisma
CMD [ "npm", "start" ]