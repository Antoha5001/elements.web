(function () {


	function Scroll(settings) {

		//Свойства
		this.element = settings.element;
		this.documentHeight = document.documentElement.clientHeight;
		var self = this;


		//Проверяем, коллекция или нет
		this.isCollection = function () {
			if (this.element instanceof HTMLCollection) {
				this.element.forEach = [].forEach;
				return true;
			}
			return false;
		};

		//Проверяем, ниже нужной позиции или нет
		this.isTop = function (el) {
			if (el.offsetTop > parseInt(document.documentElement.scrollTop + self.documentHeight) - 200) {
				return true;
			}
			return false;
		};

		this.event = function () {

			if (this.isCollection()) {

				this.element.forEach(function (e) {

					e.style.transition = "all 0.4s ease-out";

					window.addEventListener('scroll', function () {
						if (self.isTop(e)) {
							hide(e);
						} else {
							show(e);
						}

					});
					if(self.isTop(e)){
						hide(e);
					}
				});

			}
		};

		function show(el) {
			el.classList.remove("is-invisible");
		}

		function hide(el) {

			el.classList.add("is-invisible");

		}


		this.event();


	}

	var title = document.getElementsByTagName("h1");

	var h1 = new Scroll({
		element: title
	});
	h1.echo();


})();