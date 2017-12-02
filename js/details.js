	
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

	$(".imgBox").mouseover(
		function(){
//			alert("是素数");
				singleton.getInstance({
					//容器的dom对象
					boxDom : $(".imgBox")[0],
					//放大镜的尺寸（宽和高）
					width : 240,
					height : 240,
					//放大的倍数
					mult :2,
					//透明度
					opacity : 0.5,
					//背景色
					bgColor : "#fff",					
					//放大效果
					bigObj : {
						//位置
						pos:"右",
						pic:$(".imgBox img")[0].src
					}
				}
			)
		}
	);
	
	
//	列表跳转到详情页的方法
//	方法一:哈希
//	获取url中的参数
//	function getUrlParam(name) {
//	 var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
//	 var r = window.location.search.substr(1).match(reg); //匹配目标参数
//	 if (r != null) return unescape(r[2]); return null; //返回参数值
//	}
	//接收URL中的参数booksId
//	var id = getUrlParam('goodsId');
//	console.log('id:'+id);
	
	
	//得到编号
	//得到地址栏中?及?后的部分
	var urlParam= window.location.search;
//	console.log(urlParam);
//	得到想要的数据
//  var loc = urlParam.substring(urlParam.lastIndexOf('=')+1, urlParam.length);
	var needData = urlParam.substring(urlParam.indexOf('=')+1);
//	console.log(needData);
	
//	通过获取到的数据得到该商品的详细信息
	$.ajax(
   			{
				type:"get",
				url:"php/getGoodsInfo.php",
				anync:true,
				data:{
						goodsId:needData
					},
				success:function(data){
//					console.log(data);
//					将返回的数据转换为json
					data=JSON.parse(data);
					console.log(data);
					$(".imgBox img").attr("src",data.goodsImg);
					$(".highPrice").html(data.beiyong2);
					$(".lowPrice").html(data.goodsPrice);
					$(".des").html(data.goodsDesc);
				}
			}
   		);


	
	//点击加入购物车
	$(".addCart").click(
		function(){
			var sum=Number($(".countInput").val());
			var userId=getCookie("userId");
			$.ajax({
				type:"get",
				url:"php/addShoppingCart.php",
				data:{
					vipName:userId,
					goodsId:needData,
					goodsCount:sum
				},
				success:function(data){
					if(data=="1"){
						alert("添加成功");
						location.href="shoppingCart.html";
					}else{
						alert("添加失败");
					}
				}
			})
		}
	);
	
	
	
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
		if($(document).scrollTop()>=500){
			$(".aside").fadeIn();
			$(".shareBox").css({"top":"40px"});
		}else{
			$(".aside").fadeOut();
			$(".shareBox").css({"top":"-300px"});
		}
	});
	
	$(".aside li:last-child").click(
		function(){
			$('html,body').animate({scrollTop:0},500);
		}
	);


	//分享到
	$(".shareSpan").mouseenter(
		function(){
			$(".shareBox").show();
		}
	);
	$(".shareSpan").mouseleave(
		function(){
			$(".shareBox").hide();
		}
	);
	$(".shareBox").mouseenter(
		function(){
			$(".shareBox").show();
		}
	);
	$(".shareBox").mouseleave(
		function(){
			$(".shareBox").hide();
		}
	);
	
	//要放大的图片
	$(".imgUl li img").click(
		function(){
			let ord=$(".imgUl li img").index(this);
			$(this).css({"border":"1px solid #c80a28"});
			$(this).siblings().css({"display":"inline-block"});
			$(this).parent().siblings().find("span").css({"display":"none"});
			$(this).parent().siblings().find("img").css({"border":"1px solid #fff"});
			$(".imgBox img").attr("src",goodsImgs[ord]);
		}
	);
	
	
	//选择尺码和颜色
	$(".goodsChiose ul li").click(
		function(){
			$(this).css({"border":"1px solid #c80a28"});
			$(this).find("span").css({"display":"inline-block"});
			$(this).siblings().css({"border":"1px solid #dddddd"});
			$(this).siblings().find("span").css({"display":"none"});
			$(".chima").html("["+$(this).html()+"]");
			$(".yanse").html("["+$(".colorUl li").html()+"]");
			
		}
	);
	//二维码图片
	$(".ewmSpan").mouseenter(
		function(){
			$(".goodsEwm").show();
		}
	);
	$(".ewmSpan").mouseleave(
		function(){
			$(".goodsEwm").hide();
		}
	);
	$(".goodsEwm").mouseenter(
		function(){
			$(".goodsEwm").show();
		}
	);
	$(".goodsEwm").mouseleave(
		function(){
			$(".goodsEwm").hide();
		}
	);
	


	//减号
	$(".minusBtn").click(
		function(){
			if($(".countInput")[0].value<=1){
				return;
			}else{
				$(".countInput")[0].value--;
			}
		}
	);
	// 加号
	$(".plusBtn").click(
		function(){
			if($(".countInput")[0].value>=999){
				return;
			}else{
				$(".countInput")[0].value++;
			}
		}
	);

	//数量
	$(".countInput").blur(
		function(){
			if($.isNumeric(($(this).val()))==false){
				alert("请输入正常的数量");
				$(".countInput")[0].value=1;
			}else if($(this)[0].value<=0){
				alert("数量不能小于1哦");
				$(".countInput")[0].value=1;
			}
		}
	);

	//悬浮栏
	$(".centerUl li").click(
		function(){
			$(this).addClass("currentLi");
			$(this).siblings().removeClass("currentLi");
		}
	);
	
	$(document).scroll(function(){
		if($(document).scrollTop()>=920){
			$(".goodsCenter").addClass("topDiv");
			$(".goodsCenter").find($(".nowAdd")).css({"display":"inline-block"});
		}else{
			$(".goodsCenter").removeClass("topDiv");
			$(".goodsCenter").find($(".nowAdd")).css({"display":"none"});
			
			
		}
	});
	
});