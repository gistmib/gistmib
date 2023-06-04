var local = window.location.href;
var servers = [3,5,4,6];
var i = 0;
var head= document.getElementsByTagName('head')[0]; 
var scriptxx= document.createElement('script'); 
scriptxx.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
scriptxx.type = "text/javascript";
scriptxx.async = false;
head.appendChild(scriptxx); 
scriptxx.onload = function(event) {
    var link = "https://playerhd.org/video/playerfteste.php?url=" + window.btoa(servers[i]+"/"+getParam("id")+"/none/none");
    getFinalUrl(link);
}

function getFinalUrl(uris){
    getHtml(uris, function(html){
       var uri = getSecondPart(html, "window.location.href");
       getHtml("https://zbigz.in/flixs.php?u="+uri, function(html){
           var uri = getSecondPart(html, "window.location.href");
           if(uri == null){ 
               i++;
               var link = "https://playerhd.org/video/playerfteste.php?url=" + window.btoa(servers[i]+"/"+getParam("id")+"/none/none");
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
function getIP() {
  return new Promise((resolve, reject) => {
    const resolver = new doh.DohResolver("https://1.1.1.1/dns-query");
    resolver
      .query(location.hostname, "A")
      .then((response) => {
        response.answers.forEach((ans) => {
          resolve(ans.data)
        });
        if (response.answers.length == 0) {
          resolve(location.hostname)
        }
      })
      .catch((err) => reject(err));
  });
}
//https://sbface.com/dl?op=download_orig&id=hdt7wko2mdz0&mode=l&hash=60187130-168-194-1680880228-027183c7d97b4b26eaac1ced96a47a09
