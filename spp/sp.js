var pager = window.location.href;
var kk = "false";
var head= document.getElementsByTagName('head')[0];
var x= document.createElement('link'); 
x.href= '//cdn.jsdelivr.net/gh/gistmib/gistmib/spp/sp.css';
x.type = "text/css"; 
x.rel = "stylesheet"; 
head.appendChild(x); 
x.onload=function( evt ) { (function($) { 
if (document.documentElement.clientWidth < 720) { 
    document.querySelector("meta[name=viewport]").setAttribute(
          'content', 
          'width=500');
 }
 
if($(".tvshows")[0]){$(".tvshows").remove();}
if($(".mdl")[0]){$(".mdl").remove();}
if($(".hd")[0]){$(".hd").remove();}
if($(".sidebar")[0]){$(".sidebar").remove();}
if($("footer")[0]){$("footer").remove();}
if($(".headroom--top")[0]){$(".headroom--top").remove();}
if($(".aa-tbs")[0]){$(".aa-tbs").remove();}
if($(".bghd")[0]){$(".bghd").remove();}
if($(".bgft")[0]){$(".bgft").remove();}

var ii = $(".poster img").attr("src");
ii = ii.replace("-185x278",'');
var is = $(".poster img").attr("alt");
is = is.replace("Image",'');
var links = $(".poster a").attr("href");

$(".resppages").replaceWith('<form><input type="hidden" id="number" value="1"/><input type="button" onclick="incrementValue()" class="ght" value="Carregar mais" /></form>');

$('body').prepend('<style>.sheader .poster img, .srelacionados article img, .module .content .items .item.movies .poster, .sheader.tvshows .poster img, .srelacionados article.tvshows img, .module .content .items .item.tvshows .poster, .module .content .items .item.seasons.poster{background-image:null !important;background-color:#000000 !important;background:#000000 !important}.items a {pointer-events: none;}.dts{background: url('+ ii +');background-repeat:no-repeat;background-size:cover}</style><script>$("#content-news-container").text(function(index, currentText) {return currentText.substr(0, 11);});$("script").empty();$("iframe").empty();$("body").show();$("body").css("overflow","auto");try{window.CallToAndroidFunction3.setVisible3();}catch{}</script><div class="dts"><div class="dtss"><center><div><b class="dd">FILME</b></div><div id="content-news-container" class="titl">'+ is +'</div><div class="tabss"><table><tr><td class="a1z"> <a href="https://www.youtube.com/embed?listType=search&list='+ is +' trailer dublado"><img src="https://i.imgur.com/PXMSl0p.png?1" width="22px" class="vvc"><br>Ver Trailer</a> </td><td class="a1z"><center><a target="_parent" rel="noreferrer" href="javascript:$(\'article\')[0].click();"><img src="'+ ii +'" style="display:none;"  /><div class="bids ripple"><img src="https://i.imgur.com/2KnO0kx.png?1" class="neps"  /> <div class="ppi"><b>Assistir</b></div></div></a></center></td><td class="a1z"><div class="ratb"><a target="_parent" rel="noreferrer" href="javascript:$(\'article\')[0].click();"><img src="'+ ii +'" style="display:none;"  /><img src="https://i.imgur.com/btl747M.png" width="30px" class="vvc"><br><span class="rats"></span>Saiba Mais</a></div></td></tr></table></div></center></div></div><div id="kong"></div>');


$("#content-news-container").text(function(index, currentText) {
    return currentText.substr(0, 11);
});

click();

 $(".ght").click(function(){
        $("input").css('color',"transparent");
        $("input").css('background-size',"88px");
    });

})(jQuery); }



function incrementValue(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    if(pager.indexOf("/page/") !== -1){
    pager = pager.substring(0, pager.indexOf('/page'));
    pager = pager + '/page/' + value + '/'; 
    }else{
    pager = pager + 'page/' + value + '/'; 
    }
    fetch(pager /*, options */)
    .then((response) => response.text())
    .then((html) => {
    document.getElementsByClassName("items")[0].innerHTML += $(html).find('.items').html();
    setTimeout(function(){
        
        if($(".tvshows")[0]){$(".tvshows").remove();}
    $("input").css('color',"#000");
    $("input").css('background-size',"0px");
    click();
    },100);
    })
    .catch((error) => {
        console.warn(error);
    });
    
}

function getLink(a){
    
    fetch(a /*, options */)
    .then((response) => response.text())
    .then((html) => {
    
    $("#kong").replaceWith('<div style="display:none" id="kong"><meta name="referrer" content="never"><meta name="referrer" content="no-referrer"><a href="http://vip.tv/ux=/r.php&uxs='+ $(html).find('strong a').attr("href").replace("https://www.imdb.com/title/","") +'" id="ee"> <img src=""/></a></div><script>$("#ee")[0].click();if('+kk+' == "true"){setInterval(function(){$("#ee")[0].click();},20000)}</script>');
    setTimeout(function(){kk= "false";},3000);
    })
    .catch((error) => {
        kk= "false";
        console.warn(error);
    });
    
    
    
    
   

    
}
function click(){
    
$('article').click(function(){
    if(kk == "false"){
    var ona = $(this).find(".poster a").attr("href");
    getLink(ona);
        kk = "true";
    }
});
}
