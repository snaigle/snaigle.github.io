import{_ as n,p as e,q as i,a1 as s}from"./framework-5866ffd3.js";const d={},l=s(`<h3 id="牢骚" tabindex="-1"><a class="header-anchor" href="#牢骚" aria-hidden="true">#</a> 牢骚</h3><p>2017年到了，时间又少了一些，赶快跑起来</p><h3 id="正文" tabindex="-1"><a class="header-anchor" href="#正文" aria-hidden="true">#</a> 正文</h3><p>昨天过了一下groovy的语法，想起来以前看过的Y组合子，一直感觉没看懂，又找来文章看了看，发现能理解了，在这里总结下</p><p>首先介绍两个概念</p><ol><li>闭包 ，可以理解为匿名方法</li><li>curry，将多元函数降低的过程为curry化 如</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  f(a,b){return a+b} ;
  ff = function(a){
      return function(b) {return a+b}
  };
  f2 = ff(2);
  c = f2(3) // c= 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下来我们要介绍一个情况</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  var f = function(n){
    return n== 1?1 :n*f(n-1);
  };
  assert f(5)  == 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我们计算了5的阶乘，利用了递归的思想，但我们引入了一个f，这个f应该是一次性的，被内部引用后无法释放，会污染ns的，有没有办法来解决呢</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  var f = function(n,self){
    return n==1?1: n*self(n-1);
  };
  assert f(5,self) == 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看这样如果方法中有一个self的话那么我们应该可以解决引用的问题，这里参数有两个，那么我们用curry化处理下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  var f = function(self){
    return function(n){
      return n==1?1:n * self(self)(n-1);
    };
  }
  f(f)(5) == 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法还有self(self) 这种 我们提取出来，放外面</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  var g = function(h){
    var x = function(n){
      return h(h)(n);
    };
    var f = function(self){
      return function(n){
        return n==1?1:n * self(n-1);
      };
    };
    return f(x);
  };
  g(g)(5) == 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把f提出来，再把g包装下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  var f = function(self){
    return function(n){
      return n== 1?1:n*self(n-1);
    };
  };
  var wrap = function(f){
    var x = function(n){
      return h(h)(n);
    };
    var g = function(h){
        return f(x);
    };
    return g(g);
  };
  wrap(f)(5) == 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>wrap就是Y表达式,精简如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  var Y = function(f){
    return (function(g){
      return g(g);
    })(function(h){
      return function(){
        return h(h).apply(null,arguments);
      };
    });
  };
  Y(function(self){
      return function(n){
        return n==1?1:n*self(n-1);
      };
  })(5) == 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样闭包确实匿名了</p>`,20),r=[l];function a(v,u){return e(),i("div",null,r)}const t=n(d,[["render",a],["__file","2017-01-04-Y-lambda.html.vue"]]);export{t as default};
