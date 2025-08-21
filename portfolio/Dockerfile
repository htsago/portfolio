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

RUN chown -R node:node /app
USER node

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"] 