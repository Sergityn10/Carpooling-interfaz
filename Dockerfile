FROM node:lts-bullseye
WORKDIR /app
COPY package*.json . /
RUN npm ci
COPY . .
RUN npm run build
# CMD ["npm","start"]


# Etapa 2: Servir la aplicación
# FROM nginx:stable-alpine AS runtime
# FROM nginx:stable-alpine
# ADD ./config/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=built /app/build /var/www/app/
# EXPOSE 80
# CMD ["nginx","-g", "daemon off;"]