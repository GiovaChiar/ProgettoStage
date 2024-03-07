FROM node:20-alpine
#RUN sudo mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
ENV NODE_ENV=production
COPY package*.json . /
RUN npm install -g cors-anywhere@$version
#RUN npm install cors
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node","server.js"]
#CMD ["npm","run","dev"]