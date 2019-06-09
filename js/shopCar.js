
	if ( document.cookie ) {
		
		var cart_tr2 = document.querySelector('.cart_tr2');
		var box = document.querySelector('.boxBox');
		var oList = document.querySelector('.cart_table');
		
		var strCookie = $.cookie('name');
		var objCookie = JSON.parse(strCookie);
		var oKuCun = objCookie[0].ee;
		// console.log( objCookie.key)
			
		var str = '';
		str +=
			`
			<tr class="cart_tr3">
				<td>
					<a href="##">
						<img src="${objCookie[0].a}" />
					</a>
				</td>
				<td>
					<p><a href="##">${objCookie[0].d}</a></p>
					<p>DL13023r07</p>
				</td>
				<td><span>選擇膚色:实心日烧</span></td>
				<td>
					<p>${objCookie[0].b}</p>
					<p>${objCookie[0].b}</p>
				</td>
				<td class="addJian">
					<span class="shopAdd">+</span>
					<i>${objCookie[0].c}</i>
					<span class="shopJian">-</span>
				</td>
				<td class="jinE">
					<span class="je">￥<i>2880</i>.00元</span>
					<span>￥0.00元</span>
				</td>
				<td>
					<a href="##">收藏</a>
					<a href="#" class="del">删除</a>
				</td>
			</tr>
			
		`
		box.innerHTML += str;
		
		
		var add = document.querySelector('.addJian .shopAdd');
		var geShu = document.querySelector('.addJian i');
		var jian = document.querySelector('.addJian .shopJian');
		var jinE = document.querySelector('.jinE .je i');
		var zongJinE = document.querySelector('.cart_tr4_td2  .cart_tr4_td2_i')
		var del = document.querySelector('.del');
		// var danJia = jinE.innerHTML;
		jinE.innerHTML = danJia;
		console.log(jinE)
		var a = 1;
		add.onclick = function() {
			a++;
			geShu.innerHTML = a;
			jinE.innerHTML = a * jinE.innerHTML;
			zongJinE.innerHTML = jinE.innerHTML;
			if ( a >= oKuCun ) {
				alert('库存就剩下' + oKuCun + '件了');
				geShu.innerHTML = oKuCun  ;
			}
		}
		jian.onclick = function() {
			a--;
			geShu.innerHTML = a;
			jinE.innerHTML = a * jinE.innerHTML;
			zongJinE.innerHTML = jinE.innerHTML;
			if (a <= 0) {
				alert('最少一件')
				geShu.innerHTML = 1;
				jinE.innerHTML = jinE.innerHTML;
				zongJinE.innerHTML = jinE.innerHTML;
			}
		}
		del.onclick = function(){
			$.cookie('name', null);
			 window.location.reload();
		}
	}else{
		$('.cart_table').css('display','none');
		$('.cartBox').css('display','none');
		$('.kongCar').css('display','block');
	}
	
	
	