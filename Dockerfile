FROM node:18.15.0-alpine3.17 AS build
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm build:dev

FROM nginx:1.19-alpine
COPY --from=build /app/dist /opt/site
COPY nginx.conf /etc/nginx/nginx.conf
