FROM node:16-alpine3.15

COPY packag*.json ./

RUN yarn install

COPY . .

RUN yarn run build