FROM node:10 AS builder
RUN npm install yarn 
COPY . . 
RUN yarn install 
RUN yarn build

FROM httpd:2.4
COPY --from=builder /build/* /usr/local/apache2/htdocs/
