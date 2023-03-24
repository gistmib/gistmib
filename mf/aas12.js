$("body").hide();
var gh = window.location.href;
var ghs = window.location.href;
gh = gh.replace("https://megafilmeshd50.com/categoria/lancamentos/?","").replace("https://megafilmeshd50.com/filme/disney-xd/?","").replace("https://megafilmeshd50.com/filme/a-fazenda-ao-vivo/?","").replace("&rl=rl","");

if(ghs.startsWith("https://megafilmeshd50.com/filme/disney-xd/")){

localStorage.setItem("link", gh);
window.location.href = "https://megafilmeshd50.com/filme/a-fazenda-ao-vivo/";
}else{
   
    var leg = localStorage.getItem("link");
    if(localStorage.getItem("link")){
        gh = leg;
    }
    localStorage.removeItem("link");
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
var p = "false";
$("#dooplay_player_response").on('DOMNodeInserted', function(e) {
    if($(".metaframe")[0]){
    if(p == "false"){
            $('body').prepend('<style>body{display:block !important}iframe{visibility:hidden}.metaframe{visibility:visible !important;background: transparent;position: fixed !important;left: 0 !important;right: 0 !important;width: 100% !important;height: 100% !important;bottom: 0 !important;top: 0 !important;z-index: 900000 !important;}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}body{overflow: hidden;}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:900000000000000000}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}body{display:block !important}</style><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><span href="#=fin"><button class="ripple" id="x"><img src="https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png" width="18px" height="18px" /></button></span></div>');
            $(".metaframe").attr("src","https://play.megafilmeshd50.com/player3/mega2.php?canal="+gh+"&rl=rl");
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
    
        p = "true";
    }
    }
});

if($(".metaframe")[0]){
    $('body').prepend('<style>body{display:block !important}iframe{visibility:hidden}.metaframe{visibility:visible !important;background: transparent;position: fixed !important;left: 0 !important;right: 0 !important;width: 100% !important;height: 100% !important;bottom: 0 !important;top: 0 !important;z-index: 900000 !important;}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}body{overflow: hidden;}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:900000000000000000}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}body{display:block !important}</style><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><span href="#=fin"><button class="ripple" id="x"><img src="https://i.imgur.com/PwzENfV.png?sss" width="18px" height="18px" /></button></span></div>');
            $(".metaframe").attr("src","https://play.megafilmeshd50.com/player3/mega2.php?canal="+gh+"&rl=rl");
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
}
    
   
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
