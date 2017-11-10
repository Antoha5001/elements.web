(function () {

	window.addEventListener('DOMContentLoaded', function () {


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
					console.log(request.responseText);
					modal.open();
					modal.setContent(request.responseText);

					var fileButton = document.getElementsByClassName('filebox-button')[0].firstElementChild,
						inputFile = document.getElementsByTagName('input')[0];

					console.log(fileButton);
					// if(fileButton){
					//
					// 	fileButton.addEventListener('click', function (e) {
					// 		console.log(e);
					// 		e.preventDefault();
					// 		var event = new Event('click');
					// 		inputFile.dispatchEvent(event);
					// 		console.log(event);
					// 	});
					// }
				}
			};
			request.send('');
		});


	});

})();