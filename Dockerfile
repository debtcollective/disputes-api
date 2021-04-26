FROM node:12.22.1

WORKDIR /usr/src/app

ADD ./package.json package.json
RUN yarn install

COPY . .

# Copy default config pointing to ENV
COPY .env.template .env

EXPOSE 4000

CMD ["yarn", "start:prod"]
