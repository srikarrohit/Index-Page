<?php
$server='localhost';
$user='root';
$pwd='ragasree';
$db='students_1415';
echo "<!DOCTYPE html>
<html>
<head>
	<meta name='viewport' content='width=device-width, initial-scale=1'/>
	<link type='text/css' rel='stylesheet' href='indexpage.css'/>
	<link type='text/css' rel='stylesheet' href='animate.css'/>
	<link type='text/css' rel='stylesheet' href='font-awesome-4.3.0/css/font-awesome.min.css'/>
	<script src='jquery-1.11.3.min.js'></script>
	<script src='functions.js'></script>
	<script type='text/javascript' src='indexpage.js'></script>
	<script src='wow.min.js'></script>
	<title>Index Page</title>
</head>
</head>
<body>
 <div  id='main' class='fadeInDown animated'>
	<div id='pag-1'>
 	<div id='topBar'>
			<p id='clock' class='cloc'>";
			date_default_timezone_set('Asia/Kolkata');
			echo date("h:i A");
			echo "</p>
	</div>

<div id='searchbox' class='searchbox'>
	<form name='searchform' id='searchform' method='GET' action=''>
				<div id='searchinput'>
			<i class='fa fa-search'></i>
			<input name='stdname' id='inputtext' placeholder='Student Search'type='text' autocomplete='off' onkeyup='showHint(this.value,event)'>
		</div>
				<div id='hideInput' style='display: none;'>
			<input type='hidden' name='cx' value='partner-pub-6463892505403669:7150588345'>
			<input type='hidden' value='utf-8' name='ie'>
		</div>
	</form>
 	<div id='txtHint'></div>
	<div class='suggest' style='display: none;'>
	</div>";
	if( isset($_GET['stdname']) && !empty($_GET['stdname']) )
	{
		 try{
      $conn = new PDO("mysql:host=$server;dbname=$db", $user, $pwd);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      }
      catch(PDOException $e)
        {
        echo "Connection failed: " . $e->getMessage();
        }
    $name=$_GET['stdname'];
    $stmt = $conn->prepare("SELECT * FROM users WHERE fullname=:name");
    $stmt->bindParam(':name', $name);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if($row["email"]=="")
    $row["email"]=strtolower($row["username"])."@smail.iitm.ac.in";
		$conn = null;
		echo "<div class='profile'>
				<table id='card'>
				<tbody >
				<tr><td class='pro' rowspan='3'><i class='fa fa-user fa-5x'></i></td>
				<div id='right'><td class='pro' ><i class='fa fa-user' style='padding-right:6px'></i>".$row["fullname"]."</td>
				<tr><td class='pro' ><i class='fa fa-envelope' style='padding-right:5px'></i>".$row["email"].
				"</td></tr><tr><td class='pro' ><i class='fa fa-map-marker' style='padding-left:5px;padding-right:6px'></i>".$row["hostel"]."</td></tr></div><tr><td class='pro' ><span id='roll'>".$row["username"]."</span></td>
				</tr>
				</tbody>
				</table>
				</div>";
	}
$con = mysqli_connect($server, $user, $pwd, $db);
		if (!$con) {
			die("Connection failed: " . mysqli_connect_error());
		}
echo "
 </div></div>
  <div id='pag0'>";
	         $query = "SELECT * FROM images WHERE div_id=0";
						$out = mysqli_query($con,$query);
						if (mysqli_num_rows($out)) {
							while($row = mysqli_fetch_assoc($out)) {
								echo "<a href='#' id=".substr($row["image"],7,-4)."><img src='".$row["image"]."'/></a>";
							}	
						}
 echo " </div>
   <div id='pag1'>";		
						$query = "SELECT * FROM images WHERE div_id=1";
						$out = mysqli_query($con,$query);
						if (mysqli_num_rows($out)) {
							while($row = mysqli_fetch_assoc($out)) {
								echo "<a href='#'  id=".substr($row["image"],7,-4)."><img src='".$row["image"]."'/></a>";
							}	
						}
	echo "</div>
   <div id='pag2'>";
						$query = "SELECT * FROM images WHERE div_id=2";
						$out = mysqli_query($con,$query);
						if (mysqli_num_rows($out)) {
							while($row = mysqli_fetch_assoc($out)) {
							echo "<a href='#'  id=".substr($row["image"],7,-4)."><img src='".$row["image"]."'/></a>";
							}	
						}
						mysqli_close($con);
 echo  "</div>
 </div>
   <div id='back'><img id='previous' src='images/previous.png' style='width: 60px; height: 60px; padding: 0;'/></div>
   <div id='fwd'><img id='next' src='images/next.png' style='width: 60px; height: 60px; padding: 0; '/></div>
 <div id='down' class='wow fadeInDown animated'>
   <table id='ftr' class='wow bounce animated' data-wow-delay='2s' data-wow-iteration='2'>
       <thead></thead>
       <tbody>
           <tr>
             <td class='down'><a href='http://students.iitm.ac.in'>
								<img src='images/home.png'/></div></a>
									</td>
             <td class='down'><a href='http://students2.iitm.ac.in/notification'>
								<img src='images/notification.png'/></a></td>
							<td class='down'><a href='http://students.iitm.ac.in/feedback'>
								<img src='images/feedback.png'/></td>
             <td class='down'><a href='http://students.iitm.ac.in/iportal'>
								<img src='images/iportal.png'/></a></td>

             <td class='down' id='end'><a href='http://students2.iitm.ac.in/executive'>
							<img src='images/executive.png'/></a></td>
           </tr>
       </tbody>
   </table>
 </div>
 <div id='pagesfooter'>
		<div id='pages' style='width: 56px;'>
			<div id='-1' class='circle search activeCricle'></div>
        	<div id='-2' class='circle inactiveCricle'></div>
        	<div id='-3' class='circle inactiveCricle'></div>
        	<div id='-4' class='circle inactiveCricle'></div>
       	</div>
  </div>
</body>
</html>";
?>
