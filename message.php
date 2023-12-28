<?php
//get attribute from request
session_start();
if(!isset($_SESSION['login'])){
    $_SESSION['login'] = true;
    include("databaseConnection.php");
    $name = $_GET["n"];
    $phone = $_GET["p"];
    $description = $_GET["d"];

    $sql = "INSERT INTO `message`(`Name`, `Phone`, `ShortNote`, `State`) VALUES ('$name','$phone','$description',DEFAULT)";
    if (!mysqli_query($conn, $sql)) {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
//replying message
//gecho "Successful! I will contact you as soon as possible."
?>