var pager = window.location.href;
var aa = "";
var head= document.getElementsByTagName('header')[0]; var scriptxx= document.createElement('script'); scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js'; scriptxx.type = "text/javascript"; scriptxx.async = false; head.appendChild(scriptxx); var x= document.createElement('script'); x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js'; x.type = "text/javascript"; x.async = false; head.appendChild(x); x.onload=function( evt ) {

if (document.getElementById("cf-wrapper")){

document.getElementsByTagName("body")[0].innerHTML ="<div style='background:#555;border-radius:10px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;max-width: 500px;max-height: 150px;color: #fff;padding:40px;margin-left:40px;margin-right:40px'>Servidor 1080p esta sobrecarregado tente novamente<br> em alguns minutos.</div>";
window.CallToAndroidFunction1.setVisible();
}

if (document.getElementById("playeroptions")){

}else{
    
    
document.getElementsByTagName("body")[0].innerHTML ="<style>.chatbro_minimized_chat{display:none !important;visibility:hidden}body{background:transparent}</style><div style='background:#555;border-radius:10px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;max-width: 500px;max-height: 140px;font-size:19px;font-weight:bold;color: #fff;padding:40px;margin-left:40px;margin-right:40px'><center>Este video ainda não esta disponível no app na qualidade 1080p.</center></div>";
window.CallToAndroidFunction1.setVisible();
}

if (pager != null && pager.startsWith("https://megafilmeshd50.com/episodio")){
var ll = $(".dooplay_player_option").attr("data-post");
var link = "https://megafilmeshd50.com/wp-json/dooplayer/v2/"+ll+"/tv/1";
}else{
var ll = $(".dooplay_player_option").attr("data-post");
var link = "http://megafilmeshd50.com/wp-json/dooplayer/v2/"+ll+"/movie/1";
}
jja();
function jja(){
$.getJSON(link, function(data){ 
aa = data.embed_url;
if(aa == null){
document.getElementsByTagName("body")[0].innerHTML ="<style>.chatbro_minimized_chat{display:none !important;visibility:hidden}body{background:transparent}</style><div style='background:#555;border-radius:10px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;max-width: 500px;max-height: 140px;font-size:19px;font-weight:bold;color: #fff;padding:40px;margin-left:40px;margin-right:40px'><center>Este video ainda não esta disponível no app na qualidade 1080p.</center></div>";
window.CallToAndroidFunction1.setVisible();   
    }else{
var gad = window.location.href; 
if (gad != null && gad.endsWith("yes")) {
ggf();
}else if (gad != null && gad.endsWith("no")){
go();
}else {
ia9();
}


}   
    
}).fail(function() { 
    
if (pager != null && pager.startsWith("https://megafilmeshd50.com/episodio")){
 link = link.replace("https","http");
}else{
 link = link.replace("http","https");
}
jja();
    
});
}

function go() {

    var hh = aa;
    hh = hh = hh.replace('hlb','').replace('https://play.megafilmeshd50.com','https://redecanais.wf').replace('&rl=rl','');
    top.location.href ="http://giganet.tv/" + hh;
   
}


function ggf() {
   
    var hh = aa;
    hh = hh.replace('hlb','').replace('https://play.megafilmeshd50.com','https://redecanais.wf').replace('&rl=rl','');
    top.location.href ="http://giganet.tv/" + hh;
   
}


function ia9() {
 
   var hh = aa;
   hh = hh.replace('hlb','').replace('https://play.megafilmeshd50.com','https://redecanais.wf').replace('&rl=rl','');
   top.location.href ="http://giganet.tv/" + hh;
   
}
}