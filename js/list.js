	
//隐藏和显示
function showDom(dom){
	dom.css("display","block");
}

function hideDom(dom){
	dom.css("display","none");
}

//商品图片
var goodsImgs=["img/201708230408000_NL7815.jpg","img/201708230408001_NL7815.jpg","img/201708230408002_NL7815.jpg",
				"img/201708230408003_NL7815.jpg","img/201708230408004_NL7815.jpg"];
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
	$(".footer").load("common/footer.html");
	
//	
//	$("#list1").on("click",".add",function(){
//
//            	var id=$(this).attr("goodid");
//            	addCookie("goodid",id,1);
//			  })

	

	//获得所有商品
	$.get("php/getGoodsList.php",function(data){
		data=eval(data);
		 for(var i=0;i<data.length;i++){
//			console.log(data[i]);
		 	$(".goodsDiv").append("<div class='smallList'><a href='details.html?goodsId="+data[i].goodsId+"'><img class='nowImg' src='"+data[i].beiyong1+"'></a><img src='"+data[i].goodsImg+"'><p><span>"+data[i].goodsPrice+"</span><span>"+data[i].beiyong2+"</span></p><p>"+data[i].goodsDesc+"</p><ul class='msgUl'><li>4735</li><li>消息</li></ul><ul class='pjUl'><li>2</li><li>累计评价</li></ul></div>")
		 }
	});

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
		
	//全部商品分类
	
	//划过全部商品分类
	
	$(".specialP").mouseenter(
		function(){
			$(".sortAll").show();
		}
	);
	$(".specialP").mouseleave(
		function(){
			$(".sortAll").hide();
		}
	);
	$(".sortAll").mouseenter(
		function(){
			$(".sortAll").show();
		}
	);
	$(".sortAll").mouseleave(
		function(){
			$(".sortAll").hide();
		}
	);
	$(".allType").mouseenter(
		function(){
			$(".sortAll").show();
		}
	);
	$(".allType").mouseleave(
		function(){
			$(".sortAll").hide();
		}
	);
	
	//划过左侧边栏
	
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
  	
  		
	//滚动条位置改变时触发，让顶部悬浮和侧边悬浮显示
	//必须有触发条件
	$(document).scroll(function(){
		if($(document).scrollTop()>=200){
			$(".aside").fadeIn();
		}else{
			$(".aside").fadeOut();
		}
	});
	
	$(".aside li:last-child").click(
		function(){
			$('html,body').animate({scrollTop:0},500);
		}
	);
	
	//二级菜单
	var secondList=$(".sortList dl");
	$(".sortList dl dt span").click(
		function(){
			let index=$(".sortList dl dt span").index(this);
			$(secondList[index]).addClass("currentDl");
			$(secondList[index]).siblings().removeClass("currentDl");
		}
	);
	//三级菜单
	var thirdList=$(".sortList dl ul");
	$(".sortList dl dd p").click(
		function(){
			let index=$(".sortList dl dd p").index(this);
			$(this).siblings().toggle();
		}
	)
});