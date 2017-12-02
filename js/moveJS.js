
var inc=2;
var myTimer=null;
var currLeft=0;

function stop(){
	window.clearInterval(myTimer);
	myTimer=null;
	return;
}
function start(domObj){
	moveH(domObj);
}
function moveH(domObj){
	
	myTimer=setInterval(function(){
		
		//改变数据
		currLeft+=inc*-1;
		//判断边界
		if(currLeft<=-1000 || currLeft>=0){
			currLeft=0;
			domObj.css("left",currLeft+"px");
		}
		//改变外观
		domObj.css("left",currLeft+"px");
//		$("#imgBox").style.left=currLeft+"px";
	
	},50);
}


function moveTop(domObj,attr,startValue,endValue,inc,direction,timeOut){
	//1、初始化数据
	let timeSpace = timeOut/(Math.abs(startValue-endValue)/inc);
	let myTimer=null;
	let currValue = startValue;
	//2、初始化外观；
//	domObj.style[attr] = startValue+"px";
	domObj.css(attr,attr(endValue));
	
	(function(){
		if(myTimer!=null){
			window.clearInterval(myTimer);
		}
		myTimer = setInterval(function(){
			currValue=currValue+direction*inc;
			//边界处理
			let isOut = startValue>endValue?currValue<endValue:currValue>endValue;
			if(isOut){
				window.clearInterval(myTimer);
				myTimer = null;
				return;
			}
//			domObj.style[attr]= currValue+"px";	
//			domObj.css("left",currLeft+"px");
			domObj.css(attr,attr(endValue));
			
			
		},timeSpace);
	})();
}