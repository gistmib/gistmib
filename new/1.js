var spacer = "";
var version = parseInt(document.title)
if(!getParam("u").includes("en")){
if(version > 1600) {
    y();
}else{
    window.top.location = "http://nplayus.wap.sh/";
}
}else{
n();
}
if(version > 13) {
    spacer = "0px";
}else{
    spacer = "80px"
}
var values = 2;
var limit = false;
var kk = false;
var prevent = false;
const delay = 500;
let lastExecution = 0;

const valObjs = {
    lastView: 'lastView',
    seasonList: 'seasonList',
    episodesList: 'episodesList',
    getStorage: 'getStorage',
    setStorage: 'setStorage',
    removeStorage: 'removeStorage',
    ytplay: 'ytPlay',
    play: 'play',
    cast: 'cast',
    down: 'down',
    save: 'save',
    share: 'share', 
    all: 'all',
    myList: 'myList',
    seasons: 'seasons',
    voteAverage: 'vote_average',
    percentage: 'percentage',
    rate: 'rate',
    runtime: 'runtime',
    date: 'date',
    firstAirDate: 'first_air_date',
    numberOfSeasons: 'number_of_seasons',
    duration: 'duration',
    playButton: 'playButton',
    downButton: 'downButton',
    castButton: 'castButton',
    saveButton: 'saveButton',
    shareButton: 'shareButton',
    seasonButton: 'seasonButton',
    episodeButton: 'episodeButton',
    overview: 'overview',
    genres: 'genres',
    similarList: 'similarList',
    seasonsList: 'seasonsList',
    saveButton: 'saveButton',
    ytPlayButton: 'ytPlayButton',
    vizerFilme: 'reds',
    vizerSerie: 'redss',
    cinemaoFilme: 'r',
    megaFilmes: 'ru',
    megaSeries: 'rr',
    list: 'list',
    removeItem: 'removeItem',
    addItem: 'addItem',
    getItem: 'getItem',
    initStyleHtml: 'initStyleHtml',
    initTumbHtml: 'initTumbHtml',
    initContentMovieHtml: 'initContentMovieHtml',
    initContentSerieHtml: 'initContentSerieHtml',
    lastPlayButton: 'lastPlayButton',
    myLastView: 'myLastView',
    mv112: 'mv112',
    tmdbBusca: 'tmdbBusca',
    tmdbId: 'tmdbId',
    results: 'results',
    n: 'n',
    uxs: 'uxs',
    d: 'd',
    c: 'c',
    b: 'b',
    errorSeasonList: 'errorSeasonList'
};
const requestItemJsonStorage = (action, key, name, value) => {
    itemStorage = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : {};
    switch(action) {
        case valObjs.getStorage: {
            try {
                return valueCheck(name) ? (jsonCheck(getJsonVal(itemStorage, name)) ? itemStorage[name] : null) : (jsonCheck(itemStorage) ? itemStorage : null);
            }catch(err) {
                return null;
            }
        }
        case valObjs.setStorage: {
            itemStorage[name] = value;
            localStorage.setItem(key, JSON.stringify(itemStorage));
            return value;
        }
        case valObjs.removeStorage: {
            localStorage.removeItem(key);
            break;
        }
    }

};
const getJsonVal = (json, key, position) => {
    try{
        return (valueCheck(key)) ? (valueCheck(position)) ? json[key][position] : json[key] : json;
    }
    catch(err){
        return null;
    }
};
function valueCheck(v){
    return (v === '' || typeof v === 'undefined' || v === null) ? false : true;
}
function jsonCheck(v){
    return (typeof v === 'undefined' || v === null) ? false : true;
}
function createJsonLists(elementt, id){
    seasonJson = {};
    episodesJson = {};

    elementt.find('.se-c').each((position, element) => {
        episodeJson = {};
        elementEpisodesList = $(element).find('.episodios li');
        seasonName = `${position+1}`;
        seasonNameId = `${position}`;

        if(!$(element).find('.episodios li').hasClass('none')) {
            for(let i = 0; i < elementEpisodesList.length; i++){
                elem = $(elementEpisodesList[i]);
                episodeTitle = elem.find('.episodiotitle a').text();
                episodeImg = elem.find('.imagen img').attr('src');
                episodeId = `${i}`;
                episodeName = `${i+1}`;
                episodeUrl = elem.find('.episodiotitle a').attr('href');
                episodeJson[episodeId] = {id: episodeId, title: episodeTitle, name: episodeName, img: episodeImg, url: episodeUrl}
            }
            episodesJson[position] = episodeJson;
            seasonJson[position] = {id: seasonNameId, name: seasonName};
        }
    });
    requestItemJsonStorage(valObjs.setStorage, id, valObjs.seasonsList, JSON.stringify({"list": seasonJson}));
    requestItemJsonStorage(valObjs.setStorage, id, valObjs.episodesList, JSON.stringify(episodesJson));
    //alert(JSON.stringify({"list": episodesJson}));
}


