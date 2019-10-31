FROM node:10
WORKDIR /app
COPY . .

RUN cp .env.example .env

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
