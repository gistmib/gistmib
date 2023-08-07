var local = window.location.href;
var servers = ["7","8"]; //"5","3","7","6","4","8"
var i = 0;
var id = getID();
var head= document.getElementsByTagName('head')[0]; 
var script = document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 

script.onload = function(event) {
    $(document).ready(function(){
    getFinalUrl("https://playerhd.org/video/playerfteste.php?url=" + window.btoa(servers[i]+"/"+getParam("id")+"/none/none"));
    });
}

script.onerror = function(event) {
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
            if(servers[i] == null || servers[i] == undefined || typeof servers[i] == "undefined"){
                window.location.href = ((checkJsSrc()) ? "http://cdnplayer.tv/" : "http://videomega.tv/") + "https://playerhd.org/video/player.php?id=" + getParam("id");
            }
            else{
                if(uri == null){
                    getFinalUrl("https://playerhd.org/video/playerfteste.php?url=" + window.btoa(servers[i]+"/"+id+"/none/none"));
                    i+=1;
                }
                else{
                    var io = ((i == 0 || i == 1) ? (((checkJsSrc()) ? "http://cdnplayer.tv/" : "http://videomega.tv/") + "https://nplayus.wap.sh/embed.php?" + uri.replace("/?v","/?v=").replace("https://","").replace("http://","")) : uri);
                    alert(io);
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
