setTimeout(function(){
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
 al;
 window.location.href = "javascript:" + al;}
 
 setInterval(function(){window.location.reload();},30000);
 
    
},0);