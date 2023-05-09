import{_ as e,p as s,q as t,a1 as n}from"./framework-5866ffd3.js";const r={},a=n(`<p>ThreadLocal 是线程内部变量，以空间换时间的做法，将变量绑定到thread内部，这样能是变量成为 线程安全的，从而减小并发编程的复杂度，而sysn 这个典型的已时间换取空间，这个最大的不是性能问题而是 逻辑安全问题，并发编程最考验编程功底了，非牛人慎用。</p><p>         ThreadLocal&lt;&gt; 在jdk5中已经支持泛型了</p><p>          方法： get() ; 当为空时 会调用 initial（）方法，这个方法默认返回null，需要初始值的话应该继承该类，覆盖这个方法。另一种方法是 继承，自己判断null，并进行初始值</p><p>          set(), 写入值。</p><p>        就这几个方法。</p><p>案例： spring security 对 将securityContext 绑定到当前线程中，这样在其他地方引用时就可以通过静态方法来用了，</p><p>实现了线程安全。 SecurityUserHolder.currentuser() 就是通过这种方法得到的。</p><p>还有 hibernateUtil 中的 getCurrentSession() 也是通过这种原理得到的</p><p> </p><p>例          </p><pre name="code" class="java"> class     HibernateUtil(){
 private static final ThreadLocal session = new ThreadLocal();
<p>public static Session getCurrentSession(){
Session ss = (Session) session.get();
if(ss==null){
ss = SessionFactory.createSession();
session.set(ss);
}
return ss;
}</p>
</pre>`,11),i=[a];function o(c,p){return s(),t("div",null,i)}const u=e(r,[["render",o],["__file","2011-120.html.vue"]]);export{u as default};
