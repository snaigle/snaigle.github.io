import{_ as o,p as s,q as e,t as n,R as t}from"./framework-5866ffd3.js";const u={},i=t("p",null,"上周末 终于安装了 ubuntu10.10  ，安装的是 kanas-ubuntu-10.10-desktop-i386.iso 中文定制版,  算是减小了入门的难度吧，里面默认安装了中文字体输入法，flash，播放器，chm等，感兴趣的可以安装试试。",-1),l=t("p",null,"本来打算用wubi安装的，结果这个iso没提供这个选项，又没条件去刻一张dvd，只好查资料准备采用 grub安装，",-1),d=t("p",null,"安装教程 网上有很多，我用的是这个。",-1),r=t("p",null,[n("xp下安装和配置启动grub，以及grub【windows版】下载 看："),t("a",{class:"external free",title:"http://www.ylmf.net/read.php?tid=1329214",rel:"nofollow",href:"http://www.ylmf.net/read.php?tid=1329214"},"http://www.ylmf.net/read.php?tid=1329214")],-1),p=t("p",null," ",-1),c=t("p",null,[n("下载并解压缩后，将目录中的 grldr , grldr.mbr ， grub.exe 三个文件复制到 C 盘根目录下"),t("br"),t("br"),t("strong",null,"2、Grub安装Ubuntu在下载好的 ubuntu 10.10 系统 iso 文件中"),n(" ， casper 文件夹目录下，找到 vmlinuz 、 initrd.lz （注意： ubuntu9.04 文件名为 initrd.gz ）解压，并复制到 C 盘根目录下（无需解压整个 casper 文件夹，整个 casper 文件夹很大）")],-1),_=t("p",null,"将iso 文件也放到C盘根目录上。",-1),a=t("p",null," ",-1),E=t("p",null,"新建 C:\\menu.lst文件 打开C:menu.lst，在里面增加下面一段话。 ",-1),h=t("pre",null,"    title Boot ubuntuISO    find --set-root /ubuntu-9.04-desktop-i386.iso    map --mem /ubuntu-9.04-desktop-i386.iso (hd32)    map --hook    chainloader (hd32)    boot",-1),b=t("p",null,"保存并退出。 ",-1),D=t("p",null,[t("a",{class:"image",title:"Image:Grubiso.jpg",href:"http://wiki.ubuntu.org.cn/File:Grubiso.jpg"},[t("br")])],-1),B=t("p",null," ",-1),m=t("p",null,[t("br"),n(" 六、下载ubuntu-9.04-desktop-i386.iso镜像文件，保存至X:\\目录下，X代表xp下的任何一个盘符。记得一定要放到根目录下。至于为什么，大家应该都清楚吧。  ")],-1),f=t("p",null,[t("a",{id:".E5.A6.82.E6.9E.9C.E4.BD.A0.E4.B8.8B.E8.BD.BD.E7.9A.84.E6.98.AFDVD.E9.95.9C.E5.83.8F.E6.88.96.E6.89.93.E7.AE.97.E4.B8.8B.E8.BD.BDDVD.E9.95.9C.E5.83.8F",name:".E5.A6.82.E6.9E.9C.E4.BD.A0.E4.B8.8B.E8.BD.BD.E7.9A.84.E6.98.AFDVD.E9.95.9C.E5.83.8F.E6.88.96.E6.89.93.E7.AE.97.E4.B8.8B.E8.BD.BDDVD.E9.95.9C.E5.83.8F"})],-1),g=t("h2",null,[t("span",{class:"editsection"},[n("["),t("a",{title:"编辑段落：如果你下载的是DVD镜像或打算下载DVD镜像",href:"http://wiki.ubuntu.org.cn/index.php?title=%E4%BD%BF%E7%94%A8Windows%E4%B8%8BGRUB%E5%BC%95%E5%AF%BC%E5%90%AF%E5%8A%A8ubuntu%E5%AE%89%E8%A3%85%E9%95%9C%E5%83%8F&action=edit&section=2"},"编辑"),n(" ]")]),n(),t("span",{class:"mw-headline"}," 如果你下载的是DVD镜像或打算下载DVD镜像 ")],-1),w=t("p",null,[n("前面四步完全和CD镜像相同，下面将从第五步开始讲述"),t("br"),n(" 五、配置C:\\menu.lst文件 打开C:menu.lst，在里面增加下面一段话。 ")],-1),A=t("pre",null,[n(" title Boot UbuntuDVDfind --set-root /"),t("span",{style:{color:"#ff0000"}},"ubuntu-10.10-dvd-i386.iso"),n("kernel vmlinuz iso-scan/filename=/"),t("span",{style:{color:"#ff0000"}},"ubuntu-10.10-dvd-i386.iso"),n(" boot=casper roinitrd initrd.gzboot")],-1),C=t("p",null,[n("六、把ubuntu-10.10-dvd-i386.iso放到一个分区的根目录下，再用虚拟光驱挂上，把光盘目录里的 /casper/initrd.gz和 /casper/vmlinuz 两个文件拷到和ubuntu-10.10-dvd-i386.iso同一分区下"),t("br"),n(" 下载就可以重启进入Grub选择Boot UbuntuDVD来安装Ubuntu了")],-1),k=t("p",null,[n("   "),t("a",{class:"image",title:"Image:Grubiso5.jpg",href:"http://wiki.ubuntu.org.cn/File:Grubiso5.jpg"})],-1),v=t("p",null,"进入 livecd 后 在终端 执行   sudo umount -l /isoservice 将虚拟光驱卸载，要不然 你利用分区安装 时 会报错",-1),F=t("p",null," ",-1),V=t("p",null,"安装完成后，会发现启动菜单上没有xp， 这个不用急，只需在终端 运行 sudo update-grub命令即可，然后重启就能在开机时看到 xp的选项了",-1);function x(z,G){return s(),e("div",null,[i,n(),l,n(),d,n(),r,n(),p,n(),c,n(),_,n(),a,n(),E,n(),h,n(),b,n(),D,n(),B,n(),m,n(),f,n(),g,n(),w,n(),A,n(),C,n(),k,n(),v,n(),F,n(),V])}const U=o(u,[["render",x],["__file","2010-38.html.vue"]]);export{U as default};
