
var box=document.getElementById("sliderBox");

//获取每张图片	
var wrapObj=document.getElementById("wrap").children;

//获取按钮
var btn = document.getElementById("btn").children;
   
var num = 0;

/*让轮播图自己走，设置定时器*/
var time = null;  
time = setInterval(function(){
   	
   	go();
   	
},3000);
    

/* 底部小圆圈鼠标移入*/
     
for (var i in btn) {
   	btn[i].className="ccc";
   	btn[0].className="black";
   	btn[i].index = i;
   	btn[i].onmouseover = function(){
   		for (var j =0;j< wrapObj.length;j++) {
   			btn[j].className="ccc";
   			 wrapObj[j].style.opacity =0;
   		}
   		console.log(this.index);
   		btn[this.index].className="black";
   		wrapObj[this.index].style.opacity =1; 
   	}
   	
}
  
    /* 左右按钮的显示与隐藏*/
       box.onmouseover= function(){
       	  window.clearInterval(time);
       	};
       box.onmouseout = function(){
       	  window.clearInterval(time);
        	time = setInterval(function(){

        	go();
        	
        },3000);

         console.log("鼠标移出，打开定时器,自动播放")
       };

   
function go(){
   	num++;  
    if(num>= wrapObj.length){
     	num=0;
    }
   	console.log(num);
    for (var j =0;j<wrapObj.length;j++) {
   	 	 wrapObj[j].style.opacity =0;
		btn[j].className="ccc";
   	 	 
	}
   	wrapObj[num].style.opacity =1;
	btn[num].className="black";
}



