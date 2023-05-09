import{_ as t,p as e,q as n,a1 as a}from"./framework-5866ffd3.js";const p={},s=a(`<p> spring3.2终于出ga版了， 发现spring test的改进最大，添加了对 springmvc的测试 </p><p> 看了看文档，将使用方法整理如下： </p><p> 1，可以使用 @WebAppConfiguration来标明是web应用测试， @ContextConfiguration来指定配置文件，其他的和测试相同 </p><p> 2，主要用到三个类： 1，MockMvc及<span>MockMvcBuilders， 用来生成当前的测试环境，后者是生成MockMvc的</span></p><p><span>                              2，<span>MockMvcRequestBuilders ， 模拟http请求</span></span></p><p><span>                              3，<span>MockMvcResultMatchers ，对返回结果进行断言</span></span></p><p><span>3，这几个类都提供了链式操作，写代码的时候就很舒服了，代码也好看多了，下面就详细说说这几个类</span></p><p><span>3.1 MockMvcBuilders </span></p><p><span>           这个类只有两个方法：<span>DefaultMockMvcBuilder </span> <span>webAppContextSetup(WebApplicationContext context)  和 <span><strong><span>StandaloneMockMvcBuilder </span></strong>standaloneSetup(Object... controllers) </span></span>，区别是 前者依赖Spring上下文，因此这个要加载配置文件</span></p><p><span>           StandaloneMockMvcBuilder 继承自 DefaultMockMvcBuilder </span></p><p><span>           毕竟spring的配置文件中没有web.xml中那些filter的信息，无法完整模拟web环境， 因此 DefautlMockBuilder中有 addFilter(Filter filter)  和 addFilters(Filter ...)两个方法，还有一个RequestBuilder，可以定制默认的request， 还有一些 alwaysExpect() ,alwaysDo等方法，用于添加默认断言</span></p><p><span>          配置好Builder后，然后 调用build()方法 生成 MockMvc对象， 我们就可以用来测试了</span></p><p><span>3.2 MockMvcRequestBuilders </span></p><p><span>          这个类里面全是静态方法， 提供http操作方法如： get,post,delete,put,fileupload , 还有一个request方法，可以自己指定 前面那类型， 还有一个 <span>asyncDispatch（MvcResult mvcResult）,应该是异步执行</span>，这个方法没用过，有时间看看是干嘛用的</span></p><p><span>          这些方法返回的都是 RequestBuilder的子类， 针对不同http请求类型做了一些拓展，都是链式操作很方便的</span></p><p><span>3.2 MockMvcResultMatchers , 这个是对返回结果进行断言，也都是静态方法，链式操作， 这些方法返回的都是 ResultMather的子类</span></p><p><span>     提供的方法有：request（），handler(), model(),view（），flash(),forwardUrl(String expectUrl),redirectUrl(<span>String expectUrl</span>) ,status(),header(),content(),jsonPath() ,xpath(),cookie();</span></p><p><span>     jsonPath 和 xpath 是针对json和xml格式数据的，具体格式请参考 <span>http://goessner.net/articles/JsonPath/ 这篇文章。</span></span></p><p><span>    jsonPath 操作依赖 jsonPath类， xpath没用过应该也有相关依赖吧</span></p><p><span><br></span></p><p><span>下面放一个测试例子吧 </span></p><p><span><pre class="prettyprint lang-java linenums">public class SpringControllerTest {
<pre><code>@Test
public void json() throws Exception {

    MockMvc mockMvc = standaloneSetup(new PersonController()).build();
    mockMvc.perform(get(&quot;/person/Lee&quot;).accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(content().contentType(&quot;application/json&quot;))
            .andExpect(jsonPath(&quot;$.name&quot;).value(&quot;Lee&quot;)).andExpect(jsonPath(&quot;$.title&quot;).value(&quot;你好&quot;));
    mockMvc.perform(post(&quot;/p2/haha&quot;).param(&quot;title&quot;, &quot;你好吧&quot;)).andExpect(status().is(302))
            .andExpect(view().name(&quot;redirect:/hello&quot;)).andExpect(model().attribute(&quot;title&quot;, &quot;你好吧&quot;));
    mockMvc.perform(get(&quot;/p2/haha2&quot;).param(&quot;title&quot;, &quot;你好吧&quot;).accept(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
            .andExpect(jsonPath(&quot;$.data[0].fullName&quot;).value(&quot;宝马-进口-x6&quot;));
}

@Controller
private class PersonController {

    @RequestMapping(value = &quot;/person/{name}&quot;)
    public Object get(@PathVariable String name) {
        Map person = new HashMap();
        person.put(&quot;name&quot;, name);
        person.put(&quot;title&quot;, &quot;你好&quot;);
        return ViewUtils.createJsonView(person);
    }

    @RequestMapping(value = &quot;/p2/haha&quot;)
    public Object post(String name, String title) {
        Map person = new HashMap();
        person.put(&quot;name&quot;, name);
        person.put(&quot;title&quot;, title);

        return ViewUtils.createView(&quot;redirect:/hello&quot;, person);
    }

    @RequestMapping(value = &quot;/p2/haha2&quot;,produces=MediaType.APPLICATION_JSON_VALUE+&quot;;charset=utf-8&quot;)
    @ResponseBody
    public Object getjson(String name, String title) {
        List&amp;lt;Car&amp;gt; cars = Lists.newArrayList();
        cars.add(EntityFactory.createCar(&quot;宝马-进口-x6&quot;, &quot;x6&quot;, null, &quot;进口&quot;));
        JsonData data = new JsonData();
        data.setData(BeanMapper.mapList(cars, CarDTO.class));
        return data;
    }
}
</code></pre>
<p>}</p>
</pre><br></span></p><p><span> <span></span></span></p><p><span>           </span></p>`,24),o=[s];function r(u,c){return e(),n("div",null,o)}const i=t(p,[["render",r],["__file","2012-349.html.vue"]]);export{i as default};
