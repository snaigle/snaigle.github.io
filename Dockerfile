FROM alpine:latest
WORKDIR /
RUN apk add caddy
ADD Caddyfile /
ADD . /data/www
CMD ["caddy"]
