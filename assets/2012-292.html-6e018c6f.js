import{_ as t,p as e,q as n,a1 as p}from"./framework-5866ffd3.js";const a={},r=p(`<p> spring mvc 教程 </p><p> 1， mvc的原理图 </p><p><img src="http://blog.springsource.com/wp-content/uploads/2010/11/mvc.png"></p><p> 2，web.xml配置 </p><p>      </p><pre class="prettyprint lang-xml linenums">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;web-app version=&quot;2.5&quot; xmlns=&quot;http://java.sun.com/xml/ns/javaee&quot;
	xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	xsi:schemaLocation=&quot;http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd&quot;&gt;
<pre><code>&amp;lt;!-- Processes application requests --&amp;gt;
&amp;lt;servlet&amp;gt;
	&amp;lt;servlet-name&amp;gt;appServlet&amp;lt;/servlet-name&amp;gt;
	&amp;lt;servlet-class&amp;gt;org.springframework.web.servlet.DispatcherServlet&amp;lt;/servlet-class&amp;gt;
	&amp;lt;init-param&amp;gt;
		&amp;lt;param-name&amp;gt;contextConfigLocation&amp;lt;/param-name&amp;gt;
		&amp;lt;param-value&amp;gt;/WEB-INF/spring/appServlet/servlet-context.xml&amp;lt;/param-value&amp;gt;
	&amp;lt;/init-param&amp;gt;
	&amp;lt;load-on-startup&amp;gt;1&amp;lt;/load-on-startup&amp;gt;
&amp;lt;/servlet&amp;gt;		

&amp;lt;servlet-mapping&amp;gt;
	&amp;lt;servlet-name&amp;gt;appServlet&amp;lt;/servlet-name&amp;gt;
	&amp;lt;url-pattern&amp;gt;/&amp;lt;/url-pattern&amp;gt;
&amp;lt;/servlet-mapping&amp;gt;
</code></pre>
<p>&lt;/web-app&gt;</p>
</pre><p><br></p><p> 3， servlet-context.xml </p><p><br></p><pre class="prettyprint lang-xml linenums">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;beans xmlns=&quot;http://www.springframework.org/schema/beans&quot;
	xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
	xmlns:mvc=&quot;http://www.springframework.org/schema/mvc&quot;
	xmlns:context=&quot;http://www.springframework.org/schema/context&quot;
	xsi:schemaLocation=&quot;
        http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd
        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-3.0.xsd&quot;&gt;
	&lt;!-- DispatcherServlet Context: defines this servlet&#39;s request-processing infrastructure --&gt;
	&lt;!-- Scans within the base package of the application for @Components to configure as beans --&gt;
	&lt;!-- @Controller, @Service, @Configuration, etc. --&gt;
	&lt;context:component-scan base-package=&quot;xyz.sample.baremvc&quot; /&gt;
	&lt;!-- Enables the Spring MVC @Controller programming model --&gt;
	&lt;mvc:annotation-driven /&gt;
&lt;/beans&gt;
</pre><p><br></p><p> 4, controller 和 jsp </p><p><br></p><pre class="prettyprint lang-java linenums">package xyz.sample.baremvc;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	@RequestMapping(value = &quot;/&quot;)
	public String home() {
		System.out.println(&quot;HomeController: Passing through...&quot;);
		return &quot;WEB-INF/views/home.jsp&quot;;
	}
}
</pre><p><br></p><p><br></p><pre class="prettyprint lang-html linenums">&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot; %&gt;
&lt;%@ page session=&quot;false&quot; %&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Home&lt;/title&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;h1&gt;Hello world!&lt;/h1&gt;
	&lt;/body&gt;
&lt;/html&gt;
</pre><p><br></p><p><br></p><p> 好了，可以直接在浏览器查看结果了  </p><p><br></p><p><br></p><p><br></p>`,23),o=[r];function s(l,m){return e(),n("div",null,o)}const i=t(a,[["render",s],["__file","2012-292.html.vue"]]);export{i as default};
