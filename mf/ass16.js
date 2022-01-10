var head= document.getElementsByTagName('head')[0]; var scriptxx= document.createElement('script'); scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js'; scriptxx.type = "text/javascript"; scriptxx.async = false; head.appendChild(scriptxx); var x= document.createElement('script'); x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js'; x.type = "text/javascript"; x.async = false; head.appendChild(x); x.onload=function( evt ) { 
    
    var d = window.location.href;
setTimeout(function(){
    if (d != null && d.endsWith("yes")) {
    localStorage.setItem('meuGato', 'cast');
    
 }
 else if(d != null && d.endsWith("no")){
     localStorage.setItem('meuGato', 'play');
 }
 else{
     localStorage.setItem('meuGato', 'null');
 }
 var al = document.querySelector("table a").getAttribute('onclick');
 al = al.replace("download_video","cc");
 window.location.href = "javascript:" + al;

 setInterval(function(){window.location.reload();},30000);
},0);



     
}
function cc(a,b,c){
         var ff = "https://embedsb.com/dl?op=download_orig&id="+a+"&mode="+b+"&hash="+c;
    $('body').load(ff);
     }