# base image
FROM node:13.0.1

# set working directory
WORKDIR /projects/F2E/src

COPY . .

RUN npm install
RUN npm run build -- --prod --output-path dist

# start app
CMD ng serve --host 0.0.0.0 --port 80