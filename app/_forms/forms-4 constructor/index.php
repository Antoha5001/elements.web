<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
<form class="form-box__form validate" method="post" id="bottom_form">

	<p class="form-box__zagolovok">Закажите звонок!</p>
	<p class="form-box__podzagolovok">Отправте свой номер телефона и наш менеджер свяжится с Вами в
		ближайшее время. </p>

	<!--Name input -->
	<div class="form-box__input-wrapper">
		<label for="form_name" class="form-box__input-name">Как к вам обращаться</label>
		<input class="form-box__input" type="text" placeholder="Имя" name="name" id="form_name"
				 data-error="Не верный формат записи!">
		<div class="message">Вы не ввели имя!</div>
	</div>

	<!--Phone input -->
	<div class="form-box__input-wrapper">
		<label for="form_phone" class="form-box__input-name">Номер телефона</label>
		<input class="form-box__input" type="tel" placeholder="+7" name="phone" id="form_phone" data-error="">
		<div class="message">Вы не указали телефон!</div>
	</div>

	<!--Checkbox input -->
	<div class="form-box__input-wrapper">
		<label for="agreed">Я принимаю условия на обработку персональных данных!</label>
		<input type="checkbox" name="agreed" id="agreed">
		<div class="message">Вы не приняли соглашение!</div>
	</div>

	<!--Button-->
	<div class="form-row form-row-3">
		<div class="form-col form-col-1">
			<label class="form-legend"></label>
			<input type="submit" class="form-button custom-button custom-button-large"
				   value="Отправить сообщение">
		</div>
	</div>
</form>
<script src="jquery-3.2.1.min.js"></script>
<script src="jquery.inputmask.bundle.min.js"></script>
<script src="script.js"></script>
</body>
</html>