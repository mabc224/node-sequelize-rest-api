#################################
#	DOCKER FILE for Node APP
#################################

FROM node:8.9-alpine
MAINTAINER Arsalan Bilal<mabc224@gmail.com>
WORKDIR /app

COPY package.json .
RUN npm install --production --quiet
COPY . .

