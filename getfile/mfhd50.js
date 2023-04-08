var local = window.location.href;
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
     getElement($(".metaframe"), function(elem){
        if(checkIsNullValue(elem.attr("src"))) {
            window.location.href = "http://videomega.tv/" + elem.attr("src");
        }
        else {
            window.location.reload();
        }
     });
}
script.onerror = function(event) {
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
