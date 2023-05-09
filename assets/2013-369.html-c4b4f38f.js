import{_ as t,p as o,q as s,t as n,R as e}from"./framework-5866ffd3.js";const a={},r=e("p",null," 1，activemq 分为 queue和topic 两种 ",-1),c=e("p",null," 2，下面先介绍queue ，使用spring 集成 ",-1),i=e("p",null," build.gradle ",-1),l=e("p",null,null,-1),p=e("pre",null,`compile "org.springframework:spring-jms:3.2.1.RELEASE"
    compile "org.apache.activemq:activemq-core:5.7.0"
    compile "ch.qos.logback:logback-core:1.0.9"
    compile "ch.qos.logback:logback-classic:1.0.9"
    compile "ch.qos.logback:logback-access:1.0.9"
    testCompile group: 'junit', name: 'junit', version: '4.10'
`,-1),m=e("p",null," applicationContext.xml ",-1),u=e("p",null,null,-1),d=e("pre",null,` 
<description>Spring公共配置</description>
    <!-- 使用annotation 自动注册bean,并检查@Required,@Autowired的属性已被注入 -->
    <context:component-scan base-package="net.tt64"/>
    <!-- ActiveMQ 连接工厂 -->
    <bean id="advancedConnectionFactory" class="org.apache.activemq.ActiveMQConnectionFactory">
        <property name="brokerURL" value="vm://cheyoushuo" />
        <property name="useAsyncSend" value="true" />
    </bean>
    <!-- Spring Caching 连接工厂 -->
    <bean id="advancedCachingConnectionFactory" class="org.springframework.jms.connection.CachingConnectionFactory">
        <property name="targetConnectionFactory" ref="advancedConnectionFactory" />
        <property name="sessionCacheSize" value="10" />
    </bean>
    <!-- Queue定义 -->
    <bean id="notifyQueue" class="org.apache.activemq.command.ActiveMQQueue">
        <constructor-arg value="test.jms" />
    </bean>
    <!-- Spring JMS Template -->
    <bean id="jmsTemplate" class="org.springframework.jms.core.JmsTemplate">
        <property name="connectionFactory" ref="advancedCachingConnectionFactory" />
        <!-- 使 deliveryMode, priority, timeToLive设置生效-->
        <property name="explicitQosEnabled" value="true" />
        <!-- 设置NON_PERSISTENT模式, 默认为PERSISTENT -->
        <property name="deliveryPersistent" value="true" />
        <!-- 设置优先级, 默认为4 -->
        <property name="priority" value="9" />
    </bean>
    <!-- 异步接收Queue消息Container -->
    <bean id="advancedQueueContainer" depends-on="jmsService" class="org.springframework.jms.listener.DefaultMessageListenerContainer">
        <property name="connectionFactory" ref="advancedConnectionFactory" />
        <property name="destination" ref="notifyQueue" />
        <property name="messageListener" ref="jmsService" />
        <!-- 初始5个Consumer, 可动态扩展到10 -->
        <property name="concurrentConsumers" value="1" />
        <property name="maxConcurrentConsumers" value="1" />
        <!-- 设置消息确认模式为Client -->
        <property name="sessionAcknowledgeModeName" value="CLIENT_ACKNOWLEDGE" />
    </bean>
`,-1),g=e("p",null," jms sender  ",-1),_=e("p",null,null,-1),v=e("pre",null,`    @Autowired
    private JmsTemplate jmsTemplate;
    @Autowired
    private Destination dest;
    public void send(final Serializable obj) {
        jmsTemplate.send(dest, new MessageCreator() {
            @Override
            public Message createMessage(Session session) throws JMSException {
                ObjectMessage msg = session.createObjectMessage(obj);
                return msg;
            }
        });
    }
`,-1),h=e("p",null,null,-1),y=e("pre",null,` 
    @Override
    public void onMessage(Message message) {
        if (message instanceof ObjectMessage) {
            ObjectMessage om = (ObjectMessage) message;
            try {
                System.out.println(om.getObject().toString() + " recieved");
                Thread.currentThread().sleep(1000);
                System.out.println(om.getObject().toString() + "  process over");
            } catch (InterruptedException ex) {
            } catch (JMSException ex) {
            }
        }
    }
`,-1),b=e("p",null,null,-1),C=e("pre",null,` 
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        JmsSender sender = ctx.getBean(JmsSender.class);
        for (int i = 0; i < 100; i++) {
            System.out.println("message " + i + "send");
            sender.send("message" + i);
        }
    }
`,-1),S=e("p",null," 这里将 concurrentConsumers 调为 1, 这就是单任务队列 ",-1);function f(j,x){return o(),s("div",null,[r,c,i,l,p,m,u,d,g,_,v,n(" jms receiver "),h,y,n(" Main "),b,C,S])}const k=t(a,[["render",f],["__file","2013-369.html.vue"]]);export{k as default};
