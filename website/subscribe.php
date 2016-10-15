<?php
	$message = "E-mail: ".$_POST['subemail'];
    $to='tograilx@gmail.com'; // Адрес получателя
    $subj = "E-mail subscription request";
    $headers = "Content-Type: text/html; charset=utf-8\r\n";
    $headers .= "From: Steady Works.pro\r\n";
    mail($to, $subj, $message, $headers);
    echo 1;
?>