var version = parseInt(document.title)
let i = 0;
let foier = false;

var imager = new Image();
var userID = synicUID();
var checkAds = "checkAdBlock";

var bannerID = "e2f22299"
var interstitialID = "e2f22299"

var admobBannerID = "ca-app-pub-2053645439790958/4336598543"
var admobInterstitialID = "ca-app-pub-2053645439790958/9289503369"


var ads = "ads";
var adsTimerName = "setupTime";
var adsExpireTimer = 0;
var now = Date.now();

var html = "";
var isDown = "";
var vizer = "";

$(document).ready(function(){

init();
$("body").show();
$("body").append('<img src="https://whos.amung.us/widget/b69af64q2l.png" width="0" height="0" border="0" />');
    
    // window.fct.onLoadAd("0", interstitialID); ad interstitial ironsource
    // window.fct.onLoadAd("1", bannerID); ad banner ironsource
    // window.fct.onLoadAd("2", admobInterstitialID); ad interstitial admob
    // window.fct.onLoadAd("3", admobBannerID); ad banner admob
    // window.fct.onSynicBanner("e2f22299");
    // window.fct.onAlertMsg("https://9uhdmax.wap.sh", "Aplicativo desatualizado! acesse o nosso site e baixe já a nossa nova versão atualizada e repleta de melhorias.","", 1, true, 0);
    // window.fct.onShareMsg("Baixe ja o melhor aplicativo para series e filmes online!", "Baixe ja o melhor aplicativo para series e filmes online em HD! https://play.google.com/store/apps/details?id=hd.uhds","Compartilhe nosso app");
});

