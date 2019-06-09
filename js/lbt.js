function Person(){
	this.box = document.querySelector('.stuDioTop');
	this.boxShow = document.querySelector('.stuDioTopShow');
	this.oImg = document.getElementsByTagName('img');
	this.distance = this.oImg[0].offsetWidth;
	this.init();
}

Person.prototype = {
	init : function(){
		this.boxShow.style.width = this.oImg.length * this.oImg[0].offsetWidth + "px";
	},
	
}