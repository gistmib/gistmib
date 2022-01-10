var ga = window.location.href;
function getQueryStringValue (key) {  
  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
} 

var search_term = getQueryStringValue("canal");
var search = getQueryStringValue("pasta");
$('body').replaceWith('<style>a{color:#000 !important}a.v{display:none}.vx{display:none}iframe::-webkit-scrollbar{width:1px}</style><div style="position: fixed;z-index: 100000;color: #fff;border: 1px #fff solid;padding: 10px;font-size: 15px;border-radius: 40px;right: 15px;top: 15px;" id="vip"><a rel="noreferrer" target="v" href="https://pikamaiss.tk/gg/1.php?url=' + search_term +'"><img src="https://i.imgur.com/i33Clpy.png" width="30px"></a></div><div id="d1" style="display:none;position: fixed; background: rgba(0, 0, 0, 0.9);  top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: 2147483647; font-size: 8px;"><div id="b2" class="by" style="position: fixed;z-index: 4000;top: 25px;right: 25px;"><img src="https://i.imgur.com/G5ORYBi.png" width="30px"></div></div><iframe id="video" class="fakeplaybutton" src="' + ga +'" frameborder="0" scrolling="yes" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" style="background: transparent;position: fixed;left: 0;right: 0;width: 100%;height: 100%;bottom: 0;top: 0;"></iframe><style>.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}body{overflow: hidden;}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:900000000000000000}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}body{display:block !important}</style><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><a href="#=fin"><button class="ripple" id="x"><img src="https://i.imgur.com/PwzENfV.png?sss" width="18px" height="18px" /></button></a></div>');
  
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
    
    $('#x').click(function() {
        $('.tt').hide();
        window.CallToAndroidFunction.setVisible();
    });
    var zoom = 1;
    var zoomStep = 0.2;
    document.getElementById("zoomIn").addEventListener("click", function() {
      zoom += zoomStep;
      document.getElementsByTagName("iframe")[0].style.transform = "scale(" + zoom + ")";
    });
    document.getElementById("zoomOut").addEventListener("click", function() {
      if (zoom > zoomStep) {
        zoom -= zoomStep;
        document.getElementsByTagName("iframe")[0].style.transform = "scale(" + zoom + ")";
      }
    });