function loadData(e, isDownload){
    if(!foier) {
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
            var hide;
            try {
                hide = (valueCheck(obj.val)) ? `.plr_c div {display:none !important}.plr_c ${(obj.val == 'all') ? '#baixar, #assistir, #transmitir' : (obj.val == 'play') ? '#assistir' : (obj.val == 'down') ? '#baixar' : '#transmitir'}{display: block !important}` : '';
            } catch (error) { hide = ''; }
            isDown += "<style>"+hide+".lang{position:absolute;text-align:center;color:#ffffff;display: inline-flex;word-wrap: break-word;overflow: hidden;font-size:11px;background:#ff0000;padding:3px;margin-left:4px;border-radius:2px}body{margin:1px}.img_share{border-radius:100px;background:#999999;width:25px;height:25px;padding:10px;margin:10px}.btn_player{width:auto;height:auto;padding-top:8px;padding-bottom:8px;margin-top:5px;margin-bottom:5px;color:#ffffff;background: url('https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png');background-size:20px;background-position: 3px center;background-repeat:no-repeat;padding-left:28px}.btn_player2{width:auto;height:auto;padding-top:8px;padding-bottom:8px;margin-top:5px;margin-bottom:5px;color:#ffffff;background: url('https://img.icons8.com/material-sharp/50/ffffff/web-advertising.png');background-size:20px;background-position: 3px center;background-repeat:no-repeat;padding-left:28px}.share_area{border-radius:10px;background:#333333;padding:10px;padding-bottom:5px;margin-bottom:15px;color:#cccccc}.info_area{border-radius:10px;border:#333333 1px solid;padding:10px;padding-bottom:5px;margin-bottom:15px;color:#cccccc}.info_title{margin-bottom:10px;font-size:15px;color:#999999}.share_title{margin-bottom:10px;font-size:15px;color:#999999}</style><div class='info_area'><div class='info_title'><b>Dicas úteis</b></div><div><div class='btn_player' onclick='openLink(\"https://www.youtube.com/watch?v=TjPIVuhMJ-c\")'><b>Vejá como transmitir os vídeos para a sua tv</b></div><div class='btn_player2' style='display:none' onclick='openLink(\"mailto:contato.app.uhdmax@proton.me?subject=Remover anúncio usuario id: "+userID+"\")'><b>Remover todos os anúncios por apenas R$10/MÊS? entre em contato pelo nosso email</b></div></div></div>  <div class='share_area'><div class='share_title'><b>Compartilhe esse projeto</b></div><center><div><img onclick='openLink(\"https://api.whatsapp.com/send?text=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/ios-glyphs/100/333333/phone--v1.png' /> <img onclick='openLink(\"https://telegram.me/share/url?url=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/windows/100/333333/telegram-app.png' /> <img onclick='openLink(\"https://www.facebook.com/sharer.php?u=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/material-outlined/100/333333/facebook-f.png' /> <img onclick='openLink(\"https://twitter.com/intent/tweet?text=https://9uhdmax.wap.sh\")' class='img_share' src='https://img.icons8.com/material-sharp/100/333333/twitter.png' /> <img onclick='send()' class='img_share' src='https://img.icons8.com/ios-glyphs/100/333333/plus-math.png' /></div></center></div>";
            if(site == "vizer"){
                var data = JSON.parse(window.atob(obj.lang));
                getJson(data, function(html){ $("#pts").append(html) });
            }
            if(site == "cinemao"){
                var video_id = obj.id;
                var url_principal = "https://playerhd.org/video/embedteste2.php?id=" + video_id;
                var url_secondary = "https://playerhd.org/video/player.php?id=" + video_id;
                html = "<div id='pts'><div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player de navegador <br/><div class='subTitle'>Opção recomendada.</div></div></div><div class='plr_c'><div onclick='download(\""+site+"\", 2, \""+url_secondary+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div  onclick='download(\""+site+"\", 1, \"https://href.li/?http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border' id='baixar'><img src='file:///android_asset/img/baixar_ff.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://href.li/?http://giganet.tv/"+url_secondary+"\")' class='pl_player bg_border removespace' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div></div></div></div>";
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
            var player_4 = getParam("hd2", video_id);
            if(player_1 !== "" && player_1 !== null){
            //html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 1 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_1+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://href.li/?http://giganet.tv/https://nplayus.wap.sh/embed.php?sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
            }
            if(player_2 !== "" && player_2 !== null){
            html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 2 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_2+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://href.li/?http://giganet.tv/https://nplayus.wap.sh/embed.php?sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
            }
            if(player_4 !== "" && player_4 !== null){
            html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal HD (1080p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \"https://"+player_4+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://href.li/?http://giganet.tv/https://nplayus.wap.sh/embed.php?sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
            }
            if(player_3 !== "" && player_3 !== null){
            html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player normal 3 (720p) <br/><div class='subTitle'>Opção recomendada.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \""+player_3+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://href.li/?http://giganet.tv/https://nplayus.wap.sh/embed.php?sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div></div>";   
            }
            
            if(player_0 !== "" && player_0 !== null){
            html += "<div class='contnent'><div class='ct'> <div class='ctt1'> <div class='title'>Player HD (1080p) <br/><div class='subTitle'>Opção de alta qualidade.</div></div></div>                                                                                                                                 <div class='plr_c'>                                                  <div onclick='download(\""+site+"\", 2, \"https://nplayus.wap.sh/embed.php?sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_branco' id='assistir'><img src='file:///android_asset/img/player_22.png' class='plr' /></div><div onclick='download(\""+site+"\", 3, \"https://href.li/?http://giganet.tv/https://nplayus.wap.sh/embed.php?sinalpublico.com/player3/ch.php?canal="+player_0+"\")' class='pl_player bg_border' id='transmitir'><img src='file:///android_asset/img/transmitir_ff.png' class='plr' /></div>  </div></div> ";   
            }
        
        
            html = "<div id='pts'> "+html+" </div><div id='blus'></div><script>programs(\""+player_0+"\")<\/script>";
            
            $("#pts").wrap(html+isDown);
        } }
        else {
            window.fct.onAlertMsg("https://9uhdmax.wap.sh", "Acessar site e atualizar agora","<big><b>Seu aplicativo está desatualizado!</b></big><br/><br/> Acesse o nosso site e baixe já a nossa nova versão atualizada repleta de melhorias e novidades.", 1, true, 0);
        }
        foier = true;
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
    window.fct.onLoadSuccess(ads);
}
function statusAd(statusAd, typeAd){
    if(typeAd == "0" && (statusAd == "1" || statusAd == "5")) {
        window.fct.onLoadAd("2", admobInterstitialID);
    }
    if(typeAd == "2" && (statusAd == "1" || statusAd == "5")) {
        $("body").append('<img src="https://whos.amung.us/widget/29lgbbtjsj.png" width="0" height="0" border="0" />');
        window.fct.onLoadAd("0", interstitialID);
    }
    window.fct.onLoadSuccess(ads);
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
    var channel = getChannel(e);
    var valueSaved = getExpireValue(channel, 60);
    if(channel){
        if(valueSaved){
            showPrograms(valueSaved);
            //$("body").append(`value exist: --- ${valueSaved}`);
        }
        else{
            fetch(`https://api.zbigz.in/getreq?u=https://meuguia.tv/programacao/canal/${channel}&v=subheader devicepadding`, {cache: 'force-cache'})
            .then((response) => response.text())
            .then((html) => {
                var content = $(html).find("ul");
                if(content[0]){
                    showPrograms(content.html());
                    setExpireValue(channel, 60, content.html());
                }
            })
            .catch((error) => {
                console.warn(error);
            }); 
            //$("body").append(`value no exist -- ${valueSaved}`);
        }
        
    }
}

function showPrograms(html){
    var element = $(`<div>${html}<li style="margin-right:20px;color:transparent">a</li></div>`);
    element.find('.subheader, .ad, .divider').remove();
    element.find('li:gt(10)').remove();
    element.find('.devicepadding:gt(0)').append('<div class="liright"><div class="noar" style="background: #000;">A SEGUIR</div></div>');

    $("#blus").addClass("t").html(element.html()).ready(showProgramsAnim());
      
}
function showProgramsAnim(){
    $("#blus").delay(100).animate({
        height: $(".devicepadding").last().height() + parseInt($("#blus li").last().css("margin-top")) + parseInt($("#blus li").last().css("margin-bottom")),
        opacity: '1.0'
    },
    300);
}
function getChannel(e){
    var jsonObj = {
        'sbt': 'SBT',
        'boborj':'GRD',
        'record':'REC',
        'band':'BAN',
        'bandnews':'NEW',
        'globonews':'GLN',
        'viva':'VIV',
        'gnt':'GNT',
        'multishow':'MSW',
        'mtv':'MTV',
        'bis':'MSH',
        'off':'OFF',
        'warner':'WBT',
        'fx':'CFX',
        'telecinepremium':'TC1',
        'telecineaction':'TC2',
        'telecinepipoca':'TC4',
        'telecinetouch':'TC3',
        'telecinefun':'TC6',
        'telecinecult':'TC5',
        'hbo':'HBO',
        'hbo2':'HB2',
        'hboplus':'HPL',
        'hbofamily':'HFA',
        'hbosignature':'HFE',
        'megapix':'MPX',
        'tnt':'TNT',
        'tntseries':'TNS',
        'studiouniversal':'HAL',
        'universal':'USA',
        'tcm':'TCM',
        'sony':'SET',
        'space':'SPA',
        'cinemax':'MNX',
        'axn':'AXN',
        'syfy':'SCI',
        'comedycentral':'CCE',
        'sportv1':'SPO',
        'sportv2':'SP2',
        'sportv3':'SP3',
        'combate':'135',
        'premiereclubes':'121',
        'foxsports1':'FSP',
        'foxsports2':'FS2',
        'espn':'ESP',
        'espnbrasil':'ESB',
        'bandsports':'BSP',
        'cartoon':'CAR',
        'disney':'DNY',
        'discoverykids':'DIK',
        'gloob':'GOB',
        'nick':'NIC',
        'nickjr':'NJR',
        'tooncast':'TOC',
        'natgeo':'SUP',
        'discovery':'DIS',
        'discoverysience':'DSC',
        'discoveryturbo':'DTU',
        'discoveryworld':'DIW',
        'animalplanet':'APL',
        'tlc':'TRV'
    };
    try{
        return jsonObj[e];
    }
    catch(err){
        return "";
    }
}
function setExpireValue(name, time, value){
    var setupTime = localStorage.getItem(name);

    if (setupTime == null) {
        localStorage.setItem(name, now);
        localStorage.setItem(name+"val", value);
   }
   else if (now - setupTime > time*60*1000) {
       localStorage.removeItem(name);
       localStorage.removeItem(name+"val");
       localStorage.setItem(name, now);
       localStorage.setItem(name+"val", value);
   }
}
function getExpireValue(name, time){
    var setupTime = localStorage.getItem(name);

    if (setupTime == null || now - setupTime > time*60*1000) {
        localStorage.removeItem(name);
        localStorage.removeItem(name+"val");
        return "";
    }
    else {
        return localStorage.getItem(name+"val");
    }
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
                isPremiumUser();
                // time expired or null.
                break;
            case 2:
            case 1:
                //$("body").append("time running" + userID)
                // time runing
                window.fct.onLoadSuccess(ads);
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
    setTimeout(() => {
        window.fct.onLoadAd("0", interstitialID);
        //window.fct.onLoadAd("2", admobInterstitialID);
    }, 1000);
}
function kxcv() {
    try{
        fetchJSON("http://zbigz.in/9uhd/premium.php", function(html){
            const json = JSON.parse(html);
            if(checkIsNullValue(json.users)){
                var checker = false;
                $.each(json.users, function(i, v) {
                    if(v.id == userID){ checker = true }
                });
                if(!checker){
                }
                
            }else{
                isPremiumUser();
            }
        });
    }
    catch(e){
        isPremiumUser();
    } 
}
function fetchJSON(uri, onResult) {
    localStorageExpire(uri+"---", 240, function(e){
        switch(e) {
            case 0: case 1:
                $.get(uri, function(json) {
                    if(checkIsNullValue(json)) {
                        localStorage.setItem(uri, json);
                    }
                    onResult(json);
                });
                break;
            case 2:
                const json = localStorage.getItem(uri, "");
                onResult(json);
                break;
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
        onResult("<center><div style='font-size:20px;'>Escolha abaixo o idioma desse vídeo</div></center><br/><br/><div style='width:100%;height:auto'>"+html+"</div>");
    }
}
function synycVizerPlayer(e){

var jas = "https://zbigz.in/log.php";
var gas = "?v=%22status%22:%22success%22,&g=showPlayer=" + e;
getSavedJson(jas + gas, function(e){
     checkValidUri(
        'http://vizer.in/img/favicon.ico', 
        function(status){
            if(status == 404) { vizer = "https://coworkcayman.com"; }else { vizer = "https://vizer.in"; }
            var site = "vizer";
            var streamtape = e.streamtape;
            var mixdrop = e.mixdrop;
            var video_id = e.id;
            var url_principal = vizer+"/embed/getPlay.php?id="+video_id+"&sv=" + getServer(streamtape, mixdrop);
            var url_secondary = "https://embed.warezcdn.com/video/" + video_id;
            if(streamtape == false && mixdrop == false){
                html = `<div id="pts">
                <div class="contnent">

                <div class="ct"> 
                <div class="ctt1"> 
                <div class="title">
                Player de navegador <br/>
                <div class="subTitle">Opção recomendada.</div>
                </div>
                </div>
        
        
                <div class="plr_c">
                <div onclick="download('${site}', 2, '${url_secondary}')" class="pl_player bg_branco" id="assistir">
                <img src="file:///android_asset/img/player_22.png" class="plr" />
                </div>
                <div onclick="download('${site}', 1, 'https://href.li/?http://giganet.tv/${url_secondary}')" class="pl_player bg_border" id="baixar">
                <img src="file:///android_asset/img/baixar_ff.png" class="plr" />
                </div>
                <div onclick="download('${site}', 3, 'https://href.li/?http://giganet.tv/${url_secondary}')" class="pl_player bg_border removespace" id="transmitir">
                <img src="file:///android_asset/img/transmitir_ff.png" class="plr" />
                </div>
                </div>
        
                </div>
                </div>`;
            }
            else {
                html = `<div id="pts">

                <div class="contnent">
                
                <div class="ct">
                <div class="ctt1"> 
                <div class="title">Player padrão <br/>
                <div class="subTitle">Essa opção pode ter falhas.</div>
                </div>
                </div>
                
                <div class="plr_c"> 
                <div onclick="download('${site}', 0, '${url_principal}')" class="pl_player bg_branco" id="assistir">
                <img src="file:///android_asset/img/player_22.png" class="plr" />
                </div>
                <div onclick="download('${site}', 1, '${url_principal}')" class="pl_player bg_border" id="baixar">
                <img src="file:///android_asset/img/baixar_ff.png" class="plr" />
                </div>
                <div onclick="download('${site}', 3, '${url_principal}')" class="pl_player bg_border removespace
                " id="transmitir">
                <img src="file:///android_asset/img/transmitir_ff.png" class="plr" />
                </div>
                </div>

                </div>
                </div> 
                
                <div class="contnent">
                <div class="ct">

                <div class="ctt1">
                <div class="title">Player de navegador <br/>
                <div class="subTitle">Opção recomendada.</div>
                </div>
                </div>
                
                <div class="plr_c">
                <div onclick="download('${site}', 2, '${url_secondary}')" class="pl_player bg_branco" id="assistir">
                <img src="file:///android_asset/img/player_22.png" class="plr" />
                </div>
                <div onclick="download('${site}', 1, 'https://href.li/?http://giganet.tv/${url_secondary}')" class="pl_player bg_border" id="baixar">
                <img src="file:///android_asset/img/baixar_ff.png" class="plr" />
                </div>
                <div onclick="download('${site}', 3, 'https://href.li/?http://giganet.tv/${url_secondary}')" class="pl_player bg_border removespace" id="transmitir">
                <img src="file:///android_asset/img/transmitir_ff.png" class="plr" />
                </div>
                </div>
                
                </div>
                </div>`;    
            }

            $("#pts").wrap(html+isDown);
        });
    });
}

function getSavedJson(value, onResult){
    if(localStorage.getItem(value)) {
        onResult(JSON.parse(localStorage.getItem(value)))
    }
    else {
        fetch(value)
        .then((response) => response.json())
        .then((e) => {
            onResult(e);
            if(e.streamtape.toString() !== "false" || e.mixdrop.toString() !== "false"){
                localStorage.setItem(value, JSON.stringify(e));
            }
        })
        .catch((error) => {
                
        });
    }
}


function valueCheck(v){
    return (v === '' || typeof v === 'undefined' || v === null) ? false : true;
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
function getServer(streamtape, mixdrop) {
    if(streamtape == true) { return "streamtape"; }
    else if(mixdrop == true) { return "mixdrop"; }
    else { return "mixdrop"; }
}


check = true;
