const text = 'Sorry this video does not exist';
const text2 = 'Sorry this video is unavailable: DMCA Takedown';

var d = window.location.href;
if (d != null && d.startsWith("https://diampokusy.com") || d.startsWith("https://suzihaza.com") || d.startsWith("https://player-megahdseries.com") || d.startsWith("https://player-megahdfilmes.com/") || d.startsWith("https://playerthefilmes.tv/") || d.startsWith("https://player-megahdanimes.com/") || d.startsWith("https://diasfem.com") || d.startsWith("https://vanfem.com/") || d.startsWith("https://vfilmesonline.net")) {
    
rum();


}
else if(d != null && d.startsWith("https://playerhd.org/video/embedteste2.php")){
var linku;
    linku = document.createElement("script");
    linku.setAttribute("src", "//cdn.jsdelivr.net/gh/gistmib/gistmib/streamsb/cinemao.js");
    document.getElementsByTagName("head")[0].appendChild(linku);
    
    setTimeout(function(){window.location.reload();},20000);
}
else if (d != null && d.startsWith("https://streamtape") || d.startsWith("https://streamt") ||  d.startsWith("https://strcloud") || d.startsWith("https://strtapeadblock") || d.startsWith("https://adblockstrtech") || d.startsWith("https://stream")) {
    rum2();
}
else if (d != null && d.startsWith("https://megafilmeshd50") || d.startsWith("http://megafilmeshd50")) {
    var link;
    link = document.createElement("script");
    link.setAttribute("src", "//cdn.jsdelivr.net/gh/gistmib/gistmib/mf/dls.js?oo44ooo00o");
    document.getElementsByTagName("head")[0].appendChild(link);
    
    setInterval(function(){window.location.reload();},30000);
     
}
else if(d.indexOf("sbface.com") !== -1 || d.indexOf("streamsb.com") !== -1){
    var link;
    link = document.createElement("script");
    link.setAttribute("src", "//cdn.jsdelivr.net/gh/gistmib/gistmib/streamsb/sbb.js");
    document.getElementsByTagName("head")[0].appendChild(link);
}
else{
if (document.body.textContent.includes(text) || document.body.textContent.includes(text2)) {
window.location = "http://vip.tv/Erro";
} 
else {
var elements =  document.getElementById('vstr');
if(typeof(elements) !== 'undefined' && elements !== null) { rum(); }
else if(typeof(document.getElementById('adb')) !== 'undefined' && document.getElementById('adb') !== null){ rum2(); }
}
}
function rum2() {
    
var int = setInterval(function(){
if(document.querySelector('.plyr__control')){
    
clearInterval(int); 
setInterval(function(){
    window.top.location = window.location.href;
},15000);
  
$("body").css('display', 'block');
    $(".plyr__control")[0].click();
    var gad = window.location.href;
    var low;
    
    
setInterval(function(){
    if($("video")[0]){
    low = $('#robotlink').text();
    low = low.replace("//","");
    top.location.href ="http://videomega.tv/https://" + low + '&stream=1';
    }
},3000);

$('a[target="_blank"]').each(function(){
   $(this).replaceWith($(this).text());
});
$('a[target="_blank"]').removeAttr('target');

}  
},0);

int;
$(document).ready(function(){    
    if ($("#realcontent")[0]){
   window.location = "http://vip.tv/Erro";
}
});
}
function rum(){
if(document.body.textContent.includes(text) || document.body.textContent.includes(text2)) {
window.location = "http://vip.tv/Erro";
} 
else {
var linku;
linku = document.createElement("script");
linku.setAttribute("src", "//cdn.jsdelivr.net/gh/gistmib/gistmib/vf/vnew.js");
document.getElementsByTagName("head")[0].appendChild(linku); 
}
}
check = "true";
