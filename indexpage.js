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
			        break;
	     case 1:
			        $("#searchform").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			         $(".profile").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			//         $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		          $("#pag1").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
	            $("#pag2").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
              break;
        case 2:
			        $("#searchform").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			         $(".profile").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			  //       $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		          $("#pag1").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
	            $("#pag2").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
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
              break;
       case 2:
              $("#searchform").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
               $(".profile").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
        //       $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
			        $("#pag1").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
	            $("#pag2").animate( {marginLeft:"+=1000px", opacity: 0}, 700);					
			        break;
			 case 3:
              $("#searchform").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
              $(".profile").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
          //    $("#searchpage").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
							$("#getdata").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
							$("#pag0").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
			        $("#pag1").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
	            $("#pag2").animate( {marginLeft:"+=1000px", opacity: 0}, 700);					
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
