import{_ as e,p as a,q as s,a1 as n}from"./framework-5866ffd3.js";const r="/assets/image-20210514171857844-4b55997d.png",i="/assets/image-20210514171653804-945cb265.png",t={},l=n(`<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3><ol><li>常用抓包工具：charles,fiddler,mitm等， <ol><li>http：设置系统代理</li><li>https: 导入根证书</li></ol></li><li>为什么有些app上抓不到包 <ol><li>no-proxy , 原因：httpclient实现比较多，并不能保证都完整支持http协议规范 <ol><li>drony,Thor,surge 模拟vpn网络，拦截请求后转发到代理服务</li></ol></li><li>ssl pinning，例：nodejs 自带根证书，不使用操作系统中的根证书 <ol><li>根证书</li><li>https证书校验：可考虑关闭https 证书校验</li><li>使用http请求</li><li>导入生产环境的证书（不安全）</li></ol></li></ol></li></ol><h3 id="实现思路" tabindex="-1"><a class="header-anchor" href="#实现思路" aria-hidden="true">#</a> 实现思路</h3><h4 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h4><ol><li>多租户</li><li>证书安全</li></ol><h4 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h4><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
user <span class="token arrow operator">-&gt;&gt;</span> proxy<span class="token operator">:</span> new req
proxy <span class="token arrow operator">-&gt;&gt;</span>proxy<span class="token operator">:</span> 提取sni ext，判断是否包含此域名证书
proxy <span class="token arrow operator">-&gt;&gt;</span> capture-server<span class="token operator">:</span> 无证书，通过socks协议转发请求
proxy <span class="token arrow operator">-&gt;&gt;</span> user<span class="token operator">:</span> 有证书，handshake
user <span class="token arrow operator">-&gt;&gt;</span> proxy<span class="token operator">:</span> 发送完整请求
proxy <span class="token arrow operator">-&gt;&gt;</span> capture-server<span class="token operator">:</span> 解析请求，并通过http-client转发<span class="token text string">(insecure模式)</span>
capture-server <span class="token arrow operator">-&gt;&gt;</span> real-server<span class="token operator">:</span> 解析请求，抓包，并转发请求


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：</p><img src="`+r+'" alt="" width="600"><h3 id="管理后台" tabindex="-1"><a class="header-anchor" href="#管理后台" aria-hidden="true">#</a> 管理后台</h3><img src="'+i+`" alt="" width="600"><h3 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>说明:
1. 客户端IP 是要抓包的机器(如手机/pc等)的IP地址，从各机器上查看
2. 代理IP 是抓包软件的IP，如charles或fiddler提供的代理地址
操作步骤:
1. 启动charles等抓包软件，记住代理IP，格式如 10.238.23.2:8888
2. 查看要抓包的客户端的IP，如手机或PC的本机IP，格式如：10.238.23.5
3. 在管理后台添加客户端IP和代理IP
4. 在要抓包的机器的设置DNS(10.238.17.13)或修改HOST(10.238.17.13 note.youdao.com)
5. 运行要抓包的app即可
注意:
1. 抓包软件和要抓包的app不应在同一个机器上，如要测试pc上的electron客户端时应在另一台机器上运行抓包软件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参考实现" tabindex="-1"><a class="header-anchor" href="#参考实现" aria-hidden="true">#</a> 参考实现</h3><p>https://github.com/snaigle/sniproxy</p>`,15),o=[l];function d(c,p){return a(),s("div",null,o)}const u=e(t,[["render",d],["__file","2021-05-14-how-to-capture-http-request.html.vue"]]);export{u as default};
