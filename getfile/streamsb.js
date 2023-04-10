var local = window.location.href;
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
    $(document).ready(function(){
    if($('.mb-4 > a').length) {
        window.location.href = "http://videomega.tv/" +  $('.mb-4 > a').attr("href");
    }
    else{
        var path = window.location.pathname.split("/").pop().replace(".html","").replace(".php","");
        $.ajax({
            url:"/dl",
            type: 'POST',
            data:{op:"download_orig",id:path,mode:"n",hash:"0"},
            success: function(html){
                var error = $(html);
                if(error.find(".alert") && error.find(".alert").text().indexOf("No such") !== -1){
                    window.location.href = "http://vip.tv/Erro";
                }else {
                    $("body").html(html);
                    if ("undefined" !== typeof history.pushState) {
                        history.pushState("aa", "title", "/dl");
                    } 
                    else {
                        window.location.assign("/dl");
                    }
                }
            },
        });
    }
    
    $(document).bind('DOMNodeInserted', function(e) {
        var iframe = document.querySelector('.grecaptcha-logo iframe');
        if(iframe !== null){
            iframe.onload = function(){
                $('button')[0].click();
                 $(document).unbind('DOMNodeInserted');
            };
        }
    });
    });
}

script.onerror = function(event) {
    window.location.reload();
}
