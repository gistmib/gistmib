var head= document.getElementsByTagName('head')[0];
var scriptxx= document.createElement('script');
scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js';
scriptxx.type = "text/javascript";
scriptxx.async = false;
head.appendChild(scriptxx);

var x= document.createElement('script');
x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js';
x.type = "text/javascript"; x.async = false;
head.appendChild(x);


x.onload=function( evt ) {
setInterval(function(){
    $("a").parent("div").remove();
        $('a[target="_blank"]').each(function(){
$(this).replaceWith($(this).text());
});
$('a[target="_blank"]').removeAttr('target');
$("iframe").remove();
    },0);


$(document).ready(function(){



$('body').prepend('<style>video{object-fit: cover !important;}body{display:block}.jw-logo-top-right{display:none}iframe{visibility:hidden}.metaframe{visibility:visible !important;background: transparent;position: fixed !important;left: 0 !important;right: 0 !important;width: 100% !important;height: 100% !important;bottom: 0 !important;top: 0 !important;z-index: 90000000 !important;}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}body{overflow: hidden;}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:900000000000000000}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}body{display:block !important}</style><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><as href="#=fin"><button class="ripple" id="x"><img src="https://i.imgur.com/PwzENfV.png?sss" width="18px" height="18px" /></button></as></div>');
    
    $('#x').click(function() {
        $('.tt').hide();
        window.CallToAndroidFunction.setVisible();
    });
    var zoom = 1;
    var zoomStep = 0.2;
    document.getElementById("zoomIn").addEventListener("click", function() {
      zoom += zoomStep;
      document.getElementsByTagName("div")[0].style.transform = "scale(" + zoom + ") !important";
    });
    document.getElementById("zoomOut").addEventListener("click", function() {
      if (zoom > zoomStep) {
        zoom -= zoomStep;
        document.getElementsByTagName("div")[0].style.transform = "scale(" + zoom + ") !important";
      }
    });




 
});


}
