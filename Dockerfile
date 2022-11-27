# Get NPM packages
FROM node:18.12.1-alpine AS dependencies
WORKDIR /usr/app
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM node:18.12.1-alpine AS builder
WORKDIR /usr/app
COPY . .
COPY --from=dependencies /usr/app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:18.12.1-alpine AS runner
WORKDIR /usr/app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]