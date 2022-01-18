var lk = $("#player-option-1").attr("data-post");
var pager = window.location.href;
var aa= "";

if (pager != null && pager.startsWith("https://megafilmeshd50.com/episodio")){
var ll = $(".dooplay_player_option").attr("data-post");
var link = "https://megafilmeshd50.com/wp-json/dooplayer/v2/"+ll+"/tv/1";
}else{
var ll = $(".dooplay_player_option").attr("data-post");
var link = "http://megafilmeshd50.com/wp-json/dooplayer/v2/"+ll+"/movie/1";
}
jja();
function jja(){
$.getJSON(link, function(data){ 
aa = data.embed_url;
if(aa == null){
document.getElementsByTagName("body")[0].innerHTML ="<style>.chatbro_minimized_chat{display:none !important;visibility:hidden}body{background:transparent}</style><div style='background:#555;border-radius:10px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;margin: auto;max-width: 500px;max-height: 140px;font-size:19px;font-weight:bold;color: #fff;padding:40px;margin-left:40px;margin-right:40px'><center>Este video ainda não esta disponível no app na qualidade 1080p.</center></div>";
window.CallToAndroidFunction1.setVisible();   
    }else{



setTimeout(function(){
    $('#vip').hide();
$('#vip').click(function(){
$('#d1').fadeIn('slow');
$('#vip').fadeOut('slow');
});
///hide///
$('#b2').click(function(){
$('#d1').fadeOut('slow');
$('#vip').fadeIn('slow');
});

$('body').replaceWith('<style>.metaframe{background:#000;visibility: visible !important;}body{display:block}iframe{visibility:hidden}.metaframe{visibility:visible !important;background: transparent;position: fixed !important;left: 0 !important;right: 0 !important;width: 100% !important;height: 100% !important;bottom: 0 !important;top: 0 !important;z-index: 90000000 !important;}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}body{overflow: hidden;}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:900000000000000000}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}body{display:block !important}</style><iframe src="'+aa+'" class="metaframe" frameborder="0" border="0px" scrolling="no" allow="autoplay; encrypted-media" allowfullscreen="" style="height:100%;width:100%;position:absolute"></iframe><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><span href="#=fin"><button class="ripple" id="x"><img src="https://i.imgur.com/PwzENfV.png?sss" width="18px" height="18px" /></button></span></div>');
    
    $('#x').click(function() {
        $('.tt').hide();
        window.CallToAndroidFunction.setVisible();
    });
    var zoom = 1;
    var zoomStep = 0.2;
    document.getElementById("zoomIn").addEventListener("click", function() {
      zoom += zoomStep;
      document.getElementsByClassName("metaframe")[0].style.transform = "scale(" + zoom + ")";
    });
    document.getElementById("zoomOut").addEventListener("click", function() {
      if (zoom > zoomStep) {
        zoom -= zoomStep;
        document.getElementsByClassName("metaframe")[0].style.transform = "scale(" + zoom + ")";
      }
    });
},0);

    setInterval(function(){
    if($('#slider-movies')[0]){$('#slider-movies').remove();}
    if($('a')[0]){$('a').remove();}
    },0);
    
    $('#slider-movies').remove();
    $('head meta').remove();
    $('a').remove();
    $("script").remove();




}   
    
}).fail(function() {
    window.location.reload();
if (pager != null && pager.startsWith("https://megafilmeshd50.com/episodio")){
 link = link.replace("https","http");
}else{
 link = link.replace("http","https");
}
jja();
});

}
