# Dockerfile (backend)
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ENV NODE_ENV=production
# Si usas compilación/transpilación, ejecuta build aquí (no usual para node/express)
# RUN npm run build

EXPOSE 4001
CMD ["node", "index.js"]
