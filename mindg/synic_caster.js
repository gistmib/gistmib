let tentativas = 0;
const parentBody = document.querySelector('body');
const parentHead = document.querySelector('head');
const parentScript = document.createElement('script');
const parentUrl = window.location.href;
const parentLocal = window.location.hostname;
const parentIsValidLink = ('https:' === location.protocol || 'http:' === location.protocol) ? true : false;
const parentProtocol = parentIsValidLink ? location.protocol : 'https:';
const val = {
    css: 0,
    htmlProgress: 1,
    htmlErrorMessage: 2,
    htmlErrorButtons: 3,

    initMixdrop: 'initMixdrop()',
    initStreamtape: 'initStreamtape()',
    initMfhd50: 'initMfhd50()',
    initVizer: 'initVizer()',
    initAll: 'initAll()',

    jsonErrorDeleted: `{"img": "${parentProtocol}//i.ibb.co/ZYjCKBY/error.png", "title": "Vídeo deletado", "message": "Infelizmente esse vídeo foi excluido por sites terceiros, volte e escolha uma outra opção para assistir."}`,
    jsonErrorInternal: `{"img": "${parentProtocol}//i.ibb.co/ZYjCKBY/error.png", "title": "Ocorreu um erro", "message": "Ocorreu um erro com esse vídeo, verifique sua conexão com a internet e novamente."}`,
    jsonErrorEmpty: `{"img": "${parentProtocol}//i.ibb.co/ZYjCKBY/error.png", "title": "Esse video não existe", "message": "O video que você esta tentando assistir ainda nao foi adicionado, tente mais tarde."}`
}
const parentObjJson = [
    {'search':'streamtape strcloud strtapeadblock adblockstrtech antiadtape antiadtape.com streamtape.net streamtape.com', 'value': val.initStreamtape},
    {'search':'vizer coworkcayman vizer.tv vizer.in coworkcayman.com', 'value': val.initVizer},
    {'search':'megafilmeshd50 megafilmeshd50.com megafilmeshd50.net', 'value': val.initMfhd50},
    {'search':'mixdrop mixdrop.co mixdrop mixdrop.com mixdrop.to', 'value': val.initMixdrop}
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
        case val.css:
            return `<style>
            body {
                pointer-events: none;
            }
            lander {
                pointer-events: all;
                font-family: sans-serif;
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
            .state-download-area {
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 100%;
                height: 100%;
            }
            .download-progress {
                position: relative;
                overflow: hidden;
                margin: 20px 10px;
                width: calc(100% - 20px);
                height: 3px;
                background: #1a1a1a;
                border-radius: 30px;
            }
            .download-progress .cursor {
                background: #ffffff;
                width: 2%;
                height: 3px;
                position: absolute;
                border-radius: 100px;
                transition: width 0.3s ease;
            }
            .state-download-area > div {
                max-width: 500px;
                text-align: center;
                padding: 10px;
                transition: all 0.3s ease;
            }
            .error-image img {
                width: 110px;
                height: 110px;
            }
            .error-title {
                color: #ffffff;
                font-size: 25px;
                font-weight: bold;
                margin: 5px 0px;
            }
            .error-message {
                font-size: 17px;
                color: #a1a1a1;
            }
            .line-btns {
                width: 100%;
                display: inline-flex;
                justify-content: center;            
            }
            .error-btn {
                max-width: 300px;
                font-size: 15px;
                background: #ffffff;
                border-radius: 100px;
                padding: 10px 30px;
                color: #000000;
                font-weight: bold;
                margin: 10px 5px;
                text-align: center;
                text-decoration: none;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                transition: scale 0.3s ease;
            }
            .error-btn:active {
                scale: 0.95;
            }
            .borded-btn {
                background: transparent;
                border: 1px #ffffff solid;
                color: #ffffff;
            }
            </style>`;
        case val.htmlProgress:
            try { window.CallToAndroidFunction1.setVisible(); }catch(err) {}
            return `<lander>
            <div class="state-download-area">
            <div>
            <div class="download-progress">
            <div class="cursor"></div>
            </div>
            <div class="download-title" onclick="setPercentage(50)">
            <span class="counter">2</span>% concluido, aguarde. </div>
            </div>
            </div>
            </lander>`;
        case val.htmlErrorMessage:
            return `
            <div class="error-image"><img src="${data.img}" /></div>
            <div class="error-title">${data.title}</div>
            <div class="error-message">${data.message}</div>
            `;
        case val.htmlErrorButtons:
            return `
            <div class="error-image"><img src="${data.img}" /></div>
            <div class="error-title">${data.title}</div>
            <div class="error-message">${data.message}</div>
            <div class="line-btns">
            <div class="error-btn borded-btn" onclick="parentInitBrowser()">Abrir com navegador</div>
            <div class="error-btn" onclick="parentInitFail()">Repetir</div>
            </div>
            `;
        }
}

