<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));
if($data->menu_id != ''){
    $menu_id = mysqli_real_escape_string($db_conn, trim($data->menu_id));
        $insertUser = mysqli_query($db_conn,"DELETE FROM `menu_items` WHERE id=".$data->menu_id);
        
            echo json_encode(["success"=>1,"menuid"=>$data->menu_id]);
        
   
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}