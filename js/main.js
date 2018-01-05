//入口
$(function(){
	//计算划动的时间
	var clearTimer=null;
	//当前显示的参数
	var $currentIndex=0;
	//即将显示
	var $index=0;
	$("#list li").eq(0).addClass("hover");
	//点击
	function clickPlay(){
		$("#list li").click(function(){
			$index=$(this).index();
			scrollPlay();
			$currentIndex=$index;
		})
	}
	clickPlay();
	//btn点击
	function btnClick(){
		$(".btnLeft").click(function(){
			$index--;
			
			if($index<0){
				$index=7;
			}
			$("#list li").eq($index).addClass("hover").siblings().removeClass("hover");
			$("#imgBox img").eq($currentIndex).stop(true,true).animate({"left":"-720px"});
			$("#imgBox img").eq($index).css("left","720px").stop(true,true).animate({
				"left":"0px"});
			$currentIndex=$index;
		});
		$(".btnRight").click(function(){
			$index++;
			
			if($index>7){
				$index=0;
			}
			$("#list li").eq($index).addClass("hover").siblings().removeClass("hover");
			//stop(true,true)是jquery中用于控制页面动画效果的方法，
			//运行之后立刻结束当前页面上的动画效果
			$("#imgBox img").eq($currentIndex).stop(true,true).animate({"left":"720px"});
			$("#imgBox img").eq($index).css("left","-720px").stop(true,true).animate({
				"left":"0px"});
			$currentIndex=$index;
		})
		
	}
	btnClick();
	
	//自动轮播
	function autoPlay(){
		clearTimer=setInterval(function(){
			$index++;
			if($index>7){
				$index=0;
			}
			scrollPlay();
			$currentIndex=$index;
		},2000)
		
	}
	autoPlay();
	
	function scrollPlay(){
		//eq()选择器，选择带有指定index值的元素
		$("#list li").eq($index).addClass("hover").siblings().removeClass("hover");
		//向左移动
		if($index>$currentIndex){
			//stop(true,true)是jquery中用于控制页面动画效果的方法，
			//运行之后立刻结束当前页面上的动画效果
			$("#imgBox img").eq($currentIndex).stop(true,true).animate({"left":"-720px"});
			$("#imgBox img").eq($index).css("left","720px").stop(true,true).animate({
				"left":"0px"});
		    }
			else if($index<$currentIndex){
			$("#imgBox img").eq($currentIndex).stop(true,true).animate({"left":"720px"});
			$("#imgBox img").eq($index).css("left","-720px").stop(true,true).animate({
				"left":"0px"});
			}
	}
	
	//清除定时器
	function clearTime(){
	  $("#box").hover(function(){
	  	clearInterval(clearTimer);
	  	clearTime=null;
	  },function(){
	  	autoPlay();
	  })
	}
	clearTime();
})
