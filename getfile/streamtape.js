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
    setTimeout(function(){
        getElement($('#robotlink'), function(uri){
            window.location.href = "http://videomega.tv/" + uri;
        });
    },5000);
}
function fail() {
    window.location.reload();
}

function getElement(element, onResult){
    if(!element.length) {
        window.location.href = "http://vip.tv/Erro";
    }
    else {
        $(document).bind('DOMNodeInserted', function() {
            $(".plyr__control")[0].click();
            $("video").bind("play", function() {
                var link = $('#robotlink').text().replace("//","");
                if(checkIsNullValue(link)) {
                    onResult("https://" + link + '&stream=1');
                    $(document).unbind('DOMNodeInserted');
                }
                else {
                   fail();
                }
            });
        });
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

