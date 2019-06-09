<?php
	header("content-type:text/html;charset=utf8");
    include('public.php');
	$uname = $_GET['uname'];
	$pwd = $_GET['upwd'];
	$email = $_GET['email'];
	$spl = " select * from angel where name = '$uname'";
	$res = mysqli_query($connect,$spl);
	$arr = mysqli_fetch_assoc($res);
	if($arr){
		echo json_encode(array(
			'state' => '0',
			'info' => '账户已存在，请重新输入'
		));
	}else{
		$inest = "insert into angel (name,pwd,email) values ('$uname','$pwd','$email') ";
		mysqli_query($connect,$inest);
		echo json_encode(array(
			'state' => '1',
			'info' => '注册成功'
		));
	}

?>