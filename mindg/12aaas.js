const parentBody = document.querySelector('body');
const parentHead = document.querySelector('head');
const parentScript = document.createElement('script');
const parentUrl = window.location.href;
const parentLocal = window.location.hostname;
const parentIsValidLink = ('https:' === location.protocol || 'htttp:' === location.protocol) ? true : false;
const parentProtocol = parentIsValidLink ? location.protocol : 'https:';
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
            <img src='${parentProtocol}//images2.imgbox.com/84/4f/GeEjnrtK_o.gif' width="70" height="70" />
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
            <img src="${parentProtocol}//i.ibb.co/ZYjCKBY/error.png" class="imgMedium lazy">
            <div class="alertTitle"><b>Ocorreu um erro</b></div>
            <div class="alertMessage">Ocorreu um erro interno, parece que há um problema temporário com esse player ou esse video não existe.</div>
            </center>
            <div class="btn" onclick="navigateToUrl('${parentUrl}')">Tentar novamente</div>
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
            <img src="${parentProtocol}//i.ibb.co/ZYjCKBY/error.png" class="imgMedium lazy">
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
                background-image: url('${parentProtocol}//images2.imgbox.com/84/4f/GeEjnrtK_o.gif');
                background-repeat: no-repeat;
                background-size: 70px;
                background-position: center;
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
            .btnImage {
                background-repeat: no-repeat;
                background-size: 20px;
                background-position: center;
                width: 45px;
                height: 45px;
                background-color: rgba(0,0,0, 30%);
                border: 1px rgba(66,66,66, 50%) solid;
                padding: 10px;
                margin: 10px 5px;
            }
            .btnClose {
                background-image: url(${parentProtocol}//i.ibb.co/pJFZb0z/close.png);
            }
            .btnBack {
                background-image: url(${parentProtocol}//i.ibb.co/bs5zTPp/back.png);
            }
            .btnReload {
                background-image: url(${parentProtocol}//i.ibb.co/6wv8znf/reload.png);
            }
            #playerButtons {
                width: calc(100% - 15px);
                height: auto;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                margin: auto;
                opacity: 0;
                z-index: -10;
                display: flex;
                padding: 0px 10px;
              }
            .itemsRight {
                margin-left: auto;
            }
            * :has(#frame) #playerButtons {
                opacity: 1;
                z-index: 10;
            }
            </style>
            <lander>
            <iframe id="frame" src="${data}" allowfullscreen="true" allow="encrypted-media">
            </iframe>
            <div id="playerButtons">
            <button class="btn btnImage btnReload itemsRight" onclick="reloadPlayer('#frame')"></button>
            <button class="btn btnImage btnClose" onclick="removeDiv('#playerButtons')"></button>
            </div>
            </lander>`;
        case val.statePlayerIframeReplace:
            return `
            <iframe id="frame" src="${data}" allowfullscreen="true" allow="encrypted-media"></iframe>
            `;
        case val.statePlayerButton:
            return `<button class="btn" onclick="getPlayer('${data.url}', '#playerFrame')">${data.title}</button>`;
        case val.statePlayerButton2:
            return `<button class="btn" onclick="${data.url}">${data.title}</button>`;
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
                background-image: url('${parentProtocol}//images2.imgbox.com/84/4f/GeEjnrtK_o.gif');
                background-repeat: no-repeat;
                background-size: 70px;
                background-position: center;
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
            .btnImage {
                background-repeat: no-repeat;
                background-size: 20px;
                background-position: center;
                width: 45px;
                height: 45px;
                background-color: rgba(0,0,0, 30%);
                border: 1px rgba(66,66,66, 50%) solid;
                padding: 10px;
                margin: 10px 5px;
            }
            .btnClose {
                background-image: url(${parentProtocol}//i.ibb.co/pJFZb0z/close.png);
            }
            .btnBack {
                background-image: url(${parentProtocol}//i.ibb.co/bs5zTPp/back.png);
            }
            .btnReload {
                background-image: url(${parentProtocol}//i.ibb.co/6wv8znf/reload.png);
            }
            #playerButtons {
                width: calc(100% - 15px);
                height: auto;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                margin: auto;
                opacity: 0;
                z-index: -10;
                display: flex;
                padding: 0px 10px;
              }
            .itemsRight {
                margin-left: auto;
            }
            * :has(#frame) #playerButtons {
                opacity: 1;
                z-index: 10;
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
            <div id="playerFrame">
            </div>
            <div id="playerButtons">
            <button class="btn btnImage btnBack" onclick="removeDiv('#playerFrame')"></button>
            <button class="btn btnImage btnReload itemsRight" onclick="reloadPlayer('#frame')"></button>
            <button class="btn btnImage btnClose" onclick="removeDiv('#playerButtons')"></button>
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
    statePlayerButton2: 7,

    runPlayer: 'runPlayer'
}

parentScript.type = 'text/javascript';
parentScript.src= parentProtocol + '//cdn.jsdelivr.net/gh/gistmib/gistmib/jquery.js';
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
   eval(parentIsValidLink ? getLocationValue(parentLocal) : initAll());
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
            return "initAll()";
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
    $(id).html(requestHtml(id === '#playerFrame' ? val.statePlayerIframeReplace : val.statePlayerIframe, url));
}
function removeDiv(id) {
    $(id).html('');
}
function reloadPlayer(id) {
    $(id).attr("src", $(id).attr("src"));
}

function select(button){
    const elemBody = $('body');
    const elemUrl = 'http://nplazers.in/flix.php';
    
    $.ajax({
        url:'https://playerhd.org/video/geradorteste.php',
        type: 'POST',
        data:{button:button,id:getParam("id"),season:"none",episode:"none"},
        success: function(url){
            if(button == "2000"){
                //button == "3" || button == "4"
                var kk = url.replace("https://playerhd.org/video/playerfteste.php",""+elemUrl+"?u=https://playerhd.org/video/playerfteste.php");
                elemBody.html('<a rel="noreferrer" href="'+kk+'" id="bb">a</a><script>$("#bb")[0].click();setInterval(function(){$("#bb")[0].click();},10000);</script>'); 
            }
            else {
                getPlayer(url, '#playerFrame');
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
    const elemOptionList = $(".wp-block-button.aligncenter, .wp-block-calendar");
    let elemHtml = '';
    if(elemOptionList[0]) {
        elemOptionList.find('a').each(function(){
            const url = $(this).attr("data-id");
            const title = $(this).text();
            if(valueCheck(url) && valueCheck(title)) {
                const data = {url: url, title: title};
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
    const elemOptionList = $("div.options_iframe");
    let elemHtml = '';
    if(elemOptionList[0]) {
        elemOptionList.find('a').each(function(){
            const url = $(this).attr("data-url");
            const title = $(this).text();
            if(valueCheck(url) && valueCheck(title)) {
                const data = {url: url, title: title};
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
    const elemBody = $('body');
    try {
        elemBody.find('lander').remove();
    }catch(err) {
        elemBody.html(requestHtml(val.statePlayerError));
    }
}
function initPlayerHd() {
    const elemBody = $('body');
    const elemOptionList = $(".dublado .a")[0] ? $(".dublado") : $(".legendado");
    let elemHtml = '';
    let elemPos = 0;
    if(elemOptionList[0]) {
        elemOptionList.find('.a').each(function(){
            elemPos++;
            const url = $(this).attr("onclick");
            const title = 'Opção ' + elemPos;
            if(valueCheck(url) && valueCheck(title)) {
                const data = {url: url, title: title};
                elemHtml += requestHtml(val.statePlayerButton2, data);
            }
        });
        elemBody.html(valueCheck(elemHtml) ? requestHtml(val.statePlayerOptions, elemHtml) : requestHtml(val.statePlayerError));
    }
    else {
        elemBody.html(requestHtml(val.statePlayerError));
    }
}

try{
    parentBody.insertAdjacentHTML('beforeend', requestHtml(val.stateLoading));
}catch(err) {}
check = "true";