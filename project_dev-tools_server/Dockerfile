FROM node:16.14-alpine
# FROM mongo:3.4.7

# ENV MONGO_INITDB_ROOT_USERNAME admin
# ENV MONGO_INITDB_ROOT_PASSWORD 1234
# ENV MONGO_INITDB_DATABASE traderrecord
WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]