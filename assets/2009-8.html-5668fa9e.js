import{_ as n,p as o,q as l,t as e,R as t,a1 as s}from"./framework-5866ffd3.js";const c={},a=t("pre",{name:"code",class:"xml"},"这是test例子的源码",-1),r=t("pre",{name:"code",class:"xml"},"flex端得",-1),i=t("pre",{name:"code",class:"xml"},`<?xml version="1.0" encoding="utf-8"?>
<mx:Application xmlns:mx="http://www.adobe.com/2006/mxml" layout="absolute">    
<mx:Script>    	
    <![CDATA[    		
    import mx.controls.Alert;    		
    import mx.rpc.events.ResultEvent;    		
    private function clickLocal():void{    			
        httpLocal.send();    		
    }    		
    private function local_result(event:ResultEvent):void{    			
        var str:String = event.result.name as String;    			
        Alert.show("show local result :"+str);    		
    }    		
    private function clickRemote():void{    			
        httpRemote.send();    		
    }    		
    private function remote_result(event:ResultEvent):void{    			
        var str:String = event.result.name as String;    			
        Alert.show("show remote result:"+str);    		
    }    			    	
    ]]>    
</mx:Script>    
<mx:HTTPService id="httpLocal" url="http://localhost:8080/xuexiao/test.action"     	method="post" result="local_result(event)" />    
<mx:HTTPService id="httpRemote" url="http://211.82.193.188:8080/xuanhua/test.action"        method="post" result="remote_result(event)" />	
<mx:Button x="75" y="61" label="sendtoLocal" click="clickLocal()" />	
<mx:Button x="75" y="136" label="sendtoRemote" click="clickRemote()" />	</mx:Application>
`,-1),m=t("p",null,[e("  "),t("p",null,"   action没做处理，通过jsp页面输出")],-1),p=t("p",null,' <?xml version="1.0" encoding="utf-8" ?> ',-1),u=t("p",null,"       <name>tiantian</name>",-1),d=t("p",null,[t("span",null,"在地址为188的服务端 tomcat 的root目录下添加crossdomain.xml")],-1),_=t("p",null," ",-1),x=s(`<p><span style="white-space:pre;background-color:#fafafa;"><span style="white-space:normal;background-color:#ffffff;"> </span> &lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></p><pre name="code" class="xml">       
&lt;cross-domain-policy&gt;           
&lt;allow-access-from domain=&quot;*&quot; /&gt;       
&lt;/cross-domain-policy&gt;
</pre><pre name="code" class="xml">重启tomcat 即可</pre><pre name="code" class="xml">测试结果： 点击remote按钮  会弹出alert（“tiantian”）</pre><pre name="code" class="xml"></pre>`,5);function h(v,f){return o(),l("div",null,[a,r,i,m,p,u,d,e(),_,e(),x])}const k=n(c,[["render",h],["__file","2009-8.html.vue"]]);export{k as default};
