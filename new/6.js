var version = parseInt(document.title);
var actUrl = (localStorage.getItem('data')) ? "https://megafilmeshd50.com" : "https://vfilmesonline.net";

var imager = new Image();
if(!getParam("u").includes("en")){
if(version > 1600) {
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
var domain = "";

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

        if(!$(element).find('.episodios li').hasClass('none')) {
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
        }
    });
    requestItemJsonStorage(valObjs.setStorage, id, valObjs.seasonsList, JSON.stringify({"list": seasonJson}));
    requestItemJsonStorage(valObjs.setStorage, id, valObjs.episodesList, JSON.stringify(episodesJson));
    //alert(JSON.stringify({"list": episodesJson}));
}

function y(){   
    localStorage.setItem('pes', getParameterByName("s"));
    if(localStorage.getItem('data')){
    window.location.href = "http://deepweb.tv/"+actUrl+"/?s=" + getParameterByName("s").replace(/ /g, "%20");
    $("body").html(" <body><link rel='stylesheet' href='file:///android_asset/css/3.css'/><style>body{width:100% !important;display:block !important;padding:0px !important;margin:0px !important;}.dts{background: url();}#userdatas{width:100% !important;min-width:500px;}.bodys{}.titl{font-size: 60px;}.xagPoster{position:relative !important;}.xagPoster img{width: 105px;height: 155px;margin: 8px;background:#333333;}.bodys{min-width:500px !important;position:relative !important;bottom:80px !important;color:#fff !important;background:#000 !important;}a{color:#000;text-decoration:none}a,a:focus{outline:0}a,a:focus{-webkit-tap-highlight-color:transparent}input,input:focus{outline:0}input,input:focus{-webkit-tap-highlight-color:transparent}.ff{padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}.a1z a{color:#fff}.ppi{margin-top: 11px;position: absolute;}.dts{height: 825px !important;background-color: rgba(0,0,0,0.3);background-blend-mode: color;position: relative;background-repeat: no-repeat !important;background-position: top !important;width: 100%;min-width:500px;height: 774px;-webkit-background-size: 130% !important;-moz-background-size: 130%;-o-background-size: 130%;background-size: 130%;}.dtss{padding-bottom: 0px;}.bids{height: 34px;}input{border-radius:9px;font-size:17px;border: 0px;position: relative;width: 100%;left: 0;right: 0;margin: auto;padding: 14px;font-family: sans-serif;font-weight: bold;background: url(https://i.imgur.com/tRCws1n.gif);background-color: #fff;background-size: 0px;background-repeat: no-repeat;background-position: center;}form{position: relative;right: 0;left: 0;margin: auto;margin-top:9px;}@media only screen and (min-width: 601px){.dts{height: 400px !important;}.dtss{-webkit-box-shadow: inset 0 -270px 140px -70px #000;-moz-box-shadow: inset 0 -270px 140px -70px #000;box-shadow: inset 0 -270px 140px -70px #000;}}#hds{background:#ff0000;position:absolute;z-index:100000;left:0;width:auto;height: auto;margin: 10px;bottom:0px;padding:7px;padding-left:10px;padding-right:10px;margin-bottom:20px;font-size:6px;margin-left:15px;color:#ffffff;background:#5700a7;border-radius:7px}a, a:focus {-webkit-tap-highlight-color: transparent;}.Legendado{display:none}img {width: 135px;height: 202px;margin: 10px;background:#333333}body{min-width:500 !important;color:#fff;background:#000}a{color:#000}.ff {padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}</style><center><div id='userdata'></div></center><br/><br/><br/></body>");
    }else{ 
    window.location.href = 'http://deepwebs.tv/'+actUrl+'/?s=' + getParameterByName("s").replace(/ /g, "%20");
    $("body").prepend(" <meta charset='UTF-8'><meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'><meta name='referrer' content='never'><meta name='referrer' content='no-referrer'><meta name='ROBOTS' content='NOINDEX, NOFOLLOW' /><script src='https://code.jquery.com/jquery-3.5.0.js'></script><style>a, a:focus {-webkit-tap-highlight-color: transparent;}.Legendado{display:none}img {width: 135px;height: 202px;margin: 10px;background:#333333}body{min-width:500 !important;color:#fff;background:#000}a{color:#000}.ff {padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}</style><center><div id='userdata'></div></center><br/><br/><br/>");}
}
function n(){
    
 localStorage.setItem('local2', true);
 window.top.location = "http://mdsaerdd.hstn.me/search.php?u=" + getParameterByName("s").replace(/ /g, "%20");
   
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
function returns(aa, url, type){

domain = url;     

if(aa.indexOf("error") !== -1){
    if($('#userdata').html() == "") {
        if(!navigator.onLine){
            window.location.reload();
        }
        else{
            if(actUrl.indexOf("cinemao") !== -1 || actUrl.indexOf("vfilmesonline") !== -1){
                actUrl = "https://vizer.tv";
                run();
            }else{
                var html = "<style>body{display:block !important}</style><div style='position:fixed;bottom:0;top:0;left:0;right:0;margin:auto;width:100%;height:100%;background:#333333;color:#cccccc'><div style='position:absolute;bottom:0;top:0;left:0;right:0;margin:auto;height: max-content;width: 90%;'><b>Problema Importante:</b><br/>A sua operadora de internet está bloqueando todo o conteudo do 9UHDMAX!<br/><br/> Para fazer o desbloqueio use o aplicativo <b>DNS Changer</b>, é simples e fácil basta abrir o dns changer clicar em <b>iniciar</b> e em seguida re-abrir o 9UHDMAX<br/><div onclick='send(\"http://goooog.xtgem.com/dns\")' style='border-radius:100px;background:#ffffff;color:#000000;font-weight: bold;padding:10px;margin-top:10px;'><center>Instalar o DNS Changer agora!</center></div><div onclick='send(\"http://gooooog.wap.sh/dns.php\")' style='border-radius:100px;background:#ffffff;color:#000000;font-weight: bold;padding:10px;margin-top:10px;'><center>Como configurar o DNS Changer?</center></div></div></div><script>window.CallToAndroidFunction2.setVisible2();$('body').fadeIn(400);</script><img src='https://whos.amung.us/widget/0np2o6zjjy.png' width='0' height='0' border='0' />"
            
                $("#userdata").html(html);
            }
        }
    }
}
else{
var html = $(b64DecodeUnicode(''+aa+''));

if(type == 2){
    if((domain.indexOf("megafilmeshd50") !== -1)){
        var title = $(html).find("#info .custom_fields:first").text();
        title = title.replace('Título original','').replace(' Original title ','').replace('Original title ',''); 
        var date = $(html).find(".extra .date").text();
        var id = $(html).find('.starstruck-main').attr('data-id');
        createJsonLists($(html).find('#episodes'), `rr${id}`);

        window.location.href = "http://vip.tv/ux=/rr.php&a=" + url + "&b=" +title+ "&c=" +id+ "&d=" +date;
    }
    else{
     window.location.href = "http://vip.tv/ux=/r.php&uxs="+ $(html).find('strong a').attr("href").replace("https://www.imdb.com/title/",""); 
    }
}else{ 

if(domain.indexOf("cinemao") !== -1 || domain.indexOf("vfilmesonline") !== -1){
var heach = $(html).find(".search-page").find('.search_page_form').remove().end().html();
      
setTimeout(function(){
    var htmls = "";
    try{
    for(var i = 0; i < $(heach).length; i++) {
       var html = $(heach)[i];
       if($(html).find("img").attr("data-wpfc-original-src")){
       var img = $(html).find("img").attr("data-wpfc-original-src");
       }else{
       var img = $(html).find("img").attr("src");
       }
       
       
       var link = $(html).find("a").attr("href");
       var alt = $(html).find("img").attr("alt");
       img = img.replace("150x150","185x278").replace("w92","w200");
       if($(html).find(".module .content .items .item .data span")[0]){
       var ano = $(html).find(".module .content .items .item .data span").text();
       }else{
          var ano = $(html).find(".result-item article .details .meta span.year").text(); 
       }
       
       if((link.indexOf("/series/") !== -1)){}else{
           htmls += '<a class="gPoster" href="http://deepwebsx.tv/'+link+'" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  /></a>';
       }
       
    }  
    $("#userdata").append(htmls);
    }
    catch(e){
    }
    run();
    },0);   
 
    
}
else if(domain.indexOf("megafilmeshd50") !== -1){
var heach = $(html).find(".search-page").find('.search_page_form').remove().end().html();

setTimeout(function(){
    var htmls = "";
    for(var i = 0; i < $(heach).length; i++) {
       var html = $(heach)[i];
       var img = $(html).find("img").attr("src");
       var link = $(html).find("a").attr("href");
       var alt = $(html).find("img").attr("alt");
       img = img.replace("150x150","185x278").replace("w92","w200");
       var ano = $(html).find(".year").text(); 
       
       if(link.indexOf("/serie/") !== -1){
           htmls += '<a class="xagPoster" href="http://deepwebsx.tv/'+link+'" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'" /><span id="hds">HD 1080p</span></a>';
       }
       else
       {
           htmls += '<a class="xagPoster" href="http://vip.tv/ux=/ru.php?a='+link+'@b='+alt+'@c=13483@d='+ano+'@" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  /><span id="hds">HD 1080p</span></a>';
       } 
    } 
    $("#userdata").append(htmls);
    window.CallToAndroidFunction2.setVisible2();
    $('body').fadeIn(400);
    
},0);    


}
else if(domain.indexOf("vizer") !== -1 || domain.indexOf("coworkcayman") !== -1){
var h = html;
var d = '<div class="aa">'+$(h).find(".listItems").html() +'</div>';
$(d).find("a").each(function(){

var img = $(this).find(".img").attr("src");
img = img.replace("/con","https://flixei.com/con");
var name = $(this).attr("href");
name = name.replace("Assistir ","").replace("serie/online/","").replace("filme/online/","").replace("/","").replace(":","").replace(/ /g,"%20").replace("online","%20").replace("%20%20","");
var id = $(this).find(".img").attr("src");
id = id.replace("/content/movies/posterPt/185/","").replace("/content/series/posterPt/185/","").replace(".jpg","").replace(".jpeg","").replace(".gif","").replace(".png","");
if(img != null && img.startsWith("https://flixei.com/content/series/")){
    var ano = $(this).find(".r").text();
    var tblRow = "<a href='http://vip.tv/ux=/redss.php&uxs="+name+"&n="+id+"&d="+ano+"' class='gPoster'><img src='"+ img +"' /></a>";
                
}
else{
    var ano = $(this).find(".y").text();
    var tblRow = "<a href='http://vip.tv/ux=/reds.php@uxs="+name+"@n="+id+"&d="+ano+"' class='gPoster'><img src='"+ img +"' /></a>";
 }
 $(tblRow).appendTo("#userdata");
});

window.CallToAndroidFunction2.setVisible2();
$('body').fadeIn(400); 
}
else if(domain.indexOf("flixei") !== -1){
var h = html;
var d = '<div class="aa">'+$(h).find(".generalMoviesList").html() +'</div>';
$(d).find("a").each(function(){
var img = $(this).find(".img").attr("src");
var name =  $(this).attr("href");
name = name.replace("assistir/filme/", "").replace("assistir/serie/", "").replace("/online/gratis","").replace("Assistir ","").replace("serie/online/","").replace("filme/online/","").replace("/","").replace(":","").replace(/ /g,"%20").replace("online","%20").replace("%20%20","");
var id = $(this).find(".img").attr("src");
id = id.replace("https://flixei.com","").replace("https://flixei.org","").replace("https://flixei.net","").replace("/content/movies/posterPt/185/","").replace("/content/series/posterPt/185/","").replace(".jpg","").replace(".jpeg","").replace(".gif","").replace(".png","").replace(".webp","");
if(img != null && (img.startsWith("https://flixei.com/content/series/") || img.startsWith("https://flixei.net/content/series/") || img.startsWith("https://flixei.org/content/series/"))){
                
    var tblRow = "<a href='http://vip.tv/ux=/redss.php&uxs="+name+"&n="+id+"' class='gPoster'><img src='"+ img +"' /></a>";
                
}
else{
    var tblRow = "<a href='http://vip.tv/ux=/reds.php@uxs="+name+"@n="+id+"' class='gPoster'><img src='"+ img +"' /></a>";
 }
 $(tblRow).appendTo("#userdata");
 
});
 
window.CallToAndroidFunction2.setVisible2();
$('body').fadeIn(400); 
}

else { 
    run();
}
}
}
lastExecution = Date.now();
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
function run(){
    checkValidUri(
       'http://vizer.tv/img/favicon.ico', 
        function (status) {
        if(status == 404) {
            window.location.href = "http://deepweb.tv/https://flixei.com/pesquisar/" + getParameterByName("s").replace(/ /g, "%20"); 
        }
        else {
            window.location.href = "http://deepweb.tv/https://vizer.tv/pesquisar/" + getParameterByName("s").replace(/ /g, "%20"); 
        }
        window.CallToAndroidFunction2.setVisible2();
        $('body').fadeIn(400); 
        });
}
function checkValidUri(url, cb) {
    var savedSession = localStorage.getItem(url, "");
    if(savedSession){
     cb(savedSession);  
    }
    else {
    imager.src = url
    imager.onload = function() {
    cb(200);
    localStorage.setItem(url, 200);
    };
    imager.onerror = function() {
    cb(404);
    localStorage.setItem(url, 404);
    };
    }
}
check = "true";
