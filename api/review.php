<?php
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
    echo json_encode(array('success' => 0, 'error' => 'Ошибка подключения к БД'));
}


// $link = mysqli_connect("localhost", "root", "root", "reviews");
//$link = mysqli_connect("localhost", "danilay2_ecopro", "J7Fe%MGV", "danilay2_ecopro");

/*
 && 
    isset($data['password']) && $data['password'] &&
    $data['password'] == '1996sochi24'
*/

if ($link == false){
    echo json_encode(array('success' => 0, 'error' => 'Ошибка подключения к БД'));
}
else {
    $data = json_decode(file_get_contents('php://input'), true);
    if (isset($data['description']) && $data['description'] && 
    isset($data['date']) && $data['date'] && 
    isset($data['name']) && $data['name']) {
        $sql = 'INSERT INTO reviews SET name = "'.mysqli_real_escape_string($link, $data['name']).'", date = "'.mysqli_real_escape_string($link, $data['date']).'", description = "'.mysqli_real_escape_string($link, $data['description']).'"';
        if (isset($data['url']) && $data['url']) $sql = $sql.', url = "'.$data['url'].'"';
        

        try {
            $result = mysqli_query($link, $sql);
        } catch (\mysqli_sql_exception $e) {
            echo json_encode(array('success' => 0, 'check' => $e->getMessage(), 'sql' => $sql));
        }
        
        if ($result == false) {
            echo json_encode(array('success' => 0, 'error' => 'Ошибка добавления в БД'));
        } else {
            echo json_encode(array('success' => 1));
        }

    } else {
        echo json_encode(array('success' => 0, 'error' => 'Неправильно введенные данные'));
    }
}
