<?php
$con=mysqli_connect('localhost' ,'root' ,'') ;

if(!$con){
echo"Not connected";
}

if (!mysqli_select_db($con,'test'))
{
echo"database not selcted";
}

$name=$_POST['name'];
$phone=$_POST['phone'];
$mail=$_POST['email'];
$message=$_POST['message'];
$sql ="INSERT INTO contact(name,phone,email,message) VALUES ('$name','$phone','$mail','$message')";
if(!mysqli_query($con,$sql)){
echo"not inserted";
}
else {
echo"Your Form has been submitted successfully :)";
}
?>


this is what the contact form submit button does in the background
