<?php
//f = functions

$fun = $_GET['f'];
include("databaseConnection.php");
if($fun = "all"){
    $sql = "SELECT * FROM `message`";
    $data = array();
    if($result = mysqli_query($conn, $sql)){
        while($message =  mysqli_fetch_array($result)) {
            $sd = array([$message[0], $message[1], $message[2], $message[3]]);
            array_push($data, $sd);
        }
    }
    echo json_encode($data);
    mysqli_close($conn);
}