import{_ as e,p as n,q as i,R as t}from"./framework-5866ffd3.js";const o={},s=t("p",null,"用了jsoup和nutzDao来实现",-1),l=t("p",null,"上代码",-1),d=t("pre",{class:"java",name:"code"},`static NutDao dao = new NutDao();
	static {
	Properties pp = System.getProperties();
	pp.put("driverClassName", "com.mysql.jdbc.Driver");
	pp.put("url", "jdbc:mysql://localhost:3306/wordpress?useUnicode=true&characterEncoding=utf-8");
	pp.put("username", "root");
	pp.put("password", "000000");
	DataSource ds = null;
	try {
		ds = BasicDataSourceFactory.createDataSource(System.getProperties());
		dao.setDataSource(ds);
	} catch (Exception e) {
		e.printStackTrace();
	}
	}
	public static void main(String[] args) throws MalformedURLException, IOException, InterruptedException {

	//createSqlFile();
	//	System.out.println("你好\${1}".replace("\${1}", "world"));
	}

	public static  void createSqlFile() throws IOException{
		BufferedReader reader = new BufferedReader(new FileReader(new File("javaeyepost.txt")));
		String line = "";
		boolean b = false;
		String title = null;
		String content = null;
		String date = null;
		int index = 25;
		while((line=reader.readLine())!= null){
			if(b){
				break;
			}
			if(line.length()>0){
				if(line.equals("post****over")){

				}else if(line.startsWith("title: ")){
					title = line.substring(7);
				}else if(line.startsWith("date: ")){
					System.out.println(line);
					date = line.substring(6)+" 00:00:00";
				}else if(line.startsWith("content: ")){
					StringBuffer sb = new StringBuffer();
					sb.append(line.substring(9));
					while((line=reader.readLine())!= null){
						if(line.equals("post*****over")){
							content = sb.toString();
							String encode = URLEncoder.encode(title);
							encode = encode.length()>200? encode.substring(0,200):encode;
							dao.insert("wp_posts", Chain.make("post_author", 1).add("post_date", date)
									.add("post_date_gmt", date).add("post_content", content).add("post_title", title)
									.add("post_status", "publish").add("comment_status", "open").add("ping_status", "open")
									.add("post_name", encode).add("post_modified", date).add("post_modified_gmt", date)
									.add("post_parent", 0).add("guid", "http://localhost:89/?p="+ index++).add("menu_order", 0)
									.add("post_type", "post").add("comment_count", 0).add("post_excerpt", "").add("post_password", "")
									.add("to_ping", "").add("pinged", "").add("post_content_filtered", "").add("post_mime_type", ""));
						//	System.out.println("*************************************");
							//b = true;
							break;
						}else{
							sb.append(line);
						}
					}
				}
			}
		}

	}

	// 需要注意的细节， 帖子类别可能不存在，要抓取下面的分页信息才行
	public static void fetchPost() throws UnsupportedEncodingException, IOException, InterruptedException{
		//Document document = Jsoup.parse(new URL("http://feiyan35488.iteye.com/?show_full=false"), 5000);
		FileOutputStream fos = new FileOutputStream("javaeyepost.txt");
		HttpConnection con = (HttpConnection) HttpConnection.connect("http://feiyan35488.iteye.com/?page=9&&show_full=true");
		con.userAgent("Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.12 (KHTML, like Gecko) Chrome/9.0.576.0 Safari/534.12");
		Document document = con.get();
		Elements es = document.getElementsByClass("blog_main");
		System.out.println("共有帖子 ："+es.size());
		for(Element e : es){
			fos.write(("title："+e.child(0).child(2).child(0).html()+"\\n").getBytes("utf-8"));
			if(e.child(0).children().size()>3)
			  fos.write(("classify: "+e.child(0).child(3).child(0).html()+"\\n").getBytes("utf-8"));
			fos.write(("date: "+e.child(0).child(0).child(0).html()+"-"+e.child(0).child(0).child(2).html()+"-"+e.child(0).child(0).child(4).html()+"\\n").getBytes("utf-8"));
			fos.write(("content: "+e.child(1).html()+"\\n").getBytes("utf-8"));
			fos.write(("post*****over\\n").getBytes("utf-8"));
			//System.out.println("标题："+e.child(0).child(2).child(0).html());
		}

		for(int i=2;i<10;i++){
			Thread.sleep(5000);
			con.url("http://feiyan35488.iteye.com/?page="+i+"&&show_full=true");
			document = con.get();
			Elements es1 = document.getElementsByClass("blog_main");
			System.out.println("共有帖子 ："+es1.size());
			for(Element e : es1){
				fos.write(("title："+e.child(0).child(2).child(0).html()+"\\n").getBytes("utf-8"));
				fos.write(("classify: "+e.child(0).child(3).child(0).html()+"\\n").getBytes("utf-8"));
				fos.write(("date: "+e.child(0).child(0).child(0).html()+"-"+e.child(0).child(0).child(2).html()+"-"+e.child(0).child(0).child(4).html()+"\\n").getBytes("utf-8"));
				fos.write(("content: "+e.child(1).html()+"\\n").getBytes("utf-8"));
				fos.write(("post*****over\\n").getBytes("utf-8"));
				//System.out.println("标题："+e.child(0).child(2).child(0).html());
			}
		}
	}`,-1),c=t("p",null,"两个方法，一 抓取帖子存到文件中，二，从文件中读取保存到数据库中",-1),a=[s,l,d,c];function r(p,u){return n(),i("div",null,a)}const m=e(o,[["render",r],["__file","2011-137.html.vue"]]);export{m as default};
