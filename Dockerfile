# build stage
FROM node:18-alpine3.18 as build

WORKDIR /app

COPY package.json .
COPY pnpm-workspace.yaml .
COPY packages/** ./packages/

RUN npm config set registry https://registry.npmmirror.com

RUN npm install -g pnpm

RUN pnpm install -r

COPY . .

RUN pnpm run build

# deploy-stage
FROM nginx:stable-alpine as deploy

COPY --from=build /app/dist /usr/share/nginx/html/sparkle-manage

COPY nginx.conf  /etc/nginx/conf.d/sparkle-manage.conf 

EXPOSE 8080

ENTRYPOINT ["sh", "-c","mkdir -p /opt/docker/nginx && nginx -g 'daemon off;'"]



