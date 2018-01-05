String.prototype.limitInput = function (num,val) {
			var len = 0;    
	    for (var i=0; i<this.length; i++) { 
	    	if(len>=num){
	    		val=val.substring(0,num)
	    		break;
	    	}else{
	    		if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {    
		             len += 1;    
		         } else {    
		             len +=0.5;    
		         }    
	    	}
	        
	     }    
	    return num-len;  
}


//function limit(){
//	        var txtNote;//文本框 
//			var txtLimit;//提示字数的input 
//			var limitCount;//限制的字数 
//			var isbyte;//是否使用字节长度限制（1汉字=1字符） 
//			var txtlength;//到达限制时，字符串的长度 
//			var txtByte; 
//			this.init=function(){ 
//			txtNote=this.txtNote; 
//			txtLimit=this.txtLimit; 
//			limitCount=this.limitCount; 
//			isbyte=this.isbyte; 
//			txtNote.onkeydown=function(){wordsLimit()};txtNote.onkeyup=function(){wordsLimit()}; 
//			txtLimit.value=limitCount; 
//			} 
//			function wordsLimit(){ 
//				var noteCount=0; 
//				if(isbyte){noteCount=txtNote.value.replace(/[^\x00-\xff]/g,"x").length}else{
//					var str=txtNote.value;
//					for(var i=0;i<str.length;i++){
//						if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
//				          noteCount++;
//				        }else{
//				        	noteCount+=0.5;
//				        }
//					}
//				}
//				if(noteCount>limitCount){ 
//				if(isbyte){ 
//				txtNote.value=txtNote.value.substring(0,txtlength+Math.floor((limitCount-txtByte)/2)); 
//				txtByte=txtNote.value.replace(/[^\x00-\xff]/g,"x").length; 
//				txtLimit.value=limitCount-txtByte; 
//				}else{ 
//				txtNote.value=txtNote.value.substring(0,limitCount); 
//				txtLimit.value=0; 
//				} 
//				}else{ 
//				txtLimit.value=limitCount-noteCount; 
//				} 
//				txtlength=txtNote.value.length;//记录每次输入后的长度 
//				txtByte=txtNote.value.replace(/[^\x00-\xff]/g,"x").length; 
//			} 
//} 

//http://blog.csdn.net/yy_2011/article/details/6128387