new WOW().init();
function showHint(str) {
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
function submit(x){
	document.getElementById('getdata').value=document.getElementById(x).innerHTML;
	document.getElementById('searchform').submit();
}