parentScript.type = 'text/javascript';
parentScript.src= parentProtocol + '//cdn.jsdelivr.net/gh/gistmib/gistmib/jquery.js';
parentScript.onload = () => parentInit();
parentScript.onerror = () => parentInitFail();
parentScript.onabort = () => parentInitFail();
parentScript.oncancel = () => parentInitFail();



function parentInit() {
    eval(parentIsValidLink ? getLocationValue(getDomainName(parentLocal)) : initAll()); 
}
function parentInitFail() {
    window.location.reload();
}
function parentInitBrowser() {
    window.location.href = (isPlayer() ? 'http://cdnplayer.tv/' : 'http://giganet.tv/') + window.location.href;
}
function getLocationValue(local){
    let i = 0;
    do {
        if(parentObjJson[i]['search'].search(local) > -1){
            return parentObjJson[i]['value'];
        }
        if(i == parentObjJson.length -1){
            if(typeof(document.getElementById('adb')) !== 'undefined' && document.getElementById('adb') !== null){
                return val.initStreamtape;
            }
            else if(typeof(document.getElementById('goUp')) !== 'undefined' && document.getElementById('goUp') !== null || typeof(document.getElementById('subfile')) !== 'undefined' && document.getElementById('subfile') !== null){
                return val.initMixdrop;
            }
            else {
                return val.initAll;
            }
        }
        i++;
    }
    while(i < parentObjJson.length);
}
function valueCheck(v){
    return (v === '' || typeof v === 'undefined' || v === null) ? false : true;
}
function jsonCheck(obj) {
    try {
        return Object.keys(obj).length === 0 ? false : true;
    }catch(err) {
        return false;
    }
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
function getPlayer(url, type, id) {
    switch(type) {
        case val.typeNormal:
            $(id).html(requestHtml(valueCheck(url) ? val.statePlayerIframeReplace : val.statePlayerEmptyReplace, url));
            break;
        case val.typeCinemao:
            const elemBody = $('body');
            const elemUrl = parentProtocol + '//nplazers.in/flix.php';
        
            $.ajax({
                url: parentProtocol + '//playerhd.org/video/geradorteste.php',
                type: 'POST',
                data:{button:url,id:getParam("id"),season:"none",episode:"none"},
                success: function(url){
                    if(url == "2000"){
                        //button == "3" || button == "4"
                        var kk = url.replace("https://playerhd.org/video/playerfteste.php",""+elemUrl+"?u=https://playerhd.org/video/playerfteste.php");
                        elemBody.html('<a rel="noreferrer" href="'+kk+'" id="bb">a</a><script>$("#bb")[0].click();setInterval(function(){$("#bb")[0].click();},10000);</script>'); 
                    }
                    else {
                        $(id).html(requestHtml(valueCheck(url) ? val.statePlayerIframeReplace : val.statePlayerEmptyReplace, url));
                    }
                },
                error: function(url) {
                    $(id).html(requestHtml(val.statePlayerEmptyReplace));
                }
            });
            break;
        case val.typeMegaFilmes:
            let data = JSON.parse(atob(url));
            $.ajax({
                url: parentProtocol + '//megafilmeshd50.com/wp-admin/admin-ajax.php',
                type: 'POST',
                data:{action:"doo_player_ajax",post:data.post,nume:data.nume,type:data.type},
                success: function(data){
                    const url = getJsonVal(data, 'embed_url');
                    $(id).html(requestHtml(valueCheck(url) ? val.statePlayerIframeReplace : val.statePlayerEmptyReplace, url));
                },
                error: function(url) {
                    $(id).html(requestHtml(val.statePlayerEmptyReplace));
                }
            });
            break;
        }
}
function removeDiv(id) {
    $(id).html('');
}
function reloadPlayer(id) {
    $(id).attr("src", $(id).attr("src"));
}
function normalize(string){
    try {
        return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }catch(err) {
        return '';
    }
}
function setPercentage(value) {
    $('.download-progress .cursor').css('width', value + '%');
    $('.download-title .counter').text(value);
}
function isPlayer() {
    var result = false; // is no player;
    $("script").each(function() {
        if(valueCheck($(this).attr("src")) && $(this).attr("src").indexOf('synic_player.js') > -1) {
            result = true; // is player;
        }
    });
    return result;
}
function getDomainName(url) {
    try {
        let domain = url.match(/^(?:.*?\.)?([a-zA-Z0-9\-_]{3,}\.(?:\w{2,8}|\w{2,4}\.\w{2,4}))$/)[1];
        return valueCheck(domain) ? domain.split('.')[0] : parentLocal;
    }catch(err) {
        return parentLocal;
    }
}


function initMixdrop() {
    const elemBody = $('body');
    elemBody.append(requestHtml(val.htmlProgress)).ready(function(){
        const elemContent = $('.state-download-area div');
        try {
            let elemCounter = 0;
            if($('.error')[0]) {
                elemContent.html(requestHtml(val.htmlErrorMessage, JSON.parse(val.jsonErrorDeleted)));
            }else {
                timerPlayer = setInterval(function (){
                    const playerBtn = $('.vjs-big-play-button');
                    const playerVideo = $('video');
        
                    if(playerVideo[0] && playerBtn[0] && elemCounter !== 30) {
                        const playerUrl = playerVideo.attr('src');
                        if(valueCheck(playerUrl)) {
                            clearInterval(timerPlayer);
                            setPercentage(99);
                            setTimeout(function(){
                                window.location.href = 'http://videomega.tv/https:' + playerUrl;
                            },1000);
                        }
                        else {
                            setPercentage(50);
                            playerBtn[0].click();
                        }
                    }else {
                        clearInterval(timerPlayer);
                        elemContent.html(requestHtml(val.htmlErrorButtons, JSON.parse(val.jsonErrorInternal)));
                    }
                    elemCounter++;
                }, 1000);
            }
        }catch(err) {
            elemContent.html(requestHtml(val.htmlErrorButtons, JSON.parse(val.jsonErrorInternal)));
        }
    });
}
function initStreamtape() {
    const elemBody = $('body');
    elemBody.append(requestHtml(val.htmlProgress)).ready(function(){
        const elemContent = $('.state-download-area div');
        try {
            let elemCounter = 0;
            if($('.white')[0]) {
                elemContent.html(requestHtml(val.htmlErrorMessage, JSON.parse(val.jsonErrorDeleted)));
            }else {
                timerPlayer = setInterval(function (){
                    const playerBtn = $('.plyr__control');
                    const playerVideo = $('video');
        
                    if(playerVideo[0] && playerBtn[0] && elemCounter !== 30) {
                        const playerUrl = playerVideo.attr('src');
                        if(valueCheck(playerUrl)) {
                            clearInterval(timerPlayer);
                            setPercentage(99);
                            setTimeout(function(){
                                window.location.href = 'http://videomega.tv/https:' + playerUrl;
                            },1000);
                        }
                        else {
                            setPercentage(50);
                            playerBtn[0].click();
                        }
                    }else {
                        clearInterval(timerPlayer);
                        elemContent.html(requestHtml(val.htmlErrorButtons, JSON.parse(val.jsonErrorInternal)));
                    }
                    elemCounter++;
                }, 1000);
            }
        }catch(err) {
            elemContent.html(requestHtml(val.htmlErrorButtons, JSON.parse(val.jsonErrorInternal)));
        }
    });
}
function initMfhd50() {
    const elemBody = $('body');
    elemBody.append(requestHtml(val.htmlProgress)).ready(function(){
        const elemContent = $('.state-download-area div');
        try {
            const elemContentPlayer = $("#playeroptionsul li[data-nume='1']");
            if(valueCheck(elemContentPlayer)) {
                tentativas++;
                const elemType = elemContentPlayer.attr("data-type");
                const elemNume = elemContentPlayer.attr("data-nume");
                const elemPost = elemContentPlayer.attr("data-post");
                setPercentage(50);

                $.ajax({
                    url: parentProtocol + '//megafilmeshd50.com/wp-admin/admin-ajax.php',
                    type: 'POST',
                    data:{action:"doo_player_ajax",post: elemPost,nume: elemNume,type: elemType},
                    success: function(data){
                        const playerUrl = getJsonVal(data, 'embed_url');
                        if(valueCheck(playerUrl)) {
                            setPercentage(99);
                            setTimeout(function(){
                                window.location.href = (isPlayer() ? 'http://cdnplayer.tv/' : 'http://giganet.tv/') + playerUrl;
                            },1000);
                        }
                        else {
                           if(tentativas === 15) elemContent.html(requestHtml(val.htmlErrorMessage, JSON.parse(val.jsonErrorEmpty)));
                           else initMfhd50();
                        }
                    },
                    error: function(url) {
                        elemContent.html(requestHtml(val.htmlErrorButtons, JSON.parse(val.jsonErrorInternal)));
                    }
                });
            }
            else {
                elemContent.html(requestHtml(val.htmlErrorMessage, JSON.parse(val.jsonErrorEmpty)));
            }
        }catch(err) {
            elemContent.html(requestHtml(val.htmlErrorButtons, JSON.parse(val.jsonErrorInternal)));
            
        }
    });
}
function initVizer(){}

function initAll() {parentInitBrowser();}



if(document.readyState === 'complete') {
    parentHead.appendChild(parentScript);
    parentHead.insertAdjacentHTML('beforeend', requestHtml(val.css));
} else {
    if (window.addEventListener) {
        window.addEventListener('load', function(event) { 
            parentHead.appendChild(parentScript);
            parentHead.insertAdjacentHTML('beforeend', requestHtml(val.css));
        }, false);
    } else {
        window.attachEvent('onload', function(event) {
            parentHead.appendChild(parentScript);
            parentHead.insertAdjacentHTML('beforeend', requestHtml(val.css));
        });
    }
}

setInterval(function(){
    if(document.querySelector('lander') === null){ window.location.reload(); }
},20000);
check = "true";
