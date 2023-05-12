var local = window.location.hostname;
var locations = "gdriveplayer.to";
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
     $(document).ready(function(){
        getLocation(local, function(uri){
            alert(uri);
            window.location.href = "http://videomega.tv/" + uri;
       });
     });
}
script.onerror = function(event) {
    window.location.reload();
}


function getLocation(uri, onResult){
    if(locations === uri){
      alert(uri);
        window.location=href= "//download.gdriveplayer.us/download.php?link=" + getParam("link");
    }else {
        var h = $(".panel-body a:last-of-type").attr("href");
        alert(h);
        onResult(h);
    }
}
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
