import{_ as e,p as o,q as l,a1 as t}from"./framework-5866ffd3.js";const c={},a=t('<ol><li> 分包，注意子包的处理 <span style="background-color:#009900;">------------完成</span></li><li> 去掉controller中的所有注解 <span style="background-color:#009900;">---------------ok</span></li><li> 去掉Inject 注解，不用判断，含有public set的直接ioc注入, domain的注解不处理（要不然只能是domain更加复杂）<span style="background-color:#009900;">--ok</span></li><li> redirect 支持返回 message<span style="background-color:#009900;">  --- ok-----------------------</span></li><li> 项目模版，create-project , create-domain,create-controller,create-view， 想办法实现Scaffold 功能 </li><li> url rewrite </li><li> taglibs ,filters 更方便的支持 </li><li> 为domain动态添加各种查询方法-----------------考虑中------------------------------ </li></ol><p> 可以将nor 打包了,基本的约定已经实现了，对ttcms进行升级,同时看看nutz 关于dao 和mvc的新特性 </p>',2),r=[a];function i(n,s){return o(),l("div",null,r)}const p=e(c,[["render",i],["__file","2012-04-19-2.html.vue"]]);export{p as default};
