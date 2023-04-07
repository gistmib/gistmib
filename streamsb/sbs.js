var local = window.location.href;
var servers = [3,5,4,6];
var i = 0;
var head= document.getElementsByTagName('head')[0]; 
var scriptxx= document.createElement('script'); 
scriptxx.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
scriptxx.type = "text/javascript";
scriptxx.async = false;
head.appendChild(scriptxx); 
scriptxx.onload = function(event) {
 if($('.g-recaptcha').length){
                setTimeout(function(){$('button')[0].click();},10000);
   }
  else{
  if($('.mb-4 > a').length) {
        window.location.href = "http://videomega.tv/" +  $('.mb-4 > a').attr("href");
   }
   else{
   var path = window.location.pathname.split("/").pop().replace(".html","").replace(".php","");
                $.ajax({
                    url:"/dl",
                    type: 'POST',
                    data:{op:"download_orig",id:path,mode:"n",hash:"0"},
                    success: function(data){
                        var html = data + "<script>setTimeout(function(){$('button')[0].click();},10000);<\/script>";
                        $("body").html(html);
                        if ("undefined" !== typeof history.pushState) {
                            history.pushState("aa", "title", "/dl");
                        } else {
                            window.location.assign("/dl");
                        }
                },
                
            });
      }
  }
}
var local = window.location.href;
var servers = [3,5,4,6];
var i = 0;
var head= document.getElementsByTagName('head')[0]; 
var scriptxx= document.createElement('script'); 
scriptxx.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
scriptxx.type = "text/javascript";
scriptxx.async = false;
head.appendChild(scriptxx); 
scriptxx.onload = function(event) {
 if($('.g-recaptcha').length){
                setTimeout(function(){$('button')[0].click();},10000);
   }
  else{
  if($('.mb-4 > a').length) {
        window.location.href = "http://videomega.tv/" +  $('.mb-4 > a').attr("href");
   }
   else{
   var path = window.location.pathname.split("/").pop().replace(".html","").replace(".php","");
                $.ajax({
                    url:"/dl",
                    type: 'POST',
                    data:{op:"download_orig",id:path,mode:"n",hash:"0"},
                    success: function(data){
                        var html = data + "<script>setTimeout(function(){$('button')[0].click();},10000);<\/script>";
                        $("body").html(html);
                        if ("undefined" !== typeof history.pushState) {
                            history.pushState("aa", "title", "/dl");
                        } else {
                            window.location.assign("/dl");
                        }
                },
                
            });
      }
  }
}
