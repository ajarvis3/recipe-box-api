FROM alpine:latest
ARG PORT=8080

ADD public /app/public
ADD src /app/src
ADD environment.d.ts /app/environment.d.ts
ADD package.json /app/package.json
ADD tsconfig.json /app/tsconfig.json
ADD tslint.json /app/tslint.json

WORKDIR /app

RUN apk add --update yarn
RUN yarn install
RUN yarn build

EXPOSE $PORT/udp
EXPOSE $PORT/tcp
CMD ["yarn", "start", ">", "my_app_log.log", "2>", "my_app_err.log"]
