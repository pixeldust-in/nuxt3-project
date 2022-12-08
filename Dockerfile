FROM node:16.18.1

RUN mkdir -p /nuxt-app

WORKDIR /nuxt-app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn build
