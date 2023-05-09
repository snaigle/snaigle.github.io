import{_ as p,p as a,q as i,t,R as n,a1 as e}from"./framework-5866ffd3.js";const r={},s=n("p",null,[n("span")],-1),d=n("div",{class:"showHead",style:{"margin-top":"5px","margin-right":"12px","margin-bottom":"0px","margin-left":"12px",height:"60px","border-bottom-width":"1px","border-bottom-style":"dashed","border-bottom-color":"#cccccc",padding:"0px"}},[n("div",{class:"showTitleBOx",style:{"padding-top":"20px","padding-right":"0px","padding-bottom":"0px","padding-left":"0px","text-align":"center",margin:"0px"}},[n("div",{class:"showTitle"},[n("br")])])],-1),o=e('<div class="showContent" style="margin-top:20px;margin-right:15px;margin-bottom:20px;margin-left:15px;line-height:2;font-size:14px;border-bottom-width:1px;border-bottom-style:dashed;border-bottom-color:#d9d9d9;padding:0px;"><div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;"><strong style="padding:0px;margin:0px;">利用spring来进行集成测试</strong>： <br style="padding:0px;margin:0px;">1、AbstractSpringContextTests类[1],该类全部方法是protected的，通常不使用这个类，而使用它的子类们。</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">2、AbstractDependencyInjectionSpringContextTests类[2]：继承于类[1]：名字N长的。如果仅仅使用Spring依赖注入功能，可以让测试用例继承该类。</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">3、AbstractTransactionalSpringContextTests类[3]:继承于类[2]，继承该类的测试用例在spring管理的事务中进行，测试完后对数据库的记录不会造成任何影响。你对数据库进行一些操作后，它会自动把数据库回滚，这样就保证了你的测试对于环境没有任何影响</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">4、AbstractTransactionalDataSourceSpringContextTests：继承于类[3]，功能更强大，用于测试持久层组件,看其源代码，有一行&quot;protected JdbcTemplate jdbcTemplate;&quot;，提供了一个JdbcTemplate的变量，通过该对象可以直接操作数据库。</span></div> <div style="padding:0px;margin:0px;"><a style="color:#015f91;text-decoration:none;padding:0px;margin:0px;" href="http://lighter.iteye.com/blog/41733" target="_blank"><span style="color:#000000;padding:0px;margin:0px;">[url]http://lighter.iteye.com/blog/41733[/url]</span></a> <span style="color:#000000;padding:0px;margin:0px;"> 还提供了两个用spring来进行集成测试(对数据库操作进行测试)，业务测试(对业务层进行测试)的例子供下载。</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;font-size:small;padding:0px;margin:0px;"><strong style="padding:0px;margin:0px;">***如何在你的TestCase Class里取得spring context (注意路径问题)？***</strong></span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">你的TestCase Class必须继承的是上述四个AbstractXXXSpringContextTests中的其中一个，那么就必须实现下面这个方法来取得spring context：</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">   protected abstract String[] <strong style="color:black;background-color:#ffff66;padding:0px;margin:0px;">getConfigLocations</strong>();</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">例如：</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;"> public String[] <strong style="color:black;background-color:#ffff66;padding:0px;margin:0px;">getConfigLocations</strong>() {<br style="padding:0px;margin:0px;">    String[] configLocations = { &quot;applicationContext.xml&quot;,&quot;hibernate-context.xml&quot; };<br style="padding:0px;margin:0px;">    return configLocations;<br style="padding:0px;margin:0px;"> }</span></div> <div style="padding:0px;margin:0px;"><br style="padding:0px;margin:0px;"> <span style="color:#000000;font-size:medium;padding:0px;margin:0px;"><strong style="padding:0px;margin:0px;">请 注意要加载的context xml file的路径问题：上述的代码是基于classpath，因此applicationContext.xml和hibernate- context.xml必须放在classpath里（方法一是把xml files放到WEB-INF/classes目录下，另一种方法就是在project properties里把xml files的路径加到classpath里）</strong></span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">那么<span style="font-size:small;padding:0px;margin:0px;"><strong style="padding:0px;margin:0px;">如果你一定要把context xml files放到WEB-INF目录下，也是可以的，那么应该基于file(基于file的相对路径是相对于project root folder)，代码如下：</strong></span></span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;"> public String[] <strong style="color:black;background-color:#ffff66;padding:0px;margin:0px;">getConfigLocations</strong>() {<br style="padding:0px;margin:0px;">    String[] configLocations = { &quot;file:WebContent/WEB-INF/applicationContext.xml&quot;};<br style="padding:0px;margin:0px;">    return configLocations;<br style="padding:0px;margin:0px;"> }<br style="padding:0px;margin:0px;"></span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">AbstractXXXSpringContextTests就会根据根据<strong style="color:black;background-color:#ffff66;padding:0px;margin:0px;">getConfigLocations</strong>方法返回的context xml位置的数组来加载并且对加载的Context提供缓存。 这是非常重要的，因为如果你在从事一个大项目时，启动时间可能成为一个问题－－这不是Spring自身的开销，而是被Spring容器实例化的对象在实例 化自身时所需要的时间。例如，一个包括50-100个Hibernate映射文件的项目可能需要10-20秒的时间来加载上述的映射文件，如果在运行每个 测试fixture里的每个测试案例前都有这样的开销，将导致整个测试工作的延时，最终有可能（实际上很可能）降低效率。</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">在某种极偶然的情况下，某个测试可能“弄脏”了配置场所，并要求重新加载－－例如改变一个bean的定义或者一个应用对象的状态－－你可以调用 <code class="classname" style="padding:0px;margin:0px;"><span>AbstractDependencyInjectionSpringContextTests</span></code> 上的 <code class="literal" style="padding:0px;margin:0px;"><span>setDirty()</span></code> 方法来重新加载配置并在执行下一个测试案例前重建application context</span></div> <div style="padding:0px;margin:0px;">   </div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">当类 AbstractDependencyInjectionSpringContextTests（及其子类）装载你的Application Context时，你可以通过Setter方法来注入你想要的来自context的bean,而不需要显式的调用applicationContext.getBean(XXX)。因为AbstractDependencyInjectionSpringContextTests会从<strong style="color:black;background-color:#ffff66;padding:0px;margin:0px;">getConfigLocations</strong>()方法指定的配置文件中帮你自动注入</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">下面的例子就是通过setter方法来获得context里的ProductManager bean：</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">public class MyTest extends AbstractDependencyInjectionSpringContextTests {<br style="padding:0px;margin:0px;">    ProductManager productManager;</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">    public String[] <strong style="color:black;background-color:#ffff66;padding:0px;margin:0px;">getConfigLocations</strong>() {<br style="padding:0px;margin:0px;">        String[] configLocations = { &quot;file:WebContent/WEB-INF/applicationContext.xml&quot; };<br style="padding:0px;margin:0px;">        return configLocations;<br style="padding:0px;margin:0px;">    }</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">    public void testGetProduct() {<br style="padding:0px;margin:0px;">       assertEquals(&quot;tomson&quot;,productManager.getProductByName(&quot;tomson&quot;).getName());<br style="padding:0px;margin:0px;">    }<br style="padding:0px;margin:0px;">   </span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">    //通过setter方法自动从context里注入productManager bean，而不用显示调用applicationContext.getBean(XXX)<br style="padding:0px;margin:0px;">    public void setProductManager(ProductManager productManager) {<br style="padding:0px;margin:0px;">       this.productManager = productManager;<br style="padding:0px;margin:0px;">    }<br style="padding:0px;margin:0px;">}<br style="padding:0px;margin:0px;"></span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">但是<strong style="padding:0px;margin:0px;">如 果context里有多个bean都定义为一个类型（例如有多个bean都是ProductManager class类型的），那么对这些bean就无法通过setter方法来自动依赖注入（因为有多个bean同一个类型，不知要自动注入哪个）。在这种情况下 你需要显示的调用applicationContext.getBean(XXX)来注入</strong>。如：</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">public class MyTest extends AbstractDependencyInjectionSpringContextTests {<br style="padding:0px;margin:0px;">   ProductManager productManager;</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">   public String[] <strong style="color:black;background-color:#ffff66;padding:0px;margin:0px;">getConfigLocations</strong>() {<br style="padding:0px;margin:0px;">      String[] configLocations = { &quot;file:WebContent/WEB-INF/applicationContext.xml&quot; };<br style="padding:0px;margin:0px;">      return configLocations;<br style="padding:0px;margin:0px;">   }</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">   public void onSetUp() {<br style="padding:0px;margin:0px;">       productManager = (ProductManager) applicationContext.getBean(&quot;productManager&quot;);<br style="padding:0px;margin:0px;">   }</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">   public void testGetProduct() {<br style="padding:0px;margin:0px;">       assertEquals(&quot;tomson&quot;,productManager.getProductByName(&quot;tomson&quot;).getName());<br style="padding:0px;margin:0px;">   }<br style="padding:0px;margin:0px;"> <br style="padding:0px;margin:0px;">}<br style="padding:0px;margin:0px;"></span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">如果你的TestCase不使用依赖注入，只要不定义任何setters方法即可。或者你可以继承 AbstractSpringContextTests －－这个 org.springframework.test 包中的根类，而不是继承AbstractDependencyInjectionSpringContextTests（及其子类）。这是因为AbstractSpringContextTests 只包括用来加载Spring Context的便利方法但没有自动依赖注入的功能。</span></div> <div style="padding:0px;margin:0px;"><span style="color:#000000;padding:0px;margin:0px;">另外还有一篇文章介绍了spring单元测试的策略，见</span> <a style="color:#015f91;text-decoration:none;padding:0px;margin:0px;" href="http://blog.csdn.net/wangjian5748/archive/2006/09/09/1199549.aspx" target="_blank"><span style="color:#000000;padding:0px;margin:0px;">[url]http://blog.csdn.net/wangjian5748/archive/2006/09/09/1199549.aspx[/url]</span></a></div></div>',1),g=n("p",null," ",-1);function x(l,c){return a(),i("div",null,[s,t(),d,t(),o,t(),g])}const y=p(r,[["render",x],["__file","2011-57.html.vue"]]);export{y as default};
