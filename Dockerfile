FROM node:lts-alpine AS base
RUN npm install -g pnpm

FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod
RUN pnpm install typescript
RUN pnpm install ts-node

FROM base AS run
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
EXPOSE 8080

CMD ["pnpm", "run", "start:prod"]
