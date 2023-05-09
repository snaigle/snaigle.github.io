import{_ as b,p as o,q as t,t as r,R as e,a1 as a}from"./framework-5866ffd3.js";const s={},n=e("p",null,"项目中 发现有好多异常需要检查处理，老大要求有异常直接抛出，不做任何处理即可。",-1),i=e("p",null,"可这样自己感觉不是很好，包括一些 资源的回收，数据的回滚等都没办法做，自己想做一些封装，可又感觉自己考虑的不是很全面。十分无奈，于是 参考了下面的这篇文章。得出了自己的结论：",-1),c=e("p",null,"          对于异常，能处理的就处理，处理不了的就向上抛出（废话，跟没说一样）",-1),p=e("p",null,"          如果想详细的记录异常的 就多使用 封装异常 和 try  catch ，精确的处理每个异常",-1),d=e("p",null,"          如果想减少代码中的try catch 就需要 封装异常，一个模块抛出一个统一的异常，使用 unchecked exception。",-1),l=e("p",null,"          如果不想写try catch  就在 web 中配置 exception 拦截 throwable ,在那个jsp中记录一下 ，就ok了",-1),u=e("p",null," ",-1),h=e("p",null,"          个人建议，对于不重要的操作，就进行静默处理  如 catch(e){//nothing};",-1),g=e("p",null,"                         而重要的操作，就统一抛出一个 异常，中间处理的 异常也不会很多",-1),E=e("p",null,"          唉 还是感觉很虚。贴出那篇文章自己看吧  ",-1),f=e("p",null," ",-1),m=a('<p><span style="font-family:Arial, sans-serif, Helvetica, Tahoma;line-height:18px;"><h1 style="font-size:16px !important;line-height:1.5em;margin-top:25px;margin-right:0px;margin-bottom:10px;margin-left:10px;padding-top:0px;padding-right:0px;padding-bottom:5px;padding-left:5px;color:black;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:#cccccc;"><a style="color:#006699;text-decoration:none;" href="http://www.iteye.com/wiki/CPP/783-%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86(Error-Handling)%EF%BC%9A%E4%B8%BA%E4%BD%95%E3%80%81%E4%BD%95%E6%97%B6%E3%80%81%E5%A6%82%E4%BD%95">错误处理(Error-Handling)：为何、何时、如何</a></h1> <div class="page_info" style="background-color:transparent;color:gray;padding-top:2px;padding-right:2px;padding-bottom:2px;padding-left:5px;margin-top:5px;margin-bottom:10px;"> 原创作者:  <a style="color:#006699;text-decoration:none;" href="http://www.iteye.com/topic/130789" target="_blank">pongba</a>   阅读:910次   评论:0条   更新时间:2007-10-10      <a class="favorite" style="color:#006699;text-decoration:none;padding-left:20px;" href="http://app.iteye.com/links?user_favorite%5Btitle%5D=%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%28Error-Handling%29%EF%BC%9A%E4%B8%BA%E4%BD%95%E3%80%81%E4%BD%95%E6%97%B6%E3%80%81%E5%A6%82%E4%BD%95&amp;user_favorite%5Burl%5D=http%3A%2F%2Fwww.iteye.com%2Fwiki%2FCPP%2F783-%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%28Error-Handling%29%EF%BC%9A%E4%B8%BA%E4%BD%95%E3%80%81%E4%BD%95%E6%97%B6%E3%80%81%E5%A6%82%E4%BD%95" target="_blank">收藏</a></div> <div class="content" style="padding-top:5px;padding-right:0px;padding-bottom:0px;padding-left:5px;"> 错误处理(Error-Handling)：为何、何时、如何 <br> <br>By 刘未鹏(pongba) <br>C++的罗浮宫(http://blog.csdn.net/pongba) <br>TopLanguage(http://groups.google.com/group/pongba) <br> <br>引言 <br>错误处理（Error-Handling）这个重要议题从1997年（也许更早）到2004年左右一直是一个被广泛争论的话题，曾在新闻组上、博客上、论坛上引发口水无数（不亚于语言之争），Bjarne Stroustrup、James Gosling、Anders Hejlsberg、Bruce Eckel、Joel Spolsky、Herb Sutter、Andrei Alexandrescu、Brad Abrams、Raymond Chen、David Abrahams…，各路神仙纷纷出动，好不热闹:-) <br> <br>如今争论虽然已经基本结束并结果；只不过结论散落在大量文献当中，且新旧文献陈杂，如果随便翻看其中的几篇乃至几十篇的话都难免管中窥豹。就连Gosling本人写的《The Java Programming Language》中也语焉不详。所以，写这篇文章的目的便是要对这个问题提供一个整体视图，相信我，这是个有趣的话题:-) <br> <br>为什么要错误处理？ <br>这是关于错误处理的问题里面最简单的一个。答案也很简单：现实世界是不完美的，意料之外的事情时有发生。 <br> <br>一个现实项目不像在学校里面完成大作业，只要考虑该完成的功能，走happy path即可，忽略任何可能出错的因素（呃.. 你会说，怎么会出错呢？配置文件肯定在那，矩阵文件里面肯定含的是有效数字.. 因为所有的环境因素都在你的控制之下。就算出现什么不测，比如运行到一半被人拔了网线，那就让程序崩溃好了，再双击一下不就行了嘛）。 <br> <br>然而现实世界的软件就必须考虑错误处理了。如果一个错误是能够恢复的，要尽量恢复。如果是不能恢复的，要妥善的退出模块，保护用户数据，清理资源。如果有必要的话应该记录日志，或重启模块等等。 <br> <br>什么时候做错误处理？（或者：什么是“错误”？） <br>错误，很简单，就是不正确的事情。也就是不该发生的事情。有一个很好的办法可以找出哪些情况是错误。首先就当自己是在一个完美环境下编程的，一切precondition都满足：文件存在那里，文件没被破坏，网络永远完好，数据包永远完整，程序员永远不会拿脑袋去打苍蝇，等等… 这种情况下编写的程序也被称为happy path。 <br> <br>剩下的所有情况都可以看作是错误。即“不应该”发生的情况，不在算计之内的情况，或者预料之外的情况，whatever。 <br> <br>简而言之，什么错误呢？调用方违反被调用函数的precondition、或一个函数无法维持其理应维持的invariants、或一个函数无法满足它所调用的其它函数的precondition、或一个函数无法保证其退出时的postcondition；以上所有情况都属于错误。（详见《C++ Coding Standards: 101 Rules, Guidelines, and Best Practices》第70章，或《Object Oriented Software Construction, 2nd edition》第11、12章） <br> <br>例如文件找不到（通常意味着一个错误）、配置文件语法错误、将一个赋值赋给一个总应该是正值的变量、文件存在但由于访问限制而不能打开，或打开不能写、网络传输错误、网络中断、数据库连接错误等等。 <br> <br>哪些情况不属于错误？ <br>1.    控制程序流的返回值不是错误：如果一个情况经常发生，往往意味着它是用来控制程序流程的，应该用status-code返回（注意，不同于error-code），比如经典的while(cin &gt;&gt; i)。读入整型失败是很常见的情况，而且，这里的“读入整型失败”其实真正的含义是“流的下一个字段不是整型”，后者很明确地不代表一个错误；再比如在一个字符串中寻找一个子串，如果找不到该子串，也不算错误。这类控制程序流的返回值都有一个共同的特点，即我们都一定会利用它们的返回值来编写if-else，循环等控制结构，如： <br> <br>  if(foo(…)) { … } <br>  else { … } <br> <br>或 <br> <br>  while(foo(…)) { … } <br> <br>这里再摘两个相应的具体例子，一个来自Gosling的《The Java Programming Language》，是关于stream的。 <br> <br>使用status-code： <br> <br>  while ((token = stream.next()) != Stream.END) <br>      process(token); <br>  stream.close(); <br> <br>使用exception： <br> <br>  try { <br>    for(;;) { <br>      process(stream.next()); <br>    } <br>  } catch (StreamEndException e) { <br>    stream.close(); <br>  } <br> <br>高下立判。 <br> <br>另一个例子来自TC++PL（Well, not exactly）： <br> <br>  size_t index; <br>  try { <br>    index = find(str, sub_str); <br>    … // case 1 <br>  } catch (ElementNotFoundException&amp; e) { <br>    … // case 2 <br>  } <br> <br>使用status-code： <br> <br>  int index = find(str, sub_str) <br>  if(index != -1) { <br>    … // case 1 <br>  } else { <br>    … // case 2 <br>  } <br> <br>之所以控制程序的流程的返回值不是错误，就是因为它们是程序合法流程的一部分。一个返回值让程序分成两支，而两种情况都是合理的，计划之内的，那么这个返回值就不能算是“错误”。 <br> <br>1’. 另一方面，还有一种情况与此有微妙的区别。即它确实是一个错误，但它是可恢复的。它并不将程序引导向另一个分支，而是恢复之后继续原来的分支。 <br> <br>举个例子，取钱的卡内余额不足，这时一个恢复过程可能是从另一张卡上转账；配置文件不存在，这时一个恢复过程可能是创建一个缺省的配置文件；配置文件中的某个配置项缺失，这时可以使用缺省的配置值。 <br> <br>这类情况属于意料之内的，或者设计之内的错误。特点是在你的设计中就已经有一个错误处理程序在等着它了。当然，对付这种错误也有三种办法： <br> <br>一是就地恢复，比如一个readIni如果读不到配置文件的话就直接创建一个缺省的，不返回任何错误代码。这种方案在当上层模块需要知道配置文件缺失的情况下不妥当，在上层模块需要在配置文件缺失的情况下回滚掉一些操作的情况下也不妥当。 <br> <br>另一个就是抛出异常，这种做法的灵活性最大，上层模块不管是想保持中立、回滚操作、还是处理异常，都没有问题。而且有时候，在编写一个函数的时候并不知道其中的错误是不是可以解决，这个时候抛出一个异常是恰当的，如果后来发觉可以解决这个错误了，不管是在上层模块解决这个异常，还是在错误发生点取消这个异常，都没有问题（因为当还没有想好解决之道的时候，所有上层模块都应该是异常中立的）。 <br> <br>最后一种方法当然就是error-code了，这个跟抛出异常其实是换汤不换药，但error-code有若干问题；这个后面再说。 <br> <br>2.    编程bug不是错误。属于同一个人维护的代码，或者同一个小组维护的代码，如果里面出现bug，使得一个函数的precondition得不到满足，那么不应该视为错误。而应该用assert来对付。因为编程bug发生时，你不会希望栈回滚，而是希望程序在assert失败点上直接中断，调用调试程序，查看中断点的程序状态，从而解决代码中的bug。 <br> <br>关于这一点，需要尤其注意的是，它的前提是：必须要是同一个人或小组维护的代码。同一个小组内可以保证查看到源代码，进行debug。如果调用方和被调用方不属于同一负责人，则不能满足precondition的话就应该抛出异常。总之记住一个精神：assert是用来辅助debug的（assert的另一个作用是文档，描述程序在特定点上的状态，即便assert被关闭，这个描述功能也依然很重要）。 <br> <br>注意，有时候，为了效率原因，也会在第三方库里面使用assert而不用异常来报告违反precondition。比如strcpy，std::vector的operator[]。 <br> <br>3.    频繁出现的不是错误。频繁出现的情况有两种可能，一是你的程序问题大了（不然怎么总是出错呢？）。二是出现的根本不是错误，而是属于程序的正常流程。后者应该改用status-code。 <br> <br>怎样进行错误处理？（或者：用什么手段进行错误处理？） <br>答案很简单，异常。 <br> <br>如果你仍然是error-code的思维习惯的话，可以假想将所有error-code的地方改为抛出exception。需要注意的是，error-code不是status-code。并非所有返回值都是用来报告真正的错误的，有些只不过是控制程序流的。就算返回的是bool值（比如查找子串，返回是否查找到），也并不代表false的情况就是一个错误。具体参加上一节：“哪些情况不属于错误”。 <br> <br>一个最为广泛的误解就是：异常引入了不菲的开销，而error-code没有开销，所以应该使用error-code。这个论点的漏洞在于，它认为只要是开销就是有问题的，而不关心到底是在什么情况下的开销。实际上，现代的编译器早已能够做到异常在happy path上的零开销。当然，空间开销还是有的，因为零开销方案用的是地址表方案；但相较于时间开销，这里的空间开销几乎从来都不是个问题。另一方面，一旦发生了异常，程序肯定就出了问题，这个时候的时间开销往往就不那么重要了。此外有人会说，那如果频繁抛出异常呢？如果频繁抛出异常，往往就意味着那个异常对应的并非一个错误情况。 <br> <br>当然，凡事都有例外。《C++ Coding Standards: 101 Rules, Guidelines, and Best Practices》上面陈述了两个例外情况：一，用异常没有带来明显的好处的时候：比如所有的错误都会在立即调用端解决掉或者在非常接近立即调用端的地方解决掉。二，在实际作了测定之后发现异常的抛出和捕获导致了显著的时间开销：这通常只有两种情况，要么是在内层循环里面，要么是因为被抛出的异常根本不对应于一个错误。 <br> <br>《C++ Coding Standards: 101 Rules, Guidelines, and Best Practices》里面一再强调：不要在项目里面关闭异常支持。因为就算你的项目里面不抛出异常，标准库也依赖于异常。一旦关闭异常，不仅你的项目代码都要依赖于error-code（error-code的缺点见下一节），整个标准库便也都要依赖于非标准的途径来汇报错误，或者干脆就不汇报错误。如果你的项目是如此的硬实时，乃至于你在非常小心且深入的分析之后发觉某些操作真的负担不起异常些微的空间开销和unhappy path上的时间开销的话，也要尽量别在全局关闭异常支持，而是尽量将这些敏感的操作集中到一个模块中，按模块关闭异常。 <br> <br>插曲：异常（exception）vs错误代码（error-code） <br>异常相较于错误代码的优势太多了，以下是一个（不完全）列表。 <br> <br>异常与错误代码的本质区别之一——异常会自动往上层栈传播：一旦异常被抛出，执行流就立即中止，取而代之的是自动的stack-unwinding操作，直到找到一个适当的catch子句。 <br> <br>相较之下，使用error-code的话，要将下层调用发生的错误传播到上层去，就必须手动检查每个调用边界，任何错误，都必须手动转发（返回）给上层，稍有遗漏，就会带着错误的状态继续往下执行，从而在下游不知道离了多远的地方最终引爆程序。这来了以下几个问题： <br> <br>1.    麻烦。每一个可能返回错误代码的调用边界都需要检查，不管你实际上对不对返回的错误作响应，因为即便你自己不解决返回的错误，也要把它传播到上层去好让上层解决。 <br> <br>2.    不优雅的代码（错误处理代码跟One True Path（也叫happy path）搅和在一起）。关于这一条普遍的论述都不够明确，比如有人可能会反驳说，那错误反正是要检查的，用异常难道就不需要捕获异常了吗？当然是需要的，但关键是，有时候我们不一定会在异常发生的立即点上捕获并处理异常。这时候，异常的优势就显现出来了，比如： <br> <br>  void foo() <br>  { <br>    try { <br>      op1; <br>      op2; <br>      … <br>      opN; <br>    } catch (…) { <br>      … // log <br>      … // clean up <br>      throw; <br>    } <br>  } <br> <br>如果用error-code的话： <br> <br>  int foo() <br>  { <br>    if(!op1()) {  <br>      … // log? clean up? <br>      return FAILED; <br>    } <br>    if(!op2()) { <br>      … // log? clean up? <br>      return FAILED; <br>    } <br>    … <br>    return SUCCEEDED; <br>  } <br> <br>好一点的是这样： <br> <br>  int foo() <br>  { <br>    if(!op1()) goto FAILED; <br>    if(!op2()) goto FAILED; <br>    … <br>    if(!opN()) goto FAILED; <br>    return SUCCEEDED; <br>  FAILED: <br>    … // log, clean up <br>    return FAILED; <br>  } <br> <br>就算是最后一种做法，One True Path仍然隐藏在一个个的if里面（我还记得最初阅读用Win32 SDK写出来的代码时的困惑：真正做事情的代码老是缩在if(!...)里面，看起来特难受）。二来，手动检查返回值的成功失败毕竟是很error-prone的。忘记检查的话程序最终会挂掉；如果有多个错误值则上面的if-else-if…就会复杂化，从而更容易弄错。 <br> <br>值得注意的是，这里我并没有用一个常被引用的例子，即如果你是用C写代码（C不支持局部变量自动析构（RAII）），那么程序可能会像这样： <br> <br>  int f() <br>  { <br>    acquire resource1; <br>    if(resource1 is acquired) { <br>      acquire resource2; <br>      if(resource2 is acquired) { <br>        acquire resource3; <br>        if(resource3 is acquired) { <br>          ... // do something <br>          return SUCCEEDED; <br>          release resource3; <br>        } <br>        release resource2; <br>      } <br>      release resource1; <br>    } <br>    return FAILED; <br>  } <br> <br>或者像这样： <br> <br>  int f() <br>  { <br>    acquire resource1; <br>    if(resources1 is not acquired) return FAILED; <br>    acquire resource2; <br>    if(resource2 is not acquired) { <br>      release resource1; <br>      return FAILED; <br>    } <br>    acquire resource3; <br>    if(resource3 is not acquired) { <br>      release resource2; <br>      release resource1; <br>      return FAILED; <br>    } <br>    … // do the job <br>    return SUCCEEDED; <br>  } <br> <br>（一个更复杂的具体例子可以参考[16]） <br> <br>以上两种方案的缺点是显而易见的，而且，一旦需要获取的资源多了以后代码也会随着越来越难以卒读。但这两种方案之所以有这个问题并不是由于error-code的本质性质造成的，而是因为不支持RAII。如果支持RAII的话，以上代码中的“release resourceX”便可以省掉（虽然代码也并不会因此就优雅多少）。此外另一个事实是，使用error-code作为错误汇报机制的代码往往并不使用RAII。 <br> <br>当整个函数需要保持完全的异常中立的时候，异常的优势就更显现出来了：使用error-code，你还是需要一次次的小心check每个返回的错误值，从而阻止执行流带着错误往下继续执行。用异常的话，可以直接书写One True Path，连try-catch都不要。 <br> <br>当然，错误安全（error-safety）还是需要保证的，只不过错误安全不管是对于error-code还是异常来说都是一个困难。解决方案与到底使用error-code还是异常是无关的，这个后面再说。 <br> <br>3.    脆弱（易错）。只要忘了检查任意一个错误代码，执行流就必然会带着错误状态往下继续执行，后者几乎肯定不是你想要的。带着错误状态往下执行好一点的会立即崩溃，差一点的则在相差十万八千里的地方引发一个莫名其妙的错误。 <br> <br>4.    难以（编写时）确保和（review时）检查代码的正确性。需要检查所有可能的错误代码有没有都被妥善check了，其中也许大部分都是不能直接对付而需要传播给上级的错误。 <br> <br>5.    耦合。即便你的函数是一个异常中立的函数，不管底层传上来哪些错误一律抛给上层，你仍然需要在每个调用的边界检查，并妥善往上手动传播每一个错误代码。而一旦底层接口增加、减少或改动错误代码的话，你的函数就需要立即作出相应改动，检查并传播底层接口改动后相应的错误代码——这是很不幸的，因为你的函数只是想保持异常中立，不管底层出什么错一律抛给上层调用方，这种情况下理想情况应该是不管底层的错误语意如何修改，当前层都应该不需要改动才对。 <br> <br>6.    没有异常，根本无法编写泛型组件。泛型组件根本不知道底层会出哪些错，泛型组件的特点之一便是错误中立。但用error-code的话，怎么做到错误中立？泛型组件该如何检查，检查哪些底层错误？唯一的办法就是让所有的底层错误都用统一的SUCCEEDED和FAILED代码来表达，并且将其它错误信息用GetLastError来获取。姑且不说这个方案的丑陋，如何、由谁来统一制定SUCCEEDED和FAILED、GetLastError的标准？就算有这个统一标准，你也可以设想一下某个标准库泛型算法（如for_each）编写起来该是如何丑陋。 <br> <br>7.    错误代码不可以被忘掉（忽视）。忘掉的后果见第3条。此外，有时候我们可能会故意不管某些错误，并用一个万能catch来捕获所有未被捕获的错误，log，向支持网站发送错误报告，并重启程序。用异常这就很容易做到——只要写一个unhandled exception handler（不同语言对此的支持机制不一样）即可。 <br> <br>异常与错误代码的本质区别之二——异常的传播使用的是一个单独的信道，而错误代码则占用了函数的返回值；函数的返回值本来的语意是用来返回“有用的”结果的，这个结果是属于程序的One True Path的，而不是用来返回错误的。 <br> <br>利用返回值来传播错误导致的问题如下： <br> <br>8.    所有函数都必须将返回值预留给错误。如果你的函数最自然的语意是返回一个double，而每个double都是有效的。不行，你得把这个返回值通道预留着给错误处理用。你可能会说，我的函数很简单，不会出错。但如果以后你修改了之后，函数复杂了呢？到那个时候再把返回的double改为int并加上一个double&amp;作为out参数的话，改动可就大了。 <br> <br>9.    返回值所能承载的错误信息是有限的。NULL？-1？什么意思？具体的错误信息只能用GetLastError来提供… 哦，对了，你看见有多少人用过GetLastError的？ <br> <br>10.    不优雅的代码。呃…这个问题前面不是说过了么？不，这里说的是另一个不优雅之处——占用了用来返回结果的返回值通道。本来很自然的“计算——返回结果”，变成了“计算——修改out参数——返回错误”。当然，你可以说这个问题不是很严重。的确，将double res = readInput();改为double res; readInput(&amp;res);也没什么大不了的。如果是连调用呢？比如，process(readInput());呃… 或者readInput() + …？或者一般地，op1(op2(), op3(), …);？ <br> <br>11.    错误汇报方案不一致性。看看Win32下面的错误汇报机制吧：HRESULT、BOOL、GetLastError…本质上就是因为利用返回值通道是一个补丁方案，错误处理是程序的一个方面（aspect），理应有其单独的汇报通道。利用异常的话，错误汇报方案就立即统一了，因为这是一个first-class的语言级支持机制。 <br> <br>12.    有些函数根本无法返回值，如构造函数。有些函数返回值是语言限制好了的，如重载的操作符和隐式转换函数。 <br> <br>异常与错误代码的本质区别之三——异常本身能够携带任意丰富的信息。 <br> <br>13.    有什么错误报告机制能比错误报告本身就包含尽量丰富的信息更好的呢？使用异常的话，你可以往异常类里面添加数据成员，添加成员函数，携带任意的信息（比如Java的异常类就缺省携带了非常有用的调用栈信息）。而错误代码就只有一个单薄的数字或字符串，要携带其它信息只能另外存在其它地方，并期望你能通过GetLastError去查看。 <br> <br>异常与错误代码的本质区别之四——异常是OO的。 <br> <br>14.    你可以设计自己的异常继承体系。呃…那这又有什么用呢？当然有用，一个最大的好处就是你可以在任意抽象层次上catch一组异常（exception grouping），比如你可以用catch(IOException)来捕获所有的IO异常，用catch(SQLException)来捕获所有的SQL异常。用catch(FileException)来catch所有的文件异常。你也可以catch更明确一点的异常，如StreamEndException。总之，catch的粒度是粗是细，根据需要，随你调节。当然了，你可以设计自己的新异常。能够catch一组相关异常的好处就是你可以很方便的对他们做统一的处理。 <br> <br>异常与错误代码的本质区别之五——异常是强类型的。 <br> <br>15.    异常是强类型的。在catch异常的时候，一个特定类型的catch只能catch类型匹配的异常。而用error-code的话，就跟enum一样，类型不安全。-1 == foo()？FAILED == foo()？MB_OK == foo()？大家反正都是整数。 <br> <br>异常与错误代码的本质区别之六——异常是first-class的语言机制。 <br> <br>16.    代码分析工具可以识别出异常并进行各种监测或分析。比如PerfMon就会对程序中的异常做统计。这个好处放在未来时态下或许怎么都不应该小觑。 <br> <br>如何进行错误处理？ <br>这个问题同样极其重要。它分为三个子问题： <br> <br>1.    何时抛出异常。 <br>2.    何时捕获异常。 <br>3.    如何避开异常，保持异常中立（或“异常透明”）。 <br> <br>其中最后一个问题最为重要，属于错误处理的本质性困难之一。 <br> <br>先说前两个问题。 <br> <br>从本质上，错误分为两种，一种是可恢复的，另一种是不可恢复的。 <br> <br>对于可恢复的错误。有两种方案： <br> <br>1.    在错误的发生点上立即就予以恢复。比如配置文件不存在便创建一个缺省的，这种方案的好处是当前函数不返回任何错误，因为错误被当即搞定了，就像没发生一样。这种方案的前提是当前函数必须要有对付该错误的足够上下文，如果一个底层的函数对全局语意没有足够的视图，这时就可以抛出异常，由上层函数负责恢复。 <br> <br>2.    在某个上层栈上恢复。这种情况下，在负责恢复的那层栈以下的调用一般被看成一个整体事务，其中发生的任何错误都导致整个事务回滚，回滚到错误恢复栈层面时，由相应的catch子句进行恢复，并重新执行整个事务，或者将程序引向另一条备选路径（alternative）。 <br> <br>对于不可恢复的错误。也有两种方案： <br> <br>1.    Sudden Death。在错误的发生点上退出模块（可能伴随着重启模块）。退出模块前往往需要先释放资源、保存关键数据、记录日志，等等。该方案的前提是在错误的发生点的上下文中必须要能够释放所有资源，要能够保存关键数据。要满足这个前提，可以用一个全局的沙盒来保存整个模块到当前为止申请的所有资源，从而在任何出错点上都可以将这个沙盒整个释放掉。也可以用智能垃圾收集，这样在出错点上只要记录日志和保存数据，把扫尾工作留给智能垃圾收集器完成。这个方案的弱点是如果释放资源是要按某种次序的就比较麻烦。 <br> <br>2.    回滚。如果你并没有用智能垃圾收集（要智能到能够回收文件句柄，网络端口等，不光是内存），或者你并没有在某个全局可访问的位置保存到当前为止模块申请的所有资源，或者你的资源互相之间有依赖关系，必须按照分配的逆序释放，等等，那么就必须按照调用栈的反方向回滚事务。回滚到一个所谓的Fault Barrier，用一个catch-all在那里等着，所谓Fault-Barrier的作用就是为了抓这些没法妥善恢复的错误的，它做的事情通常就是logging、发送错误报告、可能也会重启模块。Fault Barrier一般在一个内聚的单一职责的功能模块的边界出现。 <br> <br>异常转换 <br>在如何抛出和捕获异常的问题上，还有一个子问题就是异常的转换（translation）。以下情况下应该转换一个由底层传上来的异常： <br> <br>1.    抛出一个对应于当前抽象层的异常。比如Document::open当接收到底层的文件异常（或数据库异常，网络异常，取决于这个Document来自何方）时，将其转换为“文档无效或被破坏”异常，增加高层语意，并避免暴露底层实现细节（对异常的一个批评就是会暴露内部实现，而实际上，通过适当转换异常，可以使得异常总位于当前的抽象层次上，成为接口的一部分）。 <br> <br>2.    在模块边界上。如果一个模块，在内部使用异常，但在边界上必须提供C API的话，就必须在边界上捕获异常并将其转换为error-code。 <br> <br>没有时间机器——错误处理的本质困难 <br>刚才提到“回滚”。那么，在异常发生的时候，如何回滚既然已经发生的操作？这就是要说的第三个问题：如何在异常从发生点一路传播到捕获点的路径上保持异常中立，即回滚操作，释放资源。简而言之就是要做到错误安全（error-safe）。错误安全攸关强异常安全保证和事务语意。在异常编程里面，错误安全是最重要的一环。 <br> <br>理想情况下，我们要的是一个时间机器：打碎的杯子要能还原，释放的内存要能重新得到，销毁的对象就像没销毁前一模一样，发射的导弹就像从来也没有离开发射筒一样，数据库就像从来没被写入一样… <br> <br>没有时间机器。 <br> <br>那么，如何回滚木已成舟的操作？ <br> <br>目前有两个主要方案： <br> <br>1.    Discard（丢弃）：一个例子就能够说明这种做法，源自STL的“copy-swap手法”。比如一个vector，你要往里面插入一个元素，如果插入元素失败的话你想要vector维持原状，就好像从来没有动过一样。如何做到这一点呢？你可以先把这个vector拷贝一份，往拷贝里面插入元素，然后将两个vector调换（swap）一下即可，swap是不会失败的，因为它只是把两个指针互换了一下。而如果往那个拷贝里面插入元素失败的话，拷贝就会被Discard（丢弃掉），不会带来任何实际的副作用。当然，这种做法是有代价的，谁叫你要强异常安全保证呢？再比如一个拷贝赋值操作符可以这样写：MyClass(other).swap(*this); 当然，前提还是swap()必须具有标准的no-throw语意。 <br> <br>这种做法一般化的描述就是：“在一个‘副本’里把所有的事情都做好了，然后用一个不会出错的函数提交（commit）”。这样一来，中途出了任何错误只要丢弃那个副本即可（往往只要任其析构）。要做到这一点，一个原则就是：“在破坏一份信息之前要确保其新的版本一定能够无错的替换掉原信息”，例如在拷贝构造函数中，不能先delete再new，因为new可能失败，一旦new失败了，delete掉的信息可就找不回来了。 <br> <br>2.    Undo（撤销）：有时候，你一方面不想付出Discard方案的（通常不菲的）空间开销，另一方面你又想拥有强异常安全保证。这也是有办法的，比如： <br> <br>  void World::addPerson(Person const&amp; person) <br>  { <br>    m_persons.push_back(person); <br>    scope(failure) { m_persons.pop_back(); } <br>     <br>    … // other operations <br>  } <br> <br>scope(failure)是D语言的特性，其语意显而易见：如果当前的scope以失败（异常）退出的话，{}内的语句就被执行。这么一来，在上面的例子中，如果后续的操作失败，那么这个person就会被从m_persons中pop_back出来，一次事务撤销，使得这个函数对m_persons的影响归零。 <br> <br>该方案的前提有两个：一，回滚操作（比如这里的m_persons.pop_back()）必须存在且不会失败（no-throw）。比如missile.lunch()就不能回滚，操作系统API一般也无法回滚；I/O操作也无法回滚；另一方面，内存操作一般而言都是可以回滚的，只要回复原来内存的值即可。二，被回滚的操作（比如这里的m_persons.push_back(person)）也一定要是强异常保证的。比如在中间而不是尾部插入一个person（m_persons.insert(iter, person)）就不是强保证的，这种时候就要诉诸前一个方案（Discard）。 <br> <br>D的scope(failure)（还有scope(exit)、scope(success)）是非常强大的设施。利用它，一个具有事务语意的函数的一般模式如下： <br> <br>  void Transaction() <br>  { <br>    op1; // strong operation <br>    scope(failure) { undo op1; } <br>    op2; // strong operation <br>    scope(failure) { undo op2; } <br>    … <br>    opN; // strong operation <br>    scope(failure) { undo opN; } <br>  } <br> <br>在C++里面也可以模拟D的scope(failure)，Andrei Alexandrescu曾实现了一个ScopeGuard类[11]，而旨在完全模拟D的scope特性的boost.scope-exit也在review中。只不过C++03里面的模拟方案有一些学习曲线和使用注意点，C++09之后会有更方便的方案。在其它不支持scope(failure)的语言中，也可以模拟这种做法，不过做法很笨拙。 <br> <br>3.    呃… 哪来的第三个方案？前面不是说了只有两个方案吗？是的。因为这第三个方案是“理想”方案，目前还没有进入主流语言，不过在haskell里面已经初见端倪了。强异常安全保证的核心思想其实就是事务语意，而事务语意的核心思想就是“不成功便成仁”（这个思想有许多有趣的说法，比如：“武士道原则”、“要么直着回来要么横着回来”、“干不了就去死”），根据这个想法，其实最简单的方案是把一组属于同一事务的操作简单地圈起来（标记出来），把回滚操作留给语言实现去完成： <br> <br>  stm { <br>    op1; <br>    op2; <br>    … <br>    opN; <br>  } <br> <br>只要op1至opN中任意一个失败，整个stm块对内存的写操作就全被自动抛弃（这要求编译器和运行时的支持，一般是用一个缓冲区或写日志来实现），然后异常被自动抛出这个stm块之外。这个方案的优点是它太优美了，我们几乎只要关注One True Path即可，唯一要做的事情就是用stm{…}圈出代码中需要强保证的代码段。这个方案的缺点有两个：一，它跟第一个方案一样，有空间开销，不过空间开销通常要小一点，因为只要缓存特定的写操作。二，当涉及到操作系统API，I/O等“外部”操作的时候，底层实现就未必能够回滚这些操作了。另一个理论上的可能性是，当回滚操作和被回滚操作并非严格物理对应（所谓物理对应就是说，回滚操作将内存回滚到目标操作发生之前的状态）的时候，底层实现也不知道如何回滚。 <br> <br>（STM（软件事务内存）目前在haskell里面实现了，Intel也释出了C/C++的STM预览版编译器。只不过STM原本的意图是实现锁无关算法的。后者就是另一个话题了。） <br> <br>RAII <br>实际上刚才还有一个问题没有说，那就是如何确保资源一定会被释放（即便发生异常），这在D里面对应的是scope(exit)，在Java里面对应的是finally，在C#    里面对应的是scoped using。 <br> <br>简而言之就是，不管当前作用域以何种方式退出，某某操作（通常是资源释放）都一定要被执行。 <br> <br>这个问题的答案其实C++程序员们应该耳熟能详了：RAII。RAII是C++最为强大的特性之一。在C++里面，局部变量的析构函数刚好满足这个语意：无论当前作用域以何种方式退出，所有局部变量的析构函数都必然会被倒着调用一遍。所以只要将有待释放的资源包装在析构函数里面，就能够保证它们即便在异常发生的情况下也会被释放掉了。为此C++提供了一系列的智能指针：auto_ptr、scoped_ptr、scoped_array… 此外所有的STL容器也都是RAII的。在C++里面模拟D的scope(exit)也是利用的RAII。 <br> <br>RAII相较于java的finally的好处和C#的scoped using的好处是非常明显的。只要一段代码就高下立判： <br> <br>  // in Java <br>  String ReadFirstLineFromFile( String path ) <br>  { <br>    StreamReader r = null; <br>    String s = null; <br>    try { <br>      r = new StreamReader(path); <br>      s = r.ReadLine(); <br>    } finally { <br>      if ( r != null ) r.Dispose(); <br>    } <br>    return s; <br>  } <br> <br>  // in C# <br>  String ReadFirstLineFromFile( String path ) { <br>    using ( StreamReader r = new StreamReader(path) ) { <br>      return r.ReadLine(); <br>    } <br>  } <br> <br>显然，Java版本的（try-finally）最臃肿。C#版本（scoped using）稍微好一些，但using毕竟也不属于程序员关心的代码逻辑，仍然属于代码噪音；况且如果不连续地申请N个资源的话，使用using就会造成层层嵌套结构。 <br> <br>如果使用RAII手法来封装StreamReader类的话（std::fstream就是RAII类的一个范例），代码就简化为： <br> <br>  // in C++, using RAII <br>  String ReadFirstLineFromFile(String path) <br>  { <br>    StreamReader r(path); <br>    return r.ReadLine(); <br>  } <br> <br>好处是显而易见的。完全不用担心资源的释放问题，代码也变得“as simple as possible”。此外，值得注意的是，以上代码只是演示了最简单的情况，其中需要释放的资源只有一个。其实这个例子并不能最明显地展现出RAII强大的地方，当需要释放的资源有多个的时候，RAII的真正强大之处才被展现出来，一般地说，如果一个函数依次申请N个资源： <br> <br>  void f() <br>  { <br>    acquire resource1; <br>    …  <br>    acquire resource2; <br>    …  <br>    acquire resourceN; <br>    …  <br>  } <br> <br>那么，使用RAII的话，代码就像上面这样简单。无论何时退出当前作用域，所有已经构造初始化了的资源都会被析构函数自动释放掉。然而如果使用try-finally的话，f()就变成了： <br> <br>  void f() <br>  { <br>    try { <br>      acquire resource1; <br>      … // #1 <br>      acquire resource2; <br>      … // #2 <br>      acquire resourceN; <br>      … // #N <br>    } finally { <br>      if(resource1 is acquired) release resource1; <br>      if(resource2 is acquired) release resource2; <br>      … <br>      if(resourceN is acquired) release resourceN; <br>    } <br>  } <br> <br>为什么会这么麻烦呢，本质上就是因为当执行流因异常跳到finally块中时，你并不知道执行流是从#1处、#2处…还是#N处跳过来的，所以你不知道应该释放哪些资源，只能挨个检查各个资源是否已经被申请了，如果已申请了便将其释放；要能够检查每个资源是否已经被申请了，往往就要求你要在函数一开始将各个资源的句柄全都初始化为null，这样才可以通过if(hResN==null)来检查第N个资源是否已经申请。 <br> <br>最后，RAII其实是scope(exit)的特殊形式。 <br> <br>总结 <br>本文讨论了错误处理的原因、时机和方法。错误处理是编程中极其重要的一环；也是最被忽视的一环，Gosling把这个归因于大多数程序员在学校的时候都是做着大作业当编程练习的，而大作业鲜有老师要求要妥善对待错误的，大家都只要“work on the one true path”即可；然而现实世界的软件可必须面对各种各样的意外情况，往往一个程序的错误处理机制在第一次面对错误的时候便崩溃了… 另一方面，错误处理又是一个极其困难的问题，其本质困难来源于两个方面：一，哪些情况算是错误。二，如何做到错误安全（error-safe）。相较之下在什么地点解决错误倒是容易一些了。本文对错误处理的问题作了详细的分析，总结了多年来这个领域争论的结果，提供了一个实践导引。 </div></span></p>',1);function _(A,I){return o(),t("div",null,[n,r(),i,r(),c,r(),p,r(),d,r(),l,r(),u,r(),h,r(),g,r(),E,r(),f,r(),m])}const D=b(s,[["render",_],["__file","2011-83.html.vue"]]);export{D as default};
