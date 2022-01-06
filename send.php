<?php
$fio = $_POST['name'];
$email = $_POST['surname'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("lomonka@bk.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: lomonka@bk.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>