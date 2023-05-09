import{_ as t,p as e,q as o,a1 as n}from"./framework-5866ffd3.js";const s={},p=n(`<p> 项目中使用junit4.4，虽然一直在用，但对testcase 的执行细节却不大清楚，我做了一些例子来测试一下 </p><p><span style="white-space:pre;"> JunitTest.java</span></p><p><span style="white-space:pre;"><pre class="prettyprint lang-java linenums">private Logger logger = Logger.getLogger(JunitTest.class);
	public JunitTest() {
		super(&quot;junit test&quot;);
		logger.info(&quot;junit test contruct&quot;);
	}
	public void setUp() {
		logger.info(&quot;setUp&quot;);
	}
	public void testMethod1() {
		logger.info(&quot;method1&quot;);
	}
	public void testMethod2() {
		logger.info(&quot;method2&quot;);
	}
	@Test
	public void method3() {
		logger.info(&quot;annotion method3&quot;);
	}
	private void testMethod4() {
		logger.info(&quot;private method4&quot;);
	}
	@Test
	private void testMethod5() {
		// error Test method isn&#39;t public
		logger.info(&quot;annotion private method5&quot;);
	}
	public void mthod6() {
		logger.info(&quot;method6&quot;);
	}
	private void mthod7() {
		logger.info(&quot;method6&quot;);
	}
	public void tearDown() {
		logger.info(&quot;tear down&quot;);
	}</pre><br></span></p><p> 日志输出： </p><p><pre class="prettyprint lang-js linenums">        01-13 10:58:44,439 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.JunitTest.(JunitTest.java:15) junit test contruct
	01-13 10:58:44,439 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.JunitTest.(JunitTest.java:15) junit test contruct
	01-13 10:58:44,455 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.JunitTest.setUp(JunitTest.java:18) setUp
	01-13 10:58:44,455 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.JunitTest.testMethod1(JunitTest.java:21) method
	01-13 10:58:44,455 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.JunitTest.tearDown(JunitTest.java:45) tear down
	01-13 10:58:44,455 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.JunitTest.setUp(JunitTest.java:18) setUp
	01-13 10:58:44,455 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.JunitTest.testMethod2(JunitTest.java:24) method2
	01-13 10:58:44,455 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.JunitTest.tearDown(JunitTest.java:45) tear down</pre></p><p> junit执行结果 </p><p> testMethod1   success; </p><p> testMethod2   success; </p><p> warning               这个什么错也没有，我又测试了一下 发现是 testMethod4 的问题 </p><p> warning           这个报错了， Test Method isn&#39;t public: testMethod5 </p><p><br></p><p> test 3 没有出现  ，难道junit4中方法必需要有 test前缀吗， </p><p><br></p><p> 从日志分析： </p><p> JunitTest  执行了 两次 构造函数，这个原因还不知道，需要看具体的执行代码。 </p><p> 执行每个TestMethod 时 都会 执行一次setUp() 和 tearDown(); 应该是为method清理环境 </p><p> 还有 测试方法应该有 test 前缀 ，而且为public </p><p><br></p><p> 乌龙了，确实是junit4的包，不过确实junit3的用法。 </p><p><br></p><p> 下面是 junit 4的用法； </p><p><pre class="prettyprint lang-java linenums">public class Junittest4 {
	private static Logger logger = Logger.getLogger(Junittest4.class);
	@Before
	public void before() {
		logger.info(&quot;before setUp&quot;);
	}
	@After
	public void after() {
		logger.info(&quot;After teardown&quot;);
	}
	public void testMethod1() {
		logger.info(&quot;no test annotion public method&quot;);
	}
	@Test
	public void Method2() {
		logger.info(&quot;test annotion public method&quot;);
	}
	@Ignore(&quot;not complete&quot;)
	@Test
	public void Method3() {
		logger.info(&quot;test annotion private method&quot;);
	}
	@Test(timeout = 5)
	public void testMethod4() throws InterruptedException {
		Thread.sleep(4);
		logger.info(&quot;test annotion public has test method&quot;);
	}
	@Test(timeout = 5)
	public void testMethod5() throws InterruptedException {
		Thread.sleep(5);
		logger.info(&quot;test annotion public has test method&quot;);
	}
	@Test(timeout = 5)
	public void testMethod6() throws InterruptedException {
		Thread.sleep(6);
		logger.info(&quot;test annotion public has test method&quot;);
	}
}</pre></p><p> 日志输出 </p><p><pre class="prettyprint lang-java linenums">01-13 11:45:50,502 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.before(Junittest4.java:13) before setUp
01-13 11:45:50,517 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.Method2(Junittest4.java:24) test annotion public method
01-13 11:45:50,517 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.after(Junittest4.java:17) After teardown
01-13 11:45:50,564 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.before(Junittest4.java:13) before setUp
01-13 11:45:50,580 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.testMethod4(Junittest4.java:34) test annotion public has test method
01-13 11:45:50,580 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.after(Junittest4.java:17) After teardown
01-13 11:45:50,580 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.before(Junittest4.java:13) before setUp
01-13 11:45:50,595 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.after(Junittest4.java:17) After teardown
01-13 11:45:50,595 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.before(Junittest4.java:13) before setUp
01-13 11:45:50,611 INFO  test.com.hiksoft.prototype.modules.advancedtemplate.junittest.Junittest4.after(Junittest4.java:17) After teardown</pre></p><p> 测试结果 </p><p> method2  suucess </p><p> method3  ignore </p><p> method4  success </p><p> method5  fail </p><p> method6  fail </p><p><br></p>`,31),i=[p];function u(a,r){return e(),o("div",null,i)}const l=t(s,[["render",u],["__file","2011-69.html.vue"]]);export{l as default};
