<?php
/*
This file contains database configuration assuming you are running mysql using user "root" and password ""
*/

// define('DB_SERVER', 'https://remotemysql.com');
// define('DB_USERNAME', '5WEQI9Zqod');
// define('DB_PASSWORD', 'vbvcDMXmsW');
// define('DB_NAME', '5WEQI9Zqod');

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'login');

// Try connecting to the Database
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

//Check the connection
if($conn == false){
    dir('Error: Cannot connect');
}

?>