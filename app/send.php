<?php

if(isset($_POST['submit'])){
$to = "strelaweb@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$first_name = $_POST['first_name'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Ваш заказ на сайте Бууза&Чебурек";
$message = $first_name . " оставил сообщение:" . "\n\n" . $_POST['message']. "\n\n" . "Телефон: ". $_POST['phone'];
$message2 = "Вы отправили заявку " . "\n\n" . $_POST['message'] . "\n\n" . "Имя: ". $first_name . "\n\n" ."Телефон: ". $_POST['phone'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender 
echo "Сообщение отправлено. Спасибо Вам, " . $first_name . ", мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='http://xn--03-6kcd4a1ea.xn--p1ai'>Вернуться на сайт.</a>";

}

?>

