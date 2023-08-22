const parentBody = document.querySelector('body');
const parentHead = document.querySelector('head');
const parentScript = document.createElement('script');
const parentUrl = window.location.href;
const parentLocal = window.location.hostname;
const parentObjJson = [
    {'search':'multicanais.vc multicanais.fans bbbgratis.com', 'value':'initMultiCanais()'},
    {'search':'futemax.app', 'value':'initFuteMax()'},
    {'search':'megafilmeshd50.com megafilmeshd50.net', 'value':'initMegaFilmesHd()'},
    {'search':'canaisplay.com', 'value':'initAll()'},
    {'search':'embed.warezcdn.net embed.warezcdn.com warezcdn.com warezcdn.net', 'value':'initAll()'},
    {'search':'playerhd.org playerhd', 'value':'initPlayerHd()'},
    {'search':'link.encrypted-encrypted-encrypted-encrypted-encrypted-encrypted.link', 'value':'initAll()'}
];
const getJsonVal = (json, key, position) => {
    try{
        return (valueCheck(key)) ? (valueCheck(position)) ? json[key][position] : json[key] : json;
    }
    catch(err){
        return null;
    }
};
const requestHtml = (type, data) => {
    switch(type){
        case val.stateLoading:
            return `<style>
            a {
                pointer-events:none;
            }
            *{
                line-height: 1;
            }
            lander {
                color:#ffffff;
                font-size:20px;
                background: #000000;
                position: fixed;
                width: 100%;
                height: 100%;
                z-index: 2147483647;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
            }
            lander div {
                position: absolute;
                bottom: 0;
                top: 0;
                right: 0;
                left: 0;
                margin: auto;
                width: max-content;
                height: max-content;
            }
            </style>
            <lander>
            <div>
            <center>
            <img src='//images2.imgbox.com/84/4f/GeEjnrtK_o.gif' width="70" height="70" />
            </center>
            </div>
            </lander>`;
        case val.statePlayerError:
            return `<style>
            a {
                pointer-events:none;
            }
            *{
                line-height: 1;
            }
            .btn {
                font-size: 18px;
                text-align: center;
                width: 50%;
                position: absolute;
                right: 0;
                left: 0;
                background: #ffffff;
                color: #000000;
                padding: 10px 20px;
                border-radius: 100px;
                font-weight: bold;
                margin-top: 26px;
                margin: 9px auto;
                overflow: hidden;
                white-space: nowrap;                  
                overflow: hidden; 
                text-overflow: ellipsis;
            }
            #loader {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: auto;
                transition: all 0.3s;
            }
            .stateContent {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 100%;
                height: 100%;
            }
            .stateCenterContent {
                position: relative;
                width: 100%;
                max-width: 500px;
                height: max-content;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                margin: auto;
                padding: 10px 50px;
            }
            .imgMedium {
                width: 130px;
                height: 130px;
            }
            .stateContent .alertTitle {
                font-size: 22px;
                padding: 5px 5px;
                border: 0px;
            }
            .alertTitle {
                font-weight: bold;
                font-size: 18px;
                position: relative;
                padding: 25px 5px;
                margin-top: 3px;
                border-bottom: 1px #555555 solid;
            }
            .alertMessage {
                font-size: 17px;
                color: #cccccc;
            }
            lander {
                color:#ffffff;
                font-size:20px;
                background: #000000;
                position: fixed;
                width: 100%;height: 100%;
                z-index: 2147483647;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
            }
            </style>
            <lander>
            <div id="loader">
            <div class="stateContent">
            <div class="stateCenterContent">
            <center>
            <img src="//i.ibb.co/ZYjCKBY/error.png" class="imgMedium lazy">
            <div class="alertTitle"><b>Ocorreu um erro</b></div>
            <div class="alertMessage">Ocorreu um erro interno, parece que há um problema temporário com esse player ou esse video não existe.</div>
            </center>
            <div class="btn" onclick="window.location.reload()">Tentar novamente</div>
            </div>
            </div>
            </div>
            </lander>`;
        case val.statePlayerEmpty:
            return `<style>
            a {
                pointer-events:none;
            }
            *{
                line-height: 1;
            }
            .btn {
                font-size: 18px;
                text-align: center;
                width: 50%;
                position: absolute;
                right: 0;
                left: 0;
                background: #ffffff;
                color: #000000;
                padding: 10px 20px;
                border-radius: 100px;
                font-weight: bold;
                margin-top: 26px;
                margin: 9px auto;
                overflow: hidden;
                white-space: nowrap;                  
                overflow: hidden; 
                text-overflow: ellipsis;
            }
            #loader {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: auto;
                transition: all 0.3s;
            }
            .stateContent {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 100%;
                height: 100%;
            }
            .stateCenterContent {
                position: relative;
                width: 100%;
                max-width: 500px;
                height: max-content;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                margin: auto;
                padding: 10px 50px;
            }
            .imgMedium {
                width: 130px;
                height: 130px;
            }
            .stateContent .alertTitle {
                font-size: 22px;
                padding: 5px 5px;
                border: 0px;
            }
            .alertTitle {
                font-weight: bold;
                font-size: 18px;
                position: relative;
                padding: 25px 5px;
                margin-top: 3px;
                border-bottom: 1px #555555 solid;
            }
            .alertMessage {
                font-size: 17px;
                color: #cccccc;
            }
            lander {
                color:#ffffff;
                font-size:20px;
                background: #000000;
                position: fixed;
                width: 100%;height: 100%;
                z-index: 2147483647;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
            }
            </style>
            <lander>
            <div id="loader">
            <div class="stateContent">
            <div class="stateCenterContent">
            <center>
            <img src="//i.ibb.co/ZYjCKBY/error.png" class="imgMedium lazy">
            <div class="alertTitle"><b>Esse video não existe</b></div>
            <div class="alertMessage">O video que você esta tentando assistir ainda nao foi adicionado, tente mais tarde.</div>
            </center>
            </div>
            </div>
            </div>
            </lander>`;
        case val.statePlayerIframe:
            return `<style>
            a {
                pointer-events:none;
            }
            *{
                line-height: 1;
            }
            lander {
                color:#ffffff;
                font-size:20px;
                background: #000000;
                position: fixed;
                width: 100%;
                height: 100%;
                z-index: 2147483647;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
            }
            #frame {
                border: 0px transparent solid;
                width:100%;
                height: 100%;
                background-image: url('//images2.imgbox.com/84/4f/GeEjnrtK_o.gif');
                background-repeat: no-repeat;
                background-size: 70px;
                background-position: center;
            }
            </style>
            <lander>
            <iframe id="frame" src="${data}">
            </iframe>
            </lander>`;
        case val.statePlayerIframeReplace:
            return `
            <button class="btn btnClose" onclick="closePlayer('#myPlayer')"></button>
            <iframe id="frame" src="${data}"></iframe>
            `;
        case val.statePlayerButton:
            return `<button class="btn" onclick="getPlayer('${data.url}', '#myPlayer')">${data.title}</button>`;
        case val.statePlayerOptions:
            return `<style>
            *{
                line-height: 1;
            }
            body {
                overflow: hidden;
            }
            a {
                pointer-events:none;
            }
            #loader {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: auto;
                transition: all 0.3s;
            }
            .stateContent {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 100%;
                height: 100%;
            }
            .stateCenterContent {
                position: relative;
                width: 100%;
                max-width: 500px;
                height: max-content;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                margin: auto;
                padding: 10px 50px;
            }
            .imgMedium {
                width: 130px;
                height: 130px;
            }
            .stateContent .alertTitle {
                font-size: 22px;
                padding: 5px 5px;
                border: 0px;
            }
            .alertTitle {
                font-weight: bold;
                font-size: 18px;
                position: relative;
                padding: 25px 5px;
                margin-top: 3px;
                border-bottom: 1px #555555 solid;
            }
            .buttonsArea {
                display: inline-block;
                margin: 10px;
            }
            .btn {
                color: #cccccc;
                font-size: 13px;
                font-weight: bold;
                margin: 5px;
                background: #2a2a2a;
                border: 1px #8a8a8a solid;
                border-radius: 50px;
                padding: 9px 23px;
                transition: all 0.3s ease-in-out;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .btn:active {
                scale: 0.95;
            }
            lander {
                color:#ffffff;
                font-size:20px;
                background: #000000;
                position: fixed;
                width: 100%;height: 100%;
                z-index: 2147483647;
                top: 0;
                bottom: 0;
                right: 0;
                left: 0;
                margin: auto;
            }
            .btnClose {
                background-image: url(https://i.ibb.co/0yFRwdv/close.png);
                background-repeat: no-repeat;
                background-size: 20px;
                background-position: center;
                width: 45px;
                height: 45px;
                background-color: rgba(0,0,0, 30%);
                border: 1px rgba(66,66,66, 50%) solid;
                padding: 10px;
                margin: 10px 15px;
                position: fixed;
                top: 0;
                right: 0;
                z-index: 10;
            }
            #frame {
                background: #000000;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 9;
                border: 0px transparent solid;
                width:100%;
                height: 100%;
                background-image: url('//images2.imgbox.com/84/4f/GeEjnrtK_o.gif');
                background-repeat: no-repeat;
                background-size: 70px;
                background-position: center;
            }
            </style>
            <lander>
            <div id="loader">
            <div class="stateContent">
            <div class="stateCenterContent">
            <center>
            <div class="alertTitle"><b>Escolha uma opção para assistir</b></div>
            <div class="buttonsArea">${data}</div>
            </center>
            </div>
            </div>
            </div>
            <div id="myPlayer">
            </div>
            </lander>`;
        }
}
const val = {
    stateLoading: -1,
    statePlayerError: 0,
    statePlayerIframe: 1,
    statePlayerEmpty: 3,
    statePlayerButton: 4,
    statePlayerOptions: 5,
    statePlayerIframeReplace: 6,

    runPlayer: 'runPlayer'
}

