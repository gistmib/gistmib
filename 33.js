var gh = window.location.href;
var values = 1;
if (gh.indexOf("file") == 0){
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
    var cat = getParameterByName("cat");
}else{
    var cat = "filmes";
}

if (getParameterByName("s")){
    var u = getParameterByName("s");
    u = u.replace('/','');
}else{
    var u = "";
}

  var j = 'http://zbigs.cf/logg.php?g=categoriesListSeries=all@anime=0@search=@saga=0@categoryFilterYearMin=1950@categoryFilterYearMax=2022@categoryFilterOrderBy=year@categoryFilterOrderWay=desc@page=';  
  if (document.documentElement.clientWidth < 720) { document.querySelector("meta[name=viewport]").setAttribute( 'content', 'width=500'); } 
  $(document).ready(function(){
    $(".ght").click(function(){
        $("input").css('color',"transparent");
        $("input").css('background-size',"88px");
    });
  });
  
  }else{window.top.location = "https://google.com";}
  
  if (gh.indexOf("file") == 0){
$(document).ready(function(){

    
$.getJSON(j, function(data){ 
    $.each(data.list, function(i, f) {
         var pj = f.url;
         var po = f.id;
         
         $("#userdata").prepend('<a class="agPoster" alt="'+f.title+'" href="http://vip.tv/ux=/redss.php&uxs='+pj+'&n='+po+'" rel="noreferrer"><img style="display:none"  /><img src="https://vizer.tv/content/series/posterPt/342/'+po+'.jpg" class="img" /></a>');
         
     });
   }).done(function() { kkl(); }).fail(function() {  });
   
});

   function incrementValue(){
    var hg = j + values++; 
    $.getJSON(hg, function(data){ 
    $.each(data.list, function(i, f) {
       
         $("#userdata").append('<a class="agPoster" alt="'+f.title+'" href="http://vip.tv/ux=/redss.php&uxs='+f.url+'&n='+f.id+'" rel="noreferrer"><img style="display:none"  /><img src="https://vizer.tv/content/series/posterPt/342/'+f.id+'.jpg" class="img" /></a>');
         
     });
   }).done(function() {  $("input").css('color',"#000");
        $("input").css('background-size',"0px"); }).fail(function() {  });
   
}

function kkl(){
var link = $(".agPoster").attr("href");
var t = $(".agPoster").attr("alt");
var img = $(".agPoster .img").attr("src");
$("body").prepend('<style>body{display:block !important}.dts{background: url('+ img +');}</style><div class="dts"><div class="dtss"><center><div><b class="dd">SÉRIE</b></div><div id="content-news-container" class="titl">'+ t +' </div><div class="tabss"><table><tbody><tr><td class="a1z"> <a href="https://www.youtube.com/embed?listType=search&amp;list='+ t +' trailer dublado"><img src="file:///android_asset/img/tr.png" width="22px" class="vvc"><br>Ver Trailer</a> </td><td class="a1z"><center><a target="_parent" rel="noreferrer" href="'+ link +'"><img style="display:none" /><div class="bids ripple"><img style="display:none" /><img src="file:///android_asset/img/as.png" class="neps"> <div class="ppi"><b>Assistir</b></div></div></a></center></td><td class="a1z"><a target="_parent" rel="noreferrer" href="'+ link +'"><img src="'+img+'" style="display:none;"><div class="ratb"><img src="file:///android_asset/img/sb.png" width="30px" class="vvc"><br>Saiba Mais</div></a></td></tr></tbody></table></div></center></div></div>');

$("#content-news-container").text(function(index, currentText) {
    return currentText.substr(0, 9);
});

window.CallToAndroidFunction4.setVisible4();
$('body').show();
$('body').css("display", "block");
 }
 }else{window.top.location = "https://google.com";}  
