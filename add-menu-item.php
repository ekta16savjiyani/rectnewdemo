<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));
if(isset($data->menuitem)){
    $menu_item = mysqli_real_escape_string($db_conn, trim($data->menuitem->menu_item));
        $insertUser = mysqli_query($db_conn,"INSERT INTO `menu_items`(`menu_name`) VALUES('$menu_item')");
        if($insertUser){
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["id"=>$last_id,"menu_name"=>$data->menuitem->menu_item]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"Menu Item Not Inserted!"]);
        }
   
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}