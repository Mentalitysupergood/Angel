function Register(){
		this.init()
	}
	Register.prototype = {
		init : function(){
			this.getDate();
			this.eventBind();
			// this.ck()
		},
		getDate : function(){
			var _this = this;
			this.uname = document.querySelector('.uname');
			this.upwd = document.querySelector('.upwd');
			this.yx = document.querySelector('.youxiang');
			// console.log(this.yx.value)
			axios({
				method : 'get',
				url : 'http://127.0.0.1/AngelX/php/register.php',
				data : {
					uname : _this.uname.value,
					upwd : _this.upwd.value,
					email : _this.yx.value
				}
			}).then(function(data){
				if (data.state == '0') {
					alert(data.info)
				}else{
					alert(data.info)
				}
			}).catch(function(info){
				console.log(info)
			})
		},
		// ck : function(){
		// 	getCookie("uname",1,1)
		// },
		
		eventBind : function(){
			var btn = document.querySelector('.zcBnt a');
			btn.addEventListener('click',this.getDate.bind(this));
		}
	}
	new Register()
	