        
var local = window.location.href;
var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
  if($(".error")[0]){
        window.location.href = "http://vip.tv/Erro";
  }
  else{
      if($(".vjs-big-play-button")[0]){
          setInterval(function(){ $(".vjs-big-play-button")[0].click(); },2000);
      }else {
          window.location.reload();
      }
    
    
    $('video').on('DOMSubtreeModified', function(){
      var url = $(this).attr("src");
      if(url !== "" && url !== null && url !== "undefined"){
        window.location.href = "http://videomega.tv/https:" + url;
      }
    });
  }
}
setInterval(function(){
  window.location.reload();
},30000);
