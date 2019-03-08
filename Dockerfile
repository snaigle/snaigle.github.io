FROM openresty/openresty:alpine
ADD default.conf /etc/nginx/conf.d
ADD . /data/www
