var local = window.location.hostname;
var locations = ["gdriveplayer.us"];
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
     $(document).ready(function(){
       getLocation(local, function(position){
         if(position === 0){
           alert(getParam("link"));
           window.location.href= "https://download.gdriveplayer.us/download.php?link=" + getParam("link");
         }
       });
     });
}
script.onerror = function(event) {
    window.location.reload();
}


function getLocation(uri, onResult){
    let i = 0;
    do {
        if(locations[i].indexOf(uri) >= 0){
            onResult(0);
            return true;
        }
        if(i == locations.length -1){
            onResult(1);
        }
        i++;
    }
    while(i < locations.length);
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

