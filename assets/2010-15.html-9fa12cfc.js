import{_ as s,p as a,q as n,R as e,t}from"./framework-5866ffd3.js";const o={},i=e("div",{class:"entry"},[e("span",{style:{"font-family":"Arial,'MS Sans Serif'","font-size":"14px","line-height":"21px"}},[e("h3",{style:{margin:"0px",padding:"0px"}},"JSP EL简介")]),t(),e("p",{style:{padding:"0px",margin:"1em 0px 0.5em",color:"#444444"}},'语 法结构      ${expression} 2、[ ]与.运算符      EL 提供“.“和“[ ]“两种运算符来存取数据。      当要存取的属性名称中包含一些特殊字符，如.或?等并非字母或数字的符号，就一定要使用“[ ]“。例如：          ${user.My-Name}应当改为${user["My-Name"] }      如果要动态取值时，就可以用“[ ]“来做，而“.“无法做到动态取值。例如：          ${sessionScope.user[data]}中data 是一个变量 3、变量      EL存取变量数据的方法很简单，例如：${username}。它的意思是取出某一范围中名称为username的变量。      因为我们并没有指定哪一个范围的username，所以它会依序从Page、Request、Session、Application范围查找。      假如途中找到username，就直接回传，不再继续找下去，但是假如全部的范围都没有找到时，就回传null。      属性范围在EL中的名称          Page          PageScope          Request          RequestScope          Session          SessionScope          Application      ApplicationScope')],-1),p=[i];function r(c,l){return a(),n("div",null,p)}const _=s(o,[["render",r],["__file","2010-15.html.vue"]]);export{_ as default};
