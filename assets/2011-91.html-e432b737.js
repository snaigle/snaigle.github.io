import{_ as n,p as r,q as s,t as e,R as t}from"./framework-5866ffd3.js";const o={},u=t("p",null," 先附上  ",-1),i=t("p",null,[t("pre",{class:"prettyprint lang-js linenums"},`	
	public void doFilter(ServletRequest req, ServletResponse res,
			FilterChain chain) throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) res;
		if (requiresLogout(request, response)) {
			Authentication auth = SecurityContextHolder.getContext()
					.getAuthentication();
			if (logger.isDebugEnabled()) {
				logger.debug("Logging out user '" + auth
						+ "' and transferring to logout destination");
			}
			for (LogoutHandler handler : handlers) {
				handler.logout(request, response, auth);
			}
			logoutSuccessHandler.onLogoutSuccess(request, response, auth);
			return;
		}
		chain.doFilter(request, response);
	}
	protected boolean requiresLogout(HttpServletRequest request,
			HttpServletResponse response) {
		String uri = request.getRequestURI();
		int pathParamIndex = uri.indexOf(';');
		if (pathParamIndex > 0) { // strip everything from the first semi-colon
			uri = uri.substring(0, pathParamIndex);
		}
		int queryParamIndex = uri.indexOf('?');
		if (queryParamIndex > 0) { // strip everything from the first question
									// mark
			uri = uri.substring(0, queryParamIndex);
		}
		if ("".equals(request.getContextPath())) {
			return uri.endsWith(filterProcessesUrl);
		}
		return uri.endsWith(request.getContextPath() + filterProcessesUrl);
	}
`)],-1),l=t("br",null,null,-1),a=t("span",{style:{color:"red"}},[e('if ("".equals(request.getContextPath())) { '),t("br"),e(" return uri.endsWith(filterProcessesUrl); "),t("br"),e(" }")],-1),c=t("br",null,null,-1),d=t("br",null,null,-1);function p(h,g){return r(),s("div",null,[u,i,e(" requiresLogout方法是判断url是否为 logout_url 的，居然用了 endsWith，我进行了测试，只要地址后缀为 j_spring_security_logout 的 都能退出系统。 "),l,e(" 而且 "),a,e("这段代码貌似没用， 直接用下面那个就能比较出来。 "),c,e(" 大家有什么看法？ "),d])}const q=n(o,[["render",p],["__file","2011-91.html.vue"]]);export{q as default};
