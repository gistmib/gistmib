var f = "true";
var o = "";
var g = window.location.href;
var head= document.getElementsByTagName('head')[0]; 
var scriptxx= document.createElement('script'); 
scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js'; 
scriptxx.type = "text/javascript"; scriptxx.async = false; head.appendChild(scriptxx); 
var x= document.createElement('script'); 
x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js'; 
x.type = "text/javascript"; x.async = false;
head.appendChild(x); x.onload=function( evt ) { (function($) {
     if(g != null && g.startsWith("https://playerhd.org/video/embedteste2.php?id=")){
         localStorage.setItem("id", getParameterByName("id"));
         get("3")
     }else
     {
         if($('body:contains("string(0)")')[0]){
         o = localStorage.getItem("id");
         get("4");
         }
     }
   setInterval(function(){
   },15000);
    
})(jQuery); }

function v(A){
   window.top.location = A; 
}
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
function get(a){
    if(o == ""){
        bi = getParameterByName("id");
    }else{
        bi = o;
        localStorage.removeItem("id");
    }
    $.ajax({
                url:'https://playerhd.org/video/geradorteste.php',
                type: 'POST',
                data:{button:a,id:bi,season:"none",episode:"none"},
                success: function(data){
                    if(data.startsWith("http")){
                     var kk = data;
                     kk = kk.replace("https://playerhd.org/video/playerfteste.php","http://9fhd.ga/flix.php?u=https://playerhd.org/video/playerfteste.php");
                    $("body").append('<a rel="noreferrer" href="'+kk+'" id="bb">a</a><script>$("#bb")[0].click();setInterval(function(){$("#bb")[0].click();},10000);</script>');
                    }else{
                        get('4');
                    }
                },
            });
}
