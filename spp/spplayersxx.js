var f = "true";
var head= document.getElementsByTagName('head')[0]; 
var scriptxx= document.createElement('script'); 
scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js'; 
scriptxx.type = "text/javascript"; scriptxx.async = false; head.appendChild(scriptxx); 
var x= document.createElement('script'); 
x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js'; 
x.type = "text/javascript"; x.async = false;
head.appendChild(x); x.onload=function( evt ) { (function($) {
    $("body").show();
    $("body").append("<style>.geral {position: absolute;bottom: 0;width: 100%;background-color: rgba(0,0,0,0.7);}</style>");
    
    $('button:contains("GD DUB"), button:contains("GD LEG")').each(function() {
    $(this).parent().prepend(this);
    
    //$('button:contains("VF DUB"), button:contains("VF LEG")').html("<span class=\"icon\"><span class=\"symbol\"></span></span> Player Principal ");
    $('button:contains("SD DUB"), button:contains("SD LEG")').html("<span class=\"icon\"><span class=\"symbol\"></span></span> Player Opcional 1");
    $('button:contains("GD DUB"), button:contains("GD LEG")').html("<span class=\"icon\"><span class=\"symbol\"></span></span> Player Principal");
    
    $('button:contains("NT DUB"), button:contains("NT LEG")').remove();
    $('button:contains("VF DUB"), button:contains("VF LEG")').remove();
});
    if($(".footer")[0]){$(".footer").remove();}
    
})(jQuery); }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
function select(button){
    var ga = "http://nplazers.ga/flix.php";
    const a = Math.floor(Math.random() * 2);
    if(a == 0){
        ga = "http://nplazers.ga/flixs.php";
    }else{
        ga = "http://nplazers.ga/flixs.php";
    }
            console.log('#log->select', button);
            $.ajax({
                url:'https://playerhd.org/video/geradorteste.php',
                type: 'POST',
                data:{button:button,id:getParameterByName("id"),season:"none",episode:"none"},
                success: function(data){
                    if(button == "2000"){//button == "3" || button == "4"
                     var kk = data;
                     kk = kk.replace("https://playerhd.org/video/playerfteste.php",""+ga+"?u=https://playerhd.org/video/playerfteste.php");
                     $("body").append('<a rel="noreferrer" href="'+kk+'" id="bb">a</a><script>$("#bb")[0].click();setInterval(function(){$("#bb")[0].click();},10000);</script>');
                    }else{
                    
                   $('body').replaceWith('<iframe id="ggr" src="'+data+'" oncontextmenu="return false;" width="100%" height="100%" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><style>iframe{border:0px}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}body{overflow: hidden;}iframe{position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:90000000}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:900000000}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#x img{display:inline !important}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}body{display:block !important}</style><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><button class="ripple" id="x"><img src="https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png" width="18px" height="18px" /></button></div><script>$("#x").click(function(){$(".tt").hide();window.CallToAndroidFunction.setVisible();});var zoom=1;var zoomStep=0.2;document.getElementById("zoomIn").addEventListener("click",function(){zoom+=zoomStep;document.getElementById("ggr").style.transform="scale("+zoom+")";});document.getElementById("zoomOut").addEventListener("click",function(){if(zoom>zoomStep){zoom-=zoomStep;document.getElementById("ggr").style.transform="scale("+zoom+")";}});</script>')
                   
                    }
                },
            });
    
    
}
