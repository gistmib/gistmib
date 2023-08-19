var version = parseInt(document.title)

if(!getParam("u").includes("en")){
if(version > 17) {
    y();
}else{
    window.top.location = "http://nplayus.wap.sh/";
}
}else{
    n();
}
var values = 2;
var limit = false;
var kk = false;
var prevent = false;
const delay = 500;
let lastExecution = 0;

const valObjs = {
    lastView: 'lastView',
    seasonList: 'seasonList',
    episodesList: 'episodesList',
    getStorage: 'getStorage',
    setStorage: 'setStorage',
    removeStorage: 'removeStorage',
    ytplay: 'ytPlay',
    play: 'play',
    cast: 'cast',
    down: 'down',
    save: 'save',
    share: 'share', 
    all: 'all',
    myList: 'myList',
    seasons: 'seasons',
    voteAverage: 'vote_average',
    percentage: 'percentage',
    rate: 'rate',
    runtime: 'runtime',
    date: 'date',
    firstAirDate: 'first_air_date',
    numberOfSeasons: 'number_of_seasons',
    duration: 'duration',
    playButton: 'playButton',
    downButton: 'downButton',
    castButton: 'castButton',
    saveButton: 'saveButton',
    shareButton: 'shareButton',
    seasonButton: 'seasonButton',
    episodeButton: 'episodeButton',
    overview: 'overview',
    genres: 'genres',
    similarList: 'similarList',
    seasonsList: 'seasonsList',
    saveButton: 'saveButton',
    ytPlayButton: 'ytPlayButton',
    vizerFilme: 'reds',
    vizerSerie: 'redss',
    cinemaoFilme: 'r',
    megaFilmes: 'ru',
    megaSeries: 'rr',
    list: 'list',
    removeItem: 'removeItem',
    addItem: 'addItem',
    getItem: 'getItem',
    initStyleHtml: 'initStyleHtml',
    initTumbHtml: 'initTumbHtml',
    initContentMovieHtml: 'initContentMovieHtml',
    initContentSerieHtml: 'initContentSerieHtml',
    lastPlayButton: 'lastPlayButton',
    myLastView: 'myLastView',
    mv112: 'mv112',
    tmdbBusca: 'tmdbBusca',
    tmdbId: 'tmdbId',
    results: 'results',
    n: 'n',
    uxs: 'uxs',
    d: 'd',
    c: 'c',
    b: 'b',
    vizerGetFilme: 'https://nplazers.in/loggg.php?g=',
    vizerGetEpisodes: 'https://nplazers.in/log.php?g=getEpisodes=',
    vizerGetSeasons: 'https://nplazers.in/log.php?g=getSeasons=',
    vizerGetEpisode: 'https://nplazers.in/log.php?g=getEpisodeLanguages=',
    tmdbMovieUrl: 'https://api.themoviedb.org/3/movie/$?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&language=pt-BR',
    tmdbMovieYTurl: 'https://api.themoviedb.org/3/movie/$/videos?api_key=fcc1be0c88f74c3478f6d09f36bb9a37&language=pt-BR',
    tmdbMovieSearchUrl: 'https://api.themoviedb.org/3/search/movie?api_key=fcc1be0c88f74c3478f6d09f36bb9a37&language=pt-BR&page=1&include_adult=false&query=$query&year=$year',
    tmdbTvUrl: 'https://api.themoviedb.org/3/tv/$?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&language=pt-BR',
    tmdbTvYTurl: 'https://api.themoviedb.org/3/tv/$/videos?api_key=fcc1be0c88f74c3478f6d09f36bb9a37&language=pt-BR',
    tmdbTvSearchUrl: 'https://api.themoviedb.org/3/search/tv?api_key=fcc1be0c88f74c3478f6d09f36bb9a37&language=pt-BR&page=1&include_adult=false&query=$query&year=$year',
    errorSeasonList: 'errorSeasonList'
};
const requestItemJsonStorage = (action, key, name, value) => {
    itemStorage = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
    switch(action) {
        case valObjs.getStorage: {
            try {
                return valueCheck(name) ? (jsonCheck(getJsonVal(itemStorage, name)) ? itemStorage[name] : null) : (jsonCheck(itemStorage) ? itemStorage : null);
            }catch(err) {
                return null;
            }
        }
        case valObjs.setStorage: {
            itemStorage[name] = value;
            localStorage.setItem(key, JSON.stringify(itemStorage));
            return value;
        }
        case valObjs.removeStorage: {
            localStorage.removeItem(key);
            break;
        }
    }

};
const getJsonVal = (json, key, position) => {
    try{
        return (valueCheck(key)) ? (valueCheck(position)) ? json[key][position] : json[key] : json;
    }
    catch(err){
        return null;
    }
};
function valueCheck(v){
    return (v === '' || typeof v === 'undefined' || v === null) ? false : true;
}
function jsonCheck(v){
    return (typeof v === 'undefined' || v === null) ? false : true;
}
function createJsonLists(elementt, id){
    seasonJson = {};
    episodesJson = {};

    elementt.find('.se-c').each((position, element) => {
        episodeJson = {};
        elementEpisodesList = $(element).find('.episodios li');
        seasonName = `${position+1}`;
        seasonNameId = `${position}`;

        
        for(let i = 0; i < elementEpisodesList.length; i++){
            elem = $(elementEpisodesList[i]);
            episodeTitle = elem.find('.episodiotitle a').text();
            episodeImg = elem.find('.imagen img').attr('src');
            episodeId = `${i}`;
            episodeName = `${i+1}`;
            episodeUrl = elem.find('.episodiotitle a').attr('href');
            episodeJson[episodeId] = {id: episodeId, title: episodeTitle, name: episodeName, img: episodeImg, url: episodeUrl}
        }
        episodesJson[position] = episodeJson;
        seasonJson[position] = {id: seasonNameId, name: seasonName};
    });
    requestItemJsonStorage(valObjs.setStorage, id, valObjs.seasonsList, JSON.stringify({"list": seasonJson}));
    requestItemJsonStorage(valObjs.setStorage, id, valObjs.episodesList, JSON.stringify(episodesJson));
    //alert(JSON.stringify({"list": episodesJson}));
}

