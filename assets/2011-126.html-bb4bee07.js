import{_ as t,p as n,q as e,a1 as a}from"./framework-5866ffd3.js";const r={},i=a(`<p><span>JIRA是一个优秀的问题(or bugs,task,improvement,new feature )跟踪及管理软件。<br style="padding:0px;margin:0px;"> 它由Atlassian开发，采用J2EE技术.它正被广泛的开源软件组织，以及全球著名的软件公司使用，它堪称是J2EE的Bugzilla。<br style="padding:0px;margin:0px;"><br style="padding:0px;margin:0px;"> JIRA提供了全面的功能，界面十分友好，可用性以及可扩展性方面都十分出色，如果购买商业版许可，还可以得到JIRA的源码（在开发许可协议下可以定制自己的JIRA系统）。<br><br> organisation  *****@Cracked By martin.xus@gmail.com <br style="padding:0px;margin:0px;"> Date Purchased  28/四月/06 <br style="padding:0px;margin:0px;"> License Type  JIRA Enterprise: Commercial Server <br style="padding:0px;margin:0px;"> License ID  BABQW <br style="padding:0px;margin:0px;"> Support Period  Your commercial JIRA support and updates are available until 03/九月/43. <br style="padding:0px;margin:0px;"><br style="padding:0px;margin:0px;"> JIRA 3.6 下载:<br style="padding:0px;margin:0px;"><a style="text-decoration:none;color:#000000;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333333;padding:0px;margin:0px;" href="http://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-enterprise-3.6-standalone.zip" target="_blank">http://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-enterprise-3.6-standalone.zip</a><br style="padding:0px;margin:0px;"><br style="padding:0px;margin:0px;"> 地址已更新:<br style="padding:0px;margin:0px;"><br style="padding:0px;margin:0px;"> 下载(请将rar中的文件释放下来,直接覆盖掉web-inf下面的包即可，适用版本3.6):<br style="padding:0px;margin:0px;"><a style="text-decoration:none;color:#000000;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#333333;padding:0px;margin:0px;" href="http://www.blogjava.net/Files/martinx/atlassian-extras-0.7.19.rar" target="_blank">http://www.blogjava.net/Files/martinx/atlassian-extras-0.7.19.rar</a><br style="padding:0px;margin:0px;"><br style="padding:0px;margin:0px;"><br style="padding:0px;margin:0px;"> 破解jira的License。只是把classes反编译过来，修改一下。效果如下，License的类型为JIRA Enterprise: Commercial Server。<br style="padding:0px;margin:0px;"><br> //要让程序能找到这个包。atlassian-extras-0.7.19.jar<br style="padding:0px;margin:0px;"></span></p><p><pre class="prettyprint lang-java linenums">package com.jira.util;
<p>import com.atlassian.license.LicensePair;
import java.io.*;
import java.security.KeyFactory;
import java.security.Signature;
import java.security.spec.PKCS8EncodedKeySpec;</p>
<p>public class Cript {
public static void main(String args[]) throws IOException {
try {
long l = 267L;
long l1 = System.currentTimeMillis();
long l2 = System.currentTimeMillis();
String s = &quot;&quot;;
System.out.println(&quot;Keygen for JIRA Enterprise Edition.&quot;);
System.out.print(&quot;created by mydaj[ROR].&quot;);
do {
System.out.print(&quot;\\nEnter your organization name: &quot;);
for (int i = System.in.read(); i != 10 &amp;&amp; i != 13; i = System.in
.read())
s = s + (char) i;
} while (s == &quot;&quot;);
try {
PKCS8EncodedKeySpec pkcs8encodedkeyspec = new PKCS8EncodedKeySpec(
EncodedPrvKey);
KeyFactory keyfactory = KeyFactory.getInstance(&quot;DSA&quot;, &quot;SUN&quot;);
java.security.PrivateKey privatekey = keyfactory
.generatePrivate(pkcs8encodedkeyspec);
String s1 = Long.toString(l, 10);
s1 = s1 + &quot;^^&quot;;
s1 = s1 + Long.toString(l1, 10);
s1 = s1 + &quot;^^&quot;;
s1 = s1 + Long.toString(l2, 10);
s1 = s1 + &quot;^^&quot;;
s1 = s1 + s;
byte abyte0[] = s1.getBytes();
Signature signature = Signature.getInstance(&quot;SHA1withDSA&quot;);
signature.initSign(privatekey);
signature.update(abyte0);
byte abyte1[] = signature.sign();
LicensePair licensepair = null;
try {
licensepair = new LicensePair(abyte0, abyte1);
} catch (Exception exception1) {
exception1.printStackTrace();
}
System.out.println(s1);
System.out.println(&quot;Your license key is: &quot;);
System.out.println(licensepair.toString());
} catch (Exception exception) {
exception.printStackTrace();
}
} catch (IOException ioexception) {
}
}</p>
<pre><code>static byte EncodedPrvKey[] = { 48, -126, 1, 75, 2, 1, 0, 48, -126, 1, 44,
		6, 7, 42, -122, 72, -50, 56, 4, 1, 48, -126, 1, 31, 2, -127, -127,
		0, -3, 127, 83, -127, 29, 117, 18, 41, 82, -33, 74, -100, 46, -20,
		-28, -25, -10, 17, -73, 82, 60, -17, 68, 0, -61, 30, 63, -128, -74,
		81, 38, 105, 69, 93, 64, 34, 81, -5, 89, 61, -115, 88, -6, -65,
		-59, -11, -70, 48, -10, -53, -101, 85, 108, -41, -127, 59, -128,
		29, 52, 111, -14, 102, 96, -73, 107, -103, 80, -91, -92, -97, -97,
		-24, 4, 123, 16, 34, -62, 79, -69, -87, -41, -2, -73, -58, 27, -8,
		59, 87, -25, -58, -88, -90, 21, 15, 4, -5, -125, -10, -45, -59, 30,
		-61, 2, 53, 84, 19, 90, 22, -111, 50, -10, 117, -13, -82, 43, 97,
		-41, 42, -17, -14, 34, 3, 25, -99, -47, 72, 1, -57, 2, 21, 0, -105,
		96, 80, -113, 21, 35, 11, -52, -78, -110, -71, -126, -94, -21,
		-124, 11, -16, 88, 28, -11, 2, -127, -127, 0, -9, -31, -96, -123,
		-42, -101, 61, -34, -53, -68, -85, 92, 54, -72, 87, -71, 121, -108,
		-81, -69, -6, 58, -22, -126, -7, 87, 76, 11, 61, 7, -126, 103, 81,
		89, 87, -114, -70, -44, 89, 79, -26, 113, 7, 16, -127, -128, -76,
		73, 22, 113, 35, -24, 76, 40, 22, 19, -73, -49, 9, 50, -116, -56,
		-90, -31, 60, 22, 122, -117, 84, 124, -115, 40, -32, -93, -82, 30,
		43, -77, -90, 117, -111, 110, -93, 127, 11, -6, 33, 53, 98, -15,
		-5, 98, 122, 1, 36, 59, -52, -92, -15, -66, -88, 81, -112, -119,
		-88, -125, -33, -31, 90, -27, -97, 6, -110, -117, 102, 94, -128,
		123, 85, 37, 100, 1, 76, 59, -2, -49, 73, 42, 4, 22, 2, 20, 42, 50,
		-88, 30, 125, -37, 118, -50, 20, -82, -63, 0, 8, -36, 106, -9,
		-110, 124, 107, 68 };
</code></pre>
<p>}</p>
</pre></p><p><br></p><p> 送你们一个key： </p><p> name: tiantian </p><p> key:pqMomDgDQWXQuwINtKvsXuvOHNqorbvDSxBpkRwhJgmnhcX </p><p> mj2L0LAgbiEKysVnOTZs7odjy2Kka71ExsjBqL1aRXwN6Iw </p><p> pPRSwmqRnpQPmPQoPpstrNMqpPMpnqQMNtttVvxUsXWostU </p><p> UnpmoqutqusrtuUUnpmoqutqusrtuUUqfXkqfXk </p>`,9),p=[i];function s(o,c){return n(),e("div",null,p)}const l=t(r,[["render",s],["__file","2011-126.html.vue"]]);export{l as default};
