import{_ as p,p as t,q as s,a1 as e}from"./framework-5866ffd3.js";const o={},a=e("<p>iostat</p><p>iostat 命令用来显示存储子系统的详细信息，通常用它来监控磁盘 I/O 的情况。要特别注意 iostat 统计结果中的 %iowait 值，太大了表明你的系统存储子系统性能低下。</p><p>meminfo 和 free</p><p>Meminfo 可让你获取内存的详细信息，你可以使用 cat 和 grep 命令来显示 meminfo 信息：</p><p>1 cat /proc/meminfo 另外你可以使用 free 命令来显示动态的内存使用信息，free 只是给你大概的内存信息，而 meminfo 提供的信息更加详细。例如在 oschina 上的 free 命令执行结果：</p><p>mpstat</p><p>mpstat mpstat是MultiProcessor Statistics的缩写，是实时系统监控工具。其报告与CPU的一些统计信息，这些信息存放在/proc/stat文件中。在多CPUs系统里，其不但能查看所有CPU的平均状况信息，而且能够查看特定CPU的信息。</p><p>再来看看 oschina 上的 mpstat 命令执行结果：</p><p>关于 mpstat 执行结果中的参数意思请参考此贴。</p><p>netstat</p><p>Netstat 和 ps 命令类似，是 Linux 管理员基本上每天都会用的工具，它显示了大量跟网络相关的信息，例如 socket 的使用、路由、接口、协议、网络等等，下面是一些常用的参数：</p><p>1 -a Show all socket information 2 -r Show routing information 3 -i Show network interface statistics 4 -s Show network protocol statistics nmon</p><p>Nmon, 是 Nigel&#39;s Monitor 的缩写，是一个使用很普遍的开源工具，用以监控 Linux 系统的性能。Nmon 监控多个子系统的性能数据，例如处理器的使用率、内存使用率、队列、磁盘I/O统计、网络I/O统计、内存页处理和进程信息。Nmon 也提供了一个图形化的工具：</p><p>要运行 nmon，你可以在命令行中启动它，然后选择要监控的子系统，这些子系统都对应有一个快捷键，例如输入 c 可查看 CPU 信息，m用于查看内存，d用来查看磁盘信息等，你也可以使用 -f 命令将 nmon 的执行结果保存到一个 CSV 文件中，便于日后分析。</p><p>在每日的监控工作中，我发现 nmon 是我最常用的工具。</p><p>pmap</p><p>pmap 命令用来报告每个进程占用内存的详细情况，可用来看是否有进程超支了，该命令需要进程 id 作为参数。</p><p>ps 和 pstree</p><p>ps 和 pstree 命令是 Linux 系统管理员最好的朋友，都可以用来列表正在运行的所有进程。ps 告诉你每个进程占用的内存和 CPU 处理时间，而 pstree 显示的信息没那么详细，但它以树形结构显示进程之间的依赖关系，包括子进程信息。一旦发现某个进程有问题，你可以使用 kill 来杀掉它。</p><p>sar</p><p>sar 程序是系统监控工具里的瑞士军刀。该程序包含三个工具：sar 用来显示数据，sa1 和 sa2 用来收集数据并保存。sar 可用来显示 CPU 使用率、内存页数据、网络 I/O 和传输统计、进程创建活动和磁盘设备的活动详情。sar 和 nmon 最大的不同就是 sar 跟适合用作长期的监控，而 nmon 可以让你快速的了解系统当前状态。</p><p>strace</p><p>strace 经常被认为是程序员调试的工具，但不止如此。它可以记录进程进行系统调用的详情，因此它也是一个非常好的诊断工具，例如你可以使用它来找出某个程序正在打开某个配置文件。</p><p>Strace 也有一个缺陷，但它在跟踪某个进程时会让该进程的性能变得非常差，因此请谨慎使用。</p><p>tcpdump</p><p>Tcpdump 是一个简单、可靠的网络监控工具，用来做基本的协议分析，看看那些进程在使用网络以及如何使用网络。当然，如果你要获取跟详细的信息，你应该使用 Wireshark (下面我们会介绍).</p><p>top</p><p>top 命令显示当前的活动进程，默认它是按消耗 CPU 的厉害程度进行排序，每5秒钟刷新一次列表，你也可以选择不同的排序方式，例如 m 是按内存占用方式进行排序的快捷键。</p><p>uptime</p><p>uptime 命令告诉你这台服务器从开机启动到现在已经运行了多长时间了。同时也包含了从启动到现在服务器的平均负载情况，看看 oschina 的数据：</p><p>我已经忘了上次是为什么重启机器了，好像是换了个机柜。</p><p>vmstat</p><p>你可以使用 vmstat 来监控虚拟内存，一般 Linux 上的开发者喜欢使用虚拟内存来获得最佳的存储性能。该命令报告关于内核线程、虚拟内存、磁盘、陷阱和 CPU 活动的统计信息。由 vmstat 命令生成的报告可以用于平衡系统负载活动。系统范围内的这些统计信息（所有的处理器中）都计算出以百分比表示的平均值，或者计算其总和。</p><p>在 oschina 上执行 vmstat 的结果：</p><p>Wireshark</p><p>Wireshark, 前身是 Ethereal ，是一个网络协议检测程序，让您经由程序抓取运行的网站的相关资讯，包括每一封包流向及其内容、资讯可依操作系统语系看出,方便查看、监控TCP session动态等等.</p><p>这里罗列的是大多数最有价值的 Linux 监控程序，当然，你可能还会使用其他的工具，不妨跟大家分享下。</p>",37),n=[a];function i(r,m){return t(),s("div",null,n)}const f=p(o,[["render",i],["__file","2012-190.html.vue"]]);export{f as default};
