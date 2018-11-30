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
$fname=$_POST['fname'];
$phone=$_POST['phone'];
$age=$_POST['age'];
$email=$_POST['Email'];
$Gender=$_POST['Gender'];
$Yoga=$_POST['Yoga'];
$Workout=$_POST['Workout'];
$Dance=$_POST['Dance'];
$Running=$_POST['Running'];
 
if($Yoga=="Yoga") $Yoga="yes"; else $Yoga="no";
if($Workout=="Workout") $Workout="yes"; else $Workout="no";
if($Dance=="Dance") $Dance="yes"; else $Dance="no";
if($Running=="Running") $Running="yes"; else $Running="no";
$sql ="INSERT INTO registration(name,fname,phone,age,Email,Gender,Yoga,Workout,Dance,Running) VALUES ('$name','$fname','$phone','$age','$email','$Gender','$Yoga','$Workout','$Dance','$Running')";
if(!mysqli_query($con,$sql)){
echo"not inserted";
}
else {
echo"Your Form has been submitted successfully :)";
}
?>
