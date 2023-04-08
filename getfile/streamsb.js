var local = window.location.href;
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
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
                $("body").html(html);
                if ("undefined" !== typeof history.pushState) {
                    history.pushState("aa", "title", "/dl");
                } 
                else {
                    window.location.assign("/dl");
                }
            },
        });
    }
    
    $(document).bind('DOMNodeInserted', function(e) {
        var iframe = document.querySelector('.grecaptcha-logo iframe');
        if(iframe != null){
            iframe.onload = function(){
                $('button')[0].click();
            };
        }
    });
}
