
//电话号码：以1开头，第二位只能是3,4,5,7,8，后面是9位的数字
$("#userId").blur(
	function(){
		var phoneStr = $("#userId").val();
		var reg=/^1[34578]\d{9}$/;
		if(reg.test(phoneStr)){
			
			$.ajax(
					{
						type:"get",
						url:"php/checkUser.php",
						async:true,
						data:{
							userId:$(this).val()
						},
						success:function(data){
							if(data=="1"){
								$("#phoneTips").html("用户名已经存在");
							}else if(data=="0"){
								$("#phoneTips").html("<img src='img/keyizhuce.gif'>");
							}else if(data=="-1"){
								$("#phoneTips").html("服务器端异常");
							}
						}
					}
				)
		}
		else{
			$("#phoneTips").html("手机号格式不正确");
		}
	}
);


//邮箱验证:必须有@和.，而且@在.的前面，而且，@不能开头，@前面可以是数字字母下划线和点。
$("#email").blur(
	function(){
		var emailStr = $("#email").val();
		var reg=/^[\w\.]+@\w+(\.com|\.net|\.cn|\.com\.cn)$/;
		if(emailStr==""){
			$("#emailTips").html("请填写E-mail");
		}
		else{
			if(reg.test(emailStr)){
				$("#emailTips").html("<img src='img/keyizhuce.gif'>");
			}
			else{
				$("#emailTips").html("E-mail格式不正确");
			}
		}
	}
);

//邮箱订阅
$("#nowDY").click(
	function(){
		var dyEmailStr = $("#dyEmail").val();
		var reg=/^[\w\.]+@\w+(\.com|\.net|\.cn|\.com\.cn)$/;
		if(reg.test(dyEmailStr)){
			$("#emailRight").css("display","block");
		}
		else{
			$("#emailError").css("display","block");
		}
	}
)

//手机号注册
//密码：8-24位字符，可使用字母、数字或符号的组合
$("#userPass").blur(
	function(){
		var userPassStr = $("#userPass").val();
		var reg=/[0-9]+[a-zA-Z]+\w*|[a-zA-Z]+[0-9]+\w*/;
		if(userPassStr.length<8){
			$("#userPassTips").html("密码长度不能少于8位");
		}
		else{
			 if(reg.test(userPassStr)){
				$("#userPassTips").html("<img src='img/keyizhuce.gif'>");
			}
			else{
				$("#userPassTips").html("密码必须为8-24位字母与数字组合");
			}
		}
	}
);

//确认密码：8-24位字符，可使用字母、数字或符号的组合
$("#userCheckPass").blur(
	function(){
		var userPassStr = $("#userPass").val();
		var userCheckPassStr = $("#userCheckPass").val();
		if(userCheckPassStr.length<8){
			$("#userCheckPassTips").html("密码长度不能少于8位");
		}
		else{
			 if(userPassStr==userCheckPassStr){
				$("#userCheckPassTips").html("<img src='img/keyizhuce.gif'>");
			}
			else{
				$("#userCheckPassTips").html("两次密码不一致");
			}
		}
	}
);

//邮箱注册
//密码：8-24位字符，可使用字母、数字或符号的组合
$("#emailUserPass").blur(
	function(){
		var emailUserPassStr = $("#emailUserPass").val();
		var reg=/[0-9]+[a-zA-Z]+\w*|[a-zA-Z]+[0-9]+\w*/;
		if(emailUserPassStr.length<8){
			$("#emailUserPassTips").html("密码长度不能少于8位");
		}
		else{
			 if(reg.test(emailUserPassStr)){
				$("#emailUserPassTips").html("<img src='img/keyizhuce.gif'>");
			}
			else{
				$("#emailUserPassTips").html("密码必须为8-24位字母与数字组合");
			}
		}
	}
);

//确认密码：8-24位字符，可使用字母、数字或符号的组合
$("#emailUserCheckPass").blur(
	function(){
		var emailUserPassStr = $("#emailUserPass").val();
		var emailUserCheckPassStr = $("#emailUserCheckPass").val();
		if(emailUserCheckPassStr.length<8){
			$("#emailUserCheckPassTips").html("密码长度不能少于8位");
		}
		else{
			 if(emailUserPassStr==emailUserCheckPassStr){
				$("#emailUserCheckPassTips").html("<img src='img/keyizhuce.gif'>");
			}
			else{
				$("#emailUserCheckPassTips").html("两次密码不一致");
			}
		}
	}
);

//点击立即注册
$(".acceptReg").click(
	function(){
		$.ajax(
			{
				type:"post",
				url:"php/regSave.php",
				anync:true,
				data:{
					userId:$("#userId")[0].value,
					userPass:$("#userPass")[0].value
				},
				success:function(data){
					if(data=="1"){
						alert("注册成功，点击确认跳转到首页");
						location.href="index.html";
//						保存cookie
						addCookie("userId",$("#userId")[0].value,10);
					}else{
						alert("注册失败");
					}
				}
			}
		)
				
	}
);
