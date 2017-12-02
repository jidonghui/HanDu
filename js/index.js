

//隐藏和显示
function showDom(dom){
	dom.css("display","block");
}

function hideDom(dom){
	dom.css("display","none");
}


//定义原始图片路径数组和新的图片路径数组

let sortOldImg=["img/tb1.png","img/tb2.png","img/tb3.png","img/tb4.png",
			"img/tb5.png","img/tb6.png","img/tb7.png"];
			
let sortNewImg=["img/tb01.png","img/tb02.png","img/tb03.png","img/tb04.png",
			"img/tb05.png","img/tb6.png","img/tb7.png"];


//company
let oldImgs=["img/DKN.jpg","img/FQ.jpg","img/H-.jpg","img/NA.jpg","img/NBS.jpg","img/SL.jpg",
			"img/YT.jpg","img/ZG.jpg","img/gy.jpg","img/hw.jpg","img/mn.jpg",
			"img/pig.jpg","img/NA.jpg","img/H-.jpg","img/NA.jpg","img/FQ.jpg"];


let newImgs=["img/DKN-.jpg","img/FQ-.jpg","img/HN-.jpg","img/NA-.jpg","img/NBS-.jpg","img/SL-.jpg",
			"img/YT-.jpg","img/ZG-.jpg","img/gy-.jpg","img/hw-.jpg","img/mn-.jpg",
			"img/pig-.jpg","img/NA-.jpg","img/HN-.jpg","img/NA-.jpg","img/FQ-.jpg"];