parentScript.type = 'text/javascript';
parentScript.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib/jquery.js';
parentScript.onload = () => parentInit();
parentScript.onerror = () => parentInitFail();
parentScript.onabort = () => parentInitFail();
parentScript.oncancel = () => parentInitFail();


if(document.readyState === 'complete') {
    parentHead.appendChild(parentScript); 
    parentBody.insertAdjacentHTML('beforeend', requestHtml(val.stateLoading));
} else {
    if (window.addEventListener) {
        window.addEventListener('load', function(event){ 
            parentHead.appendChild(parentScript);  
            parentBody.insertAdjacentHTML('beforeend', requestHtml(val.stateLoading));
        }, false);
    } else {
        window.attachEvent('onload', function(event){ 
            parentHead.appendChild(parentScript);
            parentBody.insertAdjacentHTML('beforeend', requestHtml(val.stateLoading));
        });
    }
}

function parentInit() {
   eval(getLocationValue(parentLocal));
}
function parentInitFail() {
    window.location.reload();
}
function getLocationValue(local){
    let i = 0;
    do {
        if(parentObjJson[i]['search'].search(local) > -1){
            return parentObjJson[i]['value'];
        }
        if(i == parentObjJson.length -1){
            return "all.js";
        }
        i++;
    }
    while(i < parentObjJson.length);
}
function valueCheck(v){
    return (v === '' || typeof v === 'undefined' || v === null) ? false : true;
}
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function navigateToUrl(url) {
    var f = document.createElement("FORM");
    f.action = url;
    var indexQM = url.indexOf("?");
    if (indexQM>=0) {
        var params = url.substring(indexQM+1).split("&");
        for (var i=0; i<params.length; i++) {
            var keyValuePair = params[i].split("=");
            var input = document.createElement("INPUT");
            input.type="hidden";
            input.name  = keyValuePair[0];
            input.value = keyValuePair[1];
            f.appendChild(input);
        }
    }
    document.body.appendChild(f);
    f.submit();
}
function getPlayer(url, id) {
    $(id).html(requestHtml(id === '#myPlayer' ? val.statePlayerIframeReplace : val.statePlayerIframe, url));
}
function closePlayer(id) {
    $(id).html('');
}   
function select(button){
    var ga = "http://nplazers.in/flix.php";
    const a = Math.floor(Math.random() * 2);
    if(a == 0){
        ga = "http://nplazers.in/flixs.php";}
    else{
        ga = "http://nplazers.in/flixs.php";
    }
    $.ajax({
        url:'https://playerhd.org/video/geradorteste.php',
        type: 'POST',
        data:{button:button,id:getParam("id"),season:"none",episode:"none"},
        success: function(data){
            if(button == "2000"){
                //button == "3" || button == "4"
                var kk = data;
                kk = kk.replace("https://playerhd.org/video/playerfteste.php",""+ga+"?u=https://playerhd.org/video/playerfteste.php");
                $("body").append('<a rel="noreferrer" href="'+kk+'" id="bb">a</a><script>$("#bb")[0].click();setInterval(function(){$("#bb")[0].click();},10000);</script>'); 
            }
            else {
                $('body').replaceWith('<iframe id="ggr" src="'+data+'" oncontextmenu="return false;" width="100%" height="100%" scrolling="no" frameborder="0" allowfullscreen="true"></iframe><style>iframe{border:0px}.ripple{position:relative;overflow:hidden;transform:translate3d(0,0,0)}.ripple:after{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:none;background-image:radial-gradient(circle,#ccc 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;transform:scale(10,10);opacity:0;transition:transform .5s,opacity 1s}.ripple:active:after{transform:scale(0,0);opacity:.2;transition:0s}body{overflow: hidden;}iframe{position:fixed;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:90000000}.tt {position: fixed;top: 0;bottom: 0;margin: auto;right: 10px;height: max-content;z-index:900000000}#zoomOut{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#x{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;margin-top: 14px;}#zoomIn{position: relativ;z-index: 900000000000;top: 0;bottom: 0;width: 55px;margin: auto;font-size: 28px;right: 4px;height: 55px;border-radius: 28px;border: none;background: rgba(0,0,0,0.6);color: #fff;text-decoration: none;}button,button:focus{outline:0}button,button:focus{-webkit-tap-highlight-color:transparent}#x img{display:inline !important}#zoomtext {transform: scale(1);transition: transform 0.2s ease-in-out;}body{display:block !important}</style><div class="tt"><button class="ripple" id="zoomIn">+</button><br><button class="ripple" id="zoomOut">-</button><br><button class="ripple" id="x"><img src="https://img.icons8.com/ios-filled/50/ffffff/delete-sign--v1.png" width="18px" height="18px" /></button></div><script>$("#x").click(function(){$(".tt").hide();window.CallToAndroidFunction.setVisible();});var zoom=1;var zoomStep=0.2;document.getElementById("zoomIn").addEventListener("click",function(){zoom+=zoomStep;document.getElementById("ggr").style.transform="scale("+zoom+")";});document.getElementById("zoomOut").addEventListener("click",function(){if(zoom>zoomStep){zoom-=zoomStep;document.getElementById("ggr").style.transform="scale("+zoom+")";}});</script>');
            }
            },
    });  
    
}


