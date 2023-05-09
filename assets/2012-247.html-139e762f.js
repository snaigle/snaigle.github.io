import{_ as e,p as n,q as l,R as t}from"./framework-5866ffd3.js";const a={},s=t("p",null," 自定义classloader主要实现的方法是 findClass(String name) , 而我们调用的则是loadClass来加载类 ",-1),r=t("p",null," 具体的loadClass代码请自己查阅,直接上干货: ",-1),o=t("p",null,[t("pre",{class:"prettyprint lang-java linenums"},`public class NorClassLoader extends ClassLoader{
	URL[] urls = null;
	public NorClassLoader(){
		super();
	}
	public NorClassLoader(URL[] urls){
		this.urls = urls;
	}
	public NorClassLoader(URL[] urls,ClassLoader parent){
		super(parent);
		this.urls = urls;
	}
	@Override
	protected Class<?> findClass(String name) throws ClassNotFoundException {
		Class<?> clazz = null;
		if(name == null || name.length()==0) 
			throw new ClassNotFoundException("class <"+name+"> can't found");
		try{
			byte[] buffer = searchResource(name);
			if(buffer == null){
				throw new ClassNotFoundException("class <"+name+"> can't found");
			}
			clazz = defineClass(null, buffer, 0, buffer.length);
		}catch(Exception e){
			throw new ClassNotFoundException("class <"+name+"> can't found",e);
		}
		if(clazz == null){
			throw new ClassNotFoundException("class <"+name+"> can't found");
		}
		return clazz;
	}
	private byte[] searchResource(String name) throws IOException{
		if(urls == null || urls.length ==0){
			throw new NullPointerException("urls can't be null or empty");
		}
		String pathName = name.replaceAll("\\\\.", "/");
		ByteArrayOutputStream baos = null;
		for(URL url : urls){
			try {
				File file = new File(url.toURI());
				if(file.exists() && file.isDirectory()){// source folder
					File clazzFile = new File(file,pathName+".class");
					if(clazzFile.exists() && clazzFile.isFile()){
						baos = new ByteArrayOutputStream();
						FileInputStream fis = new FileInputStream(clazzFile);
						int b = 0;
						while((b=fis.read()) >=0){
							baos.write(b);
						}
						fis.close();
						break;
					}
				}else{
					if(file.getName().endsWith(".jar")){// jar file
						JarFile jarFile = new JarFile(new File(url.toURI()));
						ZipEntry zentry = jarFile.getEntry(pathName+".class");
						if(zentry ==null){
							continue;
						}else{
							InputStream is = jarFile.getInputStream(zentry);
							baos = new ByteArrayOutputStream();
							int b = 0;
							while((b=is.read())>=0){
								baos.write(b);
							}
							is.close();
							jarFile.close();
							break;
						}
					}else if(file.getName().endsWith(".zip")){// zip file
						ZipFile zipFile = new ZipFile(new File(url.toURI()));
						ZipEntry zentry = zipFile.getEntry(pathName);
						if(zentry ==null){
							continue;
						}else{
							InputStream is = zipFile.getInputStream(zentry);
							baos = new ByteArrayOutputStream();
							int b = 0;
							while((b=is.read())>=0){
								baos.write(b);
							}
							is.close();
							zipFile.close();
							break;
						}
					}else{ // can't process the file type
						continue;
					}
				}
			} catch (URISyntaxException e) {
				continue;
			}
		}
		return baos ==null ? null : baos.toByteArray();
	}
`)],-1),i=t("p",null," 再来一个 测试用例,用例是从其他项目即时编译一个源文件用classloader加载 ",-1),c=t("p",null,[t("pre",{class:"prettyprint lang-java linenums"},`public class TestClassloader {
	@Before
	public void setUp(){
		String[] args = new String[]{"-extdirs","/home/tt/workspace/java/nor/deps/",
				"-sourcepath","/home/tt/workspace/java/nor/src/",
				"-6","-d","/home/tt/workspace/java/nor/testbin/",
				"/home/tt/workspace/java/nor/src/org/nutz/template/Start.java"};
		new org.eclipse.jdt.internal.compiler.batch.Main(new PrintWriter(new ByteArrayOutputStream()),new PrintWriter(new ByteArrayOutputStream()),false,null,null).compile(args);
	}
	@Test
	public void testNorClassloader() throws ClassNotFoundException, MalformedURLException{
		ClassLoader cl = new NorClassLoader(new URL[]{new File("/home/tt/workspace/java/nor/testbin/").toURI().toURL(),
				new File("/home/tt/workspace/java/nor/deps/jetty-xml-7.2.2.v20101205.jar").toURI().toURL()
		},Thread.currentThread().getContextClassLoader());
		Class<?> clazz = cl.loadClass("org.nutz.template.Start");
		Assert.assertEquals("org.nutz.template.Start", clazz.getName());
		clazz = cl.loadClass("org.eclipse.jetty.xml.XmlParser");
		Assert.assertEquals("org.eclipse.jetty.xml.XmlParser", clazz.getName());
	}
	@After
	public void tearDown(){
		Files.deleteDir(new File("/home/tt/workspace/java/nor/testbin/"));
	}
}
`)],-1),u=t("p",null," 大家把 其中的变量适当替换一下,如果有class文件可以直接用classloader进行加载, ",-1),p=[s,r,o,i,c,u];function d(m,f){return n(),l("div",null,p)}const w=e(a,[["render",d],["__file","2012-247.html.vue"]]);export{w as default};
