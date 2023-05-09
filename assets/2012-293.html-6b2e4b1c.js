import{_ as t,p as e,q as n,a1 as o}from"./framework-5866ffd3.js";const r={},s=o(`<p style="text-indent:2em;"> 上一篇文章简单介绍了一下springmvc的使用情况，这里对mvc做进一步的改进 </p><p style="text-indent:2em;"> 1， recourses </p><p style="text-indent:2em;"> 上一篇中 home方法直接返回了 &quot;WEB-INF/views/home.jsp&quot;;  </p><p style="text-indent:2em;"> 这里可以看到WEB-INF/views和jsp这些都是很多余只有home是真正可变量 </p><p style="text-indent:2em;"> 所以我们希望能找到方法可以配置 这些即可，不用在多写 </p><p style="text-indent:2em;"> spring中有视图处理 是该接口 <span style="color:#666666;font-family:monospace;line-height:20px;background-color:#EEEEEE;"><span style="background-color:#FFFFFF;color:#000000;">ViewResolver,而默认的生成的处理类是：InternalResourceViewResolver</span><span style="color:#000000;font-family:Arial, sans-serif;line-height:20px;background-color:#FFFFFF;"> ，仅仅生成了一个JSTLView， 而这个Resolver是可以定制的 </span></span></p><p style="text-indent:2em;"><span><span style="line-height:20px;">我们可以这样：</span></span></p><p style="text-indent:2em;"><span><span style="line-height:20px;"></span></span></p><pre class="prettyprint lang-java linenums">package xyz.sample.baremvc;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
@Configuration
public class AppConfig {
	// Resolve logical view names to .jsp resources in the /WEB-INF/views directory
	@Bean
	ViewResolver viewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix(&quot;WEB-INF/views/&quot;);
		resolver.setSuffix(&quot;.jsp&quot;);
		return resolver;
	}
}
</pre><p><br></p><p style="text-indent:2em;"><span><span style="line-height:20px;">也可以这样：</span></span></p><p style="text-indent:2em;"><span><span style="line-height:20px;"></span></span></p><pre class="prettyprint lang-xml linenums">&lt;!-- Resolve logical view names to .jsp resources in the /WEB-INF/views directory --&gt;
&lt;bean class=&quot;org.springframework.web.servlet.view.InternalResourceViewResolver&quot;&gt;
	&lt;property name=&quot;prefix&quot; value=&quot;/WEB-INF/views/&quot; /&gt;
	&lt;property name=&quot;suffix&quot; value=&quot;.jsp&quot; /&gt;
&lt;/bean&gt;
</pre><br><p><br></p><p style="text-indent:2em;"><span><span style="line-height:20px;">是不是简单些了，下面再复杂一点</span></span></p><p style="text-indent:2em;"><span><span style="line-height:20px;">2， 方法拦截和参数注入</span></span></p><p style="text-indent:2em;"><span><span style="line-height:20px;">我们可以指定 action 只可以被 get访问, 也可以直接注入要接收的参数</span></span></p><p style="text-indent:2em;"><span><span style="line-height:20px;">如下：</span></span></p><p style="text-indent:2em;"><span><span style="line-height:20px;"></span></span></p><pre class="prettyprint lang-java linenums">package xyz.sample.baremvc;
import java.util.Comparator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	@Autowired
	Comparator&lt;String&gt; comparator;
	@RequestMapping(value = &quot;/&quot;)
	public String home() {
		System.out.println(&quot;HomeController: Passing through...&quot;);
		return &quot;home&quot;;
	}
	@RequestMapping(value = &quot;/compare&quot;, method = RequestMethod.GET)
	public String compare(@RequestParam(&quot;input1&quot;) String input1,
			@RequestParam(&quot;input2&quot;) String input2, Model model) {
		int result = comparator.compare(input1, input2);
		String inEnglish = (result &lt; 0) ? &quot;less than&quot; : (result &gt; 0 ? &quot;greater than&quot; : &quot;equal to&quot;);
		String output = &quot;According to our Comparator, &#39;&quot; + input1 + &quot;&#39; is &quot; + inEnglish + &quot;&#39;&quot; + input2 + &quot;&#39;&quot;;
		model.addAttribute(&quot;output&quot;, output);
		return &quot;compareResult&quot;;
	}
}
</pre><br><p><br></p><p style="text-indent:2em;"><span style="font-size:14px;"><span style="color:#000000;">WEB-INF/views/compareResult.jsp <br></span></span>    </p><pre class="prettyprint lang-html linenums">&lt;%@ taglib uri=&quot;http://java.sun.com/jsp/jstl/core&quot; prefix=&quot;c&quot; %&gt;
&lt;%@ page session=&quot;false&quot; %&gt;
&lt;html&gt;
	&lt;head&gt;
		&lt;title&gt;Result&lt;/title&gt;
	&lt;/head&gt;
	&lt;body&gt;
		&lt;h1&gt;&lt;c:out value=&quot;\${output}&quot;&gt;&lt;/c:out&gt;&lt;/h1&gt;
	&lt;/body&gt;
&lt;/html&gt;
</pre><p><br></p><p style="text-indent:2em;"> 要注入的service代码 </p><p style="text-indent:2em;"><br></p><pre class="prettyprint lang-java linenums">package xyz.sample.baremvc;
import java.util.Comparator;
import org.springframework.stereotype.Component;
@Service
public class CaseInsensitiveComparator implements Comparator&lt;String&gt; {
	public int compare(String s1, String s2) {
		assert s1 != null &amp;&amp; s2 != null;
		return String.CASE_INSENSITIVE_ORDER.compare(s1, s2);
	}
}
</pre><p><br></p><p style="text-indent:2em;"> 至此，一个大致的mvc框架是就完工了， 基本零配置，比spring+struts简单多了吧  </p>`,31),p=[s];function a(i,l){return e(),n("div",null,p)}const m=t(r,[["render",a],["__file","2012-293.html.vue"]]);export{m as default};
