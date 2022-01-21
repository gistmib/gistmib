
function load_js() 
{ var head= document.getElementsByTagName('body')[0];
var scriptxx= document.createElement('script');
scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js';
scriptxx.type = "text/javascript";
scriptxx.async = false;   
head.appendChild(scriptxx);

var x= document.createElement('script');
x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js';
x.type = "text/javascript";
x.async = false;   
head.appendChild(x);
} 
load_js(); 

setTimeout(function(){ 
 
    var link;
    link = document.createElement("link");
    link.setAttribute("type", "text/css");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "/111qq.css?dxcd");
    document.getElementsByTagName("body")[0].appendChild(link);
    
    link.onload=function( evt ) {
        console.log("LINK LOADED", evt );
   setInterval(function(){ 
   $(".html5-video-container>video").removeAttr("style");
   $('.html5-video-container>video').removeClass('video-stream');
   $('.html5-video-container>video').removeClass('html5-main-video');
   $('video[style="width: 561px; height: 316px; left: 0px; top: 135.219px;"]').replaceWith('');
   }, 0);
   $('video').attr('poster', 'null');
   
   setTimeout(function(){ 
       var ff = $("video").clone();
   var dd = $(".ytp-progress-barx").clone();
   $('body').prepend(dd);
   $(".html5-video-container>video").removeAttr("style");
   $('.html5-video-container>video').removeClass('video-stream');
   $('.html5-video-container>video').removeClass('html5-main-video');
   
   $('video').one('play', function () {
    window.CallToAndroidFunction1.setVisible();
     $('body').fadeIn(2000);
});
   }, 0);
   
   $('.ytp-button:not([aria-disabled=true]):not([disabled]):not([aria-hidden=true])')[0].click();
   $('.ytp-large-play-button')[0].click();
   $('.ytp-button')[0].click(); 
   
    } 
}, 1000);
