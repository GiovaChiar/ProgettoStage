ARG VERSION=3.8 
FROM alpine:$0{VERSION 
ARG VERSION RUN echo $VERSION 
RUN ["echo", "$VERSION" ] 
WORKDIR /app 
COPY . . 
RUN apk add --update nodejs npm 
RUN npm install -g @angular/cli 
EXPOSE 4200 
CMD ng serve --host 0.0.0.0