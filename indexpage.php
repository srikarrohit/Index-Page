<?php
$server='localhost';
$user='root';
$pwd='ragasree';
$db='students_1415';
echo "<!DOCTYPE html>
<html>
<head>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
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
<div id='searchbox' class='searchbox'>
	<form name='searchform' id='searchform' method='GET' action=''>
		<div class='searchButton'><img src='images/search.png' style='height:20px;width:20px;padding:5px'></img></div>
		<div id='searchinput'>
			<input name='stdname' id='inputtext' type='text' autocomplete='off' onkeyup='showHint(this.value)'>
		</div>
		<div id='searchclosebtn'></div>
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
		$conn = new mysqli($server, $user, $pwd, $db);
		$name=$_GET['stdname'];
		$sql = "SELECT * FROM users WHERE fullname='$name'";
		$result = mysqli_query($conn, $sql);
		$row = mysqli_fetch_assoc($result);
		if($row["email"]=="")
		$row["email"]=strtolower($row["username"])."@smail.iitm.ac.in";
		echo "<div class='profile'>
				<table id='card'>
				<tbody >
				<tr><td class='pro' rowspan='3'><i class='fa fa-user fa-5x'></i></td>
				<div id='right'><td class='pro' ><i class='fa fa-user'></i>".$row["fullname"]."</td>
				<tr><td class='pro' ><i class='fa fa-envelope'></i>".$row["email"].
				"</td></tr><tr><td class='pro' ><i class='fa fa-map-marker'></i>".$row["hostel"]."</td></tr></div><tr><td class='pro' ><span id='roll'>".$row["username"]."</span></td></tr></tbody></table></div>";
	}
 echo "
 </div>
  <table id='pag0'>
	  <thead></thead>
	  <tbody>
	       <tr>
	         <td><a href='#'><img src='images/deansblog.png'/></a></td>
	         <td><a href=''><img src='images/hospital.png'/></a></td>
	         <td><a href=''><img src='images/moodle.png'/></a></td>
	         <td><a href=''><img src='images/academics.png' /></a></td>
	         <td><a href=''><img src='images/cc.png' /></a></td>
	       </tr>
	       <tr>
	         <td><a href=''><img src='images/icsr.png' /></a></td>
	         <td><a href=''><img src='images/alumni.png' /></a></td>
	         <td><a href=''><img src='images/t5e.png' /></a></td>
	         <td><a href=''><img src='images/shaastra.png' /></a></td>
	         <td><a href=''><img src='images/saarang.png' /></a></td>
	       </tr>
	       <tr>
	         <td><a href=''><img src='images/oir.png' /></a></td>
	         <td><a href=''><img src='images/placements.png' /></a></td>
	         <td><a href=''><img src='images/nptel.png' /></a></td>
	         <td><a href=''><img src='images/departments.png' /></a></td>
	         <td><a href=''><img src='images/clubs.png' /></a></td>
	       </tr>
	       
	  </tbody>
   </table>
   <table id='pag1'>
	  <thead></thead>
	  <tbody>
	       <tr>
	         <td><a href=''><img src='images/aerospace.png' /></a></td>
	         <td><a href=''><img src='images/appliedmechanics.png' /></a></td>
	         <td><a href=''><img src='images/biotechnology.png' /></a></td>
	         <td><a href=''><img src='images/chemical.png' /></a></td>
	         <td><a href=''><img src='images/civil.png' /></a></td>
	       </tr>
	       <tr>
	         <td><a href=''><img src='images/chemistry.png' /></a></td>
	         <td><a href=''><img src='images/cs.png' /></a></td>
	         <td><a href=''><img src='images/elec.png' /></a></td>
	         <td><a href=''><img src='images/ed.png' /></a></td>
	         <td><a href=''><img src='images/hs.png' /></a></td>
	       </tr>
	       <tr>
	         <td><a href=''><img src='images/management.png' /></a></td>
	         <td><a href=''><img src='images/maths.png' /></a></td>
	         <td><a href=''><img src='images/mech.png' /></a></td>
	         <td><a href=''><img src='images/metallurgy.png' /></a></td>
	         <td><a href=''><img src='images/oceanengg.png' /></a></td>
	       </tr>
	       
	  </tbody>
   </table>
   <table id='pag2'>
	  <thead></thead>
	  <tbody>
	       <tr>
	         <td><a href=''><img src='images/amalgam.png' /></a></td>
	         <td><a href=''><img src='images/biofest.png' /></a></td>
	         <td><a href=''><img src='images/ceafest.png' /></a></td>
	         <td><a href=''><img src='images/exebit.png' /></a></td>
	         <td><a href=''><img src='images/genesis.png' /></a></td>
	       </tr>
	       <tr>
	         <td><a href=''><img src='images/chemclave.png' /></a></td>
	         <td><a href=''><img src='images/wavez.png' /></a></td>
	         <td><a href=''><img src='images/internationalday.png' /></a></td>
	         <td><a href=''><img src='images/mechanica.png' /></a></td>
	         <td><a href=''><img src='images/eml.png' /></a></td>
	       </tr>
	       <tr>
	         <td><a href=''><img src='images/cfi.png' /></a></td>
	         <td><a href=''><img src='images/nss.png' /></a></td>
	         <td><a href=''><img src='images/vsc.png' /></a></td>
	         <td><a href=''><img src='images/iitmsat.png' /></a></td>
	         <td><a href=''><img src='images/astronomy.png' /></a></td>
	       </tr>
	       
	  </tbody>
   </table>
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
