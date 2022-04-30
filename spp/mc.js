var scriptxx= document.createElement('script'); 
scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js'; 
scriptxx.type = "text/javascript"; scriptxx.async = false; head.appendChild(scriptxx); 
var x= document.createElement('script'); 
x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js'; 
x.type = "text/javascript"; x.async = false;
head.appendChild(x); x.onload=function( evt ) {
    $('iframe[src^="https://player"]').addClass("aaaa");
    $("body").append("<style>body{display:block !important}.aaaa {position:fixed !important;width:100% !important;height:100% !important;z-index: 100000 !important;top:0 !important;left:0 !important; right:0 !important;bottom:0 !important;margin-top:0px !important}</style>");
    
}
