<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'db_connection.php';

// POST DATA
$dataObject = json_decode(file_get_contents("php://input"));
    $data = $dataObject->data;
if(isset($dataObject->data)){
    
	    $insertPage = mysqli_query($db_conn,"UPDATE `menu_items` SET menu_name = '$data->menu_name' WHERE id='$data->id'");
        
            echo json_encode(["data"=>$data]);
        
   
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}