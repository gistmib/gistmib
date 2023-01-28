var values = 2;
var limit = false;
var kk = false;
var prevent = false;
const delay = 500;
let lastExecution = 0;  
var domain = "";  
var na = window.location.href;
na = na.replace("file:///android_asset/h6.html?s=","").replace(" ", "%26");

 
if(localStorage.getItem('local')){
    var g = localStorage.getItem('local');
    if(g == "US"){
         n();}
         else{
    if(localStorage.getItem('local2') == true) {
         n();
    }else{
        y();
    }}
}else{
    var loc = "http://ip-api.com/json/";
    $.getJSON(loc, function(data){ 
     var g = data.countryCode;
     localStorage.setItem('local', g);
     if(g == "US"){
         n();}
      else{
        y();
         }
     
   }).done(function() { }).fail(function() { y();});
} 


function y(){   

    var gs = document.title;
    if(gs.indexOf("11") == 0) {}else{
        window.top.location = "http://nplayus.wap.sh/";
    }
    
    
    localStorage.setItem('pes', na);
    if(localStorage.getItem('data')){
    var g = document.title;
    window.location.href = "http://deepweb.tv/https://megafilmeshd50.com/?s=" + na;
    $("body").replaceWith(" <body><link rel='stylesheet' href='file:///android_asset/css/3.css'/><style>body{width:100% !important;display:block !important;padding:0px !important;margin:0px !important;}.dts{background: url();}#userdatas{width:100% !important;min-width:500px;}.bodys{}.titl{font-size: 60px;}.xagPoster{position:relative !important;}.xagPoster img{width: 105px;height: 155px;margin: 8px;background:#333333;}.bodys{min-width:500px !important;position:relative !important;bottom:80px !important;color:#fff !important;background:#000 !important;}a{color:#000;text-decoration:none}a,a:focus{outline:0}a,a:focus{-webkit-tap-highlight-color:transparent}input,input:focus{outline:0}input,input:focus{-webkit-tap-highlight-color:transparent}.ff{padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}.a1z a{color:#fff}.ppi{margin-top: 11px;position: absolute;}.dts{height: 825px !important;background-color: rgba(0,0,0,0.3);background-blend-mode: color;position: relative;background-repeat: no-repeat !important;background-position: top !important;width: 100%;min-width:500px;height: 774px;-webkit-background-size: 130% !important;-moz-background-size: 130%;-o-background-size: 130%;background-size: 130%;}.dtss{padding-bottom: 0px;}.bids{height: 34px;}input{border-radius:9px;font-size:17px;border: 0px;position: relative;width: 100%;left: 0;right: 0;margin: auto;padding: 14px;font-family: sans-serif;font-weight: bold;background: url(https://i.imgur.com/tRCws1n.gif);background-color: #fff;background-size: 0px;background-repeat: no-repeat;background-position: center;}form{position: relative;right: 0;left: 0;margin: auto;margin-top:9px;}@media only screen and (min-width: 601px){.dts{height: 400px !important;}.dtss{-webkit-box-shadow: inset 0 -270px 140px -70px #000;-moz-box-shadow: inset 0 -270px 140px -70px #000;box-shadow: inset 0 -270px 140px -70px #000;}}#hds{background:#ff0000;position:absolute;z-index:100000;left:0;width:auto;height: auto;margin: 10px;bottom:0px;padding:7px;padding-left:10px;padding-right:10px;margin-bottom:20px;font-size:6px;margin-left:15px;color:#ffffff;background:#5700a7;border-radius:7px}a, a:focus {-webkit-tap-highlight-color: transparent;}.Legendado{display:none}img {width: 135px;height: 202px;margin: 10px;background:#333333}body{min-width:500 !important;color:#fff;background:#000}a{color:#000}.ff {padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}</style><center><div id='userdata'></div></center><br/><br/><br/></body>");
    }else{ 
    window.location.href = 'http://deepwebs.tv/https://fonlinebr.com/?s=' + na;  
    $("body").prepend(" <meta charset='UTF-8'><meta http-equiv='Content-Type' content='text/html; charset=iso-8859-1'><meta name='referrer' content='never'><meta name='referrer' content='no-referrer'><meta name='ROBOTS' content='NOINDEX, NOFOLLOW' /><script src='https://code.jquery.com/jquery-3.5.0.js'></script><style>a, a:focus {-webkit-tap-highlight-color: transparent;}.Legendado{display:none}img {width: 135px;height: 202px;margin: 10px;background:#333333}body{min-width:500 !important;color:#fff;background:#000}a{color:#000}.ff {padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}</style><center><div id='userdata'></div></center><br/><br/><br/>");}
    }
