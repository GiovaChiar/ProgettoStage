FROM node:20-alpine3.18 as build
#non usare alpine
RUN apk add python3
WORKDIR /usr/src/app
RUN npm install -g npm@10.4.0
COPY package*.json ./
#COPY package.json ./
#COPY package-lock.json ./
#WORKDIR /src
#RUN npm install -g @angular/cli
#RUN npm install cors
RUN npm install 
COPY . ./
#RUN npm run build

EXPOSE 4200 
CMD ["npm", "run", "start"]