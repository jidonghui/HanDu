
//事件注册(绑定)的兼容性写法
//注册事件（添加事件）
//参数：dom,eventType,func,isBubble

function addEvent(dom,eventType,func,isBubble){
	if(dom.attachEvent){
		dom.attachEvent("on"+eventType,func);
	}
	else if(dom.addEventListener){		
		dom.addEventListener(eventType,func,isBubble);
	}
	else{
		dom["on"+eventType]=func;
	}
}

//删除事件

function removeEvent(dom,eventType,func){
	if(dom.detachEvent){
		dom.detachEvent("on"+eventType,func);
	}else{
		dom.removeEventListener(eventType,func);
	}
}

//阻止事件冒泡的兼容性函数
function stopBubble(evt){
	if(evt.cancelBubble){
		evt.cancelBubble=true;
	}
	else{
		evt.stopPropagation();
	}
}

//阻止浏览器默认行为的兼容性函数
function preventDefaultBehavior(evt){
	if(evt.preventDefault){
		evt.preventDefault();
	}
	else{
		evt.returnValue=false;
	}
}