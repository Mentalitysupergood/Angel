<?php
	header("content-type:text/html;charset=utf8");
	include('public.php');
	
	$name = $_GET['uname'];
	$pwd = $_GET['upwd'];
	
	$sql = " select * from angel where name = '$name'";
	$res = mysqli_query($connect,$sql);
	$arr = mysqli_fetch_assoc($res);
	if($arr){
	    //用户名存在    开始判断密码
	    if($pwd == $arr['pwd']){
	        echo json_encode(array(
	            'state' => '1',
	            'info' => '登陆成功'
	        ));
	    }else{
	        echo json_encode(array(
	            'state' => '0',
	            'info' => '密码错误'
	        ));
	    }
	}else{
	    //用户名不存在
	    echo json_encode(array(
	        'state' => '0',
	        'info' => '用户名不存在'
	    ));
	}
?>