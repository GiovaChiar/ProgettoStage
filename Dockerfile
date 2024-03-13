FROM node:20-alpine as build
RUN apk add python3
WORKDIR /usr/src/app
RUN npm install -g npm@10.4.0
COPY package*.json ./
RUN npm install 
COPY . ./

EXPOSE 4200 
CMD ["npm", "run", "start"]