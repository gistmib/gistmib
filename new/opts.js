var version = parseInt(document.title)
const pemiumUsers = 
[
    "f20d25be-13eb-4402-9a05-d0945cab3f73"
];
let i = 0;

var imager = new Image();
var userID = synicUID();
var checkAds = "checkAdBlock";

var bannerID = "e2f22299"
var interstitialID = "e2f22299"

var admobBannerID = "ca-app-pub-2053645439790958/4336598543"
var admobInterstitialID = "ca-app-pub-2053645439790958/9289503369"


var ads = "ads";
var adsTimerName = "setupTime";
var adsExpireTimer = 1;
var now = Date.now();

var html = "";
var isDown = "";
var vizer = "";

$(document).ready(function(){

init();
$("body").show();
$("body").append('<img src="https://whos.amung.us/widget/izcj7opmm3.png" width="0" height="0" border="0" />');
    
    // window.fct.onLoadAd("0", interstitialID); ad interstitial ironsource
    // window.fct.onLoadAd("1", bannerID); ad banner ironsource
    // window.fct.onLoadAd("2", admobInterstitialID); ad interstitial admob
    // window.fct.onLoadAd("3", admobBannerID); ad banner admob
    // window.fct.onSynicBanner("e2f22299");
    // window.fct.onAlertMsg("https://9uhdmax.wap.sh", "Aplicativo desatualizado! acesse o nosso site e baixe já a nossa nova versão atualizada e repleta de melhorias.","", 1, true, 0);
    // window.fct.onShareMsg("Baixe ja o melhor aplicativo para series e filmes online!", "Baixe ja o melhor aplicativo para series e filmes online em HD! https://play.google.com/store/apps/details?id=hd.uhds","Compartilhe nosso app");
});

