import{_ as t,p,q as n,a1 as e}from"./framework-5866ffd3.js";const a={},r=e(`<pre class="prettyprint lang-bsh linenums">tt@tt ~/workspace/java/ttcms $ uname 
Linux
tt@tt ~/workspace/java/ttcms $ uname -s
Linux
tt@tt ~/workspace/java/ttcms $ uname -n
tt
tt@tt ~/workspace/java/ttcms $ uname -r
3.0.0-12-generic
tt@tt ~/workspace/java/ttcms $ uname -v
#20-Ubuntu SMP Fri Oct 7 14:56:25 UTC 2011
tt@tt ~/workspace/java/ttcms $ uname -m
x86_64
tt@tt ~/workspace/java/ttcms $ uname -o
GNU/Linux
tt@tt ~/workspace/java/ttcms $ uname -a
Linux tt 3.0.0-12-generic #20-Ubuntu SMP Fri Oct 7 14:56:25 UTC 2011 x86_64 x86_64 x86_64 GNU/Linux
</pre><p> echo  可以接收多个参数,若用引号则表示一个参数，会保留其中的空格 </p><p><br></p><p> 命令链接可以用 ; （顺序执行）,&amp;&amp; (需要前面的命令返回0) ,||(需要前面的命令返回非零) , 可以用()来表示命令序列 </p><p><br></p><p> 常用的环境变量 HOME, SHELL,PWD,$(进程ID)，？（前个命令返回代码） ，PPID（父进程ID）,UID(用户ID) </p><p> 在命令行用VAR1=var1就能进行赋值，但是必须要export VAR1后，才能导出，貌似这样才能在其他进程中使用 </p><p> exec 会在当前进程执行程序， 比如直接执行bash ，会新起新进程<img src="http://t.feiyan35488.com/editor/plugins/emoticons/images/8.gif" border="0" alt=""></p><p><br></p><p> history 查看历史命令, 加参数 n表示 显示最近的n条记录 </p><p> !! 显示就近的记录,  ！#当前正输入的命令, !String,以string 开头的命令 !?string？ 包含string 的命令 </p><p> 命令后加#可以用来注释 </p><p><br></p><p> cd -可用来返回上一个工作目录， CDPATH 可以用来设置默认的工作目录 </p><p> which,type 可以用来查看命令的实际路径 </p><p><br></p><p> whatis 可以用来查看命令的简要功能介绍 </p><p><br></p><p><br></p><p><br></p><p><span style="line-height:2;"></span></p>`,21),s=[r];function c(i,o){return p(),n("div",null,s)}const u=t(a,[["render",c],["__file","2012-209.html.vue"]]);export{u as default};
