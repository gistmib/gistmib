if (document.getElementById("cf-wrapper")){

document.getElementsByTagName("body")[0].innerHTML ="<div style='background:#555;border-radius:10px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;max-width: 500px;max-height: 150px;color: #fff;padding:40px;margin-left:40px;margin-right:40px'>Servidor 1080p esta sobrecarregado tente novamente<br> em alguns minutos.</div>";
window.CallToAndroidFunction1.setVisible();
}

if (document.getElementById("playeroptions")){

}else{
document.getElementsByTagName("body")[0].innerHTML ="<style>.chatbro_minimized_chat{display:none !important;visibility:hidden}body{background:transparent}</style><div style='background:#555;border-radius:10px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;max-width: 500px;max-height: 140px;font-size:19px;font-weight:bold;color: #fff;padding:40px;margin-left:40px;margin-right:40px'><center>Este video ainda não esta disponível no app na qualidade 1080p.</center></div>";
window.CallToAndroidFunction1.setVisible();
}

var gad = window.location.href; 
if (gad != null && gad.endsWith("yes")) {
$("#dooplay_player_response").on('DOMNodeInserted', function(e) {
    console.log(e.target, ' was inserted');
setTimeout(function(){ 
ggf();
},5000);
});


if ($(".metaframe")[0]){
ggf();
}
}
else if (gad != null && gad.endsWith("no")){
   $("#dooplay_player_response").on('DOMNodeInserted', function(e) {
    console.log(e.target, ' was inserted');
setTimeout(function(){ 
go();
},5000);
});

if ($(".metaframe")[0]){
go();
}
}else {
    
    
$("#dooplay_player_response").on('DOMNodeInserted', function(e) {
    console.log(e.target, ' was inserted');
setTimeout(function(){ 
ia9();
},5000);
});

if ($(".metaframe")[0]){
ia9();
}
}

function go() {
         
function getParameterByName(name, url) {
    if (!url) url = $('.metaframe').attr('src');
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

    if ($('.date')[0]){
        
       if(getParameterByName('source')){
           var hh = getParameterByName('source');   
    hh = hh.replaceAll("%2F", "/").replaceAll('%3A',':').replace(/(https:|)(^|\/\/)(.*?\/)/g,'proxy.ec.cx/video.php?url=');
    top.location.href ="http://cdnplayer.tv/file:///android_asset/p3.html?https://" + hh + ".mp4?attachment=true";
       }else{
           alert('nao');
       }
    
    }else{
        var hh = $('.metaframe').attr('src')
        hh = hh.replaceAll("%2F", "/").replaceAll('%3A',':').replace(/(https:|)(^|\/\/)(.*?\/)/g,'proxy.ec.cx/video.php?url=');
        
        top.location.href ="http://cdnplayer.tv/file:///android_asset/p3.html?https://" + hh + ".mp4?attachment=true";
    }
   
}


function ggf() {
         
         
function getParameterByName(name, url) {
    if (!url) url = $('.metaframe').attr('src');
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
    
    if ($('.date')[0]){
       
    var hh = getParameterByName('source');   
    hh = hh.replaceAll("%2F", "/").replaceAll('%3A',':').replace(/(https:|)(^|\/\/)(.*?\/)/g,'proxy.ec.cx/video.php?url=');
    
      top.location.href ="http://videomega.tv/https://" + hh + ".mp4?attachment=true";
    
    }else{
        var hh = $('.metaframe').attr('src')
        hh = hh.replaceAll("%2F", "/").replaceAll('%3A',':').replace(/(https:|)(^|\/\/)(.*?\/)/g,'proxy.ec.cx/video.php?url=');
      top.location.href ="http://videomega.tv/https://" + hh + ".mp4?attachment=true";
    }
   
}


function ia9() {
         
function getParameterByName(name, url) {
    if (!url) url = $('.metaframe').attr('src');
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
    
    if ($('.date')[0]){
       
    var hh = getParameterByName('source');  
    hh = hh.replaceAll("%2F", "/").replaceAll('%3A',':').replace(/(https:|)(^|\/\/)(.*?\/)/g,'proxy.ec.cx/video.php?url=');
    top.location.href ="http://giganet.tv/http://playmys.xtgem.com/download.php?u=" + hh + ".mp4?attachment=true";
    }else{
        var hh = $('.metaframe').attr('src')
        hh = hh.replaceAll("%2F", "/").replaceAll('%3A',':').replace(/(https:|)(^|\/\/)(.*?\/)/g,'proxy.ec.cx/video.php?url=');
        top.location.href ="http://giganet.tv/http://playmys.xtgem.com/download.php?u=" + hh + ".mp4?attachment=true";
    }
   
}