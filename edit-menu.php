<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));
if($data->id != ''){
        $allPages = mysqli_query($db_conn,"SELECT * FROM `menu_items` WHERE id=".$data->id);
        
            if(mysqli_num_rows($allPages)  > 0) {
            $allPages = mysqli_fetch_array($allPages,MYSQLI_ASSOC);
            echo json_encode(["id"=>$allPages['id']]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"Page Not Inserted!"]);
        }
        
   
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}