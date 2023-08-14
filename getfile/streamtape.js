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
        if($('#robotlink')[0] || $(".plyr__control")[0]){
            isVideo();
        }else{
            window.location.href = "http://vip.tv/Erro";
        }
    });
}
function fail() {
    window.location.reload();
}
function isVideo(){
    $(".plyr__control")[0].click();
    if($('video')[0]){
        let vid = document.querySelector("video");
        vid.play();
        vid.oncanplay  = function() {
            var link = $('#robotlink').text().replace("//","");
            if(checkIsNullValue(link)) {
                window.location.href = "http://videomega.tv/" + "https://" + link + '&stream=1';
            }
            else {
               fail();
            }
        };
        
        setTimeout(() => {
            var link = $('#robotlink').text().replace("//","");
                if(checkIsNullValue(link)) {
                    window.location.href = "http://videomega.tv/" + "https://" + link + '&stream=1';
                }
                else {
                   fail();
                }
        }, 3000);
        clearInterval(mInterval); 
    }
}

function checkIsNullValue(value){
    if(typeof(value)  === "undefined" || value === null || value === "" || typeof(value)  === "") {
        return false;
    }
    else {
        return true;
    }
}

