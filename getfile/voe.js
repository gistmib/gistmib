var local = window.location.href;
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
    $(document).ready(function(){
        var o = $("body script").eq(5).text();
        o = o.substring(0, o.indexOf('const video =')).split("var sources =").pop();
      
        $("body").html("<script>var ll = "+o+"; window.location.href = 'http://videomega.tv/' + ll.hls;</script>");
    });
}

script.onerror = function(event) {
    window.location.reload();
}
