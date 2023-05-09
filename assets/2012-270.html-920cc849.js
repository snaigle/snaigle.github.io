import{_ as e,p,q as y,a1 as k}from"./framework-5866ffd3.js";const t={},s=k("<p> redis版本 2.2.5，有条件请直接看英文版，都有例子的。  </p><p> 一、Strings类的， redis中存储的全是字符串 </p><p> 1，append key value , 在key之后添加value </p><p> 例： append key1 hello ; append key1 world ;  get key1 显示 helloworld </p><p> 2，decr key   ,对key的整数值减一，不存在的key默认为0 </p><p> 例 decr key2 ; 将显示 -1 </p><p> 3，decrby  key decrement,  对可以的整数值减去指定值   </p><p>  例： decrby key3 5 ; 显示 -5 </p><p> 4,get key 取得key的值 </p><p>    如：get key4 ，显示&lt;nil&gt; , decr key4 ,get key4 显示 -1 </p><p> 5, getbit key offset   返回String值指定位置的位 ，只有0和1 </p><p>    如： getbit key4 7 显示1 ，getbit key4 0 ，显示0 </p><p> 6，getrange key start end 截取key值的 子字符串 </p><p>    如 ： getrange key1 0 3 ,显示 hell </p><p> 7， getset key value ，返回key的旧值，然后将value赋给key </p><p> 8， incr key ， key的整型值加一 </p><p> 9， incrby key increment， key的整型值加上指定值 </p><p> 10， mget key [key ...] 取得多个key的值 </p><p> 11， mset key value [key value]  设置多个key value值对 </p><p> 12， msetnx key value [key value] 只有当所有的key都不存在时 才设置多个key value值对 </p><p> 13，set key value  设置key value值对 </p><p> 14， setbit key offset value , 设置key值指定位置的bit， value只能为0和1 </p><p> 15，setex key seconds value , 设置key value 在指定时间后过期 </p><p> 16，setnx key value ，当key不存在时设置key value </p><p> 17,setrange key offset value ，在key值指定偏移处使用value进行覆盖 </p><p> 18，strlen key ， key值的长度 </p><p><br></p><p> 二、 连接类和服务器类 </p><p> 1，auth 验证密码 </p><p> 2，echo message， 控制台输出信息，在使用多命令时有用 </p><p> 3，ping ，验证服务器是否连通 </p><p> 4，quit ， 结束当前连接 </p><p> 5，select index ，改变当前的数据库 0-15，共16个 </p><p> 6，bgsave， 异步的保存数据到硬盘  </p><p> 7，dbsize ， 返回当前数据库的key的总数 </p><p> 8，flashall ， 移除所有库中的所有key </p><p> 9，flashdb， 移除当前库中的所有key </p><p> 10，info ， 该服务器的信息和统计数据 </p><p> 11，lastsave , 最近一次成功保存在硬盘的时间戳 </p><p> 12，监听服务器接受每个请求的实际时间 </p><p> 13， save ，同步的将数据保存到硬盘 </p><p> 14，shutdown  ，这个命令相当于先执行 save，然后关闭服务器 </p><p> 15，slaveof host port ，**配置集群用的， 配置该服务器为 指定服务器的slaver，还有其他情况。 </p><p> 16，sync ，集群瞎用， 同步集群中的数据 </p><p> 17，time 返回当前服务器的时间 </p><p> 三、key操作类型 </p><p>  1，del key [key ...] ,删除key </p><p>  2，exists key ，该key是否存在 </p><p>  3，expire key seconds , 设置key多长时间后过期 </p><p>  4，expireat key timestamp ,设置key指定时间过期 </p><p>  5，keys pattern ， 列出所有符合表达式的key </p><p>  6，move key db ,移动一个key到指定数据库 </p><p>  7，object  refcount|encoding|idletime  key ,查询key的一些属性 </p><p>  8，persist ，移除key的过期时间，固化key </p><p> --------未完 </p><p><br></p>",56),a=[s];function l(n,r){return p(),y("div",null,a)}const o=e(t,[["render",l],["__file","2012-270.html.vue"]]);export{o as default};
