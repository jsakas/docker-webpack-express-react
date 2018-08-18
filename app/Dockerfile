FROM node:8 as builder

WORKDIR /opt/app

COPY package.json yarn.lock ./

RUN yarn install
COPY . .

ENV BABEL_ENV server 
ENV NODE_ENV production

RUN yarn babel:build
RUN yarn webpack:build

EXPOSE 5280
CMD node dist/index.js
