	
//隐藏和显示
function showDom(dom){
	dom.css("display","block");
}

function hideDom(dom){
	dom.css("display","none");
}

//验证码图片
let codeImg=["img/code1.jpg","img/code2.jpg","img/code3.jpg","img/code4.jpg","img/code5.jpg",
			 "img/code6.jpg","img/code7.jpg","img/code8.jpg","img/code9.jpg","img/code10.jpg",
			 "img/code11.jpg","img/code12.jpg","img/code13.jpg","img/code14.jpg","img/code15.jpg",
			 "img/code16.jpg","img/code17.jpg","img/code18.jpg","img/code19.jpg","img/code20.jpg",
			 "img/code21.jpg","img/code22.jpg","img/code23.jpg","img/code24.jpg","img/code25.jpg",
			 "img/code26.jpg","img/code27.jpg","img/code28.jpg","img/code29.jpg","img/code30.jpg"
			];


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
  	
	
	//使用手机注册或邮箱注册
	$(".regMethod").children("span").click(
		function(){
			$(this).css({"color":"#ffffff",
    					"background-position":"0 -102px"});
    		$(this).siblings().css({"color":"#393939",
    					"background-position":"0 -151px"});
		}
	)
	//使用手机注册
	
	$(".phoneSpan").click(
		function(){
			$(".phoneRegUl").show();
			$(".emailRegUl").hide();
		}
	);
	//使用邮箱注册
	$(".emailSpan").click(
		function(){
			$(".emailRegUl").show();
			$(".phoneRegUl").hide();
		}
	);
	//验证码弹出框
	$(".sendCode").click(
		function(){
			showDom($(".checkCodeDiv"));
		}
	);
	$(".closeCode").click(
		function(){
			hideDom($(".checkCodeDiv"));
		}
	);
	
	//验证码输入框
  	$(".emailCode").focus(
  		function(){
  			$(this).css({"border":"1px solid #000000"});
  		}
  	);
  	$(".emailCode").blur(
  		function(){
			$(this).css({"border":"1px solid #dedede"});
  		}
  	);
  	
  	//验证码图片
  	$(".codePic").click(
  		function(){
			$(".codePic").attr("src","img/code"+parseInt(1+Math.random()*(30-1))+".jpg");  			
  		}
  	);
  	
  	
  
});