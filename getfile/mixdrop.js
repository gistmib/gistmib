var childLocation = window.location.href;
var childHead = document.querySelector('head');
var childScript = document.createElement('script'); 
const interval = setInterval(function(){
    var link = $("video").attr("src");
    if(checkIsNullValue(link)){
        window.location.href = `http://videomega.tv/https:${link}`;
        clearInterval(interval);
    }else{
        $(".vjs-big-play-button")[0].click();
    }
}, 1000);

childScript.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
childScript.type = "text/javascript";
childScript.async = false;
childScript.onload = () => init();
childScript.onerror = () => fail();
childHead.appendChild(childScript);

function init() { 
    if($(".error")[0] || !$(".vjs-big-play-button")[0]){
        window.location.href = "http://vip.tv/Erro";
    }
    else{
        interval;
    }
}
function fail() {
    window.location.reload();
}
function checkIsNullValue(value){
    if(typeof(value)  === "undefined" || value === null || value === "" || typeof(value)  === "") {
        return false;
    }
    else {
        return true;
    }
}
