<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'db_connection.php';

// POST DATA
$dataObject = json_decode(file_get_contents("php://input"));

if(isset($dataObject->page)){
	$data = $dataObject->page;
	    $insertPage = mysqli_query($db_conn,"UPDATE `pages` SET page_title = '$data->page_title',page_detail='$data->page_detail',menu_id='$data->menu_id' WHERE page_id='$data->page_id')");
        
            echo json_encode(["data"=>$data]);
        
   
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}