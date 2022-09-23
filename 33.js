var gh = window.location.href;
var values = 2;
var next = "";
var hash = "";
var jon = "http://zbigs.cf/flix.php";
var j = 'http://zbigs.cf/logg.php?g=categoriesListSeries=all@anime=0@search=@saga=0@categoryFilterYearMin=1950@categoryFilterYearMax=2022@categoryFilterOrderBy=vzViews@categoryFilterOrderWay=desc@page=';  
  
var hourstop = 24;
var nows = new Date().getTime();
var setupTimess = localStorage.getItem('setupTimesssx');
if (setupTimess == null) {
    localStorage.setItem('setupTimesssx', nows);
} else {
    if(nows-setupTimess > hourstop*60*60*1000) {
        localStorage.removeItem('svs');
        localStorage.setItem('setupTimesssx', now);
    }
}

var head= document.getElementsByTagName('head')[0]; var scriptxx= document.createElement('script'); scriptxx.src= 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/core.min.js'; scriptxx.type = "text/javascript"; scriptxx.async = false; head.appendChild(scriptxx); var x= document.createElement('script'); x.src= 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/md5.js'; x.type = "text/javascript"; x.async = false; head.appendChild(x); x.onload=function( evt ) {
    
    
    
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

 next = Math.floor(Math.random() * 900) + 1;
 hash = CryptoJS.MD5("viaviweb" + next);
 
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
    
    if(localStorage.getItem("svs")){
    setTimeout(function(){
 $("#userdata").prepend(localStorage.getItem("svs"));
        kkl();
},0);
}
else{
    
$.get(j,function(sa){
$.each(sa.list, function(c, d) {
    if(c < 1){
            var iu=d.url.replace(/-/g, " ");
            var it=d.id;
            var tt = '<a class="agPoster" href="http://vip.tv/ux=/redss.php@uxs='+iu+'@n='+it+'" rel="noreferrer"><img style="display:none"  /><img class="img" src="https://vizer.tv/content/series/posterPt/342/'+it+'.jpg" /></a>';
             $("#userdata").prepend(tt);
    }   
});
    
}).done(function() { kkl(); }).fail(function() {});    
}else{
     window.top.location = "https://google.com";}  
 
}


function incrementValue(){
    
$.get(j+values++,function(sa){
$.each(sa.list, function(c, d) {
    
            var iu=d.url.replace(/-/g, " ");
            var it=d.id;
            var tt = '<a class="agPoster" href="http://vip.tv/ux=/redss.php@uxs='+iu+'@n='+it+'" rel="noreferrer"><img style="display:none"  /><img class="img" src="https://vizer.tv/content/series/posterPt/342/'+it+'.jpg" /></a>';
             $("#userdata").append(tt);
     
});
     
}).done(function() { $("input").css('color',"#000");
        $("input").css('background-size',"0px"); }).fail(function() {});    
}

function kkl(){
if(localStorage.getItem("svs")){
}
else{      
localStorage.setItem("svs", $("#userdata").html())
}
var link = $(".agPoster").attr("href");
var t = $(".agPoster").attr("alt");
var img = $(".agPoster .img").attr("src");
$("body").prepend('<style>body{display:block !important}.dts{background: url('+ img +');}</style><div class="dts"><div class="dtss"><center><div><b class="dd">SÉRIE</b></div><div id="content-news-container" class="titl">'+ t +' </div><div class="tabss"><table><tbody><tr><td class="a1z"> <a href="https://www.youtube.com/results?search_query='+ t +' trailer dublado"><img src="file:///android_asset/img/tr.png" width="22px" class="vvc"><br>Ver Trailer</a> </td><td class="a1z"><center><a target="_parent" rel="noreferrer" href="'+ link +'"><img style="display:none" /><div class="bids ripple"><img style="display:none" /><img src="file:///android_asset/img/as.png" class="neps"> <div class="ppi"><b>Assistir</b></div></div></a></center></td><td class="a1z"><a target="_parent" rel="noreferrer" href="'+ link +'"><img src="'+img+'" style="display:none;"><div class="ratb"><img src="file:///android_asset/img/sb.png" width="30px" class="vvc"><br>Saiba Mais</div></a></td></tr></tbody></table></div></center></div></div>');

$("#content-news-container").text(function(index, currentText) {
    return currentText.substr(0, 9);
});
window.CallToAndroidFunction4.setVisible4();
$('body').show();
$('body').css("display", "block");
 } 
