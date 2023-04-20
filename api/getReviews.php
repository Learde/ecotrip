<?php
header("Content-type: application/json");

$host = 'danilay2.beget.tech';
$db   = 'danilay2_ecopro';
$user = 'danilay2_ecopro';
$pass = 'h%wmO4zv';
$charset = 'utf8mb4';

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try {
    $link = mysqli_connect($host, $user, $pass, $db);
    mysqli_set_charset($link, $charset);
} catch (\mysqli_sql_exception $e) {
     throw new \mysqli_sql_exception($e->getMessage(), $e->getCode());
}
// $link = mysqli_connect("localhost", "root", "root", "reviews");
//$link = mysqli_connect("localhost", "danilay2_ecopro", "jh5Cvv&d", "danilay2_ecopro");

if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    $sql = 'SELECT * FROM reviews';
    $result = mysqli_query($link, $sql);

    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode(array('data' => $rows));
}
