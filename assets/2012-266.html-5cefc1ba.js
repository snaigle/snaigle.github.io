import{_ as e,p,q as t,a1 as o}from"./framework-5866ffd3.js";const a={},r=o(`<p> 先上个例子看看 </p><p><br></p><pre class="prettyprint lang-js linenums">package proto.test2;  
<p>option java_package = &quot;proto.test&quot;;<br>
option java_outer_classname = &quot;RequestBPO&quot;;</p>
<p>option optimize_for = SPEED;</p>
<p>message Request{<br>
optional int32 num = 1;  
required string msg = 2;
repeated Keyval maps = 3 ;
optional bool right = 4 ;
}
message Keyval{
optional string key = 1;
optional string value = 2;
}</p>
</pre><p>使用protoc.exe --java_out=src\\  src\\request.proto 编译</p><p><br></p><p> 即可在 src\\proto\\test下生成 RequestBPO 类   </p><p> 为什么不是proto.test2呢，因为 option java_package 的优先级比package的优先级要高 </p><p> 如果没有option java_package 那么就会在 proto.test2下生成。 </p><p> 文件里面要定义消息格式  例： message SomeMessage{...} 这个样子，可以定义多个，也可以嵌套定义 </p><p> SomeMessage是最终生成BPO中的request message的类名 </p><p> 下面看message中支持的类型   定义属性格式是这个样子滴： optional|required|repeated   type  name = order; </p><p> 第一个是描述符只有那三种， type有 double，float，int32对应java中的double，float，int </p><p> 还有string对应string， bool对应boolean， repeated则对应为list  </p><p> 名称随便起，貌似没有啥关键字。 最后这个是order，必须大于0 应该是在协议中传输时有用吧 </p><p><br></p><p> 上面repeated Keyval相当于自定义类型了。还有嵌套定义的情况，我没细看。等用到了再来更新。 </p><p><br></p><p><br></p><p><br></p>`,19),s=[r];function n(i,l){return p(),t("div",null,s)}const _=e(a,[["render",n],["__file","2012-266.html.vue"]]);export{_ as default};
