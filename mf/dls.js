var pager = window.location.href;window.CallToAndroidFunction1.setVisible();
if (pager != null && pager.startsWith("http:")) {
    window.location.href = pager.replace("http:","https:")
}

var aa = "";
var kka = "true";   


if (document.getElementById("cf-wrapper")){

document.getElementsByTagName("body")[0].innerHTML ="<div style='background:#555;border-radius:10px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;max-width: 500px;max-height: 150px;color: #fff;padding:40px;margin-left:40px;margin-right:40px'>Servidor 1080p esta sobrecarregado tente novamente<br> em alguns minutos.</div>";
window.CallToAndroidFunction1.setVisible();
}

if (document.getElementById("playeroptions")){

}else{
    
    
document.getElementsByTagName("body")[0].innerHTML ="<style>.chatbro_minimized_chat{display:none !important;visibility:hidden}body{background:transparent}</style><div style='background:#555;border-radius:10px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;max-width: 500px;max-height: 140px;font-size:19px;font-weight:bold;color: #fff;padding:40px;margin-left:40px;margin-right:40px'><center>Este video ainda não esta disponível no app na qualidade 1080p.</center></div>";
window.CallToAndroidFunction1.setVisible();
}


jja();
function jja(){
if($(".metaframe")[0]){
aa = $(".metaframe").attr("src");
 
        var gad = window.location.href; 
if (gad != null && gad.endsWith("yes")) {
ggf();
}else if (gad != null && gad.endsWith("no")){
go();
}else {
ia9();
}
}else{
    
$('#playcontainer').bind('DOMNodeInserted DOMNodeRemoved', function() {
    if($(".metaframe")[0]){
    if(kka == "true"){
       aa = $(".metaframe").attr("src");
         
        kka = "false";
        var gad = window.location.href; 
if (gad != null && gad.endsWith("yes")) {
ggf();
}else if (gad != null && gad.endsWith("no")){
go();
}else {
ia9();
}
    
        
    
    }
        
    }
  
});   
    
}

}

function go() {

    var hh = aa;
    top.location.href ="http://giganet.tv/" + hh;
   kka = "true";   
}


function ggf() {
   
    var hh = aa;
   top.location.href ="http://giganet.tv/" + hh;
   kka = "true";   
}


function ia9() {
 
   var hh = aa;
   top.location.href ="http://giganet.tv/https://playmys.xtgem.com/download.php?u=" + hh;
   kka = "true";   
}


 setInterval(function(){
     if(kka = "true"){}
     else{
     window.location.href = pager.replace("http:","https:")
     }
    },15000);
