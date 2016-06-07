<?php
	$message = "E-mail: ".$_POST['email']."<br>Name: ".$_POST['name']."<br>Company: ".$_POST['company']."<br>Message: ".$_POST['message'];
    $to='tograilx@gmail.com'; // Адрес получателя
    $subj = "Quote Request";
    $headers = "Content-Type: text/html; charset=utf-8\r\n";
    $headers .= "From: Steady Works.pro\r\n";
    mail($to, $subj, $message, $headers);
    echo 1;
?>