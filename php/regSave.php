<?php
	header("Content-type:text/html;charset=utf-8");
	
	//1.接收客户端的输入（用户的输入）
	
	$userId=$_POST['userId'];
	$userPass=$_POST['userPass'];

	// 2.处理（判断该用户是否被注册过，如果没有注册过，保存用户输入的信息到数据库中）
	
	// 1）连接数据库服务器
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "注册失败！服务器异常，请稍后再试...";
	}else{
		
		// 2)选择数据库
		mysql_select_db("yishe",$con);
		
		// 3)执行SQL语句（增）
		$sqlStr="insert into vipUser(userId,userPass) values('".$userId."','".$userPass."')";
//		echo $sqlStr;

		$t =mysql_query($sqlStr,$con);

		

		// 3、注册成功！
		if($t==1){
			echo "1";
		}else{
			echo "0";
		}
		
		// 4)关闭数据库
		mysql_close($con);
		
	}
?>