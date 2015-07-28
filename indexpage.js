var count =0;
$(document).ready( function() {
		 var page = 0;
	   $("#fwd").click( function() {
			switch(page)
			{ 
			case 0:
		          $("#searchform").animate( {marginLeft:"-=1000px"}, 850);
		          $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
		          $(".profile").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
	              $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
		          $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
		          $("#1").removeClass("activeCricle");
		          $("#1").addClass("inactiveCricle");
		          $("#2").removeClass("inactiveCricle");
		          $("#2").addClass("activeCricle");
		            break;
	     	case 1:
			        $("#searchform").animate( {marginLeft:"-=1000px"}, 850);
			         $(".profile").animate( {marginLeft:"-=1000px"}, 850);
			         $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
		          $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
	            $("#2").removeClass("activeCricle");
		        $("#2").addClass("inactiveCricle");
		        $("#3").removeClass("inactiveCricle");
		        $("#3").addClass("activeCricle");
              break;
        	case 2:
			        $("#searchform").animate( {marginLeft:"-=1000px"}, 850);
			         $(".profile").animate( {marginLeft:"-=1000px"}, 850);
			         $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
		          $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
	            $("#3").removeClass("activeCricle");
		          $("#3").addClass("inactiveCricle");
		          $("#4").removeClass("inactiveCricle");
		          $("#4").addClass("activeCricle");
              break;
			case 3:
              $("#pag2").animate( {marginLeft:"-=100px"}, 350);
              $("#pag2").animate( {marginLeft:"+=100px"}, 350);  		
			        break;
			 }
			 if(page < 3)
			 { page = page + 1;} 
	   });
	   $("#1").click( function() {
	  		page=0;
			if($("#2").hasClass("activeCricle"))
	        	{
	        		$("#searchform").animate( {marginLeft:"+=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
	        		$("#2").removeClass("activeCricle");
					$("#2").addClass("inactiveCricle");
				}
			if($("#3").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"+=2000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=2000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=2000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=2000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=2000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=2000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=2000px"}, 850);	
					$("#3").removeClass("activeCricle");
					$("#3").addClass("inactiveCricle");
				}
			if($("#4").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"+=3000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=3000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=3000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=3000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=3000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=3000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=3000px"}, 850);
					$("#4").removeClass("activeCricle");
					$("#4").addClass("inactiveCricle");
				}
			$("#1").removeClass("inactiveCricle");
			$("#1").addClass("activeCricle");
	});
	$("#2").click( function() {
			page=1;
			if($("#4").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+=2000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=2000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=2000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=2000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=2000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=2000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=2000px"}, 850);
				$("#4").removeClass("activeCricle");
				$("#4").addClass("inactiveCricle");
			}
			if($("#3").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
				$("#3").removeClass("activeCricle");
				$("#3").addClass("inactiveCricle");
			}
			if($("#1").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"-=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
				$("#1").removeClass("activeCricle");
				$("#1").addClass("inactiveCricle");
			}
			$("#2").removeClass("inactiveCricle");
			$("#2").addClass("activeCricle");
	});
	$("#3").click( function() {
			page=2;
			if($("#2").hasClass("activeCricle"))
	        {
        		$("#searchform").animate( {marginLeft:"-=1000px"}, 850);
		        $(".profile").animate( {marginLeft:"-=1000px"}, 850);
		        $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
						$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
				$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
		        $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
		        $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
        		$("#2").removeClass("activeCricle");
				$("#2").addClass("inactiveCricle");
			}
			if($("#1").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"-=2000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=2000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=2000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=2000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=2000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=2000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=2000px"}, 850);	
					$("#1").removeClass("activeCricle");
					$("#1").addClass("inactiveCricle");
			}
			if($("#4").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
				$("#4").removeClass("activeCricle");
				$("#4").addClass("inactiveCricle");
			}
			$("#3").removeClass("inactiveCricle");
			$("#3").addClass("activeCricle");
	});
	$("#4").click( function() {
			page=3;
			if($("#3").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"-=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
				$("#3").removeClass("activeCricle");
				$("#3").addClass("inactiveCricle");
			}
			if($("#2").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"-=2000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=2000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=2000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=2000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=2000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=2000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=2000px"}, 850);
				$("#2").removeClass("activeCricle");
				$("#2").addClass("inactiveCricle");
			}
			if($("#1").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"-=3000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=3000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=3000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=3000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=3000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=3000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=3000px"}, 850);
				$("#1").removeClass("activeCricle");
				$("#1").addClass("inactiveCricle");
			}
			$("#4").removeClass("inactiveCricle");
			$("#4").addClass("activeCricle");
	});
	
	  $("#back").click( function() {
		  switch(page)
			{ 
			 case 0:
		          $("#searchform").animate( {marginLeft:"+=100px"}, 350, function(){$("#searchform").animate( {marginLeft:"-=100px"}, 350); }  ); 
		           $("#searchinput").animate( {marginLeft:"+=100px"}, 350, function(){$("#searchinput").animate( {marginLeft:"-=100px"}, 350); }  );
		          $(".profile").animate( {marginLeft:"+=100px"}, 350, function(){$(".profile").animate( {marginLeft:"-=100px"}, 350); }  ); 
							$("#txtHint").animate( {marginLeft:"+=100px"}, 350, function(){$("#txtHint").animate( {marginLeft:"-=100px"}, 350); }  );   
	          	break;
	     case 1:
			        $("#searchform").animate( {marginLeft:"+=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
	            $("#2").removeClass("activeCricle");
	          	$("#2").addClass("inactiveCricle");
		        $("#1").removeClass("inactiveCricle");
	          	$("#1").addClass("activeCricle");
              break;
       case 2:
              $("#searchform").animate( {marginLeft:"+=1000px"}, 850);
               $(".profile").animate( {marginLeft:"+=1000px"}, 850);
               $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
	            $("#3").removeClass("activeCricle");
	          	$("#3").addClass("inactiveCricle");
		        $("#2").removeClass("inactiveCricle");
	          	$("#2").addClass("activeCricle");				
			        break;
		case 3:
              $("#searchform").animate( {marginLeft:"+=1000px"}, 850);
              $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"+=1000px"}, 850);	
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
	  			$("#pag0").animate( {marginLeft:"-=1000px", opacity: 0}, 850);
	            $("#pag1").animate( {marginLeft:"-=1000px", opacity: 1}, 850);
		        $("#pag2").animate( {marginLeft:"-=1000px", opacity: 0}, 850);
			});
	  $("#clubspage").click( function(){
	  			$("#pag0").animate( {marginLeft:"-=2000px", opacity: 0}, 850);
	            $("#pag1").animate( {marginLeft:"-=2000px", opacity: 0}, 850);
		        $("#pag2").animate( {marginLeft:"-=2000px", opacity: 1}, 850);
			});
	});
