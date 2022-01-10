var d = window.location.href;
setTimeout(function(){
    
 if(document.querySelector(".err")){
     window.location.href = "http://vip.tv/Erro";
 }
 if(document.querySelector(".tbl1")){
     var al = document.querySelector("span a").getAttribute('href');
     var locks = localStorage.getItem("meuGato");
     
      if (locks == "cast") {
         top.location.href ="http://videomega.tv/" + al;
      }
 else if(locks == "play"){
     
    function getParameterByName(name, url) {
    if (!url) url =  d;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
   var on = getParameterByName("id");
     
     top.location.href ="http://cdnplayer.com/https://embedsb.com/e/" + on;
 }
 else{
     al = al.replace("zhttps://","").replace("zhttp://","");
     top.location.href ="http://giganet.tv/" + al;
 }
 }
 else{
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
 }
 setInterval(function(){window.location.reload();},30000);
},0);



function cc(a,b,c){
         var ff = "https://embedsb.com/dl?op=download_orig&id="+a+"&mode="+b+"&hash="+c;
         fetch(ff /*, options */)
    .then((response) => response.text())
    .then((html) => {
        document.getElementsByTagName("body")[0].innerHTML = html;
        setTimeout(function(){
            
                 var al = document.querySelector("span a").getAttribute('href');
     var locks = localStorage.getItem("meuGato");
     
      if (locks == "cast") {
         top.location.href ="http://videomega.tv/" + al;
      }
 else if(locks == "play"){
    
   var on = "http://cdnplayer.com/" + window.location.href;
   on= on.replaceAll("/d/","/e/");
     
     top.location.href = on;
 }
 else{
     al = al.replace("zhttps://","").replace("zhttp://","");
     top.location.href ="http://giganet.tv/" + al;
 }
            
        },0);
    })
    .catch((error) => {
        console.warn(error);
    });
     }