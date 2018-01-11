(function () {


	function Scroll(settings) {

		var self = this;

		function show() {
			if (typeof self.element == "object") {

				self.element.forEach = [].forEach;

				self.element.forEach(function (e) {
					e.classList.remove("is-visible");
				});

			} else {
				self.element.classList.remove("is-visible")
			}
		}

		function hide() {

			console.log(Object.prototype.toString.call(self.element));
			console.log(self.element instanceof Array);

			// console.log(elem);
			if (typeof self.element === "object") {

				console.log(1);

				self.element.forEach = [].forEach;
				self.element.forEach(function (e) {
					e.classList.add("is-visible");
				});

			} else {
				console.log(self.element.classList.add("is-visible"));
			}

		}


		this.element = settings.element;

		this.documentHeight = document.documentElement.clientHeight;

		this.echo = function () {
			console.log(this.documentHeight);
		};

		window.addEventListener('scroll', function () {

			// console.log(self.element.offsetTop);
			// console.log(parseInt(document.documentElement.scrollTop + self.documentHeight));

			if (self.element.offsetTop < parseInt(document.documentElement.scrollTop + self.documentHeight) - 300) {
				hide();

			} else {
				show(self.element);

			}

		});

		hide();

	}

	var title = document.getElementsByTagName("h1");

	var h1 = new Scroll({
		element: title
	});
	h1.echo();


})();