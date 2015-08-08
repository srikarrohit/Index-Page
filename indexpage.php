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
 	<div id='topBar' style='height:20px;'>
			<span id='clock' class='cloc'>";
			date_default_timezone_set('Asia/Kolkata');
			echo date("h:i A");
			echo "</span>
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
      // set the PDO error mode to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo "Connected successfully";
      }
      catch(PDOException $e)
        {
        echo "Connection failed: " . $e->getMessage();
        }
    $name=$_GET['stdname'];
    $stmt = $conn->prepare("SELECT * FROM users WHERE fullname=':name'");
    $stmt->bindParam(':name', $name);
    //$stmt->setFetchMode(PDO::FETCH_ASSOC);
    $stmt->execute();
    $row = $stmt->fetch();
    //$row = $result->fetch(PDO::FETCH_ASSOC)
    echo $row["username"] ;
    if($row["email"]=="")
    $row["email"]=strtolower($row["username"])."@smail.iitm.ac.in";
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
 echo "
 </div>
  <div id='pag0'>
	         <a class='item' href='#'><img src='images/deansblog.png'/></a>
	         <a class='item' href='#'><img src='images/hospital.png'/></a>
	         <a class='item' href=''><img src='images/moodle.png'/></a>
	         <a class='item' href=''><img src='images/academics.png' /></a>
	         <a class='item' href=''><img src='images/cc.png' /></a>
	         <a class='item' href=''><img src='images/icsr.png' /></a>
	         <a class='item' href=''><img src='images/alumni.png' /></a>
	         <a class='item' href=''><img src='images/t5e.png' /></a>
	         <a class='item' href=''><img src='images/shaastra.png' /></a>
	         <a class='item' href=''><img src='images/saarang.png' /></a>
	         <a class='item' href=''><img src='images/oir.png' /></a>
	         <a class='item' href=''><img src='images/placements.png' /></a>
	         <a class='item' href=''><img src='images/nptel.png' /></a>
	         <a class='item' href=''><img src='images/departments.png' /></a>
	         <a class='item' href=''><img src='images/clubs.png' /></a>
   </div>
   <div id='pag1'>

	         <a href=''><img src='images/aerospace.png' /></a>
	         <a href=''><img src='images/appliedmechanics.png' /></a>
	         <a href=''><img src='images/biotechnology.png' /></a>
	         <a href=''><img src='images/chemical.png' /></a>
	         <a href=''><img src='images/civil.png' /></a>

	         <a href=''><img src='images/chemistry.png' /></a>
	         <a href=''><img src='images/cs.png' /></a>
	         <a href=''><img src='images/elec.png' /></a>
	         <a href=''><img src='images/ed.png' /></a>
	         <a href=''><img src='images/hs.png' /></a>

	         <a href=''><img src='images/management.png' /></a>
	         <a href=''><img src='images/maths.png' /></a>
	         <a href=''><img src='images/mech.png' /></a>
	         <a href=''><img src='images/metallurgy.png' /></a>
	         <a href=''><img src='images/physics.png' /></a>
   </div>
   <div id='pag2'>

	         <a href=''><img src='images/amalgam.png' /></a>
	         <a href=''><img src='images/biofest.png' /></a>
	         <a href=''><img src='images/ceafest.png' /></a>
	         <a href=''><img src='images/exebit.png' /></a>
	         <a href=''><img src='images/genesis.png' /></a>

	         <a href=''><img src='images/chemclave.png' /></a>
	         <a href=''><img src='images/wavez.png' /></a>
	         <a href=''><img src='images/internationalday.png' /></a>
	         <a href=''><img src='images/mechanica.png' /></a>
	         <a href=''><img src='images/eml.png' /></a>

	         <a href=''><img src='images/cfi.png' /></a>
	         <a href=''><img src='images/nss.png' /></a>
	         <a href=''><img src='images/vsc.png' /></a>
	         <a href=''><img src='images/iitmsat.png' /></a>
	         <a href=''><img src='images/astronomy.png' /></a>
   </div>
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

             <td class='down'><a href='http://students2.iitm.ac.in/executive'>
							<img src='images/executive.png'/></a></td>
           </tr>
       </tbody>
   </table>
 </div>
 <div id='pagesfooter'>
		<div id='pages' style='width: 56px;'>
			<div id='1' class='circle search activeCricle'></div>
        	<div id='2' class='circle inactiveCricle'></div>
        	<div id='3' class='circle inactiveCricle'></div>
        	<div id='4' class='circle inactiveCricle'></div>
       	</div>
  </div>
</body>
</html>";
?>
