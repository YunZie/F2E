# base image
FROM node:13.0.1

# set working directory
WORKDIR /F2E
COPY package.json ./package.json

# install and cache app dependencies
RUN npm install
RUN npm install -g @angular/cli@8.3.17

COPY . .

# start app
# CMD ng serve --host 0.0.0.0 --port 80