<?php
// Array with names
$server="localhost";
$user="root";
$pwd="ragasree";
$db="students_1415";
$conn = new mysqli($server, $user, $pwd, $db);
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);
$a=[];
while($row = mysqli_fetch_assoc($result)) {
	array_push($a,$row["fullname"]);
}
// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";
$i=0;
// lookup all hints from array if $q is different from "" 
if ($q !== "") 
{
    $q = strtolower($q);
    $len=strlen($q);
		if($len>3)
		{
    	foreach($a as $name) 
			{
				$i++;
        if (stristr($name, $q))
				{
            $hint .= "<li name='suggestions' id=".$i." onclick='submit(".$i.");'>".$name."</li>"; 
        }
    	}
			if($hint==="")
			echo "No suggestions";
			else
			echo nl2br($hint);
		}
		else
		echo "Minimum number of characters is 4";		
}
// Output "no suggestion" if no hint was found or output correct values 
?>
