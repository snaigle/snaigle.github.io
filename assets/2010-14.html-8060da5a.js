import{_ as s,p as o,q as l,t as e,R as t}from"./framework-5866ffd3.js";const n={},_=t("p",null,"velocity 和freemarker 基本一致，就是不如freemarker 的 语法强，但是挺简单的",-1),c=t("p",null,"自定义标签的实现过程，",-1),a=t("p",null,"       定义标签实现类，继承 tagsupport 类 ，继承tag也行   类里面定义了一些 常用变量 很方便。",-1),r=t("p",null,"        然后实现startTag（） 和 endTag（） 方法， ",-1),p=t("p",null,"        编辑tld 文件   里面属性名 和 标签类里面的属性对应 保持一致 ",-1),d=t("p",null,"       然后就是使用标签了",-1),i=t("p",null," ",-1),u=t("p",null,"我实现要麻烦一些",-1),h=t("p",null,"     定义标签类后，  然后要定义各模块的输出模板类，让这些类实现了统一的接口，然后就是把模块中的一些属性 定义成一个pojo类，并要把这个类能和xml相互转换。",-1),m=t("p",null,"这样jsp标签传值时 应使用 ${formName.attributeName} 的形式来进行传值，我觉得是由于jsp不支持值栈的原因     ",-1),f=t("p",null,"属性值就能传到 tagclass中，这里通过classname得到要表现的模块表现类的实例，调用接口的方法就能从实例中得到模块的表现内容，然后把内容输出返回就ok了",-1);function g(k,x){return o(),l("div",null,[_,e(),c,e(),a,e(),r,e(),p,e(),d,e(),i,e(),u,e(),h,e(),m,e(),f])}const j=s(n,[["render",g],["__file","2010-14.html.vue"]]);export{j as default};
