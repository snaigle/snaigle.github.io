import{_ as t,p as a,q as p,a1 as e}from"./framework-5866ffd3.js";const c={},o=e(`<p> 1，wget http://mirrors.hust.edu.cn/apache/tomcat/tomcat-7/v7.0.42/bin/apache-tomcat-7.0.42.tar.gz </p><p> 2, tar -zxf apache-tomcat-7.0.42.tar.gz </p><p> 3, 调整server参数，调整 startup.sh中参数，删除webapps中example等应用 </p><p> 4，新建tomcat7脚本内容如下: </p><p>      </p><pre>#!/bin/sh
<p>TOMCAT_HOME=/your/tomcat/path</p>
<p>case &quot;$1&quot; in
start)
$TOMCAT_HOME/bin/startup.sh   
;; 
stop)
$TOMCAT_HOME/bin/shutdown.sh
    ;;
*)
echo &quot;please use start,stop&quot;
;;
esac
exit 0
添加权限 chmod 711 tomcat7
5, chkconfig --add tomcat7</p>
</pre><p>   chkconfig tomcat7 on </p><p><br></p><p> 6,然后就可以用  /etc/init.d/tomcat7 start </p><p>               service tomcat7 start </p><p>     来控制tomcat7了<br></p>`,11),n=[o];function s(r,m){return a(),p("div",null,n)}const i=t(c,[["render",s],["__file","2013-379.html.vue"]]);export{i as default};
