if(localStorage.getItem('local')){
    var g = localStorage.getItem('local');
    if(g == "BR" || g == "PT"){
         y();}
         else if (g == ""){
         y();}
         else{
         n();
     }
}else{
    var loc = "http://ip-api.com/json/";
    $.getJSON(loc, function(data){ 
     var g = data.countryCode;
     localStorage.setItem('local', g);
     if(g == "BR" || g == "PT"){
         y();}
         else if (g == ""){
         y();}
         else{
         n();
     }
     
   }).done(function() { }).fail(function() { y();});
}
function y(){
   var gs = document.title;
    if(gs.indexOf("7") == 0) {
        
        
    if(localStorage.getItem('data')){
        
        function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var g = document.title;
if (getParameterByName("u")){
    var kiba = getParameterByName("u");
    if(g.indexOf("6") == 0 || g.indexOf("5") == 0) {
$("body").append("<a href='"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();<\/script>");
    }else{
$("body").append("<a href='"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();<\/script>");
 }
}else{
    
    if(g.indexOf("6") == 0 || g.indexOf("5") == 0) {
var kiba = "https://megafilmeshd50.com/filme/";
$("body").append("<a href='"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();<\/script>");
    }else{
var kiba = "https://megafilmeshd50.com/filme/";
$("body").append("<a href='"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();<\/script>");
   }
}    
    }else{
       
       
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
if (getParameterByName("cat")){
var kiba = getParameterByName("cat");
kiba = kiba.replace("@","?")
$("body").append("<a href='https://superflixfilmes.net"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();setInterval(function(){$('#w')[0].click();},5000);<\/script>");
 
}else{
    
var kiba = "https://superflixfilmes.net/filme/";
$("body").append("<a href='"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();setInterval(function(){$('#w')[0].click();},5000);<\/script>");
   }
       
 }
 
 
}else{
        window.top.location = "http://nplayus.wap.sh/";
    }
}
function n(){
     var ga = document.title;
    if(ga.indexOf("1") == 0) {
        window.top.location = "http://nplayus.wap.sh/";
    }else{
    var g = window.location.href;
    g = g.replace("file:///android_asset/h2.html?u=","").replace("file:///android_asset/h2.html",''); 
    if(g){
      window.top.location = g;  
    }else{
    window.top.location = "http://mobellabel.zya.me/movies.php?u=movie/top_rated&us=Latest movies&type=0";
}
        
    }
    }


check = "true";
