<?php
    header("content-type:text/html;charset=utf8");
	$data = array(
		array(
			'src' => '../img/new/1.jpg',
			'title' => '华熙十周年纪念军装版',
			'price' => '￥4249.00'
		),
		array(
			'src' => '../img/new/2.jpg',
			'title' => '二十四节气-清明',
			'price' => '￥2350.00'
		),
		array(
			'src' => '../img/new/3.jpg',
			'title' => '和果子',
			'price' => '￥1550.00'
		),
		array(
			'src' => '../img/new/4.jpg',
			'title' => '兰陵王sp军装版',
			'price' => '￥2880.00'
		),
		array(
			'src' => '../img/new/5.jpg',
			'title' => '潘安-军装版',
			'price' => '￥2880.00'
		),
		array(
			'src' => '../img/new/6.jpg',
			'title' => '12周年限定莫妮卡Monica',
			'price' => '￥2250.00'
		),
		array(
			'src' => '../img/new/7.jpg',
			'title' => 'Mavis',
			'price' => '￥2250.00'
		),
		array(
			'src' => '../img/new/8.jpg',
			'title' => '潘安',
			'price' => '￥2880.00'
		)	
	);
	echo json_encode($data);
?>