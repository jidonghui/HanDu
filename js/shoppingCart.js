	
//隐藏和显示
function showDom(dom){
	dom.css("display","block");
}

function hideDom(dom){
	dom.css("display","none");
}

//全选和反选
jQuery.fn.extend({
	checked:function(isChecked){
		this.each(function(){
			this.checked = isChecked;
		});
	},
	unchecked:function(){
		this.each(function(){
			this.checked = !this.checked;
		});
	},
	backControl:function(leaderDom){
		let isTrue = true;
		this.each(function(){
			if(this.checked==false){
				isTrue = false;	
			}
		});
		leaderDom.checked = isTrue;		
	}
});


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

//	显示购物车列表
	var str="";
	var userId=getCookie("userId");
	$.ajax(
		{
			type:"get",
			url:"php/getShoppingCart.php",
			data:{
				vipName:userId
			},
			success:function(data){
				var d=eval(data);
				console.log(d);
				for(var i=0;i<d.length;i++){
					str+='<div class="oneGood">'+	
							'<ul>'+
								'<li class="selectLi">'+
									'<input type="checkbox" />'+
								'</li>'+
								'<li class="smallImg">'+
									'<a href=""><img src="'+d[i].goodsImg+'"/></a>'+
								'</li>'+
								'<li class="miaoshu">'+
									'<p><a href="">娜娜日记2017秋装新款女装宽松学生红色刺绣系带卫衣女嫤0829</a></p>'+
									'<span>颜色：红色</span>'+
									'<span>尺码：XS</span>'+
								'</li>'+
								'<li class="priceLi">'+
									'<p>'+d[i].beiyong2+'</p>'+
									'￥<span class="unitPrice">'+d[i].goodsPrice+'.00</span>'+
								'</li>'+
								'<li class="countLi">'+
									'<input class="changeCount jian" type="button" value="-" />'+
									'<input id="bigChange" class="goodsCount" goodsId='+d[i].goodsId+' type="text" value="'+d[i].goodsCount+'" maxlength="3" />'+
									'<input class="changeCount jia" type="button" value="+" />'+
								'</li>'+
								'<li>'+
									'<p class="fuhao">￥<span class="nowPrice">'+d[i].goodsPrice+'.00</span></p>'+
								'</li>'+
								'<li class="caozuo">'+
									'<span>移入收藏夹</span>'+
									'<span class="deleteGoods" goodsId='+d[i].goodsId+'>删除</span>'+
								'</li>'+
								'<li>'+
									'<a href="">'+d[i].goodsDesc+'</a>'+
								'</li>'+
							'</ul>'+
						'</div>';
				}
				$(".pinkDiv").after(str);
				all();
			}
		}
	);


	//点击继续购物
	$(".shopBtn").click(
		function(){
			location.href="list.html";	
		}
	);


	
	function all(){
		//点击删除
		$(".oneGood").on('click',".deleteGoods",function(){
		var id=$(this).attr("goodsId");
		$.ajax({
				type:"get",
				url:"php/deleteGoods.php",
				data:{
					vipName:userId,
					goodsId:id
				},
				success:function(data){
					if(data=="1"){
						alert("删除成功");
						location.reload();
					}else{
						alert("删除失败");
					}
				}
		});
	});
	
	//修改数量
	function changeNum(obj){
		var id=$(obj).attr("goodsId");
		$.ajax({
			type:"get",
			url:"php/updateGoodsCount.php",
			data:{
				vipName:userId,
				goodsId:id,
				goodsCount:$(obj).val()
			},
			success:function(data){
				if(data=="1"){
					console.log("修改成功");
				}else{
					console.log("修改失败");
				}
			}
		});
	}
	
	
	//加减数量
	//减号
	$(".jian").click(
		function(){
			var ord=$(".jian").index(this);
			var num=$(".goodsCount")[ord].value;
			var price=$(".unitPrice")[ord].innerHTML;
			if(num<=1){
				return;
			}else{
				num--;
				//显示数量
				$(".goodsCount")[ord].value=num;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				var zong=Number(num)*Number(price);
				zong=zong.toFixed(2);
				//显示单个商品的总价
				$(".nowPrice")[ord].innerHTML=zong;
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
			}
			changeNum(this.nextElementSibling);
		}
	);
	
	// 加号
	$(".jia").click(
		function(){
			var ord=$(".jia").index(this);
			var num=$(".goodsCount")[ord].value;
			var price=$(".unitPrice")[ord].innerHTML;
			if(num>=999){
				return;
			}else{
				num++;
				//显示数量
				$(".goodsCount")[ord].value=num;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				var zong=Number(num)*Number(price);
				zong=zong.toFixed(2);
				//显示单个商品的总价
				$(".nowPrice")[ord].innerHTML=zong;
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
			}
			//修改数量
			changeNum(this.previousElementSibling);
		}
	);
	
	//数量
	$(".goodsCount").blur(
		function(){
			var ord=$(".goodsCount").index(this);
			var num=$(".goodsCount")[ord].value;
			var price=$(".unitPrice")[ord].innerHTML;
			if($.isNumeric(($(this).val()))==false){
				alert("请输入正常的数量");
				$(this)[0].value=1;
				var zong=1*Number(price);
				zong=zong.toFixed(2);
				$(".nowPrice")[ord].innerHTML=zong;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
				
			}else if($(this)[0].value<=0){
				alert("数量不能小于1哦");
				$(this)[0].value=1;
				var zong=1*Number(price);
				zong=zong.toFixed(2);
				$(".nowPrice")[ord].innerHTML=zong;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
				
			}else{
				$(this)[0].value=num;
				var zong=Number(num)*Number(price);
				zong=zong.toFixed(2);
				$(".nowPrice")[ord].innerHTML=zong;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
			}
			//修改数量
			changeNum(this);
		}
	);

	


	//全选与反选
	
	$(".allSelect").click(function(){
		$(".oneGood :checkbox").checked($(".allSelect")[0].checked);
	});
	
	$(".oneGood :checkbox").click(function(){
		$(".oneGood :checkbox").backControl($(".allSelect")[0]);
	});
	
	}
	
	
	//修改数量
	
	

});