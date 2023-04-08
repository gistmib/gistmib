var local = window.location.href;
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
    $("body").append('<style>body{display:block !important}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:90000000099}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#x img{display:inline !important}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}#back{width:30px;height:30px;z-index:9000;position:fixed;left:0;top:0;padding:10px}</style><div id="player_area"><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><button class="ripple" id="x"><img src="https://i.ibb.co/1TdjHpG/icons8-excluir-96.png?sss" width="18px" height="18px" /></button></div></div>');
    
    setTimeout(function(){
        $('#x').click(function(){
        $('.tt').hide();
        window.CallToAndroidFunction.setVisible();
    });
    var zoom=1;
    var zoomStep=0.2;

    document.getElementById("zoomIn").addEventListener("click", function(){
        zoom+=zoomStep;
        document.getElementsByTagName("iframe")[0].style.transform="scale("+zoom+")";
    });
    document.getElementById("zoomOut").addEventListener("click", function(){
        if(zoom>zoomStep){
            zoom-=zoomStep;
            document.getElementsByTagName("iframe")[0].style.transform="scale("+zoom+")";
        }
    }); 
    },100);
}
script.onerror = function(event) {
    window.location.reload();
}
