
<?php
    header("content-type:text/html;charset=utf8");
	$data = array(
		array(
			'src' => '../img/hot/1.jpg',
			'title' => '70+男华熙军装套装-澄邈',
			'price' => '￥1198.00'
		),
		array(
			'src' => '../img/hot/2.jpg',
			'title' => '二十四节气-清明',
			'price' => '￥425.00'
		),
		array(
			'src' => '../img/hot/3.jpg',
			'title' => '和果子',
			'price' => '￥885.00'
		),
		array(
			'src' => '../img/hot/4.jpg',
			'title' => '兰陵王sp军装版',
			'price' => '￥695.00'
		),
		array(
			'src' => '../img/hot/5.jpg',
			'title' => '潘安-军装版',
			'price' => '￥580.00'
		),
		array(
			'src' => '../img/hot/6.jpg',
			'title' => '12周年限定莫妮卡Monica',
			'price' => '￥788.00'
		),
		array(
			'src' => '../img/hot/7.jpg',
			'title' => 'Mavis',
			'price' => '￥648.00'
		),
		array(
			'src' => '../img/hot/8.jpg',
			'title' => '潘安',
			'price' => '￥698.00'
		)	
	);
	echo json_encode($data);
?>
