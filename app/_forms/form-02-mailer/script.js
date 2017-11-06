/*
* 1. - проверить, что не пустое
* 2. - проверить на паттерн
*
*
* */
(function () {

	function Validator(settings) {

		var rulesPattern = {
			email: /^\w{1,}\.?\w{1,}@\w{1,}\.\w{1,}$/,
			phone: /^\+?\d{6,11}/,
			name:/[A-Za-zА-Яа-яёЁйЙ]{1,50}/
		};

		var showError = function (el) {
			el.parentNode.classList.remove('success');
			el.parentNode.classList.add('error');
		};

		var showSuccess = function (el) {
			el.parentNode.classList.remove('error');
			el.parentNode.classList.add('success');

		};
		
		var isValid = function () {

		}

		this.form = document.getElementById(settings.formId);
		this.submit = this.form.getElementsByTagName('button')[0];
		this.inputs = this.form.elements;

		this.chekIt = function(el, myVar) {
			if(!el) return false;
			return el.value;
			console.log(el);
		};

		//Init __________________

		for(var i = 0; i < this.inputs.length; i++){
			if(this.inputs[i].tagName != "INPUT"){
				continue;
			}

			this.inputs[i].addEventListener('change',function () {
				console.log(this.value);
			});
		}

		//_______________________

		this.mailPost = function (name,phone) {
			var self = this;
			var request = new XMLHttpRequest();
			request.open('post','mailer.php');
			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			request.onreadystatechange = function () {
				if(request.readyState === 4){
					self.form.name.value = "";
					self.form.phone.value = "";
				}
			};
			var str = "name="+name+"&phone="+phone;
			request.send(str);

		};

		this.formSubmit = function () {

			var self = this, name, phone;

			this.submit.addEventListener('click',function (e) {
				e.preventDefault();
				e.stopPropagation();
				//
				// name = self.chekIt(this.form.name);
				// phone = self.chekIt(this.form.phone);
				//
				// self.mailPost(name,phone);

				console.log(phone);

			});
		};


		this.formSubmit();

	}


	document.addEventListener('DOMContentLoaded', function () {

		var topForm = new Validator({
			formId : "top_form"
		});

	});



})();