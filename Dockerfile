FROM node:14.17.3 as build
WORKDIR /app
COPY ./package*.json ./

RUN npm ci

COPY ./ ./
RUN npm run build

FROM nginx:1.23.0-alpine
#EXPOSE 8090
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/fuse /usr/share/nginx/html