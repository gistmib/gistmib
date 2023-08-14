var childLocation = window.location.href;
var childHead = document.querySelector('head');
var childScript = document.createElement('script'); 
var mInterval;

childScript.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
childScript.type = "text/javascript";
childScript.async = false;
childScript.onload = () => init();
childScript.onerror = () => fail();
childHead.appendChild(childScript);

function init() { 
    $(document).ready(() => {
        if($(".error")[0] || !$(".vjs-big-play-button")[0]){
            window.location.href = "http://vip.tv/Erro";
        }
        else{
            mInterval = setInterval(function(){
                var link = $("video").attr("src");
                if(checkIsNullValue(link)){
                    window.location.href = `http://videomega.tv/https:${link}`;
                    clearInterval(mInterval);
                }else{
                    $(".vjs-big-play-button")[0].click();
                }
            }, 1000);
    }
    });
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