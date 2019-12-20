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
	    $insertPage = mysqli_query($db_conn,"INSERT INTO `pages`(page_title,page_detail,menu_id) VALUES('$data->page_title','$data->page_detail','$data->menu_id')");
        if($insertPage){
            $last_id = mysqli_insert_id($db_conn);
            $data->page_id = $last_id;
            echo json_encode(["data"=>$data]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"Page Not Inserted!"]);
        }
   
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}