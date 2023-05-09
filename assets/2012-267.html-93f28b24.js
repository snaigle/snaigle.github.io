import{_ as t,p as e,q as n,a1 as r}from"./framework-5866ffd3.js";const o={},i=r(`<p> 为了避免依赖的问题，我采用了maven创建项目 </p><p> 下面是依赖的包 </p><p><br></p><pre class="prettyprint lang-xml linenums">    &lt;dependency&gt;
  		&lt;groupId&gt;com.linkedin&lt;/groupId&gt;
  		&lt;artifactId&gt;norbert_2.8.1&lt;/artifactId&gt;
  		&lt;version&gt;0.6.12&lt;/version&gt;
  	&lt;/dependency&gt;
  	&lt;dependency&gt;
  		&lt;groupId&gt;org.scala-lang&lt;/groupId&gt;
  		&lt;artifactId&gt;scala-library&lt;/artifactId&gt;
  		&lt;version&gt;2.8.1&lt;/version&gt;
  	&lt;/dependency&gt;
  	&lt;dependency&gt;
  		&lt;groupId&gt;com.google.protobuf&lt;/groupId&gt;
  		&lt;artifactId&gt;protobuf-java&lt;/artifactId&gt;
  		&lt;version&gt;2.4.0a&lt;/version&gt;
  	&lt;/dependency&gt;
  	&lt;dependency&gt;
  		&lt;groupId&gt;org.apache.zookeeper&lt;/groupId&gt;
  		&lt;artifactId&gt;zookeeper&lt;/artifactId&gt;
  		&lt;version&gt;3.3.3&lt;/version&gt;
  	&lt;/dependency&gt;
</pre><p><br></p><p>   先上一个norbert官方的例子，官方的缺少protoc生成消息格式类的介绍，具体生成办法请参考 我的另一篇文章&lt;<a href="http://www.feiyan35488.com/show/266" target="_blank">protobuf介绍</a>&gt;<br><span></span></p><p>    </p><pre class="prettyprint lang-java linenums">class PingSerializer implements Serializer&lt;Ping, Ping&gt; {
    public String requestName() {
      return &quot;ping&quot;;
    }
<pre><code>public String responseName() {
  return &quot;pong&quot;;
}

public byte[] requestToBytes(Ping message) {
  return NorbertExampleProtos.Ping.newBuilder().setTimestamp(message.timestamp).build().toByteArray();
}

public Ping requestFromBytes(byte[] bytes) {
  try {
    return new Ping(NorbertExampleProtos.Ping.newBuilder().mergeFrom(bytes).build().getTimestamp());
  } catch (InvalidProtocolBufferException e) {
     System.out.println(&quot;Invalid protocol buffer exception &quot; + e.getMessage());
     throw new IllegalArgumentException(e);
  }
}

public byte[] responseToBytes(Ping message) {
  return requestToBytes(message);
}

public Ping responseFromBytes(byte[] bytes) {
  return requestFromBytes(bytes);
}
</code></pre>
<p>}</p>
</pre><p> 必须要实现 serializer接口，这是使用netty传输时对内容进行转换的 NorbertExampleProtos这个类是通过.proto文件生成的，具体生成办法请参考 我的另一篇文章&lt;<a href="http://www.feiyan35488.com/show/266" target="_blank">protobuf介绍</a>&gt; 下面是客户端和服务端的写法， 直接运行就可以看到结果， 据我查到的情况是 norbert能支持1000并发以上没问题。这个对企业大并发还不是很了解，不评论 </p><p><br></p><p><pre class="prettyprint lang-java linenums">import java.util.Set;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
<p>import proto.Request;
import proto.RequestResponseSerializer;
import proto.Response;</p>
<p>import com.linkedin.norbert.cluster.InvalidClusterException;
import com.linkedin.norbert.javacompat.cluster.ClusterClient;
import com.linkedin.norbert.javacompat.cluster.ClusterListener;
import com.linkedin.norbert.javacompat.cluster.Node;
import com.linkedin.norbert.javacompat.cluster.ZooKeeperClusterClient;
import com.linkedin.norbert.javacompat.network.Endpoint;
import com.linkedin.norbert.javacompat.network.LoadBalancer;
import com.linkedin.norbert.javacompat.network.LoadBalancerFactory;
import com.linkedin.norbert.javacompat.network.NettyNetworkClient;
import com.linkedin.norbert.javacompat.network.NettyNetworkServer;
import com.linkedin.norbert.javacompat.network.NetworkClient;
import com.linkedin.norbert.javacompat.network.NetworkClientConfig;
import com.linkedin.norbert.javacompat.network.NetworkServer;
import com.linkedin.norbert.javacompat.network.NetworkServerConfig;
import com.linkedin.norbert.javacompat.network.RequestHandler;
import com.linkedin.norbert.javacompat.network.RoundRobinLoadBalancerFactory;</p>
<p>public class Start {
public static void main(String[] args)
{
final String serviceName = &quot;norbert&quot;;
final String zkConnectStr = &quot;localhost:2181&quot;;</p>
<pre><code>    configCluster(serviceName, zkConnectStr);
    startServer(serviceName, 1, zkConnectStr);
    startServer(serviceName, 2, zkConnectStr);

    NetworkClientConfig config = new NetworkClientConfig();
    config.setServiceName(serviceName);
    config.setZooKeeperConnectString(zkConnectStr);
    config.setZooKeeperSessionTimeoutMillis(30000);
    config.setConnectTimeoutMillis(1000);
    config.setWriteTimeoutMillis(150);
    config.setMaxConnectionsPerNode(5);
    config.setStaleRequestTimeoutMins(10);
    config.setStaleRequestCleanupFrequencyMins(10);

    final LoadBalancerFactory myLB = new LoadBalancerFactory()
    {
        @Override
        public LoadBalancer newLoadBalancer(final Set&amp;lt;Endpoint&amp;gt; endpoints) throws InvalidClusterException
        {
            return new LoadBalancer()
            {
                @Override
                public Node nextNode()
                {
                    return endpoints.iterator().next().getNode();
                }
            };
        }
    };
    final NetworkClient nc = new NettyNetworkClient(config, new RoundRobinLoadBalancerFactory());
    //PartitionedNetworkClient&amp;lt;Integer&amp;gt; nc = new NettyPartitionedNetworkClient&amp;lt;Integer&amp;gt;(config, new IntegerConsistentHashPartitionedLoadBalancerFactory());

    //nc.registerRequest(NetqProtocol.AppendReq.getDefaultInstance(), NetqProtocol.AppendResp.getDefaultInstance());

    for(int index = 0;index&amp;lt;10;index++){
	    new Thread(new Runnable() {
			@Override
			public void run() {
				for(int i=0;i&amp;lt;10;i++){
			        final Request request = new Request(5+i);
			        System.out.println(Thread.currentThread().getName()+&quot;-client request at &quot;+(5+i));
			        Future&amp;lt;Response&amp;gt; pingFuture = nc.sendRequest(request, new RequestResponseSerializer());
			
			        try
			        {	
			            final Response appendResp = pingFuture.get();
			            System.out.println(Thread.currentThread().getName()+&quot;-client got ping resp: &quot; + appendResp.total);
			        }
			        catch( InterruptedException e )
			        {
			            e.printStackTrace();
			        }
			        catch( ExecutionException e )
			        {
			            e.printStackTrace();
			        }
		        }

				
			}
		}).start();    
   }
}
</code></pre>
</pre></p><p><pre class="prettyprint lang-java linenums"> 
private static void startServer(String serviceName,final int nodeId, String zkConnectStr)
    {
        NetworkServerConfig config = new NetworkServerConfig();
        config.setServiceName(serviceName);
        config.setZooKeeperConnectString(zkConnectStr);
        config.setZooKeeperSessionTimeoutMillis(30000);
        config.setRequestThreadCorePoolSize(5);
        config.setRequestThreadMaxPoolSize(10);
        config.setRequestThreadKeepAliveTimeSecs(300);
<pre><code>    NetworkServer ns = new NettyNetworkServer(config);

    ns.registerHandler(new RequestHandler&amp;lt;Request, Response&amp;gt;()
    {
        @Override
        public Response handleRequest(Request request) throws Exception
        {
        	System.out.println(&quot;server_&quot;+nodeId+&quot;:run at &quot;+request.num);
            return new Response(request.num+10);
        }
    }, new RequestResponseSerializer());


    ns.bind(nodeId);
}

private static void configCluster(String serviceName, String zkConnectStr)
{
    //ClusterClient cc = new InMemoryClusterClient(&quot;norbert&quot;);//, &quot;localhost:2181&quot;, 30000);
    final ClusterClient cc = new ZooKeeperClusterClient(serviceName, zkConnectStr, 30000);
    cc.awaitConnectionUninterruptibly();

    cc.addListener(new ClusterListener()
    {
        @Override
        public void handleClusterConnected(Set&amp;lt;Node&amp;gt; nodes)
        {
            System.out.println(&quot;connected to cluster: &quot; + nodes);
        }

        @Override
        public void handleClusterNodesChanged(Set&amp;lt;Node&amp;gt; nodes)
        {
            System.out.println(&quot;nodes changed: &quot;);
            for( Node node : nodes )
            {
                System.out.println(&quot;node: &quot; + node);
            }
        }

        @Override
        public void handleClusterDisconnected()
        {
            final Set&amp;lt;Node&amp;gt; nodes = cc.getNodes();
            System.out.println(&quot;dis-connected from cluster: &quot; + nodes);
        }

        @Override
        public void handleClusterShutdown()
        {
            final Set&amp;lt;Node&amp;gt; nodes = cc.getNodes();
            System.out.println(&quot;cluster shutdown: &quot; + nodes);
        }
    });

    cc.removeNode(1);
    cc.removeNode(2);
    cc.addNode(1, &quot;localhost:5002&quot;);
    cc.addNode(2, &quot;localhost:5003&quot;);
</code></pre>
<p>//        cc.markNodeAvailable(1);
//        cc.shutdown();
}</p>
</pre></p><p><br></p>`,13),a=[i];function c(l,s){return e(),n("div",null,a)}const u=t(o,[["render",c],["__file","2012-267.html.vue"]]);export{u as default};
