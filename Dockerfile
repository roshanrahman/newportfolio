FROM node:10 AS builder
RUN npm install yarn 
COPY . . 
RUN yarn install 
RUN yarn build
RUN   yarn global add serve
RUN serve -s build