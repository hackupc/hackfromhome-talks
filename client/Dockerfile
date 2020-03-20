FROM node:13.3

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install
RUN npm install -g react-scripts@3.4.0

COPY . /app

RUN npm run-script build
