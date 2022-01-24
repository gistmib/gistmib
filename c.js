var gh = window.location.href;
if (gh.indexOf("file") == 0){
    
var k = window.location.href;
k = k.replace('https://vipsts.tk/busca.php?s=','').replace('file:///android_asset/h6.html?s=',''); 
  var j = 'https://superflixfilmes.net/wp-json/dooplay/search/?keyword='+ k +'&nonce=bf0a382498'; 
  var ja = 'https://megafilmeshd50.com/wp-json/dooplay/search/?keyword='+ k +'&nonce=ade4993c21'; 
  var jon = "http://zbigs.cf/logg.php"
  if (document.documentElement.clientWidth < 720) { document.querySelector("meta[name=viewport]").setAttribute( 'content', 'width=500'); } 
  }else{window.top.location = "https://google.com";}
  
  

      
          
if (gh.indexOf("file") == 0){  
setTimeout(function(){
window.CallToAndroidFunction2.setVisible2();
$('body').fadeIn(400);
if($("#userdata a")[0]){}else{
    $("#userdata").append("<div class='ff'>Nada encontrado, não use acentos no texto verifique se o titulo digitado esta correto e tente novamente!</div>");
    }
 },2000);
var g = "?g=categoriesListSeries=all@anime=0@search="+k+"@saga=0@categoryFilterYearMin=1950@categoryFilterYearMax=2023@categoryFilterOrderBy=year@categoryFilterOrderWay=desc@page=";
$.get(jon + g,function(sa){
$.each(sa.list, function(i, b) {
            var iu = b.url;
            iu.replace(/-/g, " ");
            var it = b.id;
        
        $("#userdata").prepend('<a class="gPoster" href="http://vip.tv/ux=/redss.php&uxs='+iu+'&n='+it+'" rel="noreferrer"><img style="display:none"  /><img src="https://vizer.tv/content/series/posterPt/342/'+it+'.jpg" /></a>');
          }); 
          }).fail(function() {});
          

var ga = "?g=categoriesListSeries=all@anime=1@search="+k+"@saga=0@categoryFilterYearMin=1950@categoryFilterYearMax=2023@categoryFilterOrderBy=year@categoryFilterOrderWay=desc@page=";

$.get(jon + ga,function(sa){
$.each(sa.list, function(i, b) {
        var pj = b.url;
        pj.replace(/-/g, " ");
        var pja = b.id;
    
        $("#userdata").prepend('<a class="gPoster" href="http://vip.tv/ux=/redss.php&uxs='+pj+'&n='+pja+'" rel="noreferrer"><img style="display:none"  /><img src="https://vizer.tv/content/series/posterPt/342/'+pja+'.jpg" /></a>');
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
