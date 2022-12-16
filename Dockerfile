FROM node:16-alpine

WORKDIR /

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]