import{_ as t,p as o,q as e,a1 as r}from"./framework-5866ffd3.js";const u={},d=r("<p> 1.   切换到root;<br> 2.   运行命令 &quot;fdisk /dev/xvdb&quot;;<br> 3.   根据提示，依次输入 &quot;n&quot;, &quot;p&quot;, &quot;1&quot;;<br> 4.   然后 ，按两次回车;<br> 5.   输入 &quot;w&quot;, 当提示Syncing disks.时，表示已成功完成分区;<br> 6.   输入 &quot;mkfs.ext3 /dev/xvdb1&quot; 格式化分区；这里要耐心等待<br> 7.      输入 &quot;mkdir /data0&quot;建立挂载目录<br> 8.   使用&quot;mount /dev/xvdb1 /data0 &quot;命令挂载分区后即可使用。<br> 9. vi /etc/fstab<br> 按 i<br> 最后一行写入<br> /dev/xvdb1    /data0    ext3         defaults     0 0<br> 按esc <br> 输入:wq ，回车<br> 操作完毕 </p><p><br></p><p> 挂载会丢掉硬盘中的数据 </p>",3),s=[d];function a(b,c){return o(),e("div",null,s)}const n=t(u,[["render",a],["__file","2013-409.html.vue"]]);export{n as default};