function initMegaFilmesHd(){
    const elemBody = $('body');
    const elemPlayerBtn = $('#player-option-1');
    let elemLimitRetry = 0;
    if(elemPlayerBtn[0]) {
        const elemTimerCheckPlayer = setInterval(function(){
            const elemPlayer = $('.metaframe');
            if(elemPlayer[0]) {
                const elemPlayerUrl = elemPlayer.attr('src');
                if(valueCheck(elemPlayerUrl)){
                    getPlayer(elemPlayerUrl, 'body');
                    clearInterval(elemTimerCheckPlayer);
                }else {
                    if(elemLimitRetry === 15){
                        elemBody.html(requestHtml(val.statePlayerError));
                        clearInterval(elemTimerCheckPlayer);
                    }else {
                        elemPlayerBtn.removeClass('on').click();
                        elemLimitRetry++;
                    }
                }
            }
        }, 1000);
    }else {
        elemBody.html(requestHtml(val.statePlayerEmpty));
    }
    window.history.pushState("object or string", "Title", "/wp-content/");
}
function initMultiCanais(){
    const elemBody = $('body');
    const elemChannelList = $(".wp-block-button.aligncenter, .wp-block-calendar");
    let elemHtml = '';
    if(elemChannelList[0]) {
        elemChannelList.find('a').each(function(){
            const url = $(this).attr("data-id");
            const title = $(this).text();
            const isReplace = true;
            if(valueCheck(url) && valueCheck(title)) {
                const data = {url: url, title: title, isReplace: isReplace};
                elemHtml += requestHtml(val.statePlayerButton, data);
            }
        });
        elemBody.html(valueCheck(elemHtml) ? requestHtml(val.statePlayerOptions, elemHtml) : requestHtml(val.statePlayerError));
    }
    else {
        elemBody.html(requestHtml(val.statePlayerError));
    }
}
function initFuteMax() {
    const elemBody = $('body');
    const elemChannelList = $("div.options_iframe");
    let elemHtml = '';
    if(elemChannelList[0]) {
        elemChannelList.find('a').each(function(){
            const url = $(this).attr("data-url");
            const title = $(this).text();
            const isReplace = true;
            if(valueCheck(url) && valueCheck(title)) {
                const data = {url: url, title: title, isReplace: isReplace};
                elemHtml += requestHtml(val.statePlayerButton, data);
            }
        });
        elemBody.html(valueCheck(elemHtml) ? requestHtml(val.statePlayerOptions, elemHtml) : requestHtml(val.statePlayerError));
    }
    else {
        elemBody.html(requestHtml(val.statePlayerError));
    }
}
function initAll() {

}
function initPlayerHd() {
    const elemBody = $('body');
    try {
        elemBody.show();
        elemBody.append("<style>lander{display: none !important}.geral {position: absolute;bottom: 0;width: 100%;background-color: rgba(0,0,0,0.7);}</style>");
     
        $('button:contains("SD DUB"), button:contains("SD LEG")').each(function() {
            $(this).parent().prepend(this);
            //$('button:contains("VF DUB"), button:contains("VF LEG")').html("<span class=\"icon\"><span class=\"symbol\"></span></span> Player Principal ");
             $('button:contains("SD DUB"), button:contains("SD LEG")').html("<span class=\"icon\"><span class=\"symbol\"></span></span> Player Principal");
             $('button:contains("GD DUB"), button:contains("GD LEG"), button:contains("NT DUB"), button:contains("NT LEG")').html("<span class=\"icon\"><span class=\"symbol\"></span></span> Player Opcional");
     
             //$('button:contains("NT DUB"), button:contains("NT LEG")').remove();
             $('button:contains("VF DUB"), button:contains("VF LEG")').remove();
             $('button:contains("BAIXAR")').remove();
            });
            if($(".footer")[0]){$(".footer").remove();}
        }catch(er) {
            elemBody.html(requestHtml(val.statePlayerError));
        }
}

try{
    parentBody.insertAdjacentHTML('beforeend', requestHtml(val.stateLoading));
}catch(err) {}
check = "true";