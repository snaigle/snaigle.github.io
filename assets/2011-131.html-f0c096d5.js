import{_ as e,p as t,q as s,a1 as a}from"./framework-5866ffd3.js";const r={},p=a('<p>主要代码参考了 这篇帖子<a href="http://www.iteye.com/topic/509417">http://www.iteye.com/topic/509417</a> ，写的非常不错。尤其看他的的解决问题的思路特别受启发，我在看这篇帖子之前也看到了<span style="font-family:arial,sans-serif;"><span style="color:#666666;font-size:x-small;">flying-saucer ，并且下载了jar包做了例子，但是没有成功我就匆忙放弃了，又踏上了寻找的路途。 以后要记得看 要找的项目的介绍，如果合适，就去看文档，文档里面一般是非常全面的。</span></span></p><p>首先itext就不用说了，自己去google。 直接上saucer的介绍：</p><p> </p><pre class="java">Flying Saucer takes XML or XHTML and applies CSS 2.1-compliant stylesheets to it,</pre><pre class="java"> in order to render to PDF (via iText), images, and on-screen using Swing or SWT.</pre><pre class="java"> The library implements (basically) the entirety of CSS 2.1 and aims to be fully compliant with the W3C specification;</pre><pre class="java"> it includes a small handful of CSS 3 features.</pre><p>意思： saucer支持 xml和xhtml css2.1，并且可以生成pdf，图片，这个貌似是 java可视化界面。</p><p>这个库实现了 全部css2.1并致力于 符合w3c标准，同时包含一些css3的属性，如 @page,可以用来定制 pdf的宽高和margin。</p><p>又从下面看到，它没有支持传统的html，只支持xhmtl和css； 它支持xhtml+css要弱于 xml+css。</p><p>看来还可以生成image，这也是个不错的东东。</p><p> </p><p>我第一次实验saucer时 就用了 html，悲剧啊 <img src="http://404.abc.com/images/smiles/icon_cry.gif" alt=""> 。</p><p>还有它对中文支持情况，如果你打算在html中使用中文，就必须在 css中全局定义 字体。并在 代码中 添加该字体文件。否则是不能显示中文的。</p><p> </p><p>上代码</p><p> </p><pre class="java">public static void main(String[] args) throws Exception {</pre><pre class="java"> String inputFile = &quot;index11.html&quot;;</pre><pre class="java">System.out.println(new File(inputFile).getAbsolutePath());</pre><pre class="java">   String url = new File(inputFile).toURI().toURL().toString();</pre><pre class="java">     String outputFile = &quot;firstdoc.pdf&quot;;</pre><pre class="java">      OutputStream os = new FileOutputStream(outputFile);</pre><pre class="java">	        ITextRenderer renderer = new ITextRenderer();</pre><pre class="java">  renderer.setDocument(url);	  	        // 解决中文支持问题</pre><pre class="java">    ITextFontResolver fontResolver = renderer.getFontResolver();</pre><pre class="java">       fontResolver.addFont(&quot;<span style="background-color:#ffffff;"><span style="color:#ff0000;">C:/Windows/Fonts/SIMSUN.TTC</span></span>&quot;, BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);</pre><pre class="java">  // 你可以把该文件放到项目中，这样打包后就不用依赖机器环境了<span style="white-space:pre;">			</span>// 我这里指定为sinsun 是因为我在css中指定 了字体为 宋体	        // 解决图片的相对路径问题    (这里我发现不用指定 ，图片显示也会正常，只是图片必须要指定为相对路径)	       // renderer.getSharedContext().setBaseURL(&quot;file:/D:/grails-work/html2pdf/&quot;);  	          	        renderer.layout();  	        renderer.createPDF(os);  	          	        os.close();  	}</pre><p> </p><p> </p><p>rar中有html和css图片，还有生成的pdf，也有需要的jar，可以自行测试。仅在此记录一下，我也正在看 文档，有了新的想法，再加</p>',31),l=[p];function n(o,i){return t(),s("div",null,l)}const u=e(r,[["render",n],["__file","2011-131.html.vue"]]);export{u as default};
