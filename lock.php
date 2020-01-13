<?php

	header("Content-Type: text/html; charset=utf-8");

	$user_ip = $_SERVER["REMOTE_ADDR"];
	$user_info = file_get_contents("http://freegeoip.net/json/".$user_ip);
	$user_info = json_decode($user_info);
	$user_country = $user_info->country_name;
	$user_city = $user_info->city;

	if($user_country == "Ukraine") { // Проверяем страну посетителя

		@header("HTTP/1.1 503 Service Temporarily Unavailable");
		@header("Status: 503 Service Temporarily Unavailable");
   
		echo <<<HTML
			Извините, но для Вашей страны заблокирован доступ к нашему сайту =(
			
			<style>
				body {
					background: #f4f4f4;
				}
			</style>
HTML;

		exit();

	}

?>