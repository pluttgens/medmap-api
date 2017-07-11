FROM node:alpine
MAINTAINER pascal.luttgens@hotmail.fr

RUN apk update && apk upgrade && \
    apk add --no-cache bash git

RUN mkdir -p /usr/src/medmap /var/log/medmap
VOLUME ["/var/log/medmap"]

WORKDIR /usr/src/medmap

COPY package.json .
RUN npm i --save-dev
COPY . .

EXPOSE 7100

CMD ["npm", "run", "dev"]
