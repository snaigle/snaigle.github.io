import{_ as n,p as e,q as s,R as c}from"./framework-5866ffd3.js";const o={},r=c("pre",null,`研究cloudfoundry有感
1，刚开始按教程安装最新的vmc话0.4.3,出了一堆问题，我在stackflow报问题后，当天vmc升级到0.4.5,成功安装vmc 0。4。5
2，部署自己的spring系统到micro云上，发现了自己系统的一个问题，包冲突，解决后成功部署，也解决了外网访问mysql的问题，不过还没有找到方便导入数据的方式
3，部署了nodejs express应用到cloud上，所谓的的联机只是局域网连，外网依然不行，还需要试试离线模式的部署
4，还能自己安装云系统，vcap模式，单节点和多结点模式
5，可以添加框架和语言支持
6，spring insight 是监控spring程序的，nosh是大规模集群下的部署软件

补充说明：
1，使用联机模式的云不能外网访问，只是把域名映射到虚拟机ip而已
在本地同样可以通过ip访问，这里还需要加端口，貌似还有些问题，部署到公网的就不需要改动端口而是自动适配
2，本地云可以使用自定义域名，只是无法使用虚拟机的dns映射，这里不区分离线和联机模式，自己做好dns映射就好
3，试验：使用code配置云，然后部署两个应用看看是否会有资源冲突，比如端口，我猜不会冲突，应该controller层会进行端口映射


发自我的 iPad
`,-1),t=[r];function l(_,i){return e(),s("div",null,t)}const a=n(o,[["render",l],["__file","2012-348.html.vue"]]);export{a as default};
