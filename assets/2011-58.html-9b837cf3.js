import{_ as e,p as l,q as o,t as s,R as t}from"./framework-5866ffd3.js";const n={},c=t("p",null,"项目中采用了 ssh 框架，并将dao层封装为 一个 hibernateDao,预留接口： 查询和分页，删除，更新，保存，和 hqlquery,sqlquery, 同时pojo中采用annotion，所以一般查询时不需要写hql语句，感觉非常方便。",-1),_=t("p",null," ",-1),i=t("p",null,[t("span",{style:{color:"#ff0000"}},"涉及到的测试问题：如何测试 hql，sql，和一般性查询"),s("。sql语句很好测试，可以使用dbunit来进行。")],-1),p=t("p",null," ",-1),a=t("p",null,"项目中 将hbm.xml 文件都配置到了 application-dbaccess.xml中，自动将xml生成数据库的表，当xml修改后，也会自动修改表结构。这是依赖spring容器的，所以给测试hql带来了麻烦。必须启动spring容器才能进行测试，尤其是项目中的bean非常多，启动很慢，差不多都可以启动weblogic了。",-1),h=t("p",null," ",-1),d=t("p",null,"本来myeclipse 下有一个hql编辑器，可以直接测试hql，如果单独使用hibernate来测试hql，同样需要 hibernate.revert.xml这个文件，但我们项目中没有这个文件，需要将application-dbaccess.xml 中的 hbm.xml 数据添加到  hibernate.revert.xml中才行。",-1),r=t("p",null,[t("span",{style:{color:"#ff0000"}},"解决办法： 生成 hibernate.revert.xml ，不测试dao层，直接测试 service即可。")],-1),u=t("p",null," ",-1),m=t("p",null,"测试service方法，这里有两个测试",-1),b=t("p",null,"       开发时的测试： mock掉dao层，测试非常快。",-1),q=t("p",null,[t("span",{style:{"white-space":"pre"}}),s("集成测试：  使用dao层，需要使用测试数据库，使用springtransactiondatasourcetestcase 这个类，")],-1),f=t("p",null,"                  测试完后可以将数据回滚， 应避免脏数据的产生，在每次集成测试前，需要初始化 db,保证测试结果一致性。",-1),x=t("p",null,[t("span",{style:{color:"#ff0000"}},"实际遇到的问题： 如何mock掉dao层？  测试完数据不回滚？加载xml非常慢？"),s("  ")],-1),v=t("p",null,"加载xml慢： 解决办法，开启懒加载，避免不必要的bean浪费时间。其他的 正在研究",-1),y=t("p",null," ",-1),k=t("p",null,"测试action层：",-1),w=t("p",null,"       有strutstestcase 包可以测试action， 测试的内容有 request path， forward ，request attribute，tile/input",-1),g=t("p",null,"       遇到最多的问题是 配置文件，建议尽量将 url == module +class+ method 这个结构，比较好。不容易出错。",-1),B=t("p",null,"       这确实是个问题。",-1),j=t("p",null," ",-1),N=t("p",null,"遇到的测试的问题：  启动速度问题，mock service 层",-1),V=t("p",null,"       action一般我是启动web容器来测试，这样效率非常的慢，不能批量测试，每遇到一个问题 ，基本都要重启一次。",-1),D=t("p",null,"       以后将这部分进行批量测试。 ",-1),E=t("p",null,"解决办法  mock service,将spring 启用懒加载。",-1),R=t("p",null,"             测试项：  request path--> forward - input - data, 然后jsp中的错误可以一遍改一遍测。",-1),T=t("p",null,[t("span",{style:{"white-space":"pre"}})],-1),z=t("p",null," ",-1),A=t("p",null," ",-1),C=t("p",null," ",-1);function F(G,H){return l(),o("div",null,[c,s(),_,s(),i,s(),p,s(),a,s(),h,s(),d,s(),r,s(),u,s(),m,s(),b,s(),q,s(),f,s(),x,s(),v,s(),y,s(),k,s(),w,s(),g,s(),B,s(),j,s(),N,s(),V,s(),D,s(),E,s(),R,s(),T,s(),z,s(),A,s(),C])}const J=e(n,[["render",F],["__file","2011-58.html.vue"]]);export{J as default};
