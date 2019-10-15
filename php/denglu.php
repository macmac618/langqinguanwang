<?php
     header("Content-type:text/html;charset=utf-8");
     //1、接收前端的数据
     $username = $_POST['phone'];
     $userpass = $_POST['userpass'];

     //处理数据
     $conn = mysql_connect("localhost","root","root");
     if(!$conn){
          echo("数据库出错");
     }else{
          mysql_select_db("langqin",$conn);
          $sqlstr = "select * from langqinguanwang where phone = '$phone'";
          $result = mysql_query($sqlstr,$conn);
          $rows = mysql_num_rows($result);
          if($rows>0){
               mysql_close($conn);
               echo "1";//登录成功
          }else{
               
             echo "0";//登录失败
          }
     }
?>