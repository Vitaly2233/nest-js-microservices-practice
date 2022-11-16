FROM node:16.14.2 as builder
RUN mkdir -p /var/www/hello
WORKDIR /var/www/hello
ADD . /var/www/hello
RUN npm install
CMD npm run build && npm run start:dev
