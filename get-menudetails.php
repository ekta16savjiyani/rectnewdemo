<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$allUsers = mysqli_query($db_conn,"SELECT * FROM pages as p JOIN `menu_items` AS m ON p.menu_id=m.id");
if(mysqli_num_rows($allUsers) > 0){
    while($row = mysqli_fetch_array($allUsers,MYSQLI_ASSOC)){
        $pagemenudetails[]['page_title'] = $row['page_title'];
        $pagemenudetails[]['menu_name'] = $row['menu_name'];
        $pagemenudetails[]['page_id'] = $row['page_id'];
        $pagemenudetails[]['menu_id'] = $row['menu_id'];
    }
    echo json_encode(["menudetails"=>$pagemenudetails]);
}
else{
    echo json_encode(["success"=>0]);
}