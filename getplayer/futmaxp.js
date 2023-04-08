var local = window.location.href;
var head = document.getElementsByTagName('head')[0]; 
var script = document.createElement('script'); 
script.src = '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.innerHTML = initHead();
head.appendChild(script); 
script.onload = function(event) {

    $("body").css("display", "block");
    getButtons($(".options_iframe"), function(html){
        $("body").html(html);
        
        $(document).bind('DOMNodeInserted', function() {
            $('body').contents(':not(#content_area)').remove();
        });
    });

}
script.onerror = function(event) {
    window.location.reload();
}
function initHead(){
    return "<style>body{display:block !important;overflow: hidden;padding:0px;margin:0px;width:100%;height:100%;background: #000000;color: #ffffff;font-family: sans-serif;}.btn_area{width: calc(100% / 2 - 60px);color: #ffffff;background: #303030;margin: 5px;padding: 10px 20px;border-radius: 90px;border: 1px #505050 solid;font-size: 15px;text-align: center;float:left}.scroller_area{justify-content: center;max-width: 500px;height: 100%;position: absolute;left: 0;right: 0;margin: auto;overflow-x: hidden;overflow-y: scroll;}#title {width: 100%;text-align: center;padding: 30px 10px;font-size: 18px;font-weight: bold;}#player_area {display:none;position: fixed;width: 100%;height: 100%;background: #000;z-index: 10;transition: all 0.5s;}#player_area iframe{border: 0px #000 solid;width: 100%;height: 100%;}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:90000000099}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#x img{display:inline !important}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}#back{width:30px;height:30px;z-index:9000;position:fixed;left:0;top:0;padding:10px}</style>";
}
function getButtons(element, onResult){
    var html = "";
    if(checkIsNullValue(element)){
        element.find("a").each(function(){
            html += '<div class="btn_area" onclick="getPlayer(\''+$(this).attr("data-url")+'\')">'+$(this).text()+'</div>';
        });
        onResult("<div id='content_area'><div class='scroller_area'><div id='title'>Escolha uma das opções abaixo</div>"+html+"</div><div id='player_area'></div></div>");
    }else {
        window.location.reload();
    }
}
function closePlayer(){
    var player = $("#player_area");
    player.html("");
    player.hide();
}
function getPlayer(uri){
    var player = $("#player_area");
    player.html('<img onclick="closePlayer()" id="back" src="//img.icons8.com/external-inkubators-detailed-outline-inkubators/55/ffffff/external-left-arrow-arrows-inkubators-detailed-outline-inkubators.png"/><iframe src="'+uri+'" frameborder="0" scrolling="no" id="myFrame" class="myFrame" allowfullscreen="true" allow="encrypted-media"></iframe><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><button class="ripple" id="x"><img src="https://i.ibb.co/1TdjHpG/icons8-excluir-96.png?sss" width="18px" height="18px" /></button></div>');
    player.css("display", "block");

    $('#x').click(function(){
        $('.tt, #back').hide();
        window.CallToAndroidFunction.setVisible();
    });
    var zoom=1;
    var zoomStep=0.2;

    document.getElementById("zoomIn").addEventListener("click", function(){
        zoom+=zoomStep;
        document.getElementsByClassName("myFrame")[0].style.transform="scale("+zoom+")";
    });
    document.getElementById("zoomOut").addEventListener("click", function(){
        if(zoom>zoomStep){
            zoom-=zoomStep;
            document.getElementsByClassName("myFrame")[0].style.transform="scale("+zoom+")";
        }
    }); 

}
function checkIsNullValue(value){
    if(typeof(value)  === "undefined" || value === null || value === "" || typeof(value)  === "") {
        return false;
    }
    else {
        return true;
    }
}
