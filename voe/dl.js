var g = window.location.href;
var lol = g.replace("https://voe.sx/e/","");

var head= document.getElementsByTagName('head')[0]; 
var scriptxx= document.createElement('script'); 
scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js'; 
scriptxx.type = "text/javascript"; scriptxx.async = false; head.appendChild(scriptxx); 
var x= document.createElement('script'); 
x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js'; 
x.type = "text/javascript"; x.async = false;
head.appendChild(x); x.onload=function( evt ) {
    


fetch("https://voe.sx/dl?op=download_orig&key=summer&id="+lol+"&hash=" /*, options */)
    .then((response) => response.text())
    .then((html) => {
        var h = html;
if($(h).find('input[name="hash"]')[0]){
        var kl = $(h).find('input[name="hash"]').attr("value");
        down(kl);
}else{
        window.location.reload();}
    })
    .catch((error) => {
        console.warn(error);
        window.location.reload();
    });
    
}

function down(es){
    fetch("https://voe.sx/dl?op=download_orig&key=summer&id="+lol+"&hash=" + es /*, options */)
    .then((response) => response.text())
    .then((html) => {
        var h = html;
        var kl = $(h).find('.btn:not(:disabled):not(.disabled)').attr("href");
        window.location.href = "http://giganet.tv/"+kl;
    })
    .catch((error) => {
        console.warn(error);
        window.location.reload();
    });
}
