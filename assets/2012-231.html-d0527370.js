import{_ as t,p as n,q as i,R as r}from"./framework-5866ffd3.js";const o={},e=r("pre",{class:"prettyprint lang-java linenums"},`static String  sort(int[][] sort){
		StringBuffer sb = new StringBuffer();
		
		int colNums = sort[0].length;
		int rowNums = sort.length;
		
		int maxLength = colNums + rowNums -1;
		
		for(int i=0;i<maxLength; i++){
			
			// left-down to right-top
			int col = i>(rowNums-1) ? (i-rowNums+1) :0;
			int row = i>(rowNums-1) ? (rowNums-1) :i;
			for(int index =0;index < (i+1) ;index++){
				int r = row - index;
				int c = col + index;
				if(r < 0 || c >(colNums-1)){
					break;
				}else{
					sb.append(sort[r][c]).append(",");
				}
			}
		}
		return sb.toString();
	}
	static String  sortN(int[][] sort){
		StringBuffer sb = new StringBuffer();
		
		int colNums = sort[0].length;
		int rowNums = sort.length;
		
		int maxLength = colNums + rowNums -1;
		
		for(int i=0;i<maxLength; i++){
			if(i%2 == 1){
				// left-down to right-top
				int col = i>(rowNums-1) ? (i-rowNums+1) :0;
				int row = i>(rowNums-1) ? (rowNums-1) :i;
				for(int index =0;index < (i+1) ;index++){
					int r = row - index;
					int c = col + index;
					if(r < 0 || c >(colNums-1)){
						break;
					}else{
						sb.append(sort[r][c]).append(",");
					}
				}
			}else{
				// right-top to left-down
				int row = i>(colNums-1) ? (i-colNums+1) :0;
				int col = i>(colNums-1) ? (colNums-1) :i;
				for(int index = 0;index < (i+1) ; index++){
					int r = row + index;
					int c = col - index;
					if(c < 0 || r >(rowNums -1)){
						break;
					}else{
						sb.append(sort[r][c]).append(",");
					}
				}
			}
		}
		return sb.toString();
	}`,-1),s=[e];function c(l,u){return n(),i("div",null,s)}const d=t(o,[["render",c],["__file","2012-231.html.vue"]]);export{d as default};
