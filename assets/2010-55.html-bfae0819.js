import{_ as e,p as o,q as r,a1 as a}from"./framework-5866ffd3.js";const g={},p=a('<p><span style="">1、Log4j 是什么？ <br> Log4j可以帮助调试（有时候debug是发挥不了作 用的）和分析，要下载和了解更详细的内容，还 <br>是访问其官方网站吧： http://jakarta.apache.org/log4j . <br>2、Log4j 的概念 <br> Log4j中有三个主要的组件，它们分别是 Logger、Appender和Layout，Log4j 允许开发人员定 <br>义多个Logger，每个Logger拥有自己的名字，Logger之间通过名字来表明隶属关系。有一个Logger <br>称为Root，它永远 存在，且不能通过名字检索或引用，可以通过Logger.getRootLogger（）方法获 <br>得，其它Logger 通过 Logger.getLogger（String name）方法。 <br> Appender则是用来指明将所有的log信息存放到什么地方，Log4j中支持多种appender，如 <br>console、files、GUI components、NT Event Loggers等，一个Logger可以拥有多个 <br>Appender，也就是你既可以将Log信息输出到屏幕，同时存储到一个文件中。 <br> Layout的作用是控制Log信息的输出方式，也就是格式化输出的信息。 <br> Log4j中将要输出的Log信息定义了5种级别，依次为DEBUG、INFO、WARN、ERROR和FATAL， <br>当输出时，只有级别高过配置中规定的 级别的信息才能真正的输出，这样就很方便的来配置不同情况下 <br>要输出的内容，而不需要更改代码，这点实在是方便啊。 <br>3、Log4j 的配置文件 <br> 虽然可以不用配置文件，而在程序中实现配置，但这种方法在如今的系统开发中显然是不可取的， <br>能采用配置文件的地方一定一定要用配置文件。Log4j 支持两 种格式的配置文件：XML格式和Java 的 <br>property格式，本人更喜欢后者，首先看一个简单的例子吧，如下： <br>log4j.rootLogger=debug, stdout, R <br>log4j.appender.stdout=org.apache.log4j.ConsoleAppender <br>log4j.appender.stdout.layout=org.apache.log4j.PatternLayout <br># Pattern to output the caller&#39;s file name and line number. <br>log4j.appender.stdout.layout.ConversionPattern=%5p [%t] (%F:%L) - %m%n <br>log4j.appender.R=org.apache.log4j.RollingFileAppender <br>log4j.appender.R.File=example.log <br>log4j.appender.R.MaxFileSize= 100KB <br># Keep one backup file <br>log4j.appender.R.MaxBackupIndex=1 <br>log4j.appender.R.layout=org.apache.log4j.PatternLayout <br>log4j.appender.R.layout.ConversionPattern=%p %t %c - %m%n <br> 首先，是设置root，格式为 log4j.rootLogger=[level]，appenderName， ……，其中 <br>level就是设置需要输出信息的级别，后面是appender的输出的目的地，appenderName就是指定日 <br>志信息输出到哪个地方。您 可以同时指定多个输出目的地。 配置日志信息输出目的地Appender，其语 <br>法为 <br>log4j.appender.appenderName = fully.qualified.name.of.appender.class <br>log4j.appender.appenderName.option1 = value1 <br>... <br>log4j.appender.appenderName.option = valueN <br> Log4j提供的appender有以下几种： <br> org.apache.log4j.ConsoleAppender（控制台） <br> org.apache.log4j.FileAppender（文件） <br> org.apache.log4j.DailyRollingFileAppender（每天产生一个日志文件） <br> org.apache.log4j.RollingFileAppender（文件大小到达指定尺寸的时候产生新文件） <br> org.apache.log4j.WriterAppender（将日志信息以流格式发送到任意指定的地方） <br> 配置日志信息的格式（布局），其语法为： <br>log4j.appender.appenderName.layout = fully.qualified.name.of.layout.class <br>log4j.appender.appenderName.layout.option1 = value1 <br>.... <br>log4j.appender.appenderName.layout.option = valueN <br> Log4j提供的layout有以下几种： <br> org.apache.log4j.HTMLLayout（以HTML表格形式布局）， <br> org.apache.log4j.PatternLayout（可以灵活地指定布局模式）， <br> org.apache.log4j.SimpleLayout（包含日志信息的级别和信息字符串）， <br> org.apache.log4j.TTCCLayout（包含日志产生的时间、线程、类别等等信息） <br> Log4J采用类似C语言中的printf函数的打印格式格式化日志信息，打印参数如下： %m 输出代 <br>码中指定的消息 <br> %p 输出优先级，即DEBUG，INFO，WARN，ERROR，FATAL <br> %r 输出自应用启动到输出该log信息耗费的毫秒数 <br> %c 输出所属的类目，通常就是所在类的全名 <br> %t 输出产生该日志事件的线程名 <br> %n 输出一个回车换行符，Windows 平台为“\\r\\n”，Unix平台为“\\n” <br> %d 输出日志时间点的日期或时间，默认格式为ISO8601，也可以在其后指定格式，比如：%d{yyy <br>MMM dd HH：mm：ss，SSS}，输出类似： 2002年10月18 日 22：10：28，921 <br> %l 输出日志事件的发生位置，包括类目名、发生的线程，以及在代码中的行数。举例： <br>Testlog4.main（TestLog4.java：10） <br>4、Log4j 在程序中的使用 <br> 要在自己的程序中使用Log4j，首先需要将commons- logging.jar和logginglog4j- <br>1.2.9.jar导入到构建路径中。然后再将log4j.properties放到src根目录 下。这样就可 <br>以在程序中使用log4j了。在类中使用log4j，首先声明一个静态变量 <br>Logger logger=Logger.getLog（&quot;classname&quot;）；现在就可以使用了，用法如下： <br>logger.debug（&quot;debug message&quot;）或者logger.info（&quot;info message&quot;），看下面一个小例子： <br>import com.foo.Bar; <br>import org.apache.log4j.Logger; <br>import org.apache.log4j.PropertyConfigurator; <br>public class MyApp { <br>static Logger logger = Logger.getLogger(MyApp.class.getName()); <br>public static void main(String[] args) { <br>// BasicConfigurator replaced with PropertyConfigurator. <br>PropertyConfigurator.configure(args[0]); <br>logger.info(&quot;Entering application.&quot;); <br>Bar bar = new Bar(); <br>bar.doIt(); <br>logger.info(&quot;Exiting application.&quot;); <br>} <br>} <br>5、log4j.properties配置文件 <br># Set root category priority to info and its only appender to #console. <br>log4j.rootCategory=info,console,R <br>#log4j.debug=true <br><br># console is set to be a ConsoleAppender using a PatternLayout. <br>log4j.appender.console=org.apache.log4j.ConsoleAppender <br>log4j.appender.console.Threshold=info <br>log4j.appender.console.layout=org.apache.log4j.PatternLayout <br>log4j.appender.console.layout.ConversionPattern=- %m%n <br><br># R is set to be a File appender using a PatternLayout. <br>log4j.appender.R=org.apache.log4j.RollingFileAppender <br>log4j.appender.R.Append=true <br>log4j.appender.R.Threshold=info <br>log4j.appender.R.MaxFileSize=1024KB <br>log4j.appender.R.MaxBackupIndex=10 <br>log4j.appender.R.File=d\\:/log/bookconsole.log <br>log4j.appender.R.layout=org.apache.log4j.PatternLayout <br>log4j.appender.R.layout.ConversionPattern=%-d{yyyy-MM-dd HH\\:mm\\:ss} [%c]-[%p] %m%n</span></p>',1),n=[p];function l(t,b){return o(),r("div",null,n)}const i=e(g,[["render",l],["__file","2010-55.html.vue"]]);export{i as default};
