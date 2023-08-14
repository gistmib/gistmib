var servers = ["7","9","8","10"]; //"5","3","7","6","4","8"
var servers2 = ["9","7","10","8"];
var i = 0;
var id = getID(); 
var childLocation = window.location.href;
var childHead = document.querySelector('head');
var childScript = document.createElement('script'); 
var childServer;
childScript.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
childScript.type = "text/javascript";
childScript.async = false;
childScript.onload = () => init();
childScript.onerror = () => fail();
childHead.appendChild(childScript);


function init() {
    $(document).ready(() => {
        childServer = (checkJsSrc()) ? servers : servers2
        getFinalUrl("https://playerhd.org/video/playerfteste.php?url=" + window.btoa(childServer[i]+"/"+getParam("id")+"/none/none"));
    });
}
function fail() {
    window.location.reload();
}

function checkJsSrc(){
    var result = false; // is no player;
    $("script").each(function(index) {
        if($(this).attr("src").indexOf('synic_player.js') > -1) {
            result = true; // is player;
        }
    });
    return result;
}
function getFinalUrl(uris){
    getHtml(uris, function(html){
        var ura = getSecondPart(html, "window.location.href");
        getHtml("https://zbigz.in/flixs.php?u="+ura, function(html){
            var uri = getSecondPart(html, "window.location.href");
            if(childServer[i] == null || childServer[i] == undefined || typeof childServer[i] == "undefined"){
                window.location.href = ((checkJsSrc()) ? "http://cdnplayer.tv/" : "http://giganet.tv/") + "https://playerhd.org/video/player.php?id=" + getParam("id");
            }
            else{
                if(uri == null){
                    getFinalUrl("https://playerhd.org/video/playerfteste.php?url=" + window.btoa(childServer[i] +"/"+id+"/none/none"));
                    i+=1;
                }
                else{
                    var io = (((checkJsSrc()) ? "http://cdnplayer.tv/" : "http://giganet.tv/") + "https://nplayus.wap.sh/embed.php?" + uri.replace("/?v","/?v=").replace("https://","").replace("http://",""));
                    window.location.href = io;
                }
            }
       });
   });
}
function getHtml(uri, onResult){
    $.ajax({
        url:uri,
        type: 'GET',
        success: function(data){
            onResult(data);
        },
});
}
function getSecondPart(str, val) {
    try {
        var st = str.split(val)[1];
        st = st.substring(0, st.indexOf('})')).replace(/"/g, "").replace(/ /g, "").replace(/=/g, "").replace("?link","?link=");
        return st;
    }
    catch(e){
        return null
    }
}
function getParam(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getID(){
    if(sessionStorage.getItem("id")){
        return sessionStorage.getItem("id");
    }else{
        sessionStorage.setItem("id", getParam("id"));
        return getParam("id");
    }
}