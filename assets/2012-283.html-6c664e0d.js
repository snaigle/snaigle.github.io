import{_ as e,p as l,q as t,a1 as o}from"./framework-5866ffd3.js";const a={},c=o(`<p> scoffold中文意思是脚手架，方便工作用的工具 </p><p> 直接上例子吧： </p><span></span><p><br></p><ol><li>  使用ncode create-project test ,创建新项目 </li><li>  cd test; ncode create-domain hello 创建 domain </li><li>  修改src/domains/Hello.java 文件， 添加 name,age 属性,并添加set，get方法 </li><li>  在recourses/local/default.properties 下添加  <pre class="prettyprint linenums">Hello.listName=列表
Hello.id=编号
Hello.name=姓名
Hello.age=年龄</pre></li><li> ncode create-controller hello ,然后将项目放到tomcat下运行 </li><li> 访问 127.0.0.1:port/test/hello/list 是不是看到页面已经生成了 </li></ol><p><br></p>`,6),s=[c];function n(r,i){return l(),t("div",null,s)}const d=e(a,[["render",n],["__file","2012-283.html.vue"]]);export{d as default};
