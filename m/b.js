document.getElementsByTagName("script")[4].innerHTML = '';
document.getElementsByTagName("script")[5].innerHTML = '';

var link;
    link = document.createElement("link");
    link.setAttribute("type", "text/css");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "//cdn.jsdelivr.net/gh/gistmib/gistmib/flixs.css");
    document.getElementsByTagName("header")[0].appendChild(link);
    
    $('.generalMoviesList a').each(function(){
           this.href = this.href.replace('https://thefilmes.tv/series', 'http://megahdfilmes.me/series');
           this.href = this.href.replace('https://thefilmes.tv/filmes', 'http://vip.tv/ux=/filmes');
           
           this.href = this.href.replace('https://megahdfilmes.com/filme', 'http://vip.tv/ux=/filme');
           this.href = this.href.replace('https://megahdfilmes.com/series', 'http://megahdfilmes.me/series');
           this.href = this.href.replace('https://megahdfilmes.me/series', 'http://megahdfilmes.me/series/');
           this.href = this.href.replace('https://megahdfilmes.me/filmes', 'http://vip.tv/ux=/filmes');
           
           this.href = this.href.replace('https://megahdseries.com/series', 'http://megahdfilmes.me/series/');
           this.href = this.href.replace('https://megahdseries.com/filmes', 'http://vip.tv/ux=/filmes');
}); 
if ($(".noMovies")[0]){
     var puts = window.location.href;
     var put = puts.replace('https://megahdfilmes.me/search/','').replace('https://megahdseries.com/search/','').replace('/page/','&');
   window.location = "https://megafilmeshd50.com/?s=" +put;
}

$("img.lazy").each(function() {
    $(this).attr("data-original",$(this).attr("src"));
}); 
    
setTimeout(function() {
 $(".v").hide();
}, 0);

link.onload=function( evt ) {
        console.log("LINK LOADED", evt );
        $('iframe').remove();
        window.CallToAndroidFunction2.setVisible2();
setTimeout(function() {$('body').fadeIn(400);}, 400);
    };
    link.onerror=function( evt  ) {
        console.log("LINK Error", evt );
    };
    setTimeout(function() {$('iframe').remove();window.CallToAndroidFunction2.setVisible2();}, 800);

if (document.documentElement.clientWidth < 720) { 
    document.querySelector("meta[name=viewport]").setAttribute(
          'content', 
          'width=500');
 }
 
 var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
    $('iframe').remove();
    document.getElementsByTagName("script")[4].innerHTML = '';
document.getElementsByTagName("script")[5].innerHTML = '';
  });
});

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
