import{_ as n,p as e,q as s,R as t}from"./framework-5866ffd3.js";const i={},r=t("p",null," 如 34,23,5 应该排列为 5,34,23 ",-1),l=t("p",null," 算法为: 先比较第一位数字 数字大的在前,如果相同按此规则比较下一位 ",-1),a=t("p",null," 当第一次发现有数字位数不够时,则比较较长数字的第一位和当前位,若第一位大则短数字在前,否则反之 ",-1),u=t("p",null," 以下是代码 ",-1),d=t("p",null,[t("br")],-1),o=t("pre",{class:"prettyprint lang-java linenums"},`	public static String test(int[] values){
		if(values.length == 1){
			return ""+values[0];
		}
		String[] strValues = new String[values.length];
		int maxLength = 0;
		for(int i=0;i < values.length;i++){ 
			strvalues[i]=String.valueOf(values[i]);
			if(strvalues[i].length() > maxLength){
				maxLength = strValues[i].length();
			}
		}
		for(int i=0;i < maxlength;i++){ 
			sort(strvalues,i); 
		} 
		stringbuilder sb= new stringbuilder();
		for(string v : strvalues){
			sb.append(v).append(" "); 
		}
		return sb.tostring();
	}
	public static void sort(string[] strvalues,int index){
		while(true){ 
			boolean change=false; 
			for(int i=0;i < strValues.length-1;i++){
				string first=strValues[i];
				second=strValues[i+1]; 
				if(first.length() >= index+1 && second.length() >= index+1){
			// 数值大的直接去前边
					if(first.substring(0, index).equals(second.substring(0,index)) && Integer.valueOf(first.substring(index,index+1)) < Integer.valueOf(second.substring(index,index+1))){
						strValues[i] = second;
						strValues[i+1] = first;
						change = true;
					}else if(first.substring(0, index).equals(second.substring(0,index)) &&  Integer.valueOf(first.substring(index,index+1)) == Integer.valueOf(second.substring(index,index+1))){
						if(first.length()>second.length()){
							strValues[i] = second;
							strValues[i+1] = first;
							change = true;
						}
					}
				}else if(first.length() ==index  && second.length() >index){
					if(second.startsWith(first)){
						if(Integer.valueOf(second.substring(0,1)) < Integer.valueOf(second.substring(index,index+1))){
							strValues[i] = second;
							strValues[i+1] = first;
							change = true;
						}
					}
				}
			}
			if(!change){
				break;
			}
		}
	}
`,-1),g=t("p",null,[t("br")],-1),c=[r,l,a,u,d,o,g];function f(h,_){return e(),s("div",null,c)}const v=n(i,[["render",f],["__file","2012-229.html.vue"]]);export{v as default};
