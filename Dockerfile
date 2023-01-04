FROM node:16-alpine

WORKDIR /

COPY . .

RUN npm install

EXPOSE 80

CMD [ "npm", "start" ]