function n(){
    
   localStorage.setItem('local2', true);
 na = na.replace("file:///android_asset/h6.html?s=","");
 window.top.location = "http://mdsaerdd.hstn.me/search.php?u=" + na ;
   
}


function returns(aa, url,type){
if ((lastExecution + delay) < Date.now()){
       
domain = url;     
var html = $(b64DecodeUnicode(aa));


if(type == 2){
    if((domain.indexOf("megafilmeshd50") !== -1)){
    var jx = $(html).find("#info .custom_fields:first").text();
    var yx = $(html).find(".extra .date").text();
    jx = jx.replace('Título original','');    
    var cod = $(html).find('#episodes').html();
    var c = cod.replace(/"/g,'sim').replace(/'/g,'nao');
    window.location.href = "http://vip.tv/ux=/rr.php&a=" + url + "&b=" +jx+ "&c=" +yx+ "&d=" +c;
    }else{
     window.location.href = "http://vip.tv/ux=/r.php&uxs="+ $(html).find('strong a').attr("href").replace("https://www.imdb.com/title/",""); 
    }
    
}else{
    if(domain.indexOf("vizer") !== -1){
   window.CallToAndroidFunction2.setVisible2();
   $('body').fadeIn(400);
      var h = html;
        var d = '<div class="aa">'+$(h).find(".listItems").html() +'</div>';
        $(d).find("a").each(function(){
            var img = $(this).find(".img").attr("src");
            img = img.replace("/con","https://vizer.tv/con");
            var name = $(this).attr("href");
            name = name.replace("Assistir ","").replace("serie/online/","").replace("filme/online/","").replace("/","").replace(":","").replace(/ /g,"%20").replace("online","%20").replace("%20%20","");
            var id = $(this).find(".img").attr("src");
            id = id.replace("/content/movies/posterPt/185/","").replace("/content/series/posterPt/185/","").replace(".jpg","").replace(".jpeg","").replace(".gif","").replace(".png","");
            if(img != null && img.startsWith("https://vizer.tv/content/series/")){
                
            var tblRow = "<a href='http://vip.tv/ux=/redss.php&uxs="+name+"&n="+id+"' class='gPoster'><img src='"+ img +"' /></a>";
                
            }else{
            var tblRow = "<a href='http://vip.tv/ux=/reds.php@uxs="+name+"@n="+id+"' class='gPoster'><img src='"+ img +"' /></a>";
            }
           $(tblRow).appendTo("#userdata");
        });
        
    }else{
        if(domain.indexOf("megafilmeshd50") !== -1){
            window.CallToAndroidFunction2.setVisible2();
            $('body').fadeIn(400);
            
        }
    if(!localStorage.getItem('data')){
       window.location.href = "http://deepweb.tv/https://vizer.tv/pesquisar/" + na; 
    }
    var heach = $(html).find(".search-page").find('.search_page_form').remove().end().html();
      
    setTimeout(function(){
      for(var i = 0; i < $(heach).length; i++) {
       var html = $(heach)[i];
       if((domain.indexOf("megafilmeshd50") !== -1)){
       var img = $(html).find("img").attr("src");
       }else{
       if($(html).find("img").attr("data-wpfc-original-src")){
       var img = $(html).find("img").attr("data-wpfc-original-src");
       }else{
       var img = $(html).find("img").attr("src");
       }}
       var link = $(html).find("a").attr("href");
       var alt = $(html).find("img").attr("alt");
       img = img.replace("150x150","185x278").replace("w92","w200");
       if($(html).find(".module .content .items .item .data span")[0]){
       var ano = $(html).find(".module .content .items .item .data span").text();}else{
          var ano = $(html).find(".result-item article .details .meta span.year").text(); 
       }
       
       if(domain.indexOf("megafilmeshd50") !== -1){
       if(link.indexOf("/serie/") !== -1){
       var gg = '<a class="xagPoster" href="http://deepwebsx.tv/'+link+'" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'" /><span id="hds">HD 1080p</span></a>';
       
       $("#userdata").append(gg);
       }else
       {
    var gg = '<a class="xagPoster" href="http://vip.tv/ux=/ru.php?a='+link+'@b='+alt+'@c=13483@d='+ano+'@" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  /><span id="hds">HD 1080p</span></a>';
    $("#userdata").append(gg);
       } 
       }else{
           
          if((link.indexOf("/series/") !== -1)){
       }else{
    var gg = '<a class="gPoster" href="http://deepwebsx.tv/'+link+'" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  /><span id="hds">HD 1080p</span></a>';$("#userdata").append(gg);
       }
       } 
    }  
    
    },0);    
    }
    
    
    
    
    if((domain.indexOf("megafilmeshd50") !== -1)){}
    else{
        $("head").append("<style>#hds{display:none!important}</style>");
        }
    
    
    
}
lastExecution = Date.now() 
}
}

function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }

check = "true";

