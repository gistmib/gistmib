var headd= document.getElementsByTagName('head')[0];
var scriptxxd= document.createElement('script');
scriptxxd.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js';
scriptxxd.type = "text/javascript";
scriptxxd.async = false;   
headd.appendChild(scriptxxd);

var xd= document.createElement('script');
xd.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js';
xd.type = "text/javascript";
xd.async = false;   
headd.appendChild(xd);

scriptxxd.onload=function( evt ) {
    (function($)
{
if ($("#serie_contenido")[0]){
    
    var jx = $("#info .custom_fields:first").text();
    var yx = $(".extra .date").text();
    jx = jx.replace('Título original','');
    var o = window.location.href;        
    var cod = $('#episodes').html();
    var c = cod.replaceAll('"','sim').replaceAll("'",'nao');
    
    $('body').html('<meta nme="referrer" content="never"><meta nme="referrer" content="no-referrer"><form action="https://pikamaiss.tk/novo/dts1.php" name="vote" method="post" style="display:none;"><input type="text" name="u" value="' + o + '" /><input type="text" name="t" value="' + jx + '" /><input type="text" name="y" value="' + yx + '" /><input type="text" name="h" value="' + c + '" /></form>');
    
    document.forms['vote'].submit();
    
}else{
   $("#dooplay_player_response").on('DOMNodeInserted', function(e) {
    console.log(e.target, ' was inserted');
setTimeout(function(){ 
ia9();
},5000);
});

if ($(".metaframe")[0]){
ia9();
}
   
function ia9(){ 
             
function getParameterByName(name, url) {
    if (!url) url = $('.metaframe').attr('src');
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
  if(getParameterByName('source')){
           var hh = getParameterByName('source');   
    hh = hh.replaceAll("%2F", "/").replaceAll('%3A',':').replace(/(https:|)(^|\/\/)(.*?\/)/g,'proxy.ec.cx/video.php?url=');
    var c = hh + ".mp4?attachment=true";
    
    var o = $('.sbox .custom_fields span.valor:first-of-type').text();
    var f = $('.date').text();
    o = o.replace(/[0-9]/g,"").replaceAll('votos','').replaceAll(',','').replaceAll('.','');

    $('body').prepend('<meta name="referrer" content="never"><meta name="referrer" content="no-referrer"><form id="myForm" action="https://mixabisn.tk/novo/dts.php" method="post"><input type="hidden" name="ux" value="' + window.location.href + '"><input type="hidden" name="t" value="' + o + '"><input type="hidden" name="link" value="' + c + '"><input type="hidden" name="y" value="' + f + '"></form><script>document.getElementById("myForm").submit();</script>');
    
       }else{
           var hh = $('.metaframe').attr('src') 
    hh = hh.replaceAll("%2F", "/").replaceAll('%3A',':').replace(/(https:|)(^|\/\/)(.*?\/)/g,'https://www.superflix.net/?');
    
    var o = $('.sbox .custom_fields span.valor:first-of-type').text();
    var f = $('.date').text();
    o = o.replace(/[0-9]/g,"").replaceAll('votos','').replaceAll(',','').replaceAll('.','');

    $('body').prepend('<meta name="referrer" content="never"><meta name="referrer" content="no-referrer"><form id="myForm" action="https://mixabisn.tk/novo/dts.php" method="post"><input type="hidden" name="ux" value="' + window.location.href + '"><input type="hidden" name="t" value="' + o + '"><input type="hidden" name="link" value="' + hh + '"><input type="hidden" name="y" value="' + f + '"></form><script>document.getElementById("myForm").submit();</script>');
       }  
    
   } 
}
})(jQuery);
}