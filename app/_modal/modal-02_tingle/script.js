(function () {

	window.addEventListener('DOMContentLoaded', function () {

		function Validator(settings) {
			this.form = document.getElementById(settings.id);
			this.elements = this.form.elements;
			this.submit = this.form.getElementsByClassName(settings.submit)[0];
			this.mailer = settings.phpScript;

			//Отправляет почту
			this.mailPost = function(){
				var recuest = new XMLHttpRequest();

			}

			//Проверяет value текущего элемента на пустую строку
			function isEmpty(input) {
				if (input.value === "" || input.value === undefined){
					input.parentNode.classList.add('error');
					return false;
				} else {
					input.parentNode.classList.remove('error');
					return true;
				}
			}

			//Перебор элементов формы
			for(var i = 0; i < this.elements.length; i++){

				if(this.elements[i].type === "submit") continue;
				if(this.elements[i].type === "file") {
					var parent = this.elements[i].parentNode,
						label = parent.getElementsByTagName('label')[0];


					this.elements[i].addEventListener('change', function () {

						var span = this.parentNode.getElementsByTagName('span')[0];
						span.innerHTML= this.files[0].name;

						console.log(this.files);

					});
				};
				if(this.elements[i].type === 'text'){
					this.elements[i].addEventListener('change', function () {

						isEmpty(this);

					});
				}

			}

			//Действие при нажатии на кнопку
			this.onSubmit = function() {
				var self = this;
				this.submit.addEventListener('click', function (e) {
					e.preventDefault();
					e.stopPropagation();
					var request = new XMLHttpRequest(),
						value;

					for(var i = 0; i < self.elements.length; i++){

						if(self.elements[i].type === "submit") continue;
						if(self.elements[i].type === 'text'){
							if(isEmpty(self.elements[i])){
								continue;
							} else {
								isEmpty(self.elements[i]);
								return false;
							}
						}


					}
					value = new FormData(self.form);
					request.open('POST',self.mailer);
					request.onreadystatechange = function () {
						if (request.readyState === 4 && request.status === 200){
							console.log(request);

						}
					};
					// console.log(self.form.elements);

					request.send(value);
					modal.close();

				});
			};
			this.onSubmit();



		}

		//Модальное окно
		var button = document.getElementById('button');
		var h1 = document.createElement('h1');
		h1.innerHTML = "Cвяжитесь с нами";
		h1.classList.add('fdg');

		var modal = new tingle.modal({
			cssClass : ["form-wrapper"]
		});

		button.addEventListener('click',function () {
			var request = new XMLHttpRequest();
			request.open('GET','form.html');
			request.onreadystatechange = function (ev) {
				if (request.readyState === 4){
					// console.log(request.responseText);
					modal.open();
					modal.setContent(request.responseText);

					var fileButton = document.getElementsByClassName('filebox-button')[0].firstElementChild,
						inputFile = document.getElementsByTagName('input')[0];

					var modalForm = new Validator({
						id : "contacts-form",
						submit: "form-button",
						phpScript: "mailer.php"
					});


				}
			};
			request.send('');
		});


	});

})();