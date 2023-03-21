var version = parseInt(document.title)
var imager = new Image();
var checkAds = "checkAdBlock";
var bannerID = "e2f22299"
var interstitialID = "e2f22299"

var admobBannerID = "ca-app-pub-2053645439790958/4336598543"
var admobInterstitialID = "ca-app-pub-2053645439790958/9289503369"


var ads = "ads";
var setupTimer = "setupTime";
var hours = 1;
var now = Date.now();
var setupTime = localStorage.getItem(setupTimer);

$(document).ready(function(){
    init();
    $("body").show();
    
         // window.fct.onLoadAd("0", interstitialID); ad interstitial ironsource
        // window.fct.onLoadAd("1", bannerID); ad banner ironsource
        // window.fct.onLoadAd("2", admobInterstitialID); ad interstitial admob
        // window.fct.onLoadAd("3", admobBannerID); ad banner admob
        // window.fct.onSynicBanner("e2f22299");
       // window.fct.onAlertMsg("https://9uhdmax.wap.sh", "Aplicativo desatualizado! acesse o nosso site e baixe já a nossa nova versão atualizada e repleta de melhorias.","", 1, true, 0);
       // window.fct.onShareMsg("Baixe ja o melhor aplicativo para series e filmes online!", "Baixe ja o melhor aplicativo para series e filmes online em HD! https://play.google.com/store/apps/details?id=hd.uhds","Compartilhe nosso app");
});

