$(document).ready( function() {
		 var page = 0;
	   $("#fwd").click( function() {
			switch(page)
			{ 
			case 0:
		          $("#searchform").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		    //      $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		          $(".profile").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
	              $("#pag1").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		          $("#pag2").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		          $("#1").removeClass("activeCricle");
		          $("#1").addClass("inactiveCricle");
		          $("#2").removeClass("inactiveCricle");
		          $("#2").addClass("activeCricle");
		            break;
	     	case 1:
			        $("#searchform").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			         $(".profile").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			//         $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		          $("#pag1").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
	            $("#pag2").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
	            $("#2").removeClass("activeCricle");
		        $("#2").addClass("inactiveCricle");
		        $("#3").removeClass("inactiveCricle");
		        $("#3").addClass("activeCricle");
              break;
        	case 2:
			        $("#searchform").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			         $(".profile").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			  //       $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		          $("#pag1").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
	            $("#pag2").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
	            $("#3").removeClass("activeCricle");
		          $("#3").addClass("inactiveCricle");
		          $("#4").removeClass("inactiveCricle");
		          $("#4").addClass("activeCricle");
              break;
			case 3:
              $("#pag2").animate( {marginLeft:"-=100px", opacity: 0.5}, 300);
              $("#pag2").animate( {marginLeft:"+=100px", opacity: 1}, 300);  		
			        break;
			 }
			 if(page < 3)
			 { page = page + 1;} 
	   });
	
	
	
	  $("#back").click( function() {
		  switch(page)
			{ 
			 case 0:
		          $("#searchform").animate( {marginLeft:"+=100px", opacity: 0.5}, 300, function(){$("#searchform").animate( {marginLeft:"-=100px", opacity: 1}, 300); }  ); 
		   //        $("#searchpage").animate( {marginLeft:"+=100px", opacity: 0.5}, 300, function(){$("#searchpage").animate( {marginLeft:"-=100px", opacity: 1}, 300); }  ); 
		          $(".profile").animate( {marginLeft:"+=100px", opacity: 0.5}, 300, function(){$(".profile").animate( {marginLeft:"-=100px", opacity: 1}, 300); }  ); 
							$("#getdata").animate( {marginLeft:"+=100px", opacity: 0.5}, 300, function(){$("#getdata").animate( {marginLeft:"-=100px", opacity: 1}, 300); }  );   
	          	break;
	     case 1:
			        $("#searchform").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
			        $(".profile").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
			 //       $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
							$("#getdata").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
							$("#pag0").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
			        $("#pag1").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
	            $("#pag2").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
	            $("#2").removeClass("activeCricle");
	          	$("#2").addClass("inactiveCricle");
		        $("#1").removeClass("inactiveCricle");
	          	$("#1").addClass("activeCricle");
              break;
       case 2:
              $("#searchform").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
               $(".profile").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
        //       $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
			        $("#pag1").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
	            $("#pag2").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
	            $("#3").removeClass("activeCricle");
	          	$("#3").addClass("inactiveCricle");
		        $("#2").removeClass("inactiveCricle");
	          	$("#2").addClass("activeCricle");				
			        break;
		case 3:
              $("#searchform").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
              $(".profile").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
          //    $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
			        $("#pag1").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
	            $("#pag2").animate( {marginLeft:"+=1000px", opacity: 0}, 700);	
	            $("#4").removeClass("activeCricle");
	          	$("#4").addClass("inactiveCricle");
		        $("#3").removeClass("inactiveCricle");
	          	$("#3").addClass("activeCricle");
				break;
}
			 if(page > 0)
			  { page = page - 1;}
		  });



	  $("#deptpage").click( function(){
	  			$("#pag0").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
	            $("#pag1").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
		        $("#pag2").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			});
	  $("#clubspage").click( function(){
	  			$("#pag0").animate( {marginLeft:"-=2000px", opacity: 0}, 700);
	            $("#pag1").animate( {marginLeft:"-=2000px", opacity: 0}, 700);
		        $("#pag2").animate( {marginLeft:"-=2000px", opacity: 1}, 700);
			});
	});