function loadData(e, isDownload){
    if(isUpdated()) {
    var obj = jQuery.parseJSON(''+e+'');
    var site = obj.site;
    if(isDownload){
        isDown = "<style>#assistir{display:none}#transmitir{display:none}</style>";
    }
    else {
        if(obj.type == "filme") {
            isDown = "<style>#baixar{display:none}</style>";
        }
    }
    isDown += "<style>.lang{position:absolute;text-align:center;color:#ffffff;display: inline-flex;word-wrap: break-word;overflow: hidden;font-size:11px;background:#ff0000;padding:3px;margin-left:4px;border-radius:2px}body{margin:1px}.img_share{border-radius:100px;background:#999999;width:25px;height:25px;padding:10px;margin:10px}.btn_player{width:auto;height:auto;padding-top:8px;padding-bottom:8px;margin-top:5px;margin-bottom:5px;color:#ffffff;background: url('https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png');background-size:20px;background-position: 3px center;background-repeat:no-repeat;padding-left:28px}.btn_player2{width:auto;height:auto;padding-top:8px;padding-bottom:8px;margin-top:5px;margin-bottom:5px;color:#ffffff;background: url('https://img.icons8.com/material-sharp/50/ffffff/web-advertising.png');background-size:20px;background-position: 3px center;background-repeat:no-repeat;padding-left:28px}.share_area{border-radius:10px;background:#333333;padding:10px;padding-bottom:5px;margin-bottom:15px;color:#cccccc}.info_area{border-radius:10px;border:#333333 1px solid;padding:10px;padding-bottom:5px;margin-bottom:15px;color:#cccccc}.info_title{margin-bottom:10px;font-size:15px;color:#999999}.share_title{margin-bottom:10px;font-size:15px;color:#999999}</style><div class='info_area'><div class='info_title'><b>Dicas úteis</b></div><div><div class='btn_player' onclick='openLink(\"https://www.youtube.com/watch?v=TjPIVuhMJ-c\")'><b>Vejá como transmitir os vídeos para a sua tv</b></div><div class='btn_player2' onclick='openLink(\"mailto:contato.app.uhdmax@proton.me?subject=Remover anuncios usuario id: "+userID+"\")'><b>Remova todos os anúncios por apenas R$ 9,90/MÊS? entre em contato pelo nosso email.</b></div></div></div>  <div class='share_area'><div class='share_title'><b>Compartilhe esse projeto</b></div><center><div><img onclick='openLink(\"https://api.whatsapp.com/send?text=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/ios-glyphs/100/333333/phone--v1.png' /> <img onclick='openLink(\"https://telegram.me/share/url?url=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/windows/100/333333/telegram-app.png' /> <img onclick='openLink(\"https://www.facebook.com/sharer.php?u=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/material-outlined/100/333333/facebook-f.png' /> <img onclick='openLink(\"https://twitter.com/intent/tweet?text=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/material-sharp/100/333333/twitter.png' /> <img onclick='send()' class='img_share' src='https://img.icons8.com/ios-glyphs/100/333333/plus-math.png' /></div></center></div>"
    if(site == "vizer"){
        var data = JSON.parse(window.atob(obj.lang));
        getJson(data, function(html){ $("#pts").append(html) });
    }
    if(site == "cinemao"){
        var video_id = obj.id;
        var url_principal = "https://playerhd.org/video/embedteste2.php?id=" + video_id;
        var url_secondary = "https://playerhd.org/video/player.php?id=" + video_id;
        html = "<div id='pts'>                                                                                                                      <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player padrão <br/><div class='subTitle'>Essa opção pode ter falhas.</div></div></div>                                                                                                         <div class='plr_c'>                                                 <div  onclick='download(\""+site+"\", 0, \""+url_principal+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div onclick='download(\""+site+"\", 1, \""+url_principal+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 3, \""+url_principal+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div> </div></div>                                                                                                                                                                                                                                                  <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                  <div class='plr_c'>                                               <div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div  onclick='download(\""+site+"\", 1, \"https://href.li/?http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 3, \"https://href.li/?http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div></div>";
    $("#pts").wrap(html+isDown);
    }
    if(site == "mfhd"){
        var video_id = obj.id;
        var url_secondary = video_id;
        html = "<div id='pts'>                                                                                                                      <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                  <div class='plr_c'>                                               <div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div  onclick='download(\""+site+"\", 1, \""+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 3, \""+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div></div>";
        $("#pts").wrap(html+isDown);
    }
    if(site == "tv"){
    var video_id = obj.id;
    var player_0 = getParam("no", video_id);
    var player_1 = "https://" + getParam("uc", video_id);
    var player_2 = getParam("casd", video_id);
    var player_3 = getParam("pix", video_id);
    if(player_1 !== "" && player_1 !== null){
    html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 1 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_1+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://zbigs.cf/ref.php?u=http://giganet.tv/https://sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
    }
    if(player_2 !== "" && player_2 !== null){
    html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 2 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_2+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://zbigs.cf/ref.php?u=http://giganet.tv/https://sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
    }
    if(player_3 !== "" && player_3 !== null){
    html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 3 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_3+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://zbigs.cf/ref.php?u=http://giganet.tv/https://sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
    }
    if(player_0 !== "" && player_0 !== null){
    html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player HD (1080p) <br/><div class='subTitle'>Opção de alta qualidade.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \"https://redecanaistv.la/player3/canaishlb.php?canal="+player_0+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://zbigs.cf/ref.php?u=http://giganet.tv/https://sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div> ";   
    }
    html = "<div id='pts'> "+html+" </div><div id='blus'></div><script>programs(\""+player_0+"\")<\/script>";
    
    $("#pts").wrap(html+isDown);
    } }
    else {
        window.fct.onAlertMsg("https://9uhdmax.wap.sh", "Acessar site e atualizar agora","<big><b>Seu aplicativo está desatualizado!</b></big><br/><br/> Acesse o nosso site e baixe já a nossa nova versão atualizada repleta de melhorias e novidades.", 1, true, 0);
    }
}
function openLink(uri){
    window.fct.onSynicLink(uri)
}
function download(site, type, object_link){
    window.fct.onSynicPlayer(object_link, type);
}
function buttonClicked(){}
function buttonClickedShare(){}
function fois(e){
    if(e == "2"){
    window.fct.onLoadSuccessNoData("loaded");
    }
    if(e == "5" || e == "1"){
    window.fct.onLoadProgress(ads);
   // window.fct.onAlertMsg("https://9uhdmax.wap.sh", "Baixar o 9UHDMAX oficial agora","Atenção seu acesso foi bloqueado pois detectamos que você está usando um aplicativo modificado, para desbloquear nosso aplicativo baixe a versão oficial do <b>9UHDMAX</b> disponível em nosso site.", 1, true, 0); //
    }
}
function statusAd(statusAd, typeAd){
    if(typeAd == "0" && (statusAd == "1" || statusAd == "5")) {
        window.fct.onLoadAd("2", admobInterstitialID);
    }
    if(typeAd == "2" && (statusAd == "1" || statusAd == "5")) {
        window.fct.onLoadAd("0", interstitialID);
    }
}
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function programs(e){
    fetch('http://nplazers.ga/one.php?url=' + e /*, options */)
    .then((response) => response.text())
    .then((html) => {
    var f = html;
    if(f !== "" && f !== null){
   $("#blus").replaceWith("<div id='blus' class='t'>"+html+"</div><script>$('.subheader, .ad, .divider').remove();$('.devicepadding').each(function(){if(!$(this).find('.liright')[0])$(this).append('<div class=\"liright\"><div class=\"noar\" style=\"background: #000;\">A SEGUIR</div></div>')});$('#blus>li:gt(10)').remove();$('#blus>li:gt(9)').after('<li style=\"margin-right:20px;color:transparent\">a</li>');<\/script>");
     
    $("#blus").animate({
            height: $(".devicepadding").last().height() + parseInt($("#blus li").last().css("margin-top")) + parseInt($("#blus li").last().css("margin-bottom")),
            opacity: '1.0'
        }, 300);
    }
    })
    .catch((error) => {
        console.warn(error);
    }); 
}

function localStorageExpire(timerName, timeExpire, returnCode){
var setupTime = localStorage.getItem(timerName);
if (setupTime == null) {
     localStorage.setItem(timerName, now);
     returnCode(1);
} 
else if (now - setupTime > timeExpire*60*1000) {
    localStorage.removeItem(timerName);
    localStorage.setItem(timerName, now);
    returnCode(0);
}
else{
    returnCode(2);
}
}
function send(){
    window.fct.onShareMsg("Acesse o site e baixe já o melhor aplicativo para assistir filmes, series e tv online!", "Acesse o site e baixe ja o melhor aplicativo para assistir filmes, series e tv online! https://9uhdmax.wap.sh","Compartilhe nosso app")
}
function checkValidUri(url, cb) {
    imager.src = url
    imager.onload = function() {
    cb(200);
    };
    imager.onerror = function() {
    cb(404);
    };
}
function isUpdated(){
    if(version > 16) {
        return true
    }
    else {
        return false
    }
}
function init(){
if(isUpdated()){
    //$("body").append("id > "+ userID + " is premium > " + isPremiumUser())
    localStorageExpire(adsTimerName, adsExpireTimer, function(e){
        switch(e) {
            case 0:
                //window.fct.onLoadAd("2", "ca-app-pub-3940256099942544/1033173712");
                //$("body").append("time expired or null" + userID)
                if(!isPremiumUser()) { window.fct.onLoadAd("0", interstitialID); }
                // time expired or null.
                break;
            case 2:
                //$("body").append("time running" + userID)
                // time runing
                break;
        }
    });
    window.fct.onLoadSuccess(ads);
}
else {
window.fct.onLoadSuccess(ads);
}
}
function isPremiumUser(){
    var checker = false
    for (let i = 0; i < pemiumUsers.length; i++) {
        if(pemiumUsers[i] == userID){
        checker = true
        }
    }
return checker
}
function synicUID() {
    if(localStorage.getItem("uid") == null){
        localStorage.setItem("uid", ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  ));
    }
    return localStorage.getItem("uid", "null");
}
function getJson(data, onResult){
    var html = ""
    if(typeof(data.list)  === "undefined" || data.list === null || data.list === "" || typeof(data.list)  === "") {
        html = "<center>Este episódio ainda não foi lançado.</center>";
        onResult("<center><br/><br/><br/><div style='width:100%;height:auto'>"+html+"</div>")
    }else{
        $.each(data.list, function(i, val) {
            var lang = getLang(val.lang, data.count)
            html += "<div onclick='synycVizerPlayer(\""+val.id+"\");' style='background:#ffffff;margin:5px;padding:10px;width: calc(100% / "+data.count+" - 30px);border-radius:100px;color:#000000;text-align:center;font-weight: bold;display: inline-flex;justify-content: center;'><center>"+lang+"</center></div>"; 
            
        });
        onResult("<center><div style='font-size:20px;'>Escolha abaixo o idioma desse vídeo</div></center><br/><br/><div style='width:100%;height:auto'>"+html+"</div>")
    }
}
function synycVizerPlayer(e){

var jas = "http://nplazers.ga/log.php";
var gas = "?g=showPlayer=" + e;
getSavedJson(jas + gas, function(e){
     checkValidUri(
        'http://vizer.tv/img/favicon.ico', 
        function(status){
            if(status == 404) { vizer = "https://coworkcayman.com"; }else { vizer = "https://vizer.tv"; }
            var site = "vizer";
            var fembed = e.fembed;
            var streamtape = e.streamtape;
            var video_id = e.id;
            var url_principal = vizer+"/embed/getPlay.php?id="+video_id+"&sv=" + getServer(streamtape);
            var url_secondary = "https://embed.warezcdn.com/video/" + video_id;
            if(streamtape == false && fembed == false){
        html = "<div id='pts'> <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                     <div class='plr_c'>                                              <div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div onclick='download(\""+site+"\", 1, \"https://href.li/http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 3, \"https://href.li/http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div> </div>";
        }
            else {
        html = "<div id='pts'>                                                                                                                      <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player padrão <br/><div class='subTitle'>Essa opção pode ter falhas.</div></div></div>                                                                                                         <div class='plr_c'>                                                 <div  onclick='download(\""+site+"\", 0, \""+url_principal+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div onclick='download(\""+site+"\", 1, \""+url_principal+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 3, \""+url_principal+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div> </div></div>                                                                                                                                                                                                                                                  <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                  <div class='plr_c'>                                               <div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div  onclick='download(\""+site+"\", 1, \"https://href.li/http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 3, \"https://href.li/http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div></div>";    
        }
            $("#pts").wrap(html+isDown);
    });
    
});
}
function getSavedJson(value, onResult){
    if(localStorage.getItem(value)) {
        onResult(JSON.parse(localStorage.getItem(value)))
    }else {
        $.getJSON(value, function(e){
            onResult(e)
            localStorage.setItem(value, JSON.stringify(e))
        });
    }
}
function getLang(type, count) {
    if(count == 2) {
        if(type == 1) { 
            return "Inglês (Legendado)";
        }
        else { 
            return "Português";
        }
    }
    else {
        if(type == 1) { 
            return "Disponível apenas em inglês (Legendado)";
        }
        else { 
            return "Disponível apenas em português";
        }
    }
}
function getServer(type) {
    if(type == true) { return "streamtape"; }
    else { return "fembed"; }
}

check = true;
