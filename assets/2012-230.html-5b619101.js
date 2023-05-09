import{_ as t,p as n,q as i,R as s}from"./framework-5866ffd3.js";const e={},m=s("pre",{class:"prettyprint lang-java linenums"},`/**
 * 两个任意值整数列 ,交换元素使两个数列的和相差最小
 * @author tt
 *
 */
public class TwoArrayTotalLeast {

	static int[] first = {1,3,4,89,32,234,42,12,34,34,123,443,55,66};
	static int[] second = {1,3,4,89,76,87,34,12,24,64,93,393,59,89};
	
	static void sort(){
		int[] max = null;
		int[] min = null;
		int sum1 =0;
		int sum2 = 0;
		for(int t : first){sum1 += t;}
		for(int t : second){sum2 += t;}
		if(sum1 < sum2){
			min = first;
			max= second;
		}else{
			max = first;
			min = second;
		}
		while(true){
			boolean change = false;
			sum1=0;sum2=0;
			for(int t : max){sum1 += t;}
			for(int t : min){sum2 += t;}
			int sub = (sum1-sum2)/2;
			if(sub==0) break;
			
			int temp = -1;
			int tempi = -1;
			int tempj = -1;
			for(int i=0;i<max.length;i++){
				for(int j=0;j<min.length ;j++){
					if(max[i] > min[j] && (max[i] - min[j] <= sub) && (max[i] - min[j]  > temp)){
						temp = max[i] - min[j];
						tempi = i;
						tempj = j;
						change = true;
					}
				}
			}
			if(change){
				int t = max[tempi];
				max[tempi] = min[tempj];
				min[tempj] = t;
			}else break;
		}
	}
	public static void main(String[] args) {
		System.out.println(sum(first));
		System.out.println(sum(second));
		sort();
		System.out.println(sum(first));
		System.out.println(sum(second));
		
	}
	public static int sum(int[] temp){
		int result = 0;
		for(int i : temp){
			result += i;
		}
		return result;
	}
}`,-1),r=[m];function a(u,o){return n(),i("div",null,r)}const c=t(e,[["render",a],["__file","2012-230.html.vue"]]);export{c as default};
