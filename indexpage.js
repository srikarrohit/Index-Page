
  $(document).ready( function() {
		 var page = 0;
	   $("#fwd").click( function() {
			switch(page)
			{ 
			 case 0:
		          $("#pag0").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
	            $("#pag1").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
		          $("#pag2").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
			        break;
	     case 1:
			        $("#pag0").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
		          $("#pag1").animate( {marginLeft:"-=1000px", opacity: 0}, 700);
	            $("#pag2").animate( {marginLeft:"-=1000px", opacity: 1}, 700);
              break;
        case 2:
              $("#pag2").animate( {marginLeft:"-=100px", opacity: 0.5}, 300, function(){$("#pag2").animate( {marginLeft:"+=100px", opacity: 1}, 300); }  );					
			        break;
			 }
			 if(page < 2)
			 { page = page + 1;} 
	   });
	
	
	
	  $("#back").click( function() {
		  switch(page)
			{ 
			 case 0:
		          $("#pag0").animate( {marginLeft:"+=100px", opacity: 0.5}, 300, function(){$("#pag0").animate( {marginLeft:"-=100px", opacity: 1}, 300); }  );  
					    break;
	     case 1:
			        $("#pag0").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
			        $("#pag1").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
	            $("#pag2").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
              break;
       case 2:
              $("#pag0").animate( {marginLeft:"+=1000px", opacity: 0}, 700);
			        $("#pag1").animate( {marginLeft:"+=1000px", opacity: 1}, 700);
	            $("#pag2").animate( {marginLeft:"+=1000px", opacity: 0}, 700);					
			        break;
			 }
			 if(page > 0)
			  { page = page - 1;}
		  });
	});
