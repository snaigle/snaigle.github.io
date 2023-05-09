import{_ as n,p as t,q as r,R as e}from"./framework-5866ffd3.js";const l={},s=e("p",null," public static String getHtmlByUrl(String url) throws IOException { ",-1),a=e("p",null,[e("pre",{class:"prettyprint lang-java linenums"},` URL htmlUrl = new URL(url);
 BufferedReader reader = new BufferedReader(new InputStreamReader(htmlUrl.openStream()));
 String temp = "";
 StringBuffer sb = new StringBuffer();
 while((temp = reader.readLine())!= null) {
 sb.append(temp);
 }
 return sb.toString();
}`)],-1),o=e("p",null,[e("br")],-1),i=e("p",null," 简单实现下， 抓取还得用框架 ",-1),_=[s,a,o,i];function c(p,u){return t(),r("div",null,_)}const f=n(l,[["render",c],["__file","2010-33.html.vue"]]);export{f as default};
