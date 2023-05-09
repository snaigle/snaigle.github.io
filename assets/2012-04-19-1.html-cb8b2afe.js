import{_ as s,p as r,q as n,R as t,t as e}from"./framework-5866ffd3.js";const i={},l=t("p",null," 下面分享redirect 带回message功能代码 ",-1),o=t("p",null," 首先在redirect时将referer，message放到session中，如下： ",-1),a=t("p",null,[t("pre",{class:"prettyprint lang-java linenums"},`                
		String referer = req.getHeader("Referer");
		if(! Strings.isEmpty(message) && !Strings.isEmpty(referer)){
			req.getSession().setAttribute(CV.REDIRECT_MESSAGE, message);
			req.getSession().setAttribute(CV.REDIRECT_OLD_URL, referer);
		}
`),e(" 然后用filter去识别，当新请求的refer和session中的referer相同时，将session中的message注入到 request中，否则清空session的referer和message值 ")],-1),g=t("p",null," 就保证message不会带到别的url中 ",-1),_=t("p",null," filter代码： ",-1),u=t("p",null,[t("pre",{class:"prettyprint lang-java linenums"},[e(`	
		HttpServletRequest req = (HttpServletRequest) arg0;
		String realPath = Mvcs.getRequestPathObject(req).getUrl();
		if (null != ignorePtn && !ignorePtn.matcher(realPath).find()) {
			HttpSession session  = req.getSession(true);
			String oldUrl = (String) session.getAttribute(CV.REDIRECT_OLD_URL);
			if(! Strings.isEmpty(oldUrl)){
				String referer = req.getHeader("Referer");
				if(!(Strings.isEmpty(referer) || ! oldUrl.equals(referer))){
					req.setAttribute(CV.REDIRECT_MESSAGE, session.getAttribute(CV.REDIRECT_MESSAGE));
				}
				session.setAttribute(CV.REDIRECT_OLD_URL, null);
				session.setAttribute(CV.REDIRECT_MESSAGE, null);
			}
		}
		arg2.doFilter(arg0, arg1);
	}
`),t("pre",null,[t("code",null,`private static final String IGNORE = "^.+\\\\.(jsp|png|gif|jpg|js|css|jspx|jpeg|swf)$";
`)]),e(`
`)])],-1),c=[l,o,a,g,_,u];function p(f,E){return r(),n("div",null,c)}const S=s(i,[["render",p],["__file","2012-04-19-1.html.vue"]]);export{S as default};
