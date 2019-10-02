FROM node:12.10.0

WORKDIR /usr/src/app

ADD ./package.json package.json
RUN yarn install

COPY . .

# Copy default config pointing to ENV
COPY .env.template .env

EXPOSE 4000

RUN yarn build

CMD ["yarn", "start:prod"]
