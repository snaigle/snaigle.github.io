import{_ as o,p as c,q as _,R as t}from"./framework-5866ffd3.js";const e={},n=t("p",null," 项目部署流程： ",-1),s=t("p",null,"     服务器结构  nginx-- tomcat1（平时不启动，测试机）,tomcat2（一直启动）,static ",-1),l=t("p",null,"     部署时，停掉tomcat1，部署上最新的系统，启动。 ",-1),a=t("p",null,"     使用ip访问tomcat1验证系统是否正常 ",-1),i=t("p",null,"     1，正常，停掉tomcat2，tomcat2部署新系统，启动tomcat2，停掉tomcat1。最后一次测试，部署成功 ",-1),m=t("p",null,"     2，否，停掉tomcat1，报告错误日志 ",-1),d=t("p",null,"      ",-1),p=[n,s,l,a,i,m,d];function r(u,h){return c(),_("div",null,p)}const x=o(e,[["render",r],["__file","2012-215.html.vue"]]);export{x as default};
