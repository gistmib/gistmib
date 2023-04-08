var local = window.location.href;
var servers = [3,5,4,6];
var i = 0;
var id = getID();
var head= document.getElementsByTagName('head')[0]; 
var script = document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
    var link = "https://playerhd.org/video/playerfteste.php?url=" + window.btoa(servers[i]+"/"+getParam("id")+"/none/none");
    getFinalUrl(link);
}

script.onerror = function(event) {
    window.location.reload();
}

function getFinalUrl(uris){
    getHtml(uris, function(html){
        var uri = getSecondPart(html, "window.location.href");
        getHtml("https://zbigs.cf/flixs.php?u="+uri, function(html){
            var uri = getSecondPart(html, "window.location.href");
            if(uri == null){ 
               i++;
               var link = "https://playerhd.org/video/playerfteste.php?url=" + window.btoa(servers[i]+"/"+id+"/none/none");
               getFinalUrl(link);
           }
           else{
              window.location.href = uri;
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
