FROM node:16-alpine3.15

WORKDIR /app

ARG REACT_APP_REQ_RES_API_URL=""

ENV REACT_APP_REQ_RES_API_URL = "https://reqres.in/api"

COPY package.json ./app

RUN yarn install

COPY . .

RUN yarn build








