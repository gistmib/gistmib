var childLocation = window.location.href;
var childHead = document.querySelector('head');
var childScript = document.createElement('script');

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
            setInterval(() => isVideo(), 15000);
        }else{
            window.location.href = "http://vip.tv/Erro";
        }
    });
}
function fail() {
    window.location.reload();
}
function isVideo(){
    if($('video')[0]){
        setTimeout(() => {
            var link = $('#robotlink').text().replace("//","");
                if(checkIsNullValue(link)) {
                    window.location.href = "http://videomega.tv/" + "https://" + link + '&stream=1';
                }
                else {
                   fail();
                }
        }, 3000);
    }else {
        fail();
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

