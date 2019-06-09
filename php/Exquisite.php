
<?php
    header("content-type:text/html;charset=utf8");
	$data = array(
		array(
			'src' => '../img/jingmei/1.jpg',
			'title' => '三分女冬至配饰',
			'price' => '￥198.00'
		),
		array(
			'src' => '../img/jingmei/2.jpg',
			'title' => '三分女嫦娥古风头饰',
			'price' => '￥380.00'
		),
		array(
			'src' => '../img/jingmei/3.jpg',
			'title' => '四分黄泉冥海古风头冠',
			'price' => '￥360.00'
		),
		array(
			'src' => '../img/jingmei/4.jpg',
			'title' => '动物耳朵发箍/黄色',
			'price' => '￥35.00'
		),
		array(
			'src' => '../img/jingmei/5.jpg',
			'title' => '冰语复古晚宴包',
			'price' => '￥126.00'
		),
		array(
			'src' => '../img/jingmei/6.jpg',
			'title' => '3分女小雪古风头饰',
			'price' => '￥158.00'
		)
	);
	echo json_encode($data);
?>