function y(){
var links;
links = document.createElement("script"); 
links.setAttribute("src", "https://cdn.jsdelivr.net/gh/gistmib/gistmib/fileNovo.js");
document.getElementsByTagName("head")[0].appendChild(links);
links.onload=function( evt ) {
    var hh = '<script> $(document).ready(function(){var gss = document.title;if(gss.indexOf("9") == 0 || gss.indexOf("10") == 0|| gss.indexOf("11") == 0) {$(".uung a").each(function(i,link){link.href = link.href.replace("https://href.li/?","http://deepweb.tv/");});} setTimeout(function(){window.CallToAndroidFunction3.setVisible3();window.CallToAndroidFunction2.setVisible2();window.CallToAndroidFunction1.setVisible1();},3000);});</script><div class="alert"><div class="alert1"><center><img src="https://i.ibb.co/JRfWyY8/icons8-warning-48.png" width="40px" /></center><br/><span class="txt">Você fez uma alteração no filtro de qualidade</span><br><br>Você alterou o filtro de qualidade, nessa lista nem todos os filmes e séries serão os mesmos da lista principal 720p. <br>A partir de agora as abas buscas, filmes e séries irão exibir todos os vídeos com alta qualidade disponíveis, recomendamos uma internet de no minimo 10MB para evitar travamentos.<div class="sxxx ripple">CONTINUAR</div></div></div> <div class="fft" id="ul"><div class="menu" id="ull"><div class="to" style="display:none"> </div> <div class="a9"></div> <span class="homes">Configurações e mais</span><div class="mip"></div> <div class="scl"> <div style="display:none"> <span class="ttx"><b>Filtros de contéudo</b></span> <span class="fii"> <div class="filt">Contéudo completo<label class="switch" for="all"> <input type="checkbox" name="" id="all" /> <div class="slider round"></div> </label></div> <div class="filt">Filmes<label class="switch" for="fil"> <input type="checkbox" name="" id="fil" /> <div class="slider round"></div> </label></div> <div class="filt ee4">Séries<label class="switch" for="ser"> <input type="checkbox" name="" id="ser" /> <div class="slider round" checked></div> </label></div> </span> </div> <div class="matu1 ripples"></div> <span class="ttx"><b>Filtros de qualidade</b></span> <span class="fi"> <div class="filt" style="height: 27px;"><span class="q">NORMAL 720p | 5mil filmes</span><label class="switch" id="ff" for="normal"> <input type="checkbox" name="" id="normal" /> <div class="sliderx round"></div> </label></div> <div class="filt" style="height: 27px;"><span class="qq">FULL HD 1080p | 8mil filmes</span><label class="switch" style="top: -1px;" id="nn" for="hd"> <input type="checkbox" name="" id="hd" /> <div class="sliderx round"></div> </label></div> </span> <div class="matu5 ripples"></div> <div class="matu2 ripples"><span><img src="https://i.ibb.co/ykk4YPm/icons8-cancelar-2-24.png" width="20px" />Remover contéudo adulto</span></div> <div style="display:none;"><span style="display:none;margin-top:6px" class="ttx"><b>Ùltimas novidades</b> <span class="pio">.</span></span> <br><br><br> Modo sobreposição de tela, assista seus videos enquanto navega em outros aplicativos. <br>Disponível em celulares com android 8.0 ou superior, versão 2.0.5<br> <span style="margin-top:6px;" class="ttx"><b>Siga nossas redes</b></span></div> <div class="nopa"><center> <a target="_parent" href="http://goooog.wap.sh/"><div class="matuz ripples"><span class="rt"></span><span><img src="https://i.ibb.co/1z2Bhhb/icons8-chrome-50.png" width="20px"> Site</span></div></a>  </center></div> <br><br><br><br><br><br>    </div></div></div>    <span class="pios"></span>                                                                                                                                                     <div class="tg ripples"><img src="https://img.icons8.com/metro/100/ffffff/menu.png" width="15" height="30" /></div> <div class="gallerycard"><div id="div2"> <div class="dts" style="position:absolute;background-color: #000;background-image: url(https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/10/projeto-gemini.jpg);background-attachment: relative;background-position: center top; background-repeat: no-repeat;background-size:cover"> <div class="dtss"> <center><div><b class="dd">FILME</b></div> <img src="https://techcrunch.com/wp-content/uploads/2019/09/GeminiMan_LAX_Title_K.png" style="width: 220px;-webkit-filter: invert(1);filter: invert(1);maxx-height:250px;maxx-height:90px;min-height:auto;margin-top:12px" /> <div class="ranking"><span class="tops"><b>TOP</b></span> <b>Top 1 filmes Semanais</b> </div> <div class="tabss"><table><tr> <td class="a1z"> <a href="http://0011.tv/https://www.youtube.com/embed/28PsMQorGn4?&tt1=dia do sim&url=https://superflixfilmes.net/filme/projeto-gemini-2019-online-pd-on/&imb=5.7&imx=&serie=w&tt11=https://techcrunch.com/wp-content/uploads/2019/09/GeminiMan_LAX_Title_K.png"><img src="file:///android_asset/img/tr.png" width="22px" class="vvc"><br>Ver Trailer</a> </td> <td class="a1z"><center><a target="_parent" rel="noreferrer" href="http://tvxe.tv/https://superflixfilmes.net/filme/projeto-gemini-2019-online-pd-on/"><div class="bids ripple"><img src="file:///android_asset/img/as.png" /> Assistir</div></a></center></td> <td class="a1z"><a href="http://tvxe.tv/https://superflixfilmes.net/filme/projeto-gemini-2019-online-pd-on/"> <img class="posts" width="0px" style="display:none" /> <img src="file:///android_asset/img/sb.png"width="28px" /><br>Saiba Mais</a></td> </tr></table> </div> </center> </div> </div></div></div>                                                                              <div class="short"><br></div><div class="contai">  <br/><br/><div class="nata"><div style="position:relative;width:auto;background:#dd0000;border-radius:20px;padding:10px;padding-top:30px;padding-left:20px;padding-bottom:30px;margin:10px">9UHDMAX está lento ou não funciona? <div style="position:absolute;top:0;bottom:0;margin:auto;right:0;background:#ffffff;color:#000000;border-radius:8px;padding:15px;margin:15px" class="merts"><b>Corrigir agora</b></div></div><br/><br/></div> <div class="chipa"> <span class="cont"><b>Meus favoritos</b></span><br/><br/> <div class="vapd"><div class="container" style="height: 280px;"> <div id="my"> </div> <div class="ccvzu"> <span class="nerd"> Começe a navegar</span> <div class="pikassz"></div> <div class="pikassz"></div> <div class="pikassz"></div> <div class="pikassz"></div> </div> </div></div></div>   <div class="lan cont" style="display:nonec;margin-top:9px"><b>Séries atualizadas</b></div> <div style="display:nonex;" class="vap"><div class="container"><br/> <div class="uxs" id="seru"> </div> </div></div>                                                                                <div class="top10" > <div class="cont" style="margin-top:16px"><b>Top 5 de hoje no brasil</b></div> <div class="ghg"><ol class="top10__list"> <li class="top10__item"><a href="http://vip.tv/ux=/redss.php&uxs=loki&n=19270&d=2021"><img style="display:none"/><div class="xxa"><img class="top10__image" data-src="https://flixei.com/content/series/posterPt/185/19270.jpg" alt=""></div></a></li> <li class="top10__item c2"><a  href="http://vip.tv/ux=/reds.php@uxs=som-da-liberdade@n=39889@d=2023"><img style="display:none"/><div class="xxa"><img class="top10__image" data-src="https://flixei.com/content/movies/posterPt/185/39889.jpg" alt=""></div></a></li><li class="top10__item c3"><a href="http://vip.tv/ux=/reds.php@uxs=a-freira-2@n=39886@d=2023"><img style="display:none"/><div class="xxa"><img class="top10__image" data-src="https://flixei.com/content/movies/posterPt/185/39886.jpg" alt=""></div></a></li> <li class="top10__item c4"><a href="http://vip.tv/ux=/reds.php@uxs=o-protetor-capitulo-final@n=39887@d=2023"><img style="display:none"/><div class="xxa"><img class="top10__image" data-src="https://flixei.com/content/movies/posterPt/185/39887.jpg" alt=""></div></a></li> <li class="top10__item c5"><a href="http://vip.tv/ux=/redss.php&uxs=gen-v&n=22454&d=2023"><img style="display:none"/><div class="xxa"><img class="top10__image" data-src="https://flixei.com/content/series/posterPt/185/22454.jpg" alt=""></div></a></li> </ol></div></div> <div class="lan cont" style="margin-top:9px"><b>Lançamentos</b></div> <div class="vap"><div class="container"><br/> <div class="uxs" id="recs"> </div> </div></div> <div class="cont" style="xdisplay:none;margin-top:11px"><b>Novos filmes</b></div> <div  style="xdisplay:none;" class="vap"><div class="container"><br/> <div class="uxs" id="novis"> </div></div></div> <div class="cont" style="margin-top:11px"><b>Novas séries</b></div> <div class="vap"><div class="container"><br/> <div class="uxs" id="ser2"> </div></div></div><div class=" cont" style="margin-top: 9px;display:none !important"><b>Atores populares</b></div> <div style="display:none !important" class=" containers nbm uung"><br/> <div class="attr zz"> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/vin-diesel"><div class="item"><img data-src="https://i.imgur.com/uc0B5aC.jpeg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Angelina-Jolie/"><div class="item"><img data-src="https://images.trustinnews.pt/uploads/sites/6/2020/07/1-13-640x960.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/paul-walker/"><div class="item"><img data-src="https://i.imgur.com/Zhgo5Q0.jpeg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Scarlett-Johansson/"><div class="item"><img data-src="https://static1.purebreak.com.br/articles/9/92/53/9/@/356245-10-fatos-inusitados-sobre-a-scarlett-joh-diapo-1.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Robert-Downey-Jr/"><div class="item"><img data-src="https://i.pinimg.com/originals/4d/94/97/4d949724336ba30cf51e5cc48fcdb537.png" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Charlize-Theron/"><div class="item"><img data-src="https://static1.belezaextraordinaria.com.br/articles/0/44/80/@/43610-charlize-theron-e-uma-das-clientes-de-article_news-1.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Will-Smith/"><div class="item"><img data-src="https://f.i.uol.com.br/fotografia/2018/09/13/15368719975b9ace3d7b015_1536871997_3x4_md.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jennifer-Lawrence/"><div class="item"><img data-src="https://i.imgur.com/HZLj8Ik.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Dwayne-Johnson/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Dwayne_Johnson_Hercules_2014_%28cropped%29.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Meryl-Streep/"><div class="item"><img data-src="https://i.imgur.com/GoytSVD.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Adam-Sandler/"><div class="item"><img data-src="https://br.web.img2.acsta.net/pictures/17/06/20/16/57/103535.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Halle-Berry/"><div class="item"><img data-src="https://br.web.img3.acsta.net/pictures/15/10/29/14/27/267556.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Leonardo-DiCaprio/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Gal-Gadot/"><div class="item"><img data-src="https://i.imgur.com/teppRtG.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Michael-B-Jordan/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_215_290/pictures/18/08/08/18/23/1187644.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Emma-Watson/"><div class="item"><img data-src="https://i.imgur.com/znSzYOr.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Tom-Hanks/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/TomHanksJan2009_cropped.jpg/220px-TomHanksJan2009_cropped.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Megan-Fox/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Megan_Fox_in_2019.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Brad-Pitt/"><div class="item"><img data-src="https://i.imgur.com/1VHr6pS.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Nicole-Kidman/"><div class="item"><img data-src="https://www.movenoticias.com/wp-content/uploads/2014/09/Nicole-Kidman-474x640.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jackie-Chan/"><div class="item"><img data-src="https://i.pinimg.com/474x/4c/c1/68/4cc168f8565b37799eb4ba3e046c7ee5.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Alexandra-Daddario/"><div class="item"><img data-src="https://m.media-amazon.com/images/M/MV5BMTY3Nzg2NjA1OF5BMl5BanBnXkFtZTgwMjY5NTU1MzI@._V1_UY1200_CR127,0,630,1200_AL_.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Chris-Evans/"><div class="item"><img data-src="https://uploads.spiritfanfiction.com/fanfics/historias/201912/eu-e-o-sr-evans-18176388-210120200419.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jennifer-Lopez/"><div class="item"><img data-src="https://thumbs.dreamstime.com/b/jennifer-lopez-actress-singer-dancer-pop-superstar-attends-rd-annual-great-sports-legends-dinner-new-york-hilton-127084387.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/George-Clooney/"><div class="item"><img data-src="https://i.imgur.com/1DxOq6q.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Cameron-Diaz/"><div class="item"><img data-src="https://i.imgur.com/YiAYm89.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Chris-Hemsworth/"><div class="item"><img data-src="https://i.pinimg.com/originals/a1/95/26/a19526aa1214191e435f67e1bbf6115d.png" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Kristen-Stewart/"><div class="item"><img data-src="https://www.estrelando.com.br/uploads/2019/11/06/kristen-site-1573059878.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Robert-De-Niro/"><div class="item"><img data-src="https://www.midiamax.com.br/wp-content/uploads/2020/07/received_1710417529111437.jpeg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Whoopi-Goldberg/"><div class="item"><img data-src="https://i.imgur.com/YaKy5eW.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Ryan-Reynolds/"><div class="item"><img data-src="https://br.web.img2.acsta.net/pictures/15/07/28/17/15/280194.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Helena-Bonham-Carter/"><div class="item"><img data-src="https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p7266/helenabonhamcarter.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Johnny-Depp/"><div class="item"><img data-src="https://www.estrelando.com.br/uploads/2018/06/21/johnny-depp-1-2-1529613101.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Brie-Larson/"><div class="item"><img data-src="https://br.web.img3.acsta.net/pictures/16/02/29/14/46/104223.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Bradley-Cooper/"><div class="item"><img data-src="https://www.joshuajamesjewellery.co.uk/blog/wp-content/uploads/2020/01/bradley-cooper.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Melissa-McCarthy/"><div class="item"><img data-src="https://cdn.britannica.com/86/186786-050-BC7B6C4B/Melissa-McCarthy-Comic.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Keanu-Reeves/"><div class="item"><img data-src="https://br.web.img3.acsta.net/pictures/17/02/06/17/01/343859.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Chloe-Grace-Moretz/"><div class="item"><img data-src="https://i.pinimg.com/736x/63/a4/a3/63a4a357e46ae54771031c26426af7f3.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Sylvester-Stallone/"><div class="item"><img data-src="https://i.pinimg.com/736x/7a/25/57/7a25572a0eb1922c6cf94434acba38b0.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Viola-Davis/"><div class="item"><img data-src="https://gpslifetime.com.br/uploads/content_manager/contents/55589/image/alem-das-telas-viola-davis-e-a-nova-embaixadora-da-loreal-paris-d7f8.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Ben-Affleck/"><div class="item"><img data-src="https://imagens3.ne10.uol.com.br/blogsne10/social1/uploads/2019/10/Ben-Affleck-comete-deslize-e-volta-ao-%C3%A1cool-ok-300x565.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Kate-Beckinsale/"><div class="item"><img data-src="https://i.pinimg.com/originals/7d/3d/5c/7d3d5c06bc1d289a4e8b2d0fe34e8f90.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Christian-Bale/"><div class="item"><img data-src="https://i.pinimg.com/originals/83/f9/65/83f9650f5db654524767e088ce9ac9ce.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Mila-Kunis/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/5/51/Mila_Kunis_2018_%28cropped%29.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Morgan-Freeman/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Morgan_Freeman_Deauville_2018.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jessica-Alba/"><div class="item"><img data-src="https://static.stealthelook.com.br/wp-content/uploads/2020/03/paleta-de-iluminador-da-jessica-alba-make-e-cabelo-vestido-de-gala-20200320142320.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Matt-Damon/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Matt_Damon_TIFF_2015.jpg/250px-Matt_Damon_TIFF_2015.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jennifer-Aniston/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Jennifer_Aniston_2011_%28cropped%29.jpg/250px-Jennifer_Aniston_2011_%28cropped%29.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jason-Statham/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_215_290/pictures/18/08/03/22/20/1549706.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Emilia-Clarke/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_215_290/pictures/19/10/22/23/58/2123945.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Henry-Cavill/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/pt/thumb/1/13/HenryCavill1.jpg/200px-HenryCavill1.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Julia-Roberts/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Julia_Roberts_Cannes_2016_3.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Harrison-Ford/"><div class="item"><img data-src="https://conteudo.imguol.com.br/c/entretenimento/e2/2019/12/17/harrison-ford-que-viveu-han-solo-em-varios-filmes-de-star-wars-tambem-deu-as-caras-1576582346139_v2_450x600.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Dakota-Fanning/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_215_290/pictures/19/10/17/03/08/2153588.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jim-Carrey/"><div class="item"><img data-src="https://conteudo.imguol.com.br/c/parceiros/c2/2020/07/17/new-york-ny---october-05-actor-jim-carrey-promotes-the-new-book-how-roland-rolls-at-barnes-amp-noble-union-square-on-october-5-2013-in-new-york-city-photo-by-gilbert-1594993537263_v2_450x600.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Demi-Moore/"><div class="item"><img data-src="https://i.pinimg.com/originals/98/6d/bb/986dbb9de11ee91d034f0ab2b570dff9.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Anthony-Hopkins/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/4/47/AnthonyHopkins10TIFF.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Naomi-Watts/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_215_290/pictures/18/09/27/00/54/3167404.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Idris-Elba/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Idris_Elba-5272_%28cropped%29.jpg/240px-Idris_Elba-5272_%28cropped%29.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Eva-Mendes/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/1/11/Eva_Mendes_2009.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Mel-Gibson/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/5/58/Mel_Gibson_Cannes_2016.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Millie-Bobby-Brown/"><div class="item"><img data-src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/08/millie-bobby-brown-2017-shutterstock.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Tom-Hardy/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_215_290/pictures/16/01/19/11/06/274206.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Sienna-Miller/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/MJK34388_Sienna_Miller_%28The_Lost_City_Of_Z%2C_Berlinale_2017%29.jpg/250px-MJK34388_Sienna_Miller_%28The_Lost_City_Of_Z%2C_Berlinale_2017%29.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Chadwick-Boseman/"><div class="item"><img data-src="https://tnh1-cdn1.cworks.cloud/fileadmin/_processed_/0/5/csm_Chadwick_Boseman_divulgacao_34b3ac0ea5.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Sandra-Bullock/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sandra_Bullock_%289189702847%29.jpg/400px-Sandra_Bullock_%289189702847%29.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Robert-Pattinson/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Robert_Pattinson_Deauville_2017.jpg/190px-Robert_Pattinson_Deauville_2017.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Sarah-Paulson/"><div class="item"><img data-src="https://pbs.twimg.com/profile_images/1165236755974561792/CIUgKVC9_400x400.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Eddie-Murphy/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Eddie_Murphy_Tribeca_Shankbone_2010_NYC_%282%29.jpg/250px-Eddie_Murphy_Tribeca_Shankbone_2010_NYC_%282%29.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Dakota-Johnson/"><div class="item"><img data-src="https://i.imgur.com/UsD1hs8.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Samuel-L-Jackson/"><div class="item"><img data-src="https://cdn.britannica.com/77/191077-050-63262B99/Samuel-L-Jackson.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Alice-Braga/"><div class="item"><img data-src="https://pbs.twimg.com/profile_images/1057415091904233474/CrP8kWT-_400x400.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Hugh-Jackman/"><div class="item"><img data-src="https://br.web.img2.acsta.net/c_215_290/pictures/15/09/21/15/14/169867.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Joaquin-Phoenix/"><div class="item"><img data-src="https://www.folhadelondrina.com.br/img/inline/2980000/Joaquin-Phoenix-e-Natalie-Portman-artistas-e-milit0298081100202002110738-sm.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Robin-Williams/"><div class="item"><img data-src="https://veja.abril.com.br/wp-content/uploads/2016/11/robin-williams1.jpg?quality=70&strip=all" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jude-Law/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_240_400/pictures/18/07/19/23/30/5899443.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Linda-Cardellini/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_240_400/pictures/17/07/12/16/12/353727.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Owen-Wilson/"><div class="item"><img data-src="https://br.web.img2.acsta.net/c_240_400/medias/nmedia/18/35/27/27/19734225.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Matthew-McConaughey/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_240_400/pictures/14/05/27/15/18/190785.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Sam-Worthington/"><div class="item"><img data-src="https://br.web.img2.acsta.net/c_240_400/pictures/15/07/06/12/16/032047.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Paul-Rudd/"><div class="item"><img data-src="https://br.web.img1.acsta.net/c_240_400/pictures/18/07/05/00/54/2308079.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Zac-Efron/"><div class="item"><img data-src="https://br.web.img2.acsta.net/c_240_400/pictures/15/01/27/16/27/188782.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Taylor-Lautner/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_240_400/medias/nmedia/18/95/53/48/20412947.jpg" alt=""></div></a> <a rel="noreferrer" class="miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Jean-Claude-Van-Damme/"><div class="item"><img data-src="https://br.web.img1.acsta.net/c_240_400/pictures/15/05/11/23/23/500100.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Benedict-Cumberbatch/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_240_400/pictures/19/04/25/23/38/3470586.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Daniel-Radcliffe/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_240_400/pictures/19/07/01/23/17/1021290.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Tom-Holland/"><div class="item"><img data-src="https://br.web.img2.acsta.net/c_240_400/pictures/19/07/01/23/18/1152169.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/James-McAvoy/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_240_400/pictures/18/07/26/20/27/4955730.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Bruce-Willis/"><div class="item"><img data-src="https://br.web.img3.acsta.net/c_240_400/pictures/18/07/26/20/59/1349875.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/jet-li/"><div class="item"><img data-src="https://i.pinimg.com/474x/85/c3/a4/85c3a40ad772b40c9c6dd39a8da800ad.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/Donnie-Yen/"><div class="item"><img data-src="https://www.aceshowbiz.com/images/photo/donnie_yen.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/arnold-schwarzenegger/"><div class="item"><img data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/220px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg" alt=""></div></a> <a rel="noreferrer" class=" miss" href="https://href.li/?https://megafilmeshd50.com/elenco/bruce-lee/"><div class="item"><img data-src="https://i.pinimg.com/564x/ac/c3/12/acc3126d3768bdd5adfac4ebab2db711.jpg" alt=""></div></a> </div> </div> <div class="cont" style="display:none;margin-top: 9px;"><b>Filmes populares</b></div> <div style="display:none" class="vap"><div class="container"><br/> <div class="uxs ksx" id="viewad"> </div></div></div><div class="cont" style="display:none;margin-top: 9px;"><b>Séries populares</b></div> <div style="display:none" class="vap"><div class="container"><br/> <div class="uxs ks" id="ser3"> </div></div></div> <div class="cc3 cont" style="margin-top: 9px;display:none"><b>Top filmes</b></div> <div class="vap" style="display:none"><div class="container"><br/> <div class="uxs" id="div3"> </div> </div></div> <div class="cc3 cont" style="margin-top: 9px;display:none"><b>Top séries</b></div> <div class="vap" style="display:none"><div class="container"><br/> <div class="uxs" id="ser4"> </div> </div></div> <style>.Legendado{display:none}@media only screen and (min-width:721px){.fieldssxz{display:none !important}body{overflow:auto !important}.nopa{display:none !important}}body{min-width:500 !important;padding:0;margin:0;position:relative;color:#fff;background:#000}.contai {overflow-x: hidden !important;}.dts {width: 100%;min-width: auto !important;}.cont b {font-family: sans-serif;font-weight: 900;font-size: 28px;color: #fff;}.vap, .vapd {margin-left: -24px;margin-top: -12px;}.nbm {margin-top: -12px;}.ghg {margin-top: -8px;}body{height: -webkit-fill-available;}.contai {padding-bottom: 100px;min-width: auto !important;}@media only screen and (max-width:720px){.contai {padding-bottom: 100px;transform: scale(0.8);transform-origin: 0% 0% 0px;min-width: 604 !important;}}.ux a:last-of-type {margin-right: 36px;}.miss:last-of-type {padding-right: 24px;}.uxs a:last-of-type {padding-right: 20px;}.top10__item:last-child {padding-right: 35px;}.contai{max-width: auto !important;}.zone{position:relative;width:60px;height:100%;background:url(https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png);background-repeat:no-repeat;background-size:22px;background-position-y:center;background-position-x:right;float:right;right:10px}.dtss{background-image:url(xhttps://i.imgur.com/PwzENfV.png?sss) !important;}</style></div></div><div class="cont"></div><img src="https://whos.amung.us/widget/b69af64q2l.png" width="0" height="0" border="0" />';
   
    $("body").prepend(hh);
 

 };
}
function n(){
   localStorage.setItem('local2', true);
   window.top.location = "http://mdsaerdd.hstn.me/movies.php?u=movie/popular&us=Popular movies&type=0";
}
function returns(aa, url,type){
if ((lastExecution + delay) < Date.now()){
       
var domain = url;


if(aa.indexOf("error") !== -1){
    if($('#userdatas').length == 0) {
    if(!navigator.onLine){
    window.location.reload();
    } 
    else{
    var html = "<center><style>body{display:block !important}</style><div style='position:relative !important;bottom:0 !important;top:0 !important;left:0 !important;right:0 !important;margin:auto !important;width:100% !important;height:100% !important;min-height:700px;background:#333333 !important;color:#cccccc !important;z-index:90000000'><div style='position:fixed;bottom:0;top:0;left:0;right:0;margin:auto;height: max-content;width: 90%;'><b>Problema Importante:</b><br/>A sua operadora de internet está bloqueando todo o conteudo do 9UHDMAX!<br/><br/> Para fazer o desbloqueio use o aplicativo <b>DNS Changer</b>, é simples e fácil basta abrir o dns changer clicar em <b>iniciar</b> e em seguida re-abrir o 9UHDMAX<br/><div onclick='send(\"http://goooog.xtgem.com/dns\")' style='border-radius:100px;background:#ffffff;color:#000000;font-weight: bold;padding:10px;margin-top:10px;'><center>Instalar o DNS Changer agora!</center></div><div onclick='send(\"http://gooooog.wap.sh/dns.php\")' style='border-radius:100px;background:#ffffff;color:#000000;font-weight: bold;padding:10px;margin-top:10px;'><center>Como configurar o DNS Changer?</center></div></div></div></center><img src='https://whos.amung.us/widget/0np2o6zjjy.png' width='0' height='0' border='0' />"

    $("body").prepend(html);
    
    setTimeout(function(){
        window.CallToAndroidFunction3.setVisible3();},1000);
    }
    }
}else{
var html = $(b64DecodeUnicode(aa));
if(type == 2){
    if((domain.indexOf("megafilmeshd50") !== -1)){
        var title = $(html).find("#info .custom_fields:first").text();
        title = title.replace('Título original','').replace(' Original title ','').replace('Original title ',''); 
        var date = $(html).find(".extra .date").text();
        var id = $(html).find('.starstruck-main').attr('data-id');
        createJsonLists($(html).find('#episodes'), `rr${id}`);

        window.location.href = "http://vip.tv/ux=/rr.php&a=" + url + "&b=" +title+ "&c=" +id+ "&d=" +date;
    }else{
     window.location.href = "http://vip.tv/ux=/r.php&uxs="+ $(html).find('strong a').attr("href").replace("https://www.imdb.com/title/",""); 
    }
    
}else{
    var heach = $(html).find(".module .content .items").last().html();
    if(type == 0){
    $("body").replaceWith("<body> <div class='bodys'><link rel='stylesheet' href='file:///android_asset/css/3.css'/><style>body{width:100% !important;display:block !important;padding:0px !important;margin:0px !important;}.dts{background: url();}#userdatas{width:100% !important;min-width:500px;}.bodys{}.titl{font-size: 60px;}.xagPoster{position:relative !important;}.xagPoster img{width: 146px;height: 220px;margin: 10px;background:#333333;}.bodys{min-width:500px !important;position:relative !important;bottom:"+spacer+" !important;color:#fff !important;background:#000 !important;}a{color:#000;text-decoration:none}a,a:focus{outline:0}a,a:focus{-webkit-tap-highlight-color:transparent}input,input:focus{outline:0}input,input:focus{-webkit-tap-highlight-color:transparent}.ff{padding: 40px;font-family: sans-serif;font-size: 20px;position: absolute;height: max-content;top: 0;bottom: 0;margin: auto;}.a1z a{color:#fff}.ppi{margin-top: 11px;position: absolute;}.dts{height: 825px !important;background-color: rgba(0,0,0,0.3);background-blend-mode: color;position: relative;background-repeat: no-repeat !important;background-position: top !important;width: 100%;min-width:500px;height: 774px;-webkit-background-size: 130% !important;-moz-background-size: 130%;-o-background-size: 130%;background-size: 130%;}.dtss{padding-bottom: 0px;}.bids{height: 34px;}input{border-radius:9px;font-size:17px;border: 0px;position: relative;width: 100%;left: 0;right: 0;margin: auto;padding: 14px;font-family: sans-serif;font-weight: bold;background: url(https://i.imgur.com/tRCws1n.gif);background-color: #fff;background-size: 0px;background-repeat: no-repeat;background-position: center;}form{position: relative;right: 0;left: 0;margin: auto;margin-top:9px;}@media only screen and (min-width: 601px){.dts{height: 400px !important;}.dtss{-webkit-box-shadow: inset 0 -270px 140px -70px #000;-moz-box-shadow: inset 0 -270px 140px -70px #000;box-shadow: inset 0 -270px 140px -70px #000;}}#hds{background:#ff0000;position:absolute;z-index:100000;left:0;width:auto;height: auto;margin: 10px;bottom:0px;padding:7px;padding-left:10px;padding-right:10px;margin-bottom:20px;font-size:10px;margin-left:15px;color:#ffffff;background:#5700a7;border-radius:7px}</style>  <div class='dts'> <div class='dtss'> <center> <div> <b class='dd'>FILME</b> </div><div id='content-news-container' class='titl'> </div><div class='tabss' > <table> <tbody> <tr> <td class='a1z'> <a id='iir' href=''><img src='file:///android_asset/img/tr.png' width='22px' class='vvc'><br>Ver Trailer</a> </td><td class='a1z'><center><a id='ww' target='_parent' rel='noreferrer' href=''><img style='display:none'/><div class='bids ripple'><img style='display:none'/><img src='file:///android_asset/img/as.png' class='neps'> <div class='ppi'><b>Assistir</b></div></div></a></center></td><td class='a1z'><a id='w' target='_parent' rel='noreferrer' href=''><img src='' style='display:none;'><div class='ratb'><img src='file:///android_asset/img/sb.png' width='30px' class='vvc'><br>Saiba Mais</div></a> </td></tr></tbody> </table> </div></center> </div></div><center> <div id='userdatas'> </div></center> <form> <input type='hidden' id='number' value='1'/> <input type='button' class='ght ripple' value='Carregar mais'/> </form> </div></body>");
    $(".ght").click(function(){
        if($("input").css('background-size') == "0px")
        $("input").css('color',"transparent");
        $("input").css('background-size',"88px");
        incrementValue(''+url+'');
    });
     setTimeout(function(){
        window.CallToAndroidFunction3.setVisible3();},1000);
    }
    
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
       var ano = $(html).find(".data span:last-of-type").text();
       
       if((domain.indexOf("megafilmeshd50") !== -1)){
       if((link.indexOf("/serie/") !== -1)){
       var gg = '<a class="xagPoster" href="http://deepwebsx.tv/'+link+'" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  onload="infos(\'http://deepwebsx.tv/'+link+'\',\''+img+'\',\''+alt+'\')" /><span id="hds">HD 1080p</span></a>';
       $("#userdatas").append(gg);
       }else
       {
    var gg = '<a class="xagPoster" href="http://vip.tv/ux=/ru.php?a='+link+'@b='+alt+'@c=13483@d='+ano+'@" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  onload="infos(\'http://vip.tv/ux=/ru.php?a='+link+'@b='+alt+'@c=13483@d='+ano+'@\',\''+img+'\',\''+alt+'\')" /><span id="hds">HD 1080p</span></a>';
    $("#userdatas").append(gg);
       }
       }else{
           if((link.indexOf("/series/") !== -1)){
       }else{
    var gg = '<a class="xagPoster" href="http://deepwebsx.tv/'+link+'" rel="noreferrer"><img style="display:none"  /><img class="ximg" src="'+img+'" alt="'+alt+'"  onload="infos(\'http://deepwebsx.tv/'+link+'\',\''+img+'\',\''+alt+'\')" /><span id="hds">HD 1080p</span></a>';$("#userdatas").append(gg);
       }
       }
            
    }  
    
       
        
    },0);
    
    
    
    if((domain.indexOf("megafilmeshd50") !== -1)){}
    else{
        $("head").append("<style>#hds{display:none!important}</style>");
        }
     if(!$(html).find(".fa-chevron-right, .icon-chevron-right")[0]){
            $("head").append("<style>.ght{display:none}</style>")
        }
    
   
    
}
}

    
lastExecution = Date.now() 
}
}
function infos(a,b,c){
    $("input").css('color',"#000");
    $("input").css('background-size',"0px"); 
    if(limit == false){
    $(".titl").text(c)
    $("#w").attr("href", a);
    $("#ww").attr("href", a);
    $(".dts").css("background-image", "url("+b.replace('w185','w500').replace('-185x278','')+")"); 
    $("#iir").attr("href", "https://m.youtube.com/results?search_query="+c+"trailer dublado");
    $("#content-news-container").text(function(index, currentText) {
    return currentText.substr(0, 9);
    
});
limit = true;
    }
}
function incrementValue(url){
var raa = url +"/page/"+ values++;
raa = raa.replace("https://","").replace("http://","").replace("//","/");
window.location.href = "http://deepwebs.tv/http://"+raa;
}
function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
}
function send(url){
    window.location.href = url
}
check = "true";
