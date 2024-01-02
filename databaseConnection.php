<?php
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "portfolio";
    
    if(!$conn = mysqli_connect($hostname, $username, $password, $dbname)){
        echo "Database's connection fail";
    }
?>