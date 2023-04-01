FROM node:lts-alpine AS base
RUN npm install -g pnpm

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml nginx/nginx.conf ./
RUN pnpm install

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
ARG apiurl
ARG sitekey
ARG firebasekey
ENV PUBLIC_API_URL=$apiurl
ENV PUBLIC_TURNSTILE_SITE_KEY=$sitekey
ENV PUBLIC_FIREBASE_API_KEY=$firebasekey
ENV NODE_ENV='prod'
RUN pnpm build
RUN pnpm prune --prod

FROM nginx:latest AS deploy
WORKDIR /app
COPY --from=build /app/dist/reprogleorg /usr/share/nginx/html
COPY --from=dependencies /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
