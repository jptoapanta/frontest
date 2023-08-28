FROM node:14.17.3 as build
WORKDIR /app
COPY ./package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/frontest /usr/share/nginx/html/
#COPY --from=build /source/nginx.conf /etc/nginx/conf.d/
EXPOSE 8080