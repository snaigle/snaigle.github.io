import{_ as l,p as i,q as n,a1 as e}from"./framework-5866ffd3.js";const t={},a=e('<p><span style=""><div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">1.简介：</strong></span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"> SSI全称（Server Side Includes）是在HTML静态页面中使用的指令，当页面在服务端执行的时候是可以进行服务端解析的。这种方式可以让我们在存在的HTML页面里面分 块动态生成内容而不在整个执行了CGI等服务端技术的基础之上进行动态页面服务。在返回请求的页面(包含SSI指令)前，服务器会处理这些指令，并用处理 的结果替换指令，然后把页面返回。我们使用Tomcat作为Http服务器的时候，我们需要使用SSI可以在Tomcat添加对SSI的支持。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"> Tomcat服务器的SSI支持的实现方式和Apache里面的SSI指令一样，在Tomcat里面实现SSI支持使用的是一个 Servlet和一个Filter（Servlet和Filter的基本信息参考JSP教程），我们可以使用其中一种方式来进行SSI支持的配置，但是不 需要两个同时配置，同时配置是否会产生冲突我不太清楚，一般情况下配置一个就可以了。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"> 实现SSI支持的Servlet实现使用了org.apache.catalina.ssi.SSIServlet，另外需要在Servlet的路径解析里面添加映射规则“*.shtml”。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"> 实现SSI支持的Filter使用了org.apache.calalina.ssi.SSIFilter。另外，在Filter路径解析 里面也需要添加映射规则“*.shtml”，而且在Filter配置的时候需要在映射规则里面添加能够执行的mime type，contentType的初始化参数允许你执行服务器下边的资源。在Tomcat里面默认是禁用了SSI的。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"></span> <span style="line-height:normal;color:#0000f0;font-size:small;">注意：SSI指令执行Tomcat外部的JVM，如果我们使用Java的安全管理器需要在 calalina.policy文件里面进行配置。若要使用SSI Servlet和SSI Filter，直接在服务器的路径$CATALINA_BASE/conf/web.xml文件里面将SSI的注释去掉。需要注意的是在Tomcat服务 器里面仅仅只有标记了privileged的Context可以使用SSI功能。（*：当privileged设置为true的时候，才允许Tomcat 的Web应用使用容器内的Servlet，Tomcat的文档里面讲了使用的lib的域，每个应用程序如果不设置这个属性，是不能访问容器内的 Servlet的，这里应该指代的是全局的Servlet）</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"> 否则这里会遇到异常：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"></span> <span style="line-height:normal;color:#f00000;font-size:small;">java.lang.SecurityException: Filter of class org.apache.catalina.ssi.SSIFilter(SSIServlet)is privileged and cannot be loaded by this web application</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">2.服务器配置属性：</strong></span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#0000f0;font-size:small;">在配置SSI Servlet的时候需要用到的参数（init parameters）如下：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">buffered</strong>：是需要将输入保存到缓冲区（0=false,1=true）默认是0（false）</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">debue</strong>：配置调试日志的记录级别，默认0；</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">expires</strong>：SSI包含某个页面的超时配置，默认行为是所有的SSI指令在每一次请求中执行</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">isVirtualWebappRelative</strong>：是针对Tomcat Context的根目录（虚拟目录）进行相对路径解析还是针对Tomcat的服务器目录进行相对路径解析（0=false,1=true）默认是0，不使用虚拟目录。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">inputEncoding</strong>：如果资源不是自身的，资源来自于容器外部，可以针对外部资源进行编码的设置，以什么变法方式输入资源，默认使用的是资源所在平台使用的编码。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">outputEncoding</strong>：SSI执行结果输出的编码方式，默认是UTF-8的。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#0000f0;font-size:small;">配置SSI Filter的时候需要使用以下参数（init paramters）：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">contextType</strong>：配置一个可以匹配的正则表达式规则提供给SSI执行使用，若自定义自己的匹配规 则，需要在mime 类型里面配置下边的可选项：在form里面设置“mime/type;charset=set”默认的是“text/x-server-parsed- html(;.*)?”</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">debug</strong>：同上</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">expires</strong>：同上</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">isVirtualWebappRelative</strong>：同上</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">3.指令描述：</strong></span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">SSI是被HTML文档内需要进行处理的包含部分的SSI Servlet调用的。这些指令是HTML文档的注释形式，这些指令在将内容发送到客户端之前进行内容的替换。标准格式如下：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#f00000;font-size:small;">&lt;!--#directive [parm=value] --&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">这些指令包括：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">config</strong>：设置日期格式一起被SSI处理的其他数据</span> <span style="line-height:normal;color:#0000f0;font-size:small;">(&lt;!--#config timefmt=&quot;%B %Y&quot; --&gt;)</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">echo</strong>：将会被变量的值替换掉</span> <span style="line-height:normal;color:#0000f0;font-size:small;">(&lt;!--#echo var=&quot;VARIABLE_NAEM&quot; --&gt;)</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">exec</strong>：用来执行服务器端的命令</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">include</strong>：包含某些内容</span> <span style="line-height:normal;color:#0000f0;font-size:small;">(&lt;!--#include virtual=&quot;file-name&quot; --&gt;)</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">flastmod</strong>：返回某个文件最后一次修改的时间</span> <span style="line-height:normal;color:#0000f0;font-size:small;">(&lt;!--#flastmod file=&quot;filename.shtml&quot; --&gt;)</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">fsize</strong>：返回某个文件的大小</span> <span style="line-height:normal;color:#0000f0;font-size:small;">(&lt;!--#fzie file=&quot;filename.shtml&quot; --&gt;)</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">printenv</strong>：返回所有定义的变量</span> <span style="line-height:normal;color:#0000f0;font-size:small;">(&lt;!--#printenv --&gt;)</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">set</strong>：用来为定义的变量赋值</span> <span style="line-height:normal;color:#0000f0;font-size:small;">(&lt;!--#set var=&quot;foo&quot; value=&quot;Bar&quot; --&gt;)</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">if elif endif else</strong>：创建条件分支语句</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><a style="line-height:normal;" href="http://httpd.apache.org/docs/1.3/howto/ssi.html">Apache SSI官方文</a>档</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">4.SSI Servlet里面的变量如下：</strong></span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">AUTH_TYPE——针对用户的认证授权方式：BASIC，FORM，etc.和Tomcat内的认证方式同步</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">CONTENT_LENGTH——从服务器表单传过来的数据长度，字符数目或者数据的字节数</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">CONTENT_TYPE——服务器访问呢数据的MIME类型，比如“text/html”</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">DATE_GMT——目前的时间格式方式使用GMT</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">DATE_LOCAL——目前的时间格式方式设置成为本地时间格式</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">DOCUMENT_NAME——当前上下文环境的文件地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">DOCUMENT_URI——虚拟路径定义的文件地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">GATEWAY_INTERFACE——CGI的版本定义：“CGI/1.1”</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">HTTP_ACCEPT——一个客户端可以接受的MIME类型列表</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">HTTP_ACCEPT_ENCODING——客户端可以接受的压缩文件类型的列表</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">HTTP_ACCEPT_LANGUAGE——客户端可以支持的语言列表</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">HTTP_CONNECTION——管理客户端的连接：是“Close”还是“Keep-Alive”</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">HTTP_HOST——客户端请求的站点地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">HTTP_REFERER——客户端请求之前所在的URL地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">HTTP_USER_AGENT——客户使用的浏览器端的请求结果</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">LAST_MODIFIED——当前页面上一次访问和修改的时间</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">PATH_INFO——访问此Servlet的路径信息</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">PATH_TRANSLATED——PATH_INFO提供的translated版本</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">QUERY_STRING——在URL地址?之后的请求参数列表</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">QUERY_STRING_UNESCAPED——没有经过编码过的请求参数</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">REMOTE_ADDR——用户请求客户端IP地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">REMOTE_HOST——用户发送请求的主机名</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">REMOTE_PORT——用户发送请求的端口号</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">REMOTE_USER——认证授权需要的发送请求的用户名</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">REQUEST_METHOD——请求使用方法：GET或者POST</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">REQUEST_URI——客户端原来访问请求的Web页面的URI地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">SCRIPT_FILENAME——在服务器上当前页面的地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">SCRIPT_NAME——当前页面的名称</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">SERVER_ADDR——服务器所在的IP地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">SERVER_NAME——服务器的主机名或者IP地址</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">SERVER_PORT——服务器接受请求的端口号</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">SERVER_PROTOCOL——服务器处理请求的协议：“HTTP/1.1”</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">SERVER_SOFTWARE——服务器响应客户端请求的名称和版本号</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">UNIQUE_ID——一旦创建链接过后每一次会话由服务器分配的唯一会话标识（是不是SessionID？我不敢肯定，因为没有做过验证，有可能是有可能不是，不过有一点，此属性和直接和会话相关的。）</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"><strong style="line-height:normal;">5.配置过程：</strong></span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">1).先保证Tomcat可以运行，即能够正常启动</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">2).（5.x版本）服务器根目录下边</span> <span style="line-height:normal;color:#f00000;font-size:small;">$TOMCAT_HOME</span> <span style="line-height:normal;font-size:small;">(或者</span> <span style="line-height:normal;color:#f00000;font-size:small;">$CATALINA_HOME)/server/lib/</span> <span style="line-height:normal;font-size:small;">目录下边有一个文件：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#f00000;font-size:small;">servlets-ssi.renametojar</span> <span style="line-height:normal;font-size:small;">，将这个文件名更名为一个jar后缀，当然最方便的方法是直接改掉文件后缀，按照Tomcat扫描jar路径类的原理来讲，直接更名为jar应该也是可以的，不过我没尝试过，一般网上最常用的方法是改成：</span> <span style="line-height:normal;color:#f00000;font-size:small;">servlets-ssi.jar</span> <span style="line-height:normal;font-size:small;">。（6.x版本）服务器不需要去寻找jar文件了，直接进入下一步操作都可以。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">3).找到文件：</span> <span style="line-height:normal;color:#f00000;font-size:small;">$TOMCAT_HOME(或者$CATALINA_HOME)/conf/web.xml</span> <span style="line-height:normal;font-size:small;">，这里面不需要我们自己写入SSI Servlet和SSI Filter的配置，首先我们要选择使用哪种方式来配置：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">Servlet配置：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"> 在这个文件里面，找到以下注释代码段，将注释代码段去掉：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">Servlet配置——</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;!--</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;servlet&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;servlet-name&gt;ssi&lt;/servlet-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;servlet-class&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          org.apache.catalina.ssi.SSIServlet</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/servlet-class&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-name&gt;buffered&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-value&gt;1&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-name&gt;debug&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-value&gt;0&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-name&gt;expires&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-value&gt;666&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-name&gt;isVirtualWebappRelative&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-value&gt;0&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;load-on-startup&gt;4&lt;/load-on-startup&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;/servlet&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">--&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">ServletMapping配置——</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;!--</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;servlet-mapping&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;servlet-name&gt;ssi&lt;/servlet-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;url-pattern&gt;*.shtml&lt;/url-pattern&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;/servlet-mapping&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">--&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">Filter配置：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">Filter的相关配置——</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;!--</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;filter&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;filter-name&gt;ssi&lt;/filter-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;filter-class&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          org.apache.catalina.ssi.SSIFilter</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/filter-class&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-name&gt;contentType&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-value&gt;text/x-server-parsed-html(;.*)?&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-name&gt;debug&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-value&gt;0&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-name&gt;expires&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-value&gt;666&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-name&gt;isVirtualWebappRelative&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">          &lt;param-value&gt;0&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;/filter&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">--&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">FilterMapping相关配置——</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;!--</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;filter-mapping&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;filter-name&gt;ssi&lt;/filter-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;url-pattern&gt;*.shtml&lt;/url-pattern&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;/filter-mapping&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">--&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">只是Filter配置里面还需要取消另外一个注释，下边的MIME TYPE的服务器支持相关注释</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;!--</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;mime-mapping&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;extension&gt;shtml&lt;/extension&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;mime-type&gt;text/x-server-parsed-html&lt;/mime-type&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">    &lt;/mime-mapping&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">--&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"> 上边的注释取消过后，配置就基本好了，在Tomcat 5.x的版本中配置的时候，到这个地步就结束了，但是在Tomcat 6.x版本中可能还会出现下边的异常：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;"></span> <span style="line-height:normal;color:#f00000;font-size:small;">java.lang.SecurityException: Filter of class org.apache.catalina.ssi.SSIFilter(SSIServlet) is privileged and cannot be loaded by this web application</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">4).所以正对这点6.x还有一个步骤，在$TOMCAT_HOME(或者$CATALINA_HOME)/conf/context.xml 文件中在&lt;Context&gt;结点添加一个属性privileged=&quot;true&quot;，然后再启动就不会抛出上边的异常了。</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">5).若要解决乱码问题，根据上边文档需要修改SSI中的启动参数：添加如下代码：</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;param-name&gt;<span style="line-height:normal;color:#800080;">inputEncoding</span>&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;param-value&gt;<span style="line-height:normal;color:#800080;">utf-8</span>&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;param-name&gt;<span style="line-height:normal;color:#800080;">outputEncoding</span>&lt;/param-name&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">        &lt;param-value&gt;<span style="line-height:normal;color:#800080;">utf-8</span>&lt;/param-value&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;color:#008080;font-size:small;">&lt;/init-param&gt;</span></div> <div style="font-family:Arial;font-size:12px;line-height:normal;"><span style="line-height:normal;font-size:small;">上边参数已经描述详细了：</span></div></span></p>',1),s=[a];function o(r,m){return i(),n("div",null,s)}const f=l(t,[["render",o],["__file","2010-20.html.vue"]]);export{f as default};
