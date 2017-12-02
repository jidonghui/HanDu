<?php
	header("Content-type:text/html;charset=utf-8");

	//1.接收客户端的数据（用户的输入）
	
	$userId = $_POST['userId'];
	$userPass=$_POST['userPass'];

	//2.处理
	// 1）连接数据库服务器
	$con=mysql_connect("localhost","root","root");
	if(!$con){
		echo "-1";
	}else{
		//2）选择数据库
		mysql_select_db("yishe",$con);

		//3）执行SQL语句（查）
		$sqlStr="select * from vipUser where userId='".$userId."' and userPass='".$userPass."'";
		// echo $sqlStr;
		$result=mysql_query($sqlStr,$con);
		
		// 4）关闭数据库
		mysql_close($con);
		
		// 数据库中查询出结果，表示登录成功
		if(mysql_num_rows($result)==1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>