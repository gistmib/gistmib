
var gh = window.location.href;
var values = 2;
var next = "";
var hash = "";
var jon = "http://nplazers.in/flix.php";
var j = 'https://nplazers.in/logg.php?g=categoriesListSeries=all%26anime=0%26search=%26saga=0%26categoryFilterYearMin=1950%26categoryFilterYearMax=2023%26categoryFilterOrderBy=vzViews%26categoryFilterOrderWay=desc%26page=';
  
var hourstop = 24;
var nows = new Date().getTime();
var setupTimess = localStorage.getItem('setupTimesssx');

if (setupTimess == null) {
    localStorage.setItem('setupTimesssx', nows);
} else {
    if(nows-setupTimess > hourstop*60*60*1000) {
        localStorage.removeItem('svs');
        localStorage.setItem('setupTimesssx', nows);
    }
}

$(document).ready(function(){
if(localStorage.getItem("svs")){
    setTimeout(function(){
        $("#userdata").prepend(localStorage.getItem("svs"));
        kkl();
},0);
}
else{
    
$.get(j,function(sa){
   let json = JSON.parse(sa);
$.each(json.list, function(c, d) {
    var iu=d.url.replace(/-/g, " ");
    var it=d.id;
    var tt = '<a class="agPoster" href="http://vip.tv/ux=/redss.php@uxs='+iu+'@n='+it+'@d='+d.year+'" rel="noreferrer" alt="'+d.title+'"><img style="display:none"  /><img class="img" src="https://flixei.com/content/series/posterPt/342/'+it+'.jpg" /></a>';
       $("#userdata").prepend(tt);
});
    
}).done(function() { kkl(); }).fail(function() {});    
}

});

function incrementValue(){
    
$.get(j+values++,function(sa){
    let json = JSON.parse(sa);
$.each(json.list, function(c, d) {
    
            var iu=d.url.replace(/-/g, " ");
            var it=d.id;
            var tt = '<a class="agPoster" href="http://vip.tv/ux=/redss.php@uxs='+iu+'@n='+it+'@d='+d.year+'" rel="noreferrer" alt="'+d.title+'"><img style="display:none"  /><img class="img" src="https://flixei.com/content/series/posterPt/342/'+it+'.jpg" /></a>';
             $("#userdata").append(tt);
     
});
     
}).done(function() { $("input").css('color',"#000");
        $("input").css('background-size',"0px"); }).fail(function() {});    
}

function kkl(){
if(localStorage.getItem("svs")){
}
else{
  if($(".agPoster").length) {
    localStorage.setItem("svs", $("#userdata").html())
  }else{
    window.location.reload();
  }
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