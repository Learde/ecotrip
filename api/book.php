<?php
$data = json_decode(file_get_contents('php://input'), true);
    // Сообщение
    $message = "Тур: ".$data['tour']."\r\nТелефон: ".$data['phone']."\r\nПредпочитаемый способ контакта: ".$data['contactType']."\r\nДата: ".$data['date']."\r\nУчастников: ".$data['count']."\r\nОткуда забрать: ".$data['address'];
    
    // На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
    $message = wordwrap($message, 70, "\r\n");

    // Отправляем
    mail('ecotrip-sochi@ya.ru', 'Ecotrip. Заявка на тур', $message);

?>