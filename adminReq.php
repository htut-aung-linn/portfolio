<?php
//f = functions
//us = unseen
$fun = $_GET['f'];
include("databaseConnection.php");
if($fun == "all"){
    $sql = "SELECT * FROM `message`";
    $data = array();
    if($result = mysqli_query($conn, $sql)){
        while($message =  mysqli_fetch_array($result)) {
            $sd = array($message[0], $message[1], $message[2], $message[3], $message[4]);
            array_push($data, $sd);
        }
    }
    echo json_encode($data);
}elseif($fun=='us'){
    //SELECT * FROM `message` WHERE `State`='O';
    $sql = "SELECT * FROM `message` WHERE `State`='O' OR `State`='S'";
    $data = array();
    if($result = mysqli_query($conn, $sql)){
        while($message =  mysqli_fetch_array($result)) {
            $sd = array($message[0], $message[1], $message[2], $message[3], $message[4]);
            array_push($data, $sd);
        }
    }
    echo json_encode($data);
}elseif($fun=="d"){//d = done, finished messages
    $sql = "SELECT * FROM `message` WHERE `State`='D'";
    $data = array();
    if($result = mysqli_query($conn, $sql)){
        while($message =  mysqli_fetch_array($result)) {
            $sd = array($message[0], $message[1], $message[2], $message[3], $message[4]);
            array_push($data, $sd);
        }
    }
    echo json_encode($data);
}elseif($fun=="per"){
    $no = $_GET['no'];
    //UPDATE `message` SET `State`='P' WHERE `No`='1';
    $sql = "UPDATE `message` SET `State`='P' WHERE `No`='$no'";
    mysqli_query($conn, $sql);
}elseif($fun=="don"){
    $no = $_GET['no'];
    //UPDATE `message` SET `State`='P' WHERE `No`='1';
    $sql = "UPDATE `message` SET `State`='D' WHERE `No`='$no'";
    mysqli_query($conn, $sql);
}elseif($fun=="pro"){
    $sql = "SELECT * FROM `message` WHERE `State`='P'";
    $data = array();
    if($result = mysqli_query($conn, $sql)){
        while($message =  mysqli_fetch_array($result)) {
            $sd = array($message[0], $message[1], $message[2], $message[3], $message[4]);
            array_push($data, $sd);
        }
    }
    echo json_encode($data);
}elseif($fun=="del"){
    $no = $_GET['no'];
    $sql = "DELETE FROM `message` WHERE `No`='$no'";
    mysqli_query($conn, $sql);
}

mysqli_close($conn);