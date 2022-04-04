FROM node:16.14-alpine 

WORKDIR /usr/app

COPY package.json ./

COPY package-lock.json ./

# for production image optimization


RUN npm install

COPY ./ ./

RUN npm run build


EXPOSE 8080

CMD ["npm", "start"]
