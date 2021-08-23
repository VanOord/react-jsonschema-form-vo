FROM node:14
WORKDIR /rjsf
COPY . /rjsf


WORKDIR /rjsf/packages/core
RUN npm install 
RUN npm run build