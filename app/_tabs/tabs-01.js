"use strict";
(function () {
	window.onload = function () {
		var tab = document.getElementsByClassName('tab'),
			tabContent =  document.getElementsByClassName('tabContent');

		function forEach(arr,func) {
			(new Array()).forEach.call(arr,func);

		}
		function tabHide() {
			forEach(tab,function (e) {
				e.classList.remove('white');
			});
		}
		function tabContentHide() {
			forEach(tabContent,function (e) {
				e.classList.remove('is-visible');
			});
		}



		forEach(tab,function (e,n) {
			var index = n;

			if(e.classList.contains('white')){
				tabContent[n].classList.add('is-visible');
			} else {
				tabContent[n].classList.remove('is-visible');
			}

			e.addEventListener('click',function () {
				tabHide();
				this.classList.add('white');
				tabContentHide();
				tabContent[n].classList.add('is-visible');

			})
			// tabContent[n].classList.add('is-visible');


		});


	}
})();