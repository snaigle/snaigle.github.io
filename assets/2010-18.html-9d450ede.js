import{_ as e,p as t,q as s,a1 as n}from"./framework-5866ffd3.js";const r={},o=n(`<p> freemarker 可以使用jsp标签，但只有你用了他的 freemarkerservlet，这个功能才能有效。如果你想生成静态文件那么这样就不行了 </p><p> 使用jsp标签的方法  使用心得<br> &lt;#global hm=JspTaglibs[&quot;/WEB-INF/struts-html.tld&quot;]&gt;<br> &lt;@hm.form action=&quot;logon.do&quot; method=&quot;post&quot;&gt;<br><input name="username" type="text"><br><input name="password" type="password"><br><input type="submit" name="submit"><br><!--@hm.form--><br> &lt;@include_page path= &quot;/error.jsp&quot;/&gt; <br><br> 可以这样来支持jsp标签 <br> 也可以支持jsp:include 这个标签 <br> 其本质是在model中添加了 对jsptaglibs和tabinclude 的标记<br> 这是 freemarkerservlet 中 对templateModel的初始化  从以下红色代码可以看出，想要自己处理jsptaglibs 而不去调用它的servlet 只需要在自己的model中添加上这个值对就可以了，应用环境  servlet <br> 需 要注意的一个问题  使用include这个标签是 由于传入的是request和response这两个参数，include来的内容会写入到response中，而不是自己指定的out中，所以这部分可 能需要进行一些修改，如果只是其用来做表示层 那么很容易（本来就是这么做的）<br><br> final HttpServletResponse response) throws TemplateModelException { } <pre class="prettyprint lang-java linenums">protected TemplateModel createModel(ObjectWrapper wrapper,
ServletContext servletContext,
final HttpServletRequest request,
final HttpServletResponse response) throws TemplateModelException {
try {
AllHttpScopesHashModel params = new AllHttpScopesHashModel(wrapper, servletContext, request);
<p>// Create hash model wrapper for servlet context (the application)
ServletContextHashModel servletContextModel =
(ServletContextHashModel) servletContext.getAttribute(
ATTR_APPLICATION_MODEL);
if (servletContextModel == null)
{
servletContextModel = new ServletContextHashModel(this, wrapper);
servletContext.setAttribute(
ATTR_APPLICATION_MODEL,
servletContextModel);
TaglibFactory taglibs = new TaglibFactory(servletContext);
servletContext.setAttribute(
ATTR_JSP_TAGLIBS_MODEL,
taglibs);
initializeServletContext(request, response);
}
params.putUnlistedModel(KEY_APPLICATION, servletContextModel);
params.putUnlistedModel(KEY_APPLICATION_PRIVATE, servletContextModel);
params.putUnlistedModel(KEY_JSP_TAGLIBS, (TemplateModel)servletContext.getAttribute(ATTR_JSP_TAGLIBS_MODEL));
// Create hash model wrapper for session
HttpSessionHashModel sessionModel;
HttpSession session = request.getSession(false);
if(session != null) {
sessionModel = (HttpSessionHashModel) session.getAttribute(ATTR_SESSION_MODEL);
if (sessionModel == null || sessionModel.isZombie()) {
sessionModel = new HttpSessionHashModel(session, wrapper);
session.setAttribute(ATTR_SESSION_MODEL, sessionModel);
if(!sessionModel.isZombie()) {
initializeSession(request, response);
}
}
}
else {
sessionModel = new HttpSessionHashModel(this, request, response, wrapper);
}
params.putUnlistedModel(KEY_SESSION, sessionModel);</p>
<p>// Create hash model wrapper for request
HttpRequestHashModel requestModel =
(HttpRequestHashModel) request.getAttribute(ATTR_REQUEST_MODEL);
if (requestModel == null || requestModel.getRequest() != request)
{
requestModel = new HttpRequestHashModel(request, response, wrapper);
request.setAttribute(ATTR_REQUEST_MODEL, requestModel);
request.setAttribute(
ATTR_REQUEST_PARAMETERS_MODEL,
createRequestParametersHashModel(request));
}
params.putUnlistedModel(KEY_REQUEST, requestModel);
params.putUnlistedModel(KEY_INCLUDE, new IncludePage(request, response));
params.putUnlistedModel(KEY_REQUEST_PRIVATE, requestModel);</p>
<p>// Create hash model wrapper for request parameters
HttpRequestParametersHashModel requestParametersModel =
(HttpRequestParametersHashModel) request.getAttribute(
ATTR_REQUEST_PARAMETERS_MODEL);
params.putUnlistedModel(KEY_REQUEST_PARAMETERS, requestParametersModel);
return params;
} catch (ServletException e) {
throw new TemplateModelException(e);
} catch (IOException e) {
throw new TemplateModelException(e);
}
}</p>
</pre></p>`,2),l=[o];function a(p,i){return t(),s("div",null,l)}const u=e(r,[["render",a],["__file","2010-18.html.vue"]]);export{u as default};
