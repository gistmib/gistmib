
 var gh = window.location.href;

    
var k = window.location.href;
k = k.replace('https://nplay.ml/busca2.php?s=','').replace('file:///android_asset/h6.html?s=','').replace("https://megafilmeshd50.com/?s=","");
  var j = 'https://megafilmeshd50.com/wp-json/dooplay/search/?keyword='+k+'&nonce=ade4993c21';  
  if (document.documentElement.clientWidth < 720) { document.querySelector("meta[name=viewport]").setAttribute( 'content', 'width=500'); }

 
  
  
$(document).ready(function(){
    $("#dt_contenedor").remove();
    $("body").prepend("<style>img {width: 135px;height: 202px;margin: 10px;background:#333333}body{min-width:500 !important;color:#fff;background:#000}a{color:#000}.ff {padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}</style>");
    var gh = window.location.href;
  
  
  $.getJSON(j, function(data){ 
      
      var g = data.error;
  if (g == "no_posts"){
    $("#userdata").append("<div class='ff'>Nada encontrado, não use acentos no texto verifique se o titulo digitado esta correto e tente novamente!</div>");
  }
      $.each(data, function(i, f) {
           $('body').fadeIn(400);
           
           window.CallToAndroidFunction2.setVisible2();
         var i = i;
         var pj = f.url;
         var title = f.title;
         var po = f.img;
         var y = f.extra.date;
         po = po.replace("90x135","185x278");
         
         if (pj != null && pj.startsWith("https://megafilmeshd50.com/filme") || pj.startsWith("http://megafilmeshd50.com/filme")) {
var tblRow = "<a href='http://vip.tv/ux=/ru.php?a="+ pj +"@b="+ title +"@c="+ i +"@d="+ y +"@' class='gPoster'><img src='"+ po +"' /></a>"
           $(tblRow).prependTo("body");
}else{
   var tblRow = "<a href='http://tvxe.tv/"+ pj +"' class='gPoster'><img src='"+ po +"' /></a>"
           $(tblRow).prependTo("body");
}
          
           
     });
     
    
  
   }).fail(function() {  });
  
  
  
});
