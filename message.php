<?php
//get attribute from request
session_start();
$name = $_GET["n"];
$phone = $_GET["p"];
$description = $_GET["d"];
if(isset($_SESSION['n'])){
    if($_SESSION['n']!=$name || $_SESSION['p']!=$phone || $_SESSION['n']!=$description){
        include("databaseConnection.php");
        $_SESSION['n'] = $name;
        $_SESSION['p'] = $phone;
        $_SESSION['d'] = $description;

        $sql = "INSERT INTO `message`(`Name`, `Phone`, `ShortNote`, `State`) VALUES ('$name','$phone','$description','S')";
        if (!mysqli_query($conn, $sql)) {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

        mysqli_close($conn);
    }
}else{
    include("databaseConnection.php");
    $_SESSION['n'] = $name;
    $_SESSION['p'] = $phone;
    $_SESSION['d'] = $description;

    $sql = "INSERT INTO `message`(`Name`, `Phone`, `ShortNote`, `State`) VALUES ('$name','$phone','$description',DEFAULT)";
    if (!mysqli_query($conn, $sql)) {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
    
}
//replying message
//gecho "Successful! I will contact you as soon as possible."
?>