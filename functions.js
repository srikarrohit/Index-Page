new WOW().init();
var count =0;
function showHint(str,e) {
		if(e.keyCode == 40)
		{
		 console.log(document.getElementById('txtHint').scrollTop);
		if(count!=0)
		document.getElementById(count).style.cssText = 'background-color:white;';
		if(count>6)
		document.getElementById('txtHint').scrollTop+=24;
		count++;
		document.getElementById('inputtext').value=document.getElementById(count).innerHTML;
		document.getElementById(count).style.cssText = 'background-color:#ecf0f1;';
		}
		else if(e.keyCode == 38){
		document.getElementById(count).style.cssText = 'background-color:white;';
		var scroll = document.getElementById('txtHint').scrollTop;
		count--;
		if(scroll>=24 && count>1)
		document.getElementById('txtHint').scrollTop-=24;
    document.getElementById('inputtext').value=document.getElementById(count).innerHTML;
		if(count!=0)
		document.getElementById(count).style.cssText = 'background-color:#ecf0f1;';
		}
		else
		{
    	if (str.length == 0) { 
        document.getElementById('txtHint').innerHTML = '';
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('txtHint').innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open('GET', 'search.php?q=' + str, true);
        xmlhttp.send();
    }
		}
}
function submit(x){
	document.getElementById('inputtext').value=document.getElementById(x).innerHTML;
	document.getElementById('searchform').submit();
}
function display(e){
	if(e.keyCode==40)
//	alert(1);
	{
		console.log(1);	
	}
}
