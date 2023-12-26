<?php
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $dbname = "portfolio";

    if(!$conn = mysqli_connect($hostname, $username, $password, $dbname)){
        echo "Database's connection fail";
    }else{
        echo "Sending Message Complete. I will contact you as soon as possible!";
    }
?>