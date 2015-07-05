<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link type="text/css" rel="stylesheet" href="indexpage.css"/>
	<link type="text/css" rel="stylesheet" href="animate.css"/>
	<link type="text/css" rel="stylesheet" href="font-awesome-4.3.0/css/font-awesome.min.css"/>
	<script src="jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="indexpage.js"></script>
	<script src="wow.min.js"></script>
<script>
 new WOW().init();
</script>
	<title>Index Page</title>
	<script>
function showHint(str) {
    if (str.length == 0) { 
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", "search.php?q=" + str, true);
        xmlhttp.send();
    }
}
function submit(x){
	document.getElementById('getdata').value=document.getElementById(x).innerHTML;
	document.getElementById('searchform').submit();
}
</script>
</head>
</head>
<body>
 <div  id="main" class="fadeInDown animated">  
 <table id="searchpage">
 <thead></thead>
	  <tbody>
	       <tr>
	       <td>	<form name="searchform" id="searchform" method="POST" action=""> 
First name: <input name="stdname" id="getdata" type="text" onkeyup="showHint(this.value)"></td>
<td><div id="txtHint"></div></td>
		</tr>
	</tbody>
</table>
  <table id="pag0">
	  <thead></thead>
	  <tbody>
	       <tr>
	         <td><a href=""><img src="images/deansblog.png"/></td>
	         <td><a href=""><img src="images/hospital.png"/></td>
	         <td><a href=""><img src="images/moodle.png"/></td>
	         <td><a href=""><img src="images/academics.png" /></a></td>
	         <td><a href=""><img src="images/cc.png" /></a></td>
	       </tr>
	       <tr>
	         <td><a href=""><img src="images/icsr.png" /></a></td>
	         <td><a href=""><img src="images/alumni.png" /></a></td>
	         <td><a href=""><img src="images/t5e.png" /></a></td>
	         <td><a href=""><img src="images/shaastra.png" /></a></td>
	         <td><a href=""><img src="images/saarang.png" /></a></td>
	       </tr>
	       <tr>
	         <td><a href=""><img src="images/oir.png" /></a></td>
	         <td><a href=""><img src="images/placements.png" /></a></td>
	         <td><a href=""><img src="images/nptel.png" /></a></td>
	         <td><a href=""><img src="images/departments.png" /></a></td>
	         <td><a href=""><img src="images/clubs.png" /></a></td>
	       </tr>
	       
	  </tbody>
   </table>
   <table id="pag1">
	  <thead></thead>
	  <tbody>
	       <tr>
	         <td><a href=""><img src="images/aerospace.png" /></a></td>
	         <td><a href=""><img src="images/appliedmechanics.png" /></a></td>
	         <td><a href=""><img src="images/biotechnology.png" /></a></td>
	         <td><a href=""><img src="images/chemical.png" /></a></td>
	         <td><a href=""><img src="images/civil.png" /></a></td>
	       </tr>
	       <tr>
	         <td><a href=""><img src="images/chemistry.png" /></a></td>
	         <td><a href=""><img src="images/cs.png" /></a></td>
	         <td><a href=""><img src="images/elec.png" /></a></td>
	         <td><a href=""><img src="images/ed.png" /></a></td>
	         <td><a href=""><img src="images/hs.png" /></a></td>
	       </tr>
	       <tr>
	         <td><a href=""><img src="images/management.png" /></a></td>
	         <td><a href=""><img src="images/maths.png" /></a></td>
	         <td><a href=""><img src="images/mech.png" /></a></td>
	         <td><a href=""><img src="images/metallurgy.png" /></a></td>
	         <td><a href=""><img src="images/oceanengg.png" /></a></td>
	       </tr>
	       
	  </tbody>
   </table>
   <table id="pag2">
	  <thead></thead>
	  <tbody>
	       <tr>
	         <td><a href=""><img src="images/amalgam.png" /></a></td>
	         <td><a href=""><img src="images/biofest.png" /></a></td>
	         <td><a href=""><img src="images/ceafest.png" /></a></td>
	         <td><a href=""><img src="images/exebit.png" /></a></td>
	         <td><a href=""><img src="images/genesis.png" /></a></td>
	       </tr>
	       <tr>
	         <td><a href=""><img src="images/chemclave.png" /></a></td>
	         <td><a href=""><img src="images/wavez.png" /></a></td>
	         <td><a href=""><img src="images/internationalday.png" /></a></td>
	         <td><a href=""><img src="images/mechanica.png" /></a></td>
	         <td><a href=""><img src="images/eml.png" /></a></td>
	       </tr>
	       <tr>
	         <td><a href=""><img src="images/cfi.png" /></a></td>
	         <td><a href=""><img src="images/nss.png" /></a></td>
	         <td><a href=""><img src="images/vsc.png" /></a></td>
	         <td><a href=""><img src="images/iitmsat.png" /></a></td>
	         <td><a href=""><img src="images/astronomy.png" /></a></td>
	       </tr>
	       
	  </tbody>
   </table>
 </div>
   <div id="back"><img id="previous" src="images/previous.png" style="width: 60px; height: 60px; padding: 0;"/></div>
   <div id="fwd"><img id="next" src="images/next.png" style="width: 60px; height: 60px; padding: 0; "/></div>
 <div id="down" class="wow fadeInDown animated">
   <table id="ftr" class="wow bounce animated" data-wow-delay="2s" data-wow-iteration="2">
       <thead></thead>
       <tbody>
           <tr>
             <td class="down"><a href="http://students.iitm.ac.in">
								<img src="images/home.png"/></div></a>
									</td>
             <td class="down"><a href="http://students2.iitm.ac.in/notification">
								<img src="images/notification.png"/></a></td>
							<td class="down"><a href="http://students.iitm.ac.in/feedback">
								<img src="images/feedback.png"/></td>
             <td class="down"><a href="http://students.iitm.ac.in/iportal">
								<img src="images/iportal.png"/></a></td>

             <td class="down"><a href="http://students2.iitm.ac.in/executive">
							<img src="images/executive.png"/></a></td>
			<!--				<td class="down"><a href="http://students.iitm.ac.in/feedback">
								<i class="fa fa-bullhorn fa-inverse"><br><span class="text">Feedback</span></i>
									</a></td>
             <td class="down"><a href="http://students.iitm.ac.in/iportal">
								<i class="fa fa-cloud fa-inverse"><br><span class="text">Iportal</span></i></a></td>

             <td class="down"><a href="http://students2.iitm.ac.in/executive">
								<i class="fa fa-certificate fa-inverse"><br><span class="text">Executive</span></i></a></td>-->
           </tr>
       </tbody>
   </table>
 </div>
</body>
</html>
<?php
$server="localhost";
$user="root";
$pwd="ragasree";
$db="students_1415";
if(isset($_POST['stdname']) && !empty($_POST['stdname']))
{
$conn = new mysqli($server, $user, $pwd, $db);
$name=$_POST['stdname'];
$sql = "SELECT * FROM users WHERE fullname='$name'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
echo $row["username"];
}
?>
