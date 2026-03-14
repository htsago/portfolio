FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --no-audit --no-fund \
    && npm cache clean --force

COPY . .

FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=development \
    NPM_CONFIG_LOGLEVEL=error

COPY --from=builder /app /app

# Install curl for healthcheck
RUN apk add --no-cache curl

RUN chown -R node:node /app
USER node

EXPOSE 5173

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:5173/ || exit 1

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
