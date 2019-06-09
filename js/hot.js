axios({
    method: 'get',
    url: 'http://127.0.0.1/AngelX/php/hot.php',
    data: {}
}).then(function(data) {
    var pddBox = document.querySelector('.hot');
    // console.log(data)
    var str = '';
    for (var i = 0; i < 8; i++) {
        str += `
			<ul class="pbb_box">
				<a href="##" class="a1"><img src="${data[i].src}"/></a>
				<div class="pbb_box_txt">
					<a href="##">${data[i].title}</a>
					<span>${data[i].price}元</span>
				</div>
			</ul>
        	`
    }
    pddBox.innerHTML = str;
}).catch(function(info) {
    console.log(info)
})