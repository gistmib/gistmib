$('a[target="_blank"]').remove();
$("a[target='_blank']").remove();
$("figure img").attr("src", "https://i.ibb.co/bbxLz1K/Captura-de-tela-2023-03-25-182812.png");

$('body').append('<style>zzz{display:none}.Player {position: fixed;background: #000000;width: 100%;height: 100%;top: 0;bottom: 0;left: 0;right: 0;margin: 0px;padding: 0px;z-index: 90000;}.wp-block-button {position: fixed;bottom: 0;width: 100%;height: auto;left: 0;right: 0;z-index: 90001;}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}body{overflow: hidden;}.Player iframe{position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:90000000}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:900000000}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#x img{display:inline !important}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}body{display:block !important}</style><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><button class="ripple" id="x"><img src="https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png" width="18px" height="18px" /></button></div><script>$("figure img").attr("src", "https://i.ibb.co/bbxLz1K/Captura-de-tela-2023-03-25-182812.png");<\/script>');
    $("a[data-id^=https]").click(function() {
        $(".wp-block-button").hide();
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
