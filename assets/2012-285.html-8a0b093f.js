import{_ as e,p as s,q as a,R as t}from"./framework-5866ffd3.js";const o={},c=t("p",null,"跟了jetty的webappContext的加载过程，发现初始化时对webappClassLoader进行了初始化，因此在运行过程中直接对 webappContext.setClassLoader是行不通的。所以可以自己实现一个classLoaderWrap,然后使用双亲委派的思想对webapp/lib和 webapp/classes分别进行加载,设置一守护线程，当classes发生变化时就重新设置webapp/classes下的loader。这样应该就可以实现了，应该还会遇到解析jar的问题，具体有问题再参考jetty的实现过程",-1),l=[c];function p(r,_){return s(),a("div",null,l)}const d=e(o,[["render",p],["__file","2012-285.html.vue"]]);export{d as default};
