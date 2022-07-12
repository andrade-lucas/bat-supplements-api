FROM node:16.16 AS builder
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:16.16-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE ${APP_PORT}
CMD ["npm", "run", "start:prod"]
