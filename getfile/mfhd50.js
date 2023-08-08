var childLocation = window.location.href;
var childHead = document.querySelector('head');
var childScript = document.createElement('script'); 
const interval = setInterval(function(){
    var link = $(".metaframe").attr("src");
    if(checkIsNullValue(link)){
        window.location.href = `http://giganet.tv/${link}`;
        clearInterval(interval);
    }
}, 100);

childScript.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
childScript.type = "text/javascript";
childScript.async = false;
childScript.onload = () => init();
childScript.onerror = () => fail();
childHead.appendChild(childScript);

function init() {
    var isTrailer = $("#player-option-1");
    if(isTrailer[0]){
        interval;
    }else{
        window.location.href = `http://vip.tv/Erro`;
    }
}
function fail(){
    window.location.reload();
}
function getElement(element, onResult){
    if(element.length) {
        onResult(element)
    }
    else {
        $(document).bind('DOMNodeInserted', function() {
            var elem = $(".metaframe");
            if(checkIsNullValue(elem.attr("src"))) {
                onResult(elem);
                $(document).unbind("DOMNodeInserted");
            }
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
