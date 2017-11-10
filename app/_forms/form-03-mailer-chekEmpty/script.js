/*
* 1. ПРИ НАБОРЕ onchange, проверяем что не постое, и что значение верное
*
* 2. ПРИ ОТПРАВКЕ onsubmit, проверяем что не постое, и что значение верное
*
* 3. Если верно, отправляем через AJAX на сервер
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

		//Функция проверки значений полей
		var isValid = function (input) {

			var parent = input.parentNode;
			//Проверяется значение
			if(!rulesPattern[input.name].test(input.value) || input.value === "" || input.value === undefined){
				console.log("Значение"+input.value);
				parent.classList.add('error');
				return false;
			}else{

				parent.classList.remove('error');
				console.log(input.value);
			}
		};

		this.form = document.getElementById(settings.formId);
		this.submit = this.form.getElementsByTagName('button')[0];
		this.inputs = this.form.getElementsByTagName('input');

		this.chekIt = function(el, myVar) {
			if(!el) return false;
			return el.value;
			console.log(el);
		};

		//Проверка полей при наборе __________________

		for(var i = 0; i < this.inputs.length; i++){
			if(this.inputs[i].tagName != "INPUT"){
				continue;
			}

			this.inputs[i].addEventListener('change',function () {
				var parent = this.parentNode;
				if (this.value === "" || this.value === undefined){
					this.parentNode.classList.add('error');
					return false;
				} else{
					this.parentNode.classList.remove('error');
				}
			});
		}

		//_______________________

		this.mailPost = function (values) {
			var self = this,
				name = values.name,
				phone = values.phone,
				request = new XMLHttpRequest();

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

			var self = this;

			this.submit.addEventListener('click',function (e) {
				var values = {};
				e.preventDefault();
				e.stopPropagation();

				for (var i = 0; i < self.inputs.length; i++){
					if (self.inputs[i].value === "" || self.inputs[i].value === undefined){
						self.inputs[i].parentNode.classList.add('error');
						return false;
					} else{
						self.inputs[i].parentNode.classList.remove('error');
						values[self.inputs[i].name] = self.inputs[i].value;
					}
					if(self.inputs[i].name == "agreed"){
						if(!self.inputs[i].checked){
							self.inputs[i].parentNode.classList.add('error');
							return false;
						}
					}
				}

				//
				self.mailPost(values);

				console.log(values.agreed);

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