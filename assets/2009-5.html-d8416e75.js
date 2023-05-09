import{_ as l,p as r,q as e,t,a1 as s,R as n}from"./framework-5866ffd3.js";const o={},i=s(`<p>java JDK  的安装就不说了，主要是安装完成后配置JAVA_HOME  CLASSPATH  PATH  路径 <br><br> java语言 命名规则： <br> 1.类名首字母大写 <br> 2.变量 为单个单词时： 全部小写 int value;， <br> 为多个单词时int intValue;：首个单词小写以后的单词首字母要大写， <br> 为常变量时：全部大写，单词之间用&quot;_&quot;隔开  如int INT_VALUE 21; <br> 变量初始化： <br> 全局变量中 <br> 原始变量会在编译时赋给默认值 0 <br> String 初值 为null <br> 对象的初值为  null <br></p><p> 在局部变量中 变量不会有默认值；int a;    a = null; </p><p><pre class="prettyprint lang-java linenums">	public class Test_Variable {
		static int a;
		static int d;
		public static void main(String[] args) {
			int b = 0;
			String c = &quot;cc&quot;;
			System.out.println(a);
			System.out.println(b);
			System.out.println(c);
			printd();
		}
		static void printd() {
			int e = 3;
			System.out.println(d);
			System.out.println(e);
			System.out.println(&quot;str&quot; + a + e);
			System.out.println(a + e);
			System.out.println(a + e + &quot;str&quot;);
			System.out.println(&quot;str&quot; + 0 + 3);
		}
	}
</pre></p><p> 运行结果  ： </p>`,4),u=n("br",null,null,-1),a=n("br",null,null,-1),c=n("br",null,null,-1),_=n("br",null,null,-1),p=n("br",null,null,-1),b=n("br",null,null,-1),d=n("br",null,null,-1),m=n("br",null,null,-1),S=n("br",null,null,-1);function h(q,y){return r(),e("div",null,[i,t(" 0 "),u,t(" 0 "),a,t(" cc "),c,t(" 0 "),_,t(" 3 "),p,t(" str03 "),b,t(" 3 "),d,t(" 3str "),m,t(" str03 "),S,t(" static 对variable 和methods的 作用？")])}const f=l(o,[["render",h],["__file","2009-5.html.vue"]]);export{f as default};
