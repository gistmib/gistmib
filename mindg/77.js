if(localStorage.getItem('local')){
    var g = localStorage.getItem('local');
    if(g == "US"){
         n();}
         else{
    if(localStorage.getItem('local2') == true) {
         n();
    }else{
        y();
    }
     }
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
    var g = document.title;
    if(g.indexOf("10") == 0 || g.indexOf("11") == 0) {
var p = '<html lang="pt-BR" prefix="og:http://ogp.me"><head><meta charset="UTF-8"><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><meta nme="xreferrer" content="never"><meta nme="xreferrer" content="no-referrer"><meta name="ROBOTS" content="NOINDEX, NOFOLLOW" /><meta id="vp" name="viewport" content="width=device-width" /><base href=""/><base src=""/><link href="" rel="stylesheet" type="text/css" /><style>.vv2{display:none}body{background:0 0;padding:0;color:#ccc;font-size:19px;margin:0;width:100%;font-family:lucida sans unicode,lucida grande,sans-serif}a{text-decoration:none;color:#ccc}a,a:focus{-webkit-tap-highlight-color:transparent}.selected a{font-weight:700;font-size:22px;color:#fff}.selected3 a{font-weight:700;font-size:22px;color:#fff}.selected4 a{font-weight:700;font-size:22px;color:#fff}.selected2 a{font-weight:700;font-size:22px;color:#fff}ul{position:relative;top:100px;bottom:0;left:0;right:0;width:100%;height:fit-content;padding:0;margin:0;margin:auto}li{text-align:center;margin-top:45px;list-style-type:none}.hi{display:none}</style><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script><script src="https://code.jquery.com/jquery-1.10.2.js"></script><script src="https://cdn.jsdelivr.net/gh/gistmib/gistmib/77.js"></script></head><body> <div class="menus"> <div class=""></div></div> <div id="ffx" class="vv filmes1 normal items"> <ul> <li class="selected"><a href="file:///android_asset/h2.html"><img src="Todos os gêneros" class="hi" />Todos os gêneros</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/lancamentos/"><img src="Lançamentos" class="hi" />Lançamentos</a></li>   <li><a href="file:///android_asset/h2.html?cat=/popular/"><img src="Em alta" class="hi" />Em alta</a></li> <li><a href="file:///android_asset/h2.html"><img src="Novidades" class="hi" />Novidades</a></li>  <li><a href="file:///android_asset/h2.html?cat=/genero/acao/"><img src="Ação" class="hi" />Ação</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/aventura/"><img src="Aventura" class="hi" />Aventura</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/animacao/"><img src="Animação" class="hi" />Animação</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/classico/"><img src="Clássicos" class="hi" />Clássico</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/comedia/"><img src="Comedia" class="hi" />Comedia</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/crime/"><img src="Crime" class="hi" />Crime</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/documentario/"><img src="Documentários" class="hi" />Documentários</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/drama/"><img src="Drama" class="hi" />Drama</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/fantasia/"><img src="Fantasia" class="hi" />Fantasia</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/faroeste/"><img src="Faroeste" class="hi" />Faroeste</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/ficcao-cientifica/"><img src="Ficção científica" class="hi" />Ficção científica</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/guerra/"><img src="Guerra" class="hi" />Guerra</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/misterio/"><img src="Mistério" class="hi" />Mistério</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/musica/"><img src="Musical" class="hi" />Musical</a></li>  <li><a href="file:///android_asset/h2.html?cat=/genero/romance/"><img src="Romance" class="hi" />Romance</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/suspense/"><img src="Suspense" class="hi" />Suspense</a></li> <li><a href="file:///android_asset/h2.html?cat=/genero/terror/"><img src="Terror" class="hi" />Terror</a></li>                                                                                                                       <li><a href="file:///android_asset/h2.html?cat=/ano/2021"><img src="2021" class="hi" />2021</a></li><li><a href="file:///android_asset/h2.html?cat=/ano/2020"><img src="2020" class="hi" />2020</a></li>        <li><a href="file:///android_asset/h2.html?cat=/ano/2019"><img src="2019" class="hi" />2019</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2018"><img src="2018" class="hi" />2018</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2017"><img src="2017" class="hi" />2017</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2016"><img src="2016" class="hi" />2016</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2015"><img src="2015" class="hi" />2015</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2014"><img src="2014" class="hi" />2014</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2013"><img src="2013" class="hi" />2013</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2012"><img src="2012" class="hi" />2012</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2011"><img src="2011" class="hi" />2011</a></li> <li><a href="file:///android_asset/h2.html?cat=/ano/2010"><img src="2010" class="hi" />2010</a></li>                                                                                                                                                                                                  </ul> </div> <div id="ff" class="vv filmes2 hd items"> <ul> <li class="selected3"><a href="file:///android_asset/h2.html?type=14"><img src="Todos os gêneros" class="hi" />Todos os gêneros</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/lancamentos/"><img src="Lançamentos" class="hi" />Lançamentos</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/filme/"><img src="Novidades" class="hi" />Novidades</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ratings/?get=movies"><img src="Mas acessados" class="hi" />Mais acessados</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/acao/"><img src="Ação" class="hi" />Ação</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/aventura/"><img src="Aventura" class="hi" />Aventura</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/animacao/"><img src="Animação" class="hi" />Animação</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/nacional/"><img src="Nacional" class="hi" />Nacional</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/comedia/"><img src="Comedia" class="hi" />Comedia</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/crime/"><img src="Crime" class="hi" />Crime</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/documentario/"><img src="Documentários" class="hi" />Documentários</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/drama/"><img src="Drama" class="hi" />Drama</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/fantasia/"><img src="Fantasia" class="hi" />Fantasia</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/faroeste/"><img src="Faroeste" class="hi" />Faroeste</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/ficcao-cientifica/"><img src="Ficção científica" class="hi" />Ficção científica</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/guerra/"><img src="Guerra" class="hi" />Guerra</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/misterio/"><img src="Mistério" class="hi" />Mistério</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/musica/"><img src="Musical" class="hi" />Musical</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/historia/"><img src="Historia" class="hi" />História</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/romance/"><img src="Romance" class="hi" />Romance</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/thriller-2/"><img src="Suspense" class="hi" />Suspense</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/terror/"><img src="Terror" class="hi" />Terror</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2020"><img src="2021" class="hi" />2021</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2020"><img src="2020" class="hi" />2020</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2019"><img src="2019" class="hi" />2019</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2018"><img src="2018" class="hi" />2018</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2017"><img src="2017" class="hi" />2017</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2016"><img src="2016" class="hi" />2016</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2015"><img src="2015" class="hi" />2015</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2014"><img src="2014" class="hi" />2014</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2013"><img src="2013" class="hi" />2013</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2012"><img src="2012" class="hi" />2012</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2011"><img src="2011" class="hi" />2011</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2010"><img src="2010" class="hi" />2010</a></li> </ul></div><div id="ff" class="vv2 series1 normal items"> <ul style="display:none !important"> <li class="selected2"><a href="file:///android_asset/h3.html"><img src="Todos os gêneros" class="hi" />Todos os gêneros</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/acessados/?get=tv"><img src="Mais acessadas" class="hi" />Mais acessadas</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/ratings/?get=tv"><img src="Melhor classificação" class="hi" />Melhor classificação</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/episodio/"><img src="Novos episodios" class="hi" />Novos episódios</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/categoria/kids/"><img src="Kids" class="hi" />Kids</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/categoria/animes/"><img src="Animes" class="hi" />Animes</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/network/netflix/"><img src="NetFlix" class="hi" />Netflix</a></li> </ul> </div> <div id="ff" class="vv2 series2 hd items"> <ul> <li class="selected4"><a href="file:///android_asset/h3.html"><img src="Todos os gêneros" class="hi" />Todos os gêneros</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/acessados/?get=tv"><img src="Mais acessadas" class="hi" />Mais acessadas</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/ratings/?get=tv"><img src="Melhor classificação" class="hi" />Melhor classificação</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/episodio/"><img src="Novos episodios" class="hi" />Novos episódios</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/categoria/kids/"><img src="Kids" class="hi" />Kids</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/categoria/animes/"><img src="Animes" class="hi" />Animes</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/network/netflix/"><img src="NetFlix" class="hi" />Netflix</a></li> </ul> </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><style>body{min-width:500 !important;}</style></body></html>';
    }else{
        var p = '<html lang="pt-BR" prefix="og:http://ogp.me"><head><meta charset="UTF-8"><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"><meta nme="xreferrer" content="never"><meta nme="xreferrer" content="no-referrer"><meta name="ROBOTS" content="NOINDEX, NOFOLLOW" /><meta id="vp" name="viewport" content="width=device-width" /><base href=""/><base src=""/><link hrefx="http://maxdsar.hstn.me/Q/p.css" rel="stylesheet" type="text/css" /><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script><script src="https://code.jquery.com/jquery-1.10.2.js"></script><script src="https://cdn.jsdelivr.net/gh/gistmib/gistmib/77.js"></script></head><body> <div class="menus"> <div class=""></div></div> <div id="ffx" class="vv filmes1 normal items"> <ul> <li class="selected"><a href="file:///android_asset/h2.html"><img src="Todos os gêneros" class="hi" />Todos os gêneros</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/lancamento/"><img src="Lançamentos" class="hi" />Lançamentos</a></li> <li><a href="file:///android_asset/h2.html"><img src="Novidades" class="hi" />Novidades</a></li>  <li><a href="file:///android_asset/h2.html?cat=category&s=/acao/"><img src="Ação" class="hi" />Ação</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/aventura"><img src="Aventura" class="hi" />Aventura</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/animacao"><img src="Animação" class="hi" />Animação</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/cinema-tv"><img src="Cinema TV" class="hi" />Cinema TV</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/comedia"><img src="Comedia" class="hi" />Comedia</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/crime"><img src="Crime" class="hi" />Crime</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/documentario"><img src="Documentários" class="hi" />Documentários</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/drama"><img src="Drama" class="hi" />Drama</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/fantasia"><img src="Fantasia" class="hi" />Fantasia</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/faroeste"><img src="Faroeste" class="hi" />Faroeste</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/ficcao-cientifica/"><img src="Ficção científica" class="hi" />Ficção científica</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/guerra"><img src="Guerra" class="hi" />Guerra</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/misterio"><img src="Mistério" class="hi" />Mistério</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/musica"><img src="Musical" class="hi" />Musical</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/historia/"><img src="Historia" class="hi" />História</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/romance"><img src="Romance" class="hi" />Romance</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/thriller"><img src="Suspense" class="hi" />Suspense</a></li> <li><a href="file:///android_asset/h2.html?cat=category&s=/terror"><img src="Terror" class="hi" />Terror</a></li> </ul> </div> <div id="ff" class="vv filmes2 hd items"> <ul> <li class="selected3"><a href="file:///android_asset/h2.html?type=14"><img src="Todos os gêneros" class="hi" />Todos os gêneros</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/lancamentos/"><img src="Lançamentos" class="hi" />Lançamentos</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/filme/"><img src="Novidades" class="hi" />Novidades</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ratings/?get=movies"><img src="Mas acessados" class="hi" />Mais acessados</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/acao/"><img src="Ação" class="hi" />Ação</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/aventura/"><img src="Aventura" class="hi" />Aventura</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/animacao/"><img src="Animação" class="hi" />Animação</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/nacional/"><img src="Nacional" class="hi" />Nacional</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/comedia/"><img src="Comedia" class="hi" />Comedia</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/crime/"><img src="Crime" class="hi" />Crime</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/documentario/"><img src="Documentários" class="hi" />Documentários</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/drama/"><img src="Drama" class="hi" />Drama</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/fantasia/"><img src="Fantasia" class="hi" />Fantasia</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/faroeste/"><img src="Faroeste" class="hi" />Faroeste</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/ficcao-cientifica/"><img src="Ficção científica" class="hi" />Ficção científica</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/guerra/"><img src="Guerra" class="hi" />Guerra</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/misterio/"><img src="Mistério" class="hi" />Mistério</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/musica/"><img src="Musical" class="hi" />Musical</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/historia/"><img src="Historia" class="hi" />História</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/romance/"><img src="Romance" class="hi" />Romance</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/thriller-2/"><img src="Suspense" class="hi" />Suspense</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/categoria/terror/"><img src="Terror" class="hi" />Terror</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2020"><img src="2020" class="hi" />2020</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2019"><img src="2019" class="hi" />2019</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2018"><img src="2018" class="hi" />2018</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2017"><img src="2017" class="hi" />2017</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2016"><img src="2016" class="hi" />2016</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2015"><img src="2015" class="hi" />2015</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2014"><img src="2014" class="hi" />2014</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2013"><img src="2013" class="hi" />2013</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2012"><img src="2012" class="hi" />2012</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2011"><img src="2011" class="hi" />2011</a></li> <li><a href="file:///android_asset/h2.html?u=https://megafilmeshd50.com/ano/2010"><img src="2010" class="hi" />2010</a></li> </ul></div><div id="ff" class="vv2 series1 normal items"> <ul> <li class="selected2"><a href="file:///android_asset/h3.html?type=14"><img src="Todos os gêneros" class="hi" />Todos os gêneros</a></li> <li><a href="file:///android_asset/h3.html?cat=category&s=/kids/"><img src="Kids" class="hi" />Kids</a></li> <li><a href="file:///android_asset/h3.html?cat=category&s=/animes/"><img src="Animes" class="hi" />Animes</a></li> <li><a href="file:///android_asset/h3.html?cat=category&s=/novelas/"><img src="Novelas" class="hi" />Novelas</a></li> <li><a href="file:///android_asset/h3.html?cat=category&s=/reality/"><img src="Reality" class="hi" />Reality</a></li> <li><a href="file:///android_asset/h3.html?cat=category&s=/soap/"><img src="Soap" class="hi" />Soap</a></li> <li><a href="file:///android_asset/h3.html?cat=category&s=/war-politics/"><img src="War politics" class="hi" />War politics</a></li> </ul> </div> <div id="ff" class="vv2 series2 hd items"> <ul> <li class="selected4"><a href="file:///android_asset/h3.html"><img src="Todos os gêneros" class="hi" />Todos os gêneros</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/acessados/?get=tv"><img src="Mais acessadas" class="hi" />Mais acessadas</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/ratings/?get=tv"><img src="Melhor classificação" class="hi" />Melhor classificação</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/episodio/"><img src="Novos episodios" class="hi" />Novos episódios</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/categoria/kids/"><img src="Kids" class="hi" />Kids</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/categoria/animes/"><img src="Animes" class="hi" />Animes</a></li> <li><a href="file:///android_asset/h3.html?u=https://megafilmeshd50.com/network/netflix/"><img src="NetFlix" class="hi" />Netflix</a></li> </ul> </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><style>body{min-width:500 !important;}</style></body></html>';}
   
 $("body").prepend(p);
    
}
function n(){
   localStorage.setItem('local2', true);
   var p = '';
   $("body").prepend(p);
}


check = "true";
