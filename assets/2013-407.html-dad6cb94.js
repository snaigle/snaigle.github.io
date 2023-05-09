import{_ as n,p as r,q as s,a1 as t}from"./framework-5866ffd3.js";const e={},o=t(`<p> 1，主机接收数据 </p><pre>uid = root       
gid = root
<p>use chroot = yes
max connections = 10
pid file = /var/run/rsyncd.pid
lock file = /var/run/rsyncd.lock
log file = /var/log/rsyncd.log</p>
<p>[tuijian]
path = /data/static/tuijian
ignore erros
read only = false
list = false
hosts allow = 192.168.0.0/24
hosts deny = 0.0.0.0/32
auth users = rsync
secrets file = /etc/rsyncd.pwd</p>
</pre><p> 这里需要注意 uid和gid对 path 要有读写权限才行， 把/usr/bin/rsync --daemon 添加到开机启动  </p><p><br></p><p> 2，客户机发送发送数据 </p><p></p><pre>rsync -vrtL --progress /data/static/tuijian/* rsync@192.168.0.119::tuijian --password-file=/root/rsync.pwd
rsync -vrtL --progress /data/static/tuijian/* rsync@192.168.0.55::tuijian --password-file=/root/rsync.pwd
</pre><p><br></p><p> 客户机添加定时任务 */10 * * * * /root/rsync.sh 即可 </p>`,9),a=[o];function c(i,p){return r(),s("div",null,a)}const l=n(e,[["render",c],["__file","2013-407.html.vue"]]);export{l as default};
