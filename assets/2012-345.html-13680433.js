import{_ as e,p as n,q as a,t as p,a1 as t}from"./framework-5866ffd3.js";const r={},o=t(`<p><span>新来公司要做一个小项目，本来打算用nutz做的，结果老大让用spring jpa hibernate框架， 这里hibernate只是托管jpa而已， dao层主要还是用jpa的查询接口，而spring-data做这些系统的粘合剂，很自然mvc层用spring-mvc整合方便配置简单，页面用了bootstrap做样式和sitemesh做模块控制。</span><br><span><br></span><br><span>下面就谈些具体的步骤吧</span><br><span>我使用的maven管理项目， pom.xml 内容为</span><br></p><div><pre class="prettyprint lang-xml linenums">&lt;properties&gt;
    &lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;
  &lt;/properties&gt;
<p>&lt;dependencies&gt;
&lt;dependency&gt;
&lt;groupId&gt;junit&lt;/groupId&gt;
&lt;artifactId&gt;junit&lt;/artifactId&gt;
&lt;version&gt;4.8.1&lt;/version&gt;
&lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupId&gt;org.springframework.data&lt;/groupId&gt;
&lt;artifactId&gt;spring-data-jpa&lt;/artifactId&gt;
&lt;version&gt;1.1.0.RELEASE&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupId&gt;org.springframework&lt;/groupId&gt;
&lt;artifactId&gt;spring-webmvc&lt;/artifactId&gt;
&lt;version&gt;3.1.3.RELEASE&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupId&gt;org.springframework&lt;/groupId&gt;
&lt;artifactId&gt;spring-hibernate3&lt;/artifactId&gt;
&lt;version&gt;2.0.8&lt;/version&gt;
&lt;exclusions&gt;
&lt;exclusion&gt;
&lt;artifactId&gt;hibernate&lt;/artifactId&gt;
&lt;groupId&gt;org.hibernate&lt;/groupId&gt;
&lt;/exclusion&gt;
&lt;/exclusions&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupId&gt;javax.servlet&lt;/groupId&gt;
&lt;artifactId&gt;servlet-api&lt;/artifactId&gt;
&lt;scope&gt;compile&lt;/scope&gt;
&lt;version&gt;2.5&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupId&gt;commons-dbcp&lt;/groupId&gt;
&lt;artifactId&gt;commons-dbcp&lt;/artifactId&gt;
&lt;version&gt;1.4&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
&lt;groupId&gt;mysql&lt;/groupId&gt;
&lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
&lt;version&gt;5.1.21&lt;/version&gt;
&lt;/dependency&gt;</p>
<pre><code>&amp;lt;dependency&amp;gt;
	&amp;lt;groupId&amp;gt;org.hibernate&amp;lt;/groupId&amp;gt;
	&amp;lt;artifactId&amp;gt;hibernate-entitymanager&amp;lt;/artifactId&amp;gt;
	&amp;lt;version&amp;gt;4.1.8.Final&amp;lt;/version&amp;gt;
&amp;lt;/dependency&amp;gt;
&amp;lt;dependency&amp;gt;
	&amp;lt;groupId&amp;gt;org.sitemesh&amp;lt;/groupId&amp;gt;
	&amp;lt;artifactId&amp;gt;sitemesh&amp;lt;/artifactId&amp;gt;
	&amp;lt;version&amp;gt;3.0-alpha-1&amp;lt;/version&amp;gt;
&amp;lt;/dependency&amp;gt;
</code></pre>
<p>&lt;/dependencies&gt;
&lt;build&gt;
&lt;plugins&gt;
&lt;plugin&gt;
&lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
&lt;configuration&gt;
&lt;source&gt;1.6&lt;/source&gt;
&lt;target&gt;1.6&lt;/target&gt;
&lt;/configuration&gt;
&lt;/plugin&gt;
&lt;/plugins&gt;
&lt;/build&gt;</p>
<pre><code>&amp;lt;repositories&amp;gt;  
&amp;lt;repository&amp;gt;  
    &amp;lt;id&amp;gt;java&amp;lt;/id&amp;gt;  
    &amp;lt;name&amp;gt;java official repository&amp;lt;/name&amp;gt;  
    &amp;lt;url&amp;gt;http://download.java.net/maven/2/&amp;lt;/url&amp;gt;  
&amp;lt;/repository&amp;gt;  
&amp;lt;/repositories&amp;gt;  
</code></pre>
</pre><br></div><p> 用到的jar包很明显有spring-mvc ,spring-data-jpa,hibernate 等，这里要注意有几个包会冲突，spring默认依赖的hibernate包版本太低，我这里手动指定了hibernate4，而且hibernate-entitymanager这个是必须的包，还有jpa这个包下载的问题， 需要添加一个源如上 </p><p><br></p><p> 下面从web.xml入手 </p><p><br></p><pre class="prettyprint lang-xml linenums">	&lt;filter&gt;
		&lt;filter-name&gt;CharacterEncodingFilter&lt;/filter-name&gt;
		&lt;filter-class&gt;
		org.springframework.web.filter.CharacterEncodingFilter&lt;/filter-class&gt;
		&lt;init-param&gt;
		&lt;param-name&gt;encoding&lt;/param-name&gt;
		&lt;param-value&gt;UTF-8&lt;/param-value&gt;
		&lt;/init-param&gt;
	&lt;/filter&gt;
	&lt;filter&gt;
	    &lt;filter-name&gt;sitemesh&lt;/filter-name&gt;
	    &lt;filter-class&gt;cn.mucang.offlineModule.filters.MetaSitemeshFilter&lt;/filter-class&gt;
	  &lt;/filter&gt;
	&lt;filter-mapping&gt;
		&lt;filter-name&gt;CharacterEncodingFilter&lt;/filter-name&gt;
		&lt;url-pattern&gt;/*&lt;/url-pattern&gt;
	&lt;/filter-mapping&gt;
	&lt;!-- Processes application requests --&gt;
	&lt;servlet&gt;
		&lt;servlet-name&gt;mvc-dispatcher&lt;/servlet-name&gt;
		&lt;servlet-class&gt;org.springframework.web.servlet.DispatcherServlet&lt;/servlet-class&gt;
		&lt;init-param&gt;
			&lt;param-name&gt;contextConfigLocation&lt;/param-name&gt;
			&lt;param-value&gt;/WEB-INF/applicationContext.xml&lt;/param-value&gt;
		&lt;/init-param&gt;
		&lt;load-on-startup&gt;1&lt;/load-on-startup&gt;
	&lt;/servlet&gt;		
	&lt;servlet-mapping&gt;
		&lt;servlet-name&gt;mvc-dispatcher&lt;/servlet-name&gt;
		&lt;url-pattern&gt;*.do&lt;/url-pattern&gt;
	&lt;/servlet-mapping&gt;
	&lt;filter-mapping&gt;
    &lt;filter-name&gt;sitemesh&lt;/filter-name&gt;
    &lt;url-pattern&gt;/*&lt;/url-pattern&gt;
    &lt;dispatcher&gt;FORWARD&lt;/dispatcher&gt;
    &lt;dispatcher&gt;REQUEST&lt;/dispatcher&gt;
  &lt;/filter-mapping&gt;
</pre><p><br></p><p><br></p><p> 这里配置了 编码防止接收的内容出现乱码问题，还有spring-mvc的入口servlet，还有就是 sitemesh了，这个要放到spring-mvc后面，它只需要拦截mvc 转发的jsp请求即可 </p><p> 下面介绍一下包结构： </p><p> src下： your.company.package.domains 领域类， </p><p>                                           .dao   领域类操作接口 </p><p>                                           .controllers 控制器 </p><p>                                           .services  服务层， 方法上可使用 事务注解 </p><p>                                           .utils      工具类 </p><p>                                           .filters    这个包看情况添加吧，这里我把自定义了 MetaSitemeshFilter </p><p> webapp下  css/ ,js/ ,img/， WEB-INF/templates/ 布局文件，  WEB-INF/views/ 视图 </p><p> 下面是最重要的applicationContext.xml </p><p><br></p><pre class="prettyprint lang-xml linenums">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
	xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	xmlns:mvc=&quot;http://www.springframework.org/schema/mvc&quot;
	xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
	xmlns:jpa=&quot;http://www.springframework.org/schema/data/jpa&quot;   
    xmlns:tx=&quot;http://www.springframework.org/schema/tx&quot;  
	xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.0.xsd
        http://www.springframework.org/schema/data/jpa http://www.springframework.org/schema/data/jpa/spring-jpa.xsd
        http://www.springframework.org/schema/tx  http://www.springframework.org/schema/tx/spring-tx-3.1.xsd&quot;&gt;
	&lt;!-- DispatcherServlet Context: defines this servlet&#39;s request-processing infrastructure --&gt;
	&lt;!-- Scans within the base package of the application for @Components to configure as beans --&gt;
	&lt;!-- @Controller, @Service, @Configuration, etc. --&gt;
	&lt;context:component-scan base-package=&quot;cn.mucang.offlineModule&quot; /&gt;
	&lt;!-- Enables the Spring MVC @Controller programming model --&gt;
	&lt;mvc:annotation-driven /&gt;
    &lt;context:annotation-config /&gt;  
<pre><code>&amp;lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&amp;gt;
	&amp;lt;property name=&quot;prefix&quot;&amp;gt;
		&amp;lt;value&amp;gt;/WEB-INF/views/&amp;lt;/value&amp;gt;
	&amp;lt;/property&amp;gt;
	&amp;lt;property name=&quot;suffix&quot;&amp;gt;
		&amp;lt;value&amp;gt;.jsp&amp;lt;/value&amp;gt;
	&amp;lt;/property&amp;gt;
&amp;lt;/bean&amp;gt;
&amp;lt;!--  spring mvc end --&amp;gt;

&amp;lt;!-- spring jpa start--&amp;gt;

&amp;lt;bean id=&quot;dataSource&quot;  
    class=&quot;org.apache.commons.dbcp.BasicDataSource&quot;&amp;gt;  
    &amp;lt;property name=&quot;username&quot; value=&quot;root&quot; /&amp;gt;  
    &amp;lt;property name=&quot;password&quot; value=&quot;000000&quot; /&amp;gt;  
    &amp;lt;property name=&quot;driverClassName&quot; value=&quot;com.mysql.jdbc.Driver&quot; /&amp;gt;  
    &amp;lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://localhost/offline&quot; /&amp;gt;  
&amp;lt;/bean&amp;gt;  


&amp;lt;bean id=&quot;entityManagerFactory&quot;  
    class=&quot;org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean&quot;&amp;gt;  
    
   &amp;lt;!--  &amp;lt;property name=&quot;persistenceUnitName&quot; value=&quot;coreJpa&quot; /&amp;gt; --&amp;gt; 
    &amp;lt;property name=&quot;dataSource&quot; ref=&quot;dataSource&quot; /&amp;gt;  
    &amp;lt;property name=&quot;jpaVendorAdapter&quot;&amp;gt;  
        &amp;lt;bean class=&quot;org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter&quot;&amp;gt;  
            &amp;lt;property name=&quot;database&quot; value=&quot;MYSQL&quot;/&amp;gt;  
            &amp;lt;property name=&quot;showSql&quot; value=&quot;true&quot;/&amp;gt;  
            &amp;lt;property name=&quot;generateDdl&quot; value=&quot;true&quot; /&amp;gt;
        &amp;lt;/bean&amp;gt;  
    &amp;lt;/property&amp;gt;  
    &amp;lt;property name=&quot;jpaProperties&quot;&amp;gt;  
        &amp;lt;props&amp;gt;  
            &amp;lt;prop key=&quot;hibernate.max_fetch_depth&quot; &amp;gt;3&amp;lt;/prop&amp;gt;
            &amp;lt;!--自动输出schema创建DDL语句 --&amp;gt;
            &amp;lt;prop key=&quot;hibernate.hbm2ddl.auto&quot; &amp;gt;update&amp;lt;/prop&amp;gt;    
            &amp;lt;prop key=&quot;hibernate.show_sql&quot; &amp;gt;true&amp;lt;/prop&amp;gt;
            &amp;lt;prop key=&quot;hibernate.format_sql&quot; &amp;gt;true&amp;lt;/prop&amp;gt;
            &amp;lt;prop key=&quot;javax.persistence.validation.mode&quot; &amp;gt;none &amp;lt;/prop&amp;gt; 
        &amp;lt;/props&amp;gt;  
    &amp;lt;/property&amp;gt;  
&amp;lt;/bean&amp;gt;  

&amp;lt;jpa:repositories base-package=&quot;cn.mucang.offlineModule.dao&quot; query-lookup-strategy=&quot;create-if-not-found&quot; /&amp;gt;  
&amp;lt;!--  TX Manager --&amp;gt;   
&amp;lt;bean id=&quot;transactionManager&quot; class=&quot;org.springframework.orm.jpa.JpaTransactionManager&quot;&amp;gt;  
    &amp;lt;property name=&quot;entityManagerFactory&quot;  ref=&quot;entityManagerFactory&quot; /&amp;gt;  
&amp;lt;/bean&amp;gt;  
&amp;lt;tx:annotation-driven/&amp;gt;  
&amp;lt;!-- spring jpa end --&amp;gt;
</code></pre>
</pre><p><br></p><p><br></p><p> 这里主要配置了 mvc 注解方式和 视图的简化， 还有datasource 和 spring+jpa+hibernate的结合情况，最后添加注解事务控制 </p><p> 这里我配置 hibernate.hbm2ddl.auto=create ，按说明应该是可以生成表结构的，但我测试时没有生成，控制台也没报错，ddl的sql都打印了，初步判断是事务引起的，这个框架中我没有测试事务，多表联合查询也研究，这些我想跟这个配置应该关系不大了，读者有需求去google吧 </p><p><br></p><p> 对了这里还用到了一个hibernate的配置文件 persistence.xml, 放在 src下 META-INF下， </p><p> 这里面什么内容也没有， 也有种方式是把数据源的配置放到这个文件中，感觉这样配置就太零散了，这个文件中就是空的，但是没有这个文件的话启动会报错 </p><p> 文件内容 </p><p><br></p><p><br></p><pre class="prettyprint lang-xml linenums">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;persistence xmlns=&quot;http://java.sun.com/xml/ns/persistence&quot; version=&quot;1.0&quot;&gt;
    &lt;persistence-unit name=&quot;Teste&quot;   transaction-type=&quot;RESOURCE_LOCAL&quot;&gt;
        &lt;provider&gt;org.hibernate.ejb.HibernatePersistence&lt;/provider&gt;
    &lt;/persistence-unit&gt;
&lt;/persistence&gt;
</pre><p><br></p><p> 基本上所有的配置就完了， </p><p> 下面挨个放出java代码就行 </p><p> controllers下 HelloController.java文件 </p><p><br></p><pre class="prettyprint lang-java linenums">@Controller
public class HelloController {
<pre><code>@Autowired
private RuleDao ruleDao;

@RequestMapping(&quot;/hello&quot;)
public String hello(Model model){
	model.addAttribute(&quot;count&quot;, ruleDao.count());
	return &quot;hello&quot;;
}
</code></pre>
<p>}</p>
</pre><p><br></p><p> domains下 Rule.java 文件 </p><p><br></p><pre class="prettyprint lang-java linenums">@Entity
@Table(name=&quot;rule&quot;)
public class Rule {
<pre><code>@Id
private Integer id;
@Column(length=100,name=&quot;para_key&quot;)
private String key;
@Column(length=100,name=&quot;para_value&quot;)
private String value;
@Column(length=10)
private String operator;
@Column(name=&quot;empty_key&quot;)
private Boolean emptyKey ;
@Column(name=&quot;empty_value&quot;)
private Boolean emptyValue;
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getKey() {
	return key;
}
public void setKey(String key) {
	this.key = key;
}
public String getValue() {
	return value;
}
public void setValue(String value) {
	this.value = value;
}
public String getOperator() {
	return operator;
}
public void setOperator(String operator) {
	this.operator = operator;
}
public Boolean getEmptyKey() {
	return emptyKey;
}
public void setEmptyKey(Boolean emptyKey) {
	this.emptyKey = emptyKey;
}
public Boolean getEmptyValue() {
	return emptyValue;
}
public void setEmptyValue(Boolean emptyValue) {
	this.emptyValue = emptyValue;
}
</code></pre>
<p>}</p>
</pre><p><br></p><p> 这个文件中没有@id的话也会报错，表中必须存在主键 </p><p> dao中 RuleDao.java </p><p><br></p><pre class="prettyprint lang-java linenums">public interface RuleDao extends CrudRepository&lt;Rule, Integer&gt;{
<p>}</p>
</pre>`,47),l=t(`<p><br></p><p><br></p><p> 到这里基本上就快完工了，再把页面写一下就ok了， 记得在数据库中添加rule表 </p><p> 映射的url为 /hello.do, 输入的视图为 WEB-INF/views/hello.jsp,内容如下： </p><p><br></p><pre class="prettyprint lang-html linenums">&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;
    pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Insert title here&lt;/title&gt;
&lt;meta name=&quot;layout&quot; content=&quot;main&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
   &lt;h2&gt;h3llo  \${count}&lt;/h2&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre><p><br></p><p><br></p><p> 这里就用到了metasitemeshfilter 代码如下 </p><p><br></p><pre class="prettyprint lang-java linenums">public class MetaSitemeshFilter extends ConfigurableSiteMeshFilter{
<pre><code>private final String DECORATOR_PREFIX = &quot;/WEB-INF/templates/&quot;;
private final String DECORATOR_SUFFIX = &quot;.jsp&quot;;

@Override
protected void applyCustomConfiguration(SiteMeshFilterBuilder builder) {
	super.applyCustomConfiguration(builder);
	builder.setCustomDecoratorSelector(new DecoratorSelector&amp;lt;WebAppContext&amp;gt;() {

		@Override
		public String[] selectDecoratorPaths(Content content,
				WebAppContext context) throws IOException {
			String decoratorPath = content.getExtractedProperties()
					.getChild(&quot;meta&quot;).getChild(&quot;layout&quot;).getValue();
			if (decoratorPath == null || decoratorPath.trim().equals(&quot;&quot;))
				return new String[] {};
			else
				return new String[] { DECORATOR_PREFIX + decoratorPath.trim()
						+ DECORATOR_SUFFIX };
		}
	});
}
</code></pre>
</pre><p><br></p><p><br></p><p> 可以看出把会取得jsp中的meta layout的值，然后做为布局文件进行渲染， </p><p> 因此还要在WEB-INF/templates/下添加main.jsp，<span>这里就很简单了</span></p><p><span><pre class="prettyprint lang-js linenums">&lt;html&gt;
&lt;head&gt;
&lt;title &gt;&lt;sitemesh:write property=&quot;title&quot;/&gt;- my company&lt;/title&gt;
&lt;sitemesh:write property=&quot;head&quot;/&gt;
&lt;/head&gt;
&lt;body&gt;
<pre><code>&amp;lt;h2&amp;gt;top&amp;lt;/h2&amp;gt;
</code></pre>
<p>&lt;div&gt;&lt;sitemesh:write property=&quot;body&quot;/&gt;
&lt;/div&gt;
&lt;footer&gt; bottom copyright&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</p>
</pre><br></span></p><br><p> 然后访问  项目打包放到tomcat中，启动tomcat即可。访问 127.0.0.1:port/appname/hello.do </p><p> 然后就看到了 top hell2 0 bottom这些任容吧，如果有问题欢迎发邮件。 所有的代码就是这样了 </p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>`,24);function g(i,m){return n(),a("div",null,[o,p(" 这里只需要实现接口即可，简单查询按规则生成方法名就行，复杂的请用@Query或者@NamedQuery进行手动sq查询 "),l])}const u=e(r,[["render",g],["__file","2012-345.html.vue"]]);export{u as default};
