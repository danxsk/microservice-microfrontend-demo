# base image
FROM node:9.11.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY component-header/package.json /usr/src/app/package.json
COPY component-header/package-lock.json /usr/src/app/package-lock.json

RUN npm install

# start app
CMD ["npm", "run","build"]

CMD ["npm", "start"]