$(function(){
	
	$(".nav").load("common/nav.html",function(){
		var userId=getCookie("userId");
	   	if(userId==null)
	   	{
	   		$(".change")[0].innerHTML="登录";
	   	}else{
	   		$(".change")[0].innerHTML=userId;	
		}
	   	
	   	//nav
		//划过网站导航
		$("#dhId").mouseover(
			function(){
				showDom($("#mapId"));
			}	
		);
		$("#dhId").mouseout(
			function(){
				hideDom($("#mapId"));
			}
		);
		$("#mapId").mouseover(
			function(){
				showDom($("#mapId"));
			}
		);
		$("#mapId").mouseout(
			
			function(){
				hideDom($("#mapId"));
			}
		);
	
	});
	$(".map").load("common/map.html");
	
	//header
	//搜索框获取焦点 失去焦点
	$("#searchId").focus(
		function(){
			if($("#searchId").val()=="减龄不做作的时髦Tee"){
				$("#searchId").val("");
			}
		}
	);
	$("#searchId").blur(
		function(){
			if($("#searchId").val()==""){
				$("#searchId").val("减龄不做作的时髦Tee");
			}
		}
	);
	
	
	//顶部悬浮
	//顶部悬浮搜索框获取焦点 失去焦点
	$("#searchTopId").focus(
		function(){
			if($("#searchTopId").val()=="秋日穿搭发愁 唯有连衣裙解忧"){
				$("#searchTopId").val("");
			}
		}
	);
	$("#searchTopId").blur(
		function(){
			if($("#searchTopId").val()==""){
				$("#searchTopId").val("秋日穿搭发愁 唯有连衣裙解忧");
			}
		}
	);
	
	
	//滚动条位置改变时触发，让顶部悬浮和侧边悬浮显示
	//必须有触发条件
	$(document).scroll(function(){
		if($(document).scrollTop()>=800){
			$(".searchTop").slideDown(500);
			$(".aside").fadeIn();
		}else{
			$(".searchTop").slideUp(500);
			$(".aside").fadeOut();
		}
	});
	
	$(".aside li:last-child").click(function(){
			$('html,body').animate({scrollTop:0},500);
		}
		
	);

	
	
	
	//全部商品分类
	
	$(".sortAll li").hover(
		function(){
			$(this).each(
				function(){
					$(this).css("background","#333333");
					$(this).children("h2").css({"color":"#ffffff","text-indent":"10px"});
					$(this).children("a").css("color","#ffffff");
					$(".specialA").css("color","#ff0000");
				}
			)
		},
		function(){
			$(this).each(
				function(){
					$(this).css("background","#e3e3e3");
					$(this).children("h2").css({"color":"#333333","text-indent":"0px"});
					$(this).children("a").css("color","#555555");
					$(".specialA").css("color","#ff0000");
				}
			)
		}
	);
	
	
	//二级菜单
	//左侧边栏
  	let list=$(".goodsList");
  	//右侧边栏
  	let type=$(".goodsType");
  
  	for(let i=0;i<list.length-2;i++) {   
  		//划过左侧边栏里的li
        $(list[i]).hover(
            function(){
             	$(type[i]).fadeIn(300);
            },
            function(){
             	$(type[i]).hide();
            }
        ); 
         //划过右侧边栏里的li
        $(type[i]).hover(
            function(){
             	$(type[i]).show();
             	$(list[i]).css("background","#333333");
				$(list[i]).children("h2").css({"color":"#ffffff","text-indent":"10px"});
				$(list[i]).children("a").css("color","#ffffff");
				$(".specialA").css("color","#ff0000");
            },
            function(){
             	$(type[i]).hide();
             	$(list[i]).css("background","#e3e3e3");
				$(list[i]).children("h2").css({"color":"#333333","text-indent":"0px"});
				$(list[i]).children("a").css("color","#555555");
				$(".specialA").css("color","#ff0000");
            }
        );
        //离开左侧边栏
        $(type).mouseleave(
            function(){
             	$(type).hide();
            }
        );
       //离开右侧边栏
         $(list).mouseleave(
            function(){
             	$(type).hide();
            }
        );
     }

	
	//划过companyBox
	$(".companyBox a img").hover(
		function(){
			let index=$(".companyBox a img").index(this);
			$(this).attr("src",newImgs[index]);
		},
		function(){
			let index=$(".companyBox a img").index(this);
			$(this).attr("src",oldImgs[index]);
		},
	);
	
	//划过新闻
	//上边栏
  	let newsli=$(".newsLi");
  	//下边栏
  	let newsul=$(".newsContent");
  
  	for(let i=0;i<newsli.length;i++) {
  		//划过上边栏的li
        $(newsli[i]).hover(
            function(){
             	$(this).css({"border-bottom":"2px solid #ff0f3f"});
            	$(this).siblings().css({"border-bottom":"2px solid #e7e7e7"});
             	$(newsul[i]).show();
             	$(newsul[i]).siblings().hide();
             	
            },
            function(){
				$(this).css({"border-bottom":"2px solid #ff0f3f"});
				$(newsul[i]).siblings().hide();
            }
        ); 
        //划过下边栏的li
        $(newsul[i]).hover(
            function(){
             	$(newsli[i]).css({"border-bottom":"2px solid #ff0f3f"});
            	$(newsli[i]).siblings().css({"border-bottom":"2px solid #e7e7e7"});
             	$(newsul[i]).show();
             	$(newsul[i]).siblings().hide();
            },
            function(){
            	$(newsli[i]).css({"border-bottom":"2px solid #ff0f3f"});
            	$(newsli[i]).siblings().css({"border-bottom":"2px solid #e7e7e7"});
             	$(newsul[i]).siblings().hide();
            }
        );
     }

	
	//sort
	//划过韩都资讯
	
	$("#zxId").hover(
		function(){
			showDom($("#sjId"));
		},
		function(){
			hideDom($("#sjId"));
		}
	);
	$("#sjId").mouseover(
		function(){
			showDom($("#sjId"));
		}
	);
	$("#sjId").mouseout(
		function(){
			hideDom($("#sjId"));
		}
	);
	
	//划过明星家族 图片变小
	$("#startImg").hover(
		function(){
			$(this).css({"width":"35px","height":"35px"});
		},
		function(){
			$(this).css({"width":"40px","height":"40px"});
		}
	);
	
	//热销排行榜
    $('.hotSale').mouseenter(function(){
         	$(this).find('.phb').hide();
         	$(this).find('.phbUl').show();
         	$(this).siblings().find('.phb').show();
         	$(this).siblings().find('.phbUl').hide();
         	
        });

	//友情链接
	moveH($(".allA"));
	$(".allA").mouseover(
		function(){
			stop();
		}
	);
	$(".allA").mouseout(
		function(){
			start($(".allA"));
		}
	);
	
});

