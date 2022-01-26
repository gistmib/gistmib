var gh = window.location.href;
if (gh.indexOf("file") == 0){
    
var k = window.location.href;
k = k.replace('https://vipsts.tk/busca.php?s=','').replace('file:///android_asset/h6.html?s=',''); 
  var j = 'https://superflixfilmes.net/wp-json/dooplay/search/?keyword='+ k +'&nonce=bf0a382498'; 
  var ja = 'https://megafilmeshd50.com/wp-json/dooplay/search/?keyword='+ k +'&nonce=ade4993c21';  
  if (document.documentElement.clientWidth < 720) { document.querySelector("meta[name=viewport]").setAttribute( 'content', 'width=500'); } 
  }else{window.top.location = "https://google.com";}
  
  
var head= document.getElementsByTagName('head')[0]; var scriptxx= document.createElement('script'); scriptxx.src= 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/core.min.js'; scriptxx.type = "text/javascript"; scriptxx.async = false; head.appendChild(scriptxx); var x= document.createElement('script'); x.src= 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js'; x.type = "text/javascript"; x.async = false; head.appendChild(x); x.onload=function( evt ) {
      
          
if (gh.indexOf("file") == 0){  
setTimeout(function(){
window.CallToAndroidFunction2.setVisible2();
$('body').fadeIn(400);
if($("#userdata a")[0]){}else{
    $("#userdata").append("<div class='ff'>Nada encontrado, não use acentos no texto verifique se o titulo digitado esta correto e tente novamente!</div>");
    }
 },2000);
var next = Math.floor(Math.random() * 900) + 1;
var hash = CryptoJS.MD5("viaviweb" + next);
var jon = "http://zbigs.cf/flix.php"; 
var r = '{"salt":"'+ next +'","sign":"'+ hash +'","method_name":"get_search_movies","search_text":"'+ k +'","page":"1"}';
var g = "?g=" + btoa(r);
$.get(jon + g,function(sa){
var g = sa.LIVETV;
  if (g.indexOf("[]") == 0){
  
  }
$.each(sa.LIVETV, function(i, b) {
            var iu = b.movie_desc;
            var it = b.id;
            var pp = b.movie_poster;
            pp=pp.replace("w300","w200");
            $("#userdata").prepend('<a class="gPoster '+ b.language_name+'" href="http://vip.tv/ux=/redsx.php&uxs='+iu+'&n='+it+'" rel="noreferrer"><img style="display:none"  /><img src="'+pp+'" /></a>');
          }); 
          }).fail(function() {});
          
var ra = '{"salt":"'+ next +'","sign":"'+ hash +'","method_name":"get_search_series","search_text":"'+ k +'","page":"1"}';
var ga = "?g=" + btoa(ra);

$.get(jon + ga,function(sa){
 var g = sa.LIVETV;
  if (g.indexOf("[]") == 0){
  }
$.each(sa.LIVETV, function(i, b) {
        var pj = b.series_name;
        var pja = b.id;
         var po = b.series_poster;
            po=po.replace("w300","w200");
            
            $("#userdata").prepend('<a class="gPoster" href="http://vip.tv/ux=/redssx.php&uxs='+pj+'&n='+pja+'" rel="noreferrer"><img style="display:none"  /><img src="'+po+'" /></a>');
          }); 
          }).fail(function() {});    

$.getJSON(j, function(data){ 
      var g = data.error;
  if (g == "no_posts"){
    $("#userdata").append("<div class='ff'>Nada encontrado, não use acentos no texto verifique se o titulo digitado esta correto e tente novamente!</div>");
  }
      $.each(data, function(i, f) {
         var i = i;
         var pj = f.url;
         var title = f.title;
         var po = f.img;
         var y = f.extra.date;
         po = po.replace("90x135","185x278");
         
         if (pj != null && pj.startsWith("https://superflixfilmes.net/filme") || pj.startsWith("https://superflixfilmes.net/filme")) {
var tblRow = "<a href='http://tvxe.tv/"+pj+"' class='gPoster'><img src='"+ po +"' /></a>"
           $(tblRow).appendTo("#userdata");
}else{
}
          
           
     });
     
    
  
   }).fail(function() { });
   
   $.getJSON(ja, function(data){ 
      var g = data.error;
  if (g == "no_posts"){
    $("#userdata").append("<div class='ff'>Nada encontrado, não use acentos no texto verifique se o titulo digitado esta correto e tente novamente!</div>");
  }
      $.each(data, function(i, f) {
         var i = i;
         var pj = f.url;
         var title = f.title;
         var po = f.img;
         var y = f.extra.date;
         po = po.replace("90x135","185x278");
         
         if (pj != null && pj.startsWith("https://megafilmeshd50.com/filme") || pj.startsWith("http://megafilmeshd50.com/filme")) {
}else{
   var tblRow = "<a href='http://tvxe.tv/"+ pj +"' class='gPoster'><img src='"+ po +"' /></a>"
           $(tblRow).appendTo("#userdata");
}
          
           
     });
     
    
  
   }).fail(function() {  });
 
}else{window.top.location = "https://google.com";}
}
