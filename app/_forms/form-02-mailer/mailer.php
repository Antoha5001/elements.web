<?php

header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');
header('Expires: ' . date('r'));

if($_SERVER["REQUEST_METHOD"]=="POST"){

	//Имя сервера
	$host = "Host: www.".$_SERVER["HTTP_HOST"]."<br>";

	$to = 'plantsvzzombi@mail.ru';

	$zag = "Заявка на звонок";

	if(!empty($_POST['name']))
		$name = "Имя: ".trim(strip_tags($_POST["name"]))."<br>";

	if(!empty($_POST['phone']))
		$phone = "Телефон: ".trim(strip_tags($_POST["phone"]))."<br>";

	$headers = 'Content-type: text/html; charset=utf-8';

	mail("$to","$zag","$host $name $phone ","$headers");

}
?>