FROM node:20-bullseye
WORKDIR /usr/srv/app
COPY validation-service/package*.json ./
RUN npm install
COPY validation-service .
COPY prisma /usr/srv/prisma
CMD [ "npm", "start" ]