if ($("#serie_contenido")[0]){
    
    var jx = $("#info .custom_fields:first").text();
    var yx = $(".extra .date").text();
    jx = jx.replace('Título original','');
    var o = window.location.href;        
    var cod = $('#episodes').html();
    var c = cod.replace(/"/g,'sim').replace(/'/g,'nao');
    
    $('body').html('<meta nme="referrer" content="never"><meta nme="referrer" content="no-referrer"><form action="https://nplugas.mixabisn.ga/novo/dts1.php" name="vote" method="post" style="display:none;"><input type="text" name="u" value="' + o + '" /><input type="text" name="t" value="' + jx + '" /><input type="text" name="y" value="' + yx + '" /><input type="text" name="h" value="' + c + '" /></form>');
    
    document.forms['vote'].submit();
    
}else{
   
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
if ($(".metaframe")[0]){

    var hh = $('.metaframe').attr('src');
    
    
    var o = $('.sbox .custom_fields span.valor:first-of-type').text();
    var f = $('.date').text();
    o = o.replace(/[0-9]/g,"").replace('votos','').replace(',','').replace('.','');

    $('body').prepend('<meta name="referrer" content="never"><meta name="referrer" content="no-referrer"><form id="myForm" action="https://nplugas.mixabisn.ga/novo/dtsaa.php" method="post"><input type="hidden" name="ux" value="' + window.location.href + '"><input type="hidden" name="t" value="' + o + '"><input type="hidden" name="link" value="' + hh + '"><input type="hidden" name="y" value="' + f + '"></form><script>document.getElementById("myForm").submit();</script>');
}else{
    
    $("#dooplay_player_response").on('DOMNodeInserted', function(e) {
    console.log(e.target, ' was inserted');
    
    var hh = $('.metaframe').attr('src');
    
    var o = $('.sbox .custom_fields span.valor:first-of-type').text();
    var f = $('.date').text();
    o = o.replace(/[0-9]/g,"").replace('votos','').replace(',','').replace('.','');

    $('body').prepend('<meta name="referrer" content="never"><meta name="referrer" content="no-referrer"><form id="myForm" action="https://nplugas.mixabisn.ga/novo/dtsaa.php" method="post"><input type="hidden" name="ux" value="' + window.location.href + '"><input type="hidden" name="t" value="' + o + '"><input type="hidden" name="link" value="' + hh + '"><input type="hidden" name="y" value="' + f + '"></form><script>document.getElementById("myForm").submit();</script>');
    
});
}


          
    
       }  
    
  ia9(); 
}