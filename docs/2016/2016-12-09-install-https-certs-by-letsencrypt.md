---
date: '2016-12-09'
title: 使用letsencrypt申请https证书
---

### 安装certbot-auto
#### 方法一
```
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
```
#### 方法二
```
git clone https://github.com/letsencrypt/letsencrypt
```

### 申请证书
#### webroot方式， 适合80和443端口被占用的情况
```
certbot-auto certonly --email op@helao.net --agree-tos \
--webroot -w /data/www/helao.net -d helao.net -d www.helao.net
```
#### standalone，在目标机上直接开启80端口进行验证，适合空机器

#### manual ，交互式申请，需要把目标文件放到对应的机器上即可，适合申请机器和目标机器不一样的情况

### 生成dhparams
```
mkdir -p /etc/ssl/certs/
openssl dhparam -out /etc/ssl/certs/dhparams.pem 2048
 ```

###  在nginx.conf中开启ssl
```
ssl_certificate /etc/letsencrypt/live/helao.net/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/helao.net/privkey.pem;
ssl_dhparam /etc/ssl/certs/dhparams.pem;

ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA';

ssl_prefer_server_ciphers  on;
```

### 在nginx.conf将http 重定向到https
```
return 301 https://$host$request_uri;
```
### 自动续期证书
```
certbot renew --pre-hook "service nginx stop" \
--post-hook "service nginx start"
```
