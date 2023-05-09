import{_ as e,p as t,q as s,R as n}from"./framework-5866ffd3.js";const o={},p=n("p",null,"首先去nginx官网下载nginx最新版，解压。 下载window下的php5.2的zip包，不要下载exe的，否则你安不上，将php解压。 首先配置$nginx_home$/conf/nginx.conf,修改内容",-1),i=n("pre",{class:"prettyprint lang-js linenums"},`server {
        #端口不解释
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        # 修改root为你的项目路径，或静态文件路径
        location / {
            root   D:/test-program/phpwww;
            index  index.html index.htm index.php;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
       #  50x.htm所在的路径，同理可以配置404，403等
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \\.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #php后缀的处理，将此段前面的#都去掉
        location ~ \\.php$ {
            root           D:/test-program/phpwww; #这个一定是项目路径
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;    #目录的默认页面
            fastcgi_param  SCRIPT_FILENAME  D:/test-program/phpwww$fastcgi_script_name;## 将此也改为项目路径
            include        fastcgi_params;
        }

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        location ~ /\\.ht {
            deny  all;
        }
         ## 静态文件的处理
	location = \\.(css|jpg|gif|js|html|htm)$ {
            root           D:/test-program/phpwww;
        }
    }`,-1),r=n("p",null,"将$php-home$/php.ini-recommended改为 php.ini,修改内容如下",-1),c=n("pre",{class:"prettyprint lang-js linenums"},`; CGI 设置
cgi.force_redirect = 1
cgi.fix_pathinfo = 1
cgi.rfc2616_headers = 1

error_reporting = E_ALL
display_errors = On
extension_dir = "C:\\php5\\ext"
; 找到以上两端，将其前面的；去掉，同时修改其值

; 动态扩展，可以根据需要去掉 extension 前面的注释 ;
; 如加载 PDO, MySQL
extension=php_pdo.dll
extension=php_pdo_mysql.dll
; 这些 extension扩展，看你需要那些，就去掉前面的；即可。如果不熟悉那么只要把除了mysql的其他数据库插件不使用外，其他所用的插件都放开。这样确保第一次容易使用，等以后熟悉了再精确修改`,-1),h=n("p",null,"下面写了两个批处理用来启动和关闭nginx。",-1),a=n("pre",{class:"prettyprint lang-js linenums"},`# start
@echo off
echo start php fastcgi...
RunHiddenConsole.exe \${php-home}/php-cgi.exe -b 127.0.0.1:9000 -c \${php-home}/php.ini

echo starting nginx...
\${nginx-home}/nginx.exe
#start

#stop
@echo off
echo stopping nginx...
taskkill /F /IM nginx.exe > nul
echo stopping php fastcgi ...
taskkill /F /IM php-cgi.exe > nul
exit
#stop`,-1),l=n("p",null,"上面用到了一个RunHiddenConsole.exe小程序，用来隐藏dos窗口，只有几K，下载连接 到此就配置完了，是不是很简单，启动服务器，自己去试试吧，建议下个wordpress来试试。",-1),_=[p,i,r,c,h,a,l];function g(d,x){return t(),s("div",null,_)}const f=e(o,[["render",g],["__file","2011-152.html.vue"]]);export{f as default};