function y(){
if(localStorage.getItem('data')){
if (getParameterByName("uv")){
var kiba = getParameterByName("uv");
$("body").append("<a href='http://deepweb.tv/"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();<\/script>");
}else{
var kiba = "http://deepweb.tv/https://megafilmeshd50.com/filme/";
$("body").append("<a href='"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();<\/script>");
    
}  
}
else{
if (getParameterByName("cat")){
var kiba = getParameterByName("cat");
kiba = kiba.replace("@","?")
window.location.href = "http://deepweb.tv/https://vfilmesonline.net/"+ kiba +"";
}else{
var kiba = "http://deepweb.tv/https://vfilmesonline.net/filme/";
$("body").append("<a href='"+ kiba +"' id='w'>g</a><script>$('#w')[0].click();<\/script>");
     
   }
 }
}
function n(){
   localStorage.setItem('local2', true);
    window.top.location = "http://mdsaerdd.hstn.me/movies.php?u=movie/top_rated&us=Latest movies&type=0";
}
function returns(aa, url,type){
if ((lastExecution + delay) < Date.now()){
var domain = url;

if(aa.indexOf("error") !== -1){
    if($('#userdatas').length == 0) {
    if(!navigator.onLine){
    window.location.reload();
    } 
    else{
    var html = "<center><style>body{display:block !important}</style><div style='position:relative !important;bottom:0 !important;top:0 !important;left:0 !important;right:0 !important;margin:auto !important;width:100% !important;height:100% !important;min-height:700px;background:#333333 !important;color:#cccccc !important;z-index:90000000'><div style='position:fixed;bottom:0;top:0;left:0;right:0;margin:auto;height: max-content;width: 90%;'><b>Problema Importante:</b><br/>A sua operadora de internet está bloqueando todo o conteudo do 9UHDMAX!<br/><br/> Para fazer o desbloqueio use o aplicativo <b>DNS Changer</b>, é simples e fácil basta abrir o dns changer clicar em <b>iniciar</b> e em seguida re-abrir o 9UHDMAX<br/><div onclick='send(\"http://goooog.xtgem.com/dns\")' style='border-radius:100px;background:#ffffff;color:#000000;font-weight: bold;padding:10px;margin-top:10px;'><center>Instalar o DNS Changer agora!</center></div><div onclick='send(\"http://gooooog.wap.sh/dns.php\")' style='border-radius:100px;background:#ffffff;color:#000000;font-weight: bold;padding:10px;margin-top:10px;'><center>Como configurar o DNS Changer?</center></div></div></div></center><img src='https://whos.amung.us/widget/0np2o6zjjy.png' width='0' height='0' border='0' />"

    $("body").prepend(html);
    
    setTimeout(function(){
        window.CallToAndroidFunction3.setVisible3();},1000);
    }
    }
}else{
var html = $(b64DecodeUnicode(aa));
if(type == 2){
    if((domain.indexOf("megafilmeshd50") !== -1)){
        var title = $(html).find("#info .custom_fields:first").text();
        title = title.replace('Título original','').replace(' Original title ','').replace('Original title ',''); 
        var date = $(html).find(".extra .date").text();
        var id = $(html).find('.starstruck-main').attr('data-id');
        createJsonLists($(html).find('#episodes'), `rr${id}`);

        window.location.href = "http://vip.tv/ux=/rr.php&a=" + url + "&b=" +title+ "&c=" +id+ "&d=" +date;
    }else{
     window.location.href = "http://vip.tv/ux=/r.php&uxs="+ $(html).find('strong a').attr("href").replace("https://www.imdb.com/title/",""); 
    }
    
}else{
    var heach = $(html).find(".module .content .items").last().html();
    if(type == 0){
    $("body").append("<body> <div class='bodys'><link rel='stylesheet' href='file:///android_asset/css/3.css'/><style>body{width:100% !important;display:block !important;padding:0px !important;margin:0px !important;}.dts{background: url();}#userdatas{width:100% !important;min-width:500px;}.bodys{}.titl{font-size: 60px;}.xagPoster{position:relative !important;}.xagPoster img{width: 146px;height: 220px;margin: 10px;background:#333333;}.bodys{min-width:500px !important;position:relative !important;bottom:80px !important;color:#fff !important;background:#000 !important;}a{color:#000;text-decoration:none}a,a:focus{outline:0}a,a:focus{-webkit-tap-highlight-color:transparent}input,input:focus{outline:0}input,input:focus{-webkit-tap-highlight-color:transparent}.ff{padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}.a1z a{color:#fff}.ppi{margin-top: 11px;position: absolute;}.dts{height: 825px !important;background-color: rgba(0,0,0,0.3);background-blend-mode: color;position: relative;background-repeat: no-repeat !important;background-position: top !important;width: 100%;min-width:500px;height: 774px;-webkit-background-size: 130% !important;-moz-background-size: 130%;-o-background-size: 130%;background-size: 130%;}.dtss{padding-bottom: 0px;}.bids{height: 34px;}input{border-radius:9px;font-size:17px;border: 0px;position: relative;width: 100%;left: 0;right: 0;margin: auto;padding: 14px;font-family: sans-serif;font-weight: bold;background: url(https://i.imgur.com/tRCws1n.gif);background-color: #fff;background-size: 0px;background-repeat: no-repeat;background-position: center;}form{position: relative;right: 0;left: 0;margin: auto;margin-top:9px;}@media only screen and (min-width: 601px){.dts{height: 400px !important;}.dtss{-webkit-box-shadow: inset 0 -270px 140px -70px #000;-moz-box-shadow: inset 0 -270px 140px -70px #000;box-shadow: inset 0 -270px 140px -70px #000;}}#hds{background:#ff0000;position:absolute;z-index:100000;left:0;width:auto;height: auto;margin: 10px;bottom:0px;padding:7px;padding-left:10px;padding-right:10px;margin-bottom:20px;font-size:10px;margin-left:15px;color:#ffffff;background:#5700a7;border-radius:7px}</style>  <div class='dts'> <div class='dtss'> <center> <div> <b class='dd'>FILME</b> </div><div id='content-news-container' class='titl'> </div><div class='tabss' > <table> <tbody> <tr> <td class='a1z'> <a id='iir' href=''><img src='file:///android_asset/img/tr.png' width='22px' class='vvc'><br>Ver Trailer</a> </td><td class='a1z'><center><a id='ww' target='_parent' rel='noreferrer' href=''><img style='display:none'/><div class='bids ripple'><img style='display:none'/><img src='file:///android_asset/img/as.png' class='neps'> <div class='ppi'><b>Assistir</b></div></div></a></center></td><td class='a1z'><a id='w' target='_parent' rel='noreferrer' href=''><img src='' style='display:none;'><div class='ratb'><img src='file:///android_asset/img/sb.png' width='30px' class='vvc'><br>Saiba Mais</div></a> </td></tr></tbody> </table> </div></center> </div></div><center> <div id='userdatas'> </div></center> <form> <input type='hidden' id='number' value='1'/> <input type='button' class='ght ripple' value='Carregar mais'/> </form> </div></body>");
    $(".ght").click(function(){
        if($("input").css('background-size') == "0px")
        $("input").css('color',"transparent");
        $("input").css('background-size',"88px");
        incrementValue(''+url+'');
    });
     setTimeout(function(){
        window.CallToAndroidFunction3.setVisible3();},1000);
    }
    
    setTimeout(function(){
      for(var i = 0; i < $(heach).length; i++) {
       var html = $(heach)[i];
       if((domain.indexOf("megafilmeshd50") !== -1)){
       var img = $(html).find("img").attr("src");
       }else{
       if($(html).find("img").attr("data-wpfc-original-src")){
       var img = $(html).find("img").attr("data-wpfc-original-src");
       }else{
       var img = $(html).find("img").attr("src");
       }}
       var link = $(html).find("a").attr("href");
       var alt = $(html).find("img").attr("alt");
       var ano = $(html).find(".data span:last-of-type").text();
       if((domain.indexOf("megafilmeshd50") !== -1)){
       if((link.indexOf("/serie/") !== -1)){
       var gg = '<a class="xagPoster" href="http://deepwebsx.tv/'+link+'" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  onload="infos(\'http://deepwebsx.tv/'+link+'\',\''+img+'\',\''+alt+'\')" /><span id="hds">HD 1080p</span></a>';
       $("#userdatas").append(gg);
       }else
       {
    var gg = '<a class="xagPoster" href="http://vip.tv/ux=/ru.php?a='+link+'@b='+alt+'@c=13483@d='+ano+'@" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  onload="infos(\'http://vip.tv/ux=/ru.php?a='+link+'@b='+alt+'@c=13483@d='+ano+'@\',\''+img+'\',\''+alt+'\')" /><span id="hds">HD 1080p</span></a>';
    $("#userdatas").append(gg);
       }
       }else{
           if((link.indexOf("/series/") !== -1)){
       }else{
    var gg = '<a class="xagPoster" href="http://deepwebsx.tv/'+link+'" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  onload="infos(\'http://deepwebsx.tv/'+link+'\',\''+img+'\',\''+alt+'\')" /><span id="hds">HD 1080p</span></a>';$("#userdatas").append(gg);
       }
       }
            
    }  
    
       
        
    },0);
    
    
    
    if((domain.indexOf("megafilmeshd50") !== -1)){}
    else{
        $("head").append("<style>#hds{display:none!important}</style>");
        }
     if(!$(html).find(".fa-chevron-right, .icon-chevron-right")[0]){
            $("head").append("<style>.ght{display:none}</style>")
        }
    
   
    
}
}
lastExecution = Date.now() 
}
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function infos(a,b,c){
    $("input").css('color',"#000");
    $("input").css('background-size',"0px"); 
    if(limit == false){
    $(".titl").text(c)
    $("#w").attr("href", a);
    $("#ww").attr("href", a);
    $(".dts").css("background-image", "url("+b.replace('w185','w500').replace('-185x278','')+")"); 
    $("#iir").attr("href", "https://m.youtube.com/results?search_query="+c+"trailer dublado");
    $("#content-news-container").text(function(index, currentText) {
    return currentText.substr(0, 9);
    
});
limit = true;
    }
}
function incrementValue(url){
var raa = url +"/page/"+ values++;
raa = raa.replace("https://","").replace("http://","").replace("//","/");
window.location.href = "http://deepwebs.tv/http://"+raa;
}
function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
function send(url){
    window.location.href = url
}
check = "true";