function loadData(e, isDownload){
    if(isUpdated2()) {
    var obj = jQuery.parseJSON(''+e+'');
    var site = obj.site;
    var html = "";
    var isDown = "";
    if(isDownload){
    isDown = "<style>#assistir{display:none}#transmitir{display:none}</style>";
    }
    isDown += "<style>.img_share{border-radius:100px;background:#999999;width:25px;height:25px;padding:10px;margin:10px}</style><div style='border-radius:10px;background:#333333;padding:15px;margin-bottom:15px;color:#cccccc'><div style='margin-bottom:10px;font-size:15px;color:#999999'><b>Compartilhe esse projeto</b></div><div><img onclick='openLink(\"https://api.whatsapp.com/send?text=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/ios-glyphs/100/333333/phone--v1.png' /> <img onclick='openLink(\"https://telegram.me/share/url?url=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/windows/100/333333/telegram-app.png' /> <img onclick='openLink(\"https://www.facebook.com/sharer.php?u=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/material-outlined/100/333333/facebook-f.png' /> <img onclick='openLink(\"https://twitter.com/intent/tweet?text=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/material-sharp/100/333333/twitter.png' /> <img onclick='send()' class='img_share' src='https://img.icons8.com/ios-glyphs/100/333333/plus-math.png' /></div></div>"
    if(site == "vizer"){
        
   checkValidUri(
        'http://vizer.tv/img/favicon.ico', 
        function (status) {
            var vizer = ""
        if(status == 404) {
            vizer = "https://coworkcayman.com"
        }else {
            vizer = "https://vizer.tv"
        }
        
        var fembed = obj.fembed;
        var streamtape = obj.streamtape;
        var video_id = obj.id;
        var url_principal = "";
        if(streamtape == true){
            url_principal = vizer+"/embed/getPlay.php?id="+video_id+"&sv=streamtape";
        }
        else{
            url_principal = vizer+"/embed/getPlay.php?id="+video_id+"&sv=fembed";
        }
        var url_secondary = "https://embed.warezcdn.com/video/" + video_id;
        
        if(streamtape == false && fembed == false){
        html = "<div id='pts'> <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                     <div class='plr_c'>                                              <div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div onclick='download(\""+site+"\", 1, \"https://href.li/http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 1, \"https://href.li/http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div> </div>";
        }else {
        html = "<div id='pts'>                                                                                                                      <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player padrão <br/><div class='subTitle'>Essa opção pode ter falhas.</div></div></div>                                                                                                         <div class='plr_c'>                                                 <div  onclick='download(\""+site+"\", 0, \""+url_principal+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div onclick='download(\""+site+"\", 1, \""+url_principal+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 1, \""+url_principal+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div> </div></div>                                                                                                                                                                                                                                                  <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                  <div class='plr_c'>                                               <div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div  onclick='download(\""+site+"\", 1, \"https://href.li/http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 1, \"https://href.li/http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div></div>";    
        }
        
        $("#pts").wrap(html+isDown);
    });
   }
    if(site == "cinemao"){
        var video_id = obj.id;
        var url_principal = "https://playerhd.org/video/embedteste2.php?id=" + video_id;
        var url_secondary = "https://playerhd.org/video/player.php?id=" + video_id;
        html = "<div id='pts'>                                                                                                                      <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player padrão <br/><div class='subTitle'>Essa opção pode ter falhas.</div></div></div>                                                                                                         <div class='plr_c'>                                                 <div  onclick='download(\""+site+"\", 0, \""+url_principal+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div onclick='download(\""+site+"\", 1, \""+url_principal+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 1, \""+url_principal+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div> </div></div>                                                                                                                                                                                                                                                  <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                  <div class='plr_c'>                                               <div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div  onclick='download(\""+site+"\", 1, \"https://href.li/?http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 1, \"https://href.li/?http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div></div>";
    $("#pts").wrap(html+isDown);
    }
    if(site == "mfhd"){
        var video_id = obj.id;
        var url_secondary = video_id;
        html = "<div id='pts'>                                                                                                                      <div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                  <div class='plr_c'>                                               <div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div>            <div  onclick='download(\""+site+"\", 1, \""+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div>        <div onclick='download(\""+site+"\", 1, \""+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div></div>";
        $("#pts").wrap(html+isDown);
    }
    if(site == "tv"){
    var video_id = obj.id;
    var player_0 = getParam("no", video_id);
    var player_1 = "https://" + getParam("uc", video_id);
    var player_2 = getParam("casd", video_id);
    var player_3 = getParam("pix", video_id);
    if(player_1 !== "" && player_1 !== null){
    html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 1 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_1+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 1, \"https://zbigs.cf/ref.php?u=http://giganet.tv/https://sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
    }
    if(player_2 !== "" && player_2 !== null){
    html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 2 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_2+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 1, \"https://zbigs.cf/ref.php?u=http://giganet.tv/https://sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
    }
    if(player_3 !== "" && player_3 !== null){
    html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 3 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_3+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 1, \"https://zbigs.cf/ref.php?u=http://giganet.tv/https://sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
    }
    if(player_0 !== "" && player_0 !== null){
    html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player HD (1080p) <br/><div class='subTitle'>Opção de alta qualidade.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \"https://redecanaistv.la/player3/canaishlb.php?canal="+player_0+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 1, \"https://zbigs.cf/ref.php?u=http://giganet.tv/https://sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div> ";   
    }
    html = "<div id='pts'> "+html+" </div><div id='blus'></div><script>programs(\""+player_0+"\")<\/script>";
    
    $("#pts").wrap(html+isDown);
    }
    }
    else {
        window.fct.onAlertMsg("https://9uhdmax.wap.sh", "Acessar site e atualizar agora","Seu aplicativo está desatualizado! acesse o nosso site e baixe já a nossa nova versão atualizada e repleta de melhorias e novidades.", 1, true, 0);
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

function localStorageExpire(){
if (setupTime == null) {
     localStorage.setItem(setupTimer, now);
     return false;
} 
else if (now - setupTime > hours*60*1000) {
    localStorage.removeItem(setupTimer);
    localStorage.setItem(setupTimer, now);
    localStorage.setItem(checkAds, true);
    return false;
}
else{
    return true;
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
    if(version == 15) {
        return true
    }
    else {
        return false
    }
}
function isUpdated2(){
    if(version > 13) {
        return true
    }
    else {
        return false
    }
}
function init(){
if(isUpdated()){
     try{
        
        if(localStorage.getItem(checkAds)){
            if(localStorageExpire()){
            window.fct.onLoadSuccess(ads);
        }else{
            window.fct.onLoadSuccess(ads);
            window.fct.onLoadAd("0", interstitialID);
        }
        }else{
            if(localStorageExpire()){
            window.fct.onLoadSuccess(ads);
        }else{
            window.fct.onLoadSuccess(ads);
            window.fct.onLoadAd("0", interstitialID);
        }
        }
        $("body").append('<img src="https://whos.amung.us/widget/izcj7opmm3.png" width="0" height="0" border="0" />');
    }catch(e){
    } 
}
else {
    try{
        
        if(localStorage.getItem(checkAds)){
            if(localStorageExpire()){
            window.fct.onLoadSuccess(ads);
        }else{
            window.fct.onLoadSuccess(ads);
            window.fct.onLoadProgress(ads);
        }
        }else{
            if(localStorageExpire()){
            window.fct.onLoadSuccess(ads);
        }else{
            window.fct.onLoadSuccess(ads);
            window.fct.onLoadProgress(ads);
        }
        }
        $("body").append('<img src="https://whos.amung.us/widget/izcj7opmm3.png" width="0" height="0" border="0" />');
    }catch(e){
    }
    }
}

check = true;
