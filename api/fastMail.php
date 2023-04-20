<?php
$data = json_decode(file_get_contents('php://input'), true);
if (isset($data['phone']) && $data['phone']) {
    // Сообщение
    $message = "Новый запрос на звонок.\r\nТелефон: ".$data['phone'];

    // На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
    $message = wordwrap($message, 70, "\r\n");

    // Отправляем
    mail('ecotrip-sochi@ya.ru', 'Ecotrip. Запрос на звонок', $message);
}
?>