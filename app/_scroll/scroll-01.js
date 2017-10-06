(function () {
	window.onload = function () {

		var docEl = document.documentElement,
		timer,
		docScroll;

		function windowScroll(func) {
			window.addEventListener('scroll', func);
		}

		function scrollToTop() {
			timer = setTimeout(function () {
				scrollToTop();
			}, 100);

			if (docScroll > 0) {
				docEl.scrollTo(0, docScroll);
				docScroll = docScroll - 100;

			} else {
				clearTimeout(timer);
				docEl.scrollTo(0, 0);
			}
		}

		//Конструктор
		function Visible(settings) {
			var elem = document.getElementById(settings.id);
			console.log(elem.offsetTop);
			console.log(docEl.scrollTop);
			//Показать элемент при скроле
			windowScroll(function () {
				if (docEl.clientHeight < docEl.scrollTop) {
					elem.classList.add('is-visible');
				} else {
					elem.classList.remove('is-visible');
				}
			});
			elem.addEventListener('click', function (e) {
				docScroll = docEl.scrollTop;
				scrollToTop();
			});
		}

		var scroller = new Visible({
			id: "scroller",
		});
	}
})();