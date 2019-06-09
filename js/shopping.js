var timer = "";
	function ShopShow(){
			
			$('.shopImgBox img').mouseover(function(){
			timer =	setTimeout(function showCss(){
				$('.showHid').stop().css('display','block')
			},300)
			
		})
	
	}
	
	new ShopShow()
	
	
	
	
	
	
	
	
	
	
	
	$('.shopImgBox img').mouseout(function(){
		$('.showHid').stop().css('display','none')
		clearTimeout(timer)
		
	})
	$('.showHid').mouseover(function(){
		$(this).stop().css('display','block')
	})
	$('.showHid').mouseout(function(){
		$(this).stop().css('display','none')
	})
	
	
	
	
	
	
	
	
	
	
	
	
	$('.shopImgBox img').mouseover(function(){
		$('.guanZhu').stop().css('display','block')
	})
	$('.shopImgBox img').mouseout(function(){
		$('.guanZhu').stop().css('display','none')
	})
	
	

	
	
	
	
	
	
	
	
	var count = document.querySelector('.count');
	var add = document.querySelector('.add');
	var minus = document.querySelector('.minus');
	var price = document.querySelector('.price')
	var danJia = price.innerHTML;
	// console.log(price.innerHTML)
	add.onclick = function(){
		var a = count.innerHTML;
		a++;
		
		count.innerHTML = a ;
		// price.innerHTML = a * danJia + '.00';
		if (a > 10) {
			alert('库存不足');
			count.innerHTML = 10 ;
			// price.innerHTML = 10 * danJia + '.00';
		}
	}
	minus.onclick = function(){
		var a = count.innerHTML;
		a--;
		count.innerHTML = a ;
		// price.innerHTML = a * danJia + '.00';
		if (a <= 0) {
			count.innerHTML = 1 ;
			// price.innerHTML = 0;  
		}
	}
	
	
	
	// $('.weCat .fenX').click(function(){
	// 	// $('.wcShowBox').css('display','block')
	// 	console.log($('.weCat .fenX'))
	// })
	var fenX = document.querySelectorAll('.weCat i');
	var wcShowBox = document.querySelector('.wcShowBox');
	// console.log(fenX[0])
	fenX[0].onmouseover = function(){
		wcShowBox.style.display = 'block'
	}
	fenX[0].onmouseout = function(){
		wcShowBox.style.display = 'none'
	}
	wcShowBox.onmouseover = function(){
		wcShowBox.style.display = 'block'
	}
	wcShowBox.onmouseout = function(){
		wcShowBox.style.display = 'none'
	}
	
	
	
// 更多的盒子的按钮
var gBoxBtn = document.querySelector('.gBoxBtn');
var gBox = document.querySelector('.gBox');
gBoxBtn.onclick = function(){
	gBox.style.display = 'none'
}

$('.gengDuo').click(function(){
	$('.gBox').css('display','block')
})

var weCatBox = document.querySelectorAll('.weCatBox i');
	var nextShow = document.querySelectorAll('.nextShow li');
	// console.log(nextShow)
	weCatBox[1].onmouseover = function(){
		nextShow[0].style.display = 'block'
	}
	weCatBox[1].onmouseout = function(){
		nextShow[0].style.display = 'none'
	}
	weCatBox[2].onmouseover = function(){
		nextShow[1].style.display = 'block'
	}
	weCatBox[2].onmouseout = function(){
		nextShow[1].style.display = 'none'
	}
	weCatBox[3].onmouseover = function(){
		nextShow[2].style.display = 'block'
	}
	weCatBox[3].onmouseout = function(){
		nextShow[2].style.display = 'none'
	}
	weCatBox[4].onmouseover = function(){
		nextShow[3].style.display = 'block'
	}
	weCatBox[4].onmouseout = function(){
		nextShow[3].style.display = 'none'
	}
	weCatBox[5].onmouseover = function(){
		nextShow[4].style.display = 'block'
	}
	weCatBox[5].onmouseout = function(){
		nextShow[4].style.display = 'none'
	}

