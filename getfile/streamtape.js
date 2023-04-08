var local = window.location.href;
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
    getElement($('#robotlink'), function(uri){
        window.location.href = "http://videomega.tv/" + uri;
    });
}
script.onerror = function(event) {
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
                    window.location.reload();
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

