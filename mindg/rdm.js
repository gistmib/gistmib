let ytPlayer;
let singleResponse;
let showAlertTimer;
let initObjs = {};
let ytObjs = {};
let randomServer = (Math.random() > 0.5) ? true : false;

const url = window.location.href.split('html?ux=').pop().replace('.php@', '.php?').replace('.php&', '.php?').replace(/@/g, '&');
const parseJson = (value, key, position) => {
    try{
        json = JSON.parse(value);
        return (jsonCheck(json)) ? ((valueCheck(key)) ? (valueCheck(position)) ? json[key][position] : json[key] : json) : null;
    }
    catch(err){
        return null;
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
const file = (href) => {
    if (!href) href = url.split('php')[0];
    match = href.split('php')[0].match(/^.*?([^\\/.]*)[^\\/]*$/);
    return match && {
        href: href,
        name: match[1]
    }
};
const requestInitHtml = (code) =>{
    switch(code){
        case valObjs.initStyleHtml: 
        return `
        <meta content="width=device-width" name="viewport">
        <style>
        .btn {
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
            font-size: 16px;
            color: #cccccc;
        }
        .icon-button {
            display: flex;
        }
        .icon-button-image {
            width: 20px;
            height: 20px;
            flex: 0 0 20px;
        }
        .text-icon {
            margin-left: 10px;
            margin-top: 2px;
            white-space: nowrap;                  
            overflow: hidden; 
            text-overflow: ellipsis;
        }
        .episode-area {
            background-image: url(${valImgObjs.blankSrc});
            background-repeat: no-repeat;
            background-position: 98% 50%;
            background-size: 30px;
            display: flex;
            width: auto;
            background-color: #101010;
            border: 1px #101010 solid;
            border-radius: 5px;
            position: relative;
            overflow: hidden;
        }
        .episode-image {
            width: 100px;
            height: 55px;
            flex: 0 0 100px;
            background: #2c2c2c;
        }
        .episode-info-area  {
            padding: 10px 45px 10px 10px;
        }
        .episode-title {
            font-size: 13px;
            font-weight: bold;
        }
        .episode-name {
            margin-top: 3px;
            color: #cccccc;
        }
        .error-alert {
            color: #cccccc;
            background-color: rgba(25,25,25, 80%);
            border: 1px #202020 solid;
            border-radius: 10px;
            padding: 10px 15px;
            position: relative;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .error-message {
            position: relative;
            flex: 0 0 calc(100% - 60px);
        }
        .error-retry {
            position: relative;
            width: 30px;
            height: 30px;
            flex: 0 0 30px;
        }
        body {
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin:0;
            padding:0;
            border:0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            scroll-behavior:smooth;
            scrollbar-color:rgb(24,27,31) rgb(10,12,15);
            scrollbar-width:thin;
            overflow-x:hidden;
            font-size: 12px;
            font-weight:400;
            line-height: 1.2;
            background-color:#020202;
            position:relative;
            overflow-x:hidden;
            color:#fff;
            -webkit-font-smoothing:antialiased;
            -moz-osx-font-smoothing:grayscale;
            background:#000000;
            font-family: sans-serif;
        }
        img {
            width: 100%;
            height:100%;
        }
        a {
            text-decoration: none;
        }
        a, a:focus, img, img:focus {
            -webkit-tap-highlight-color:transparent
        }
        button {
            position:relative;
            background-color: transparent;
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: center;
            width: 100%;
            height:100%;
            border: 0px;
            padding: 0px;
            margin: 0px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: bold;
            color: #ffffff;
        }
        button.active {
            color: #000000 !important;
            background-color: #ffffff !important;
        }
        .episode-area.active  {
            background-image: url(${valImgObjs.eye});
            background-repeat: no-repeat;
            background-position: 98% 50%;
            background-size: 30px;
            background-color: rgb(255 255 255 / 80%);
            border: 1px rgb(255 255 255 / 80%) solid;
            color: #000000;
        }
        .episode-area.active .episode-name {
            color: #3a3a3a
        }
        .player-img svg, .player-img button {
            z-index: 2;
        }
        .lazy {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        .semi-round-button {
            font-weight: bold;
            background-color: #ffffff;
            padding: 5px 10px;
            color: #000000;
            border-radius: 5px;
        }
        .semi-round-medium-button {
            min-width: 130px;
            width: max-content;
            height: max-content;
            font-size: 14px;
            font-weight: bold;
            background-color: #ffffff;
            padding: 10px 15px;
            color: #000000;
            border-radius: 5px;
        }
        .semi-round-medium-button:has(.img-left-button) span
        {
            margin: 0px 5px 0px 25px;
        }
        .round-medium-button{
            min-width: 36px;
            min-height: 36px;
            width: 36px;
            height: 36px;
            background-color: #2a2a2a;
            border: 1px #5a5a5a solid;
            color: #ffffff;
            border-radius: 100px;
            margin-left:10px;
        }
        .button {
            transition: scale 0.3s ease-in-out, background 0.3s ease-in-out, color 0.3s ease-in-out;
            noe: width 0.3s ease-in-out, height 0.3s ease-in-out, padding 0.3s ease-in-out;
        }
        .button:active {
            scale: 0.95;
        }
        .round-button {
            font-size: 12px;
            font-weight: bold;
            background-color: #ffffff;
            padding: 5px 10px;
            color: #000000;
            border-radius: 5px;
            -webkit-box-shadow: 0px 0px 100px 15px rgba(0,0,0,0.5);
            -moz-box-shadow: 0px 0px 100px 15px rgba(0,0,0,0.5);
            box-shadow: 0px 0px 100px 15px rgba(0,0,0,0.5);
        }
        .bottom-left-button {
            position: absolute;
            left:10px;
            bottom: 10px;
            z-index: 1;
        }
        .img-left-button {
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        .img-center-button{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: auto;
            height: 15px;
            opacity: 1;
        }
        .tumb-info {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: #151515;
            transition: all 0.3s ease-in-out;
        }
        .spinner {
            animation: rotate 2s linear infinite;
            z-index: 2;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 40px;
            height: 40px; 
        }
        .spinner .path {
            stroke: #ffffff;
            stroke-linecap: round;
            -webkit-animation: dash 1.5s ease-in-out infinite;
            animation: dash 1.5s ease-in-out infinite;
        }
        .player-progress-area {
            overflow: hidden;
            background-color: rgba(204, 204, 204, 0.2);
            position: absolute;
            width: 100%;
            height:3px;
            bottom: 0;
            opacity: 0;
            z-index: 10;
            transition: all 0.3s ease-in-out;
        }
        .player-progress {
            background-color: #ffffff;
            width: 0;
            height: 100%;
            bottom: 0;
            border-radius: 0px 5px 5px 0px;
        }
        .content-area{
            overflow-x: hidden;
            overflow-y:auto;
        }
        .item-details-area {
            color: #9A9AA0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 10px 0px 5px 2px;
        }
        .item-buttons-area, .item-season-list {
            width: 100%;
            padding: 10px 0px;
            display: inline-flex;
            overflow-x: auto;
        }
        .item-similar-list {
            margin-top: 5px;
            width: 100%;
            padding: 3px 0px;
            display: inline-flex;
            overflow-x: auto;
        }
        .item-season-list button:last-of-type {
            margin-right: 10px;
        }
        .item-season-list button {
            min-width: 43px;
            min-height: 43px;
            font-size: 19px;
        }
        .item-similar-list a {
            width: 100px;
            height: 145px;
            margin: 0px 10px 0px 0px;
            border-radius: 5px;
            background-color: #151515;
        }
        .item-similar-list img {
            width: 100px;
            height: 145px;
            margin: 0px 10px 0px 0px;
            border-radius: 5px;
            background-color: #151515;
        }
        .item-similar-area {
            margin-top: 10px;
        }
        .item-buttons-area button:last-of-type {
            margin-right: 10px;
        }
        .likes {
                font-weight: bold;
        }
        .rate {
            background-color: #1a1a1a;
            border: 1px #2a2a2a solid;
            color: #fff;
            padding: 3px 7px;
            border-radius: 7px;
            margin: 0 5px;
        }
        .poster {
            opacity: 1;
            width: 100px;
            height: 150px;
            border-radius: 5px;
            margin: 5px 0px;
            background-color: #151515;
        }
    
        .player-img:after {
            position: absolute;
            width: 100px;
            height: 0px;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            top: 0;
            content: '';
            -webkit-box-shadow: 0px 0px 100px 15px rgba(0,0,0,0.5);
            -moz-box-shadow: 0px 0px 100px 15px rgba(0,0,0,0.5);
            box-shadow: 0px 0px 100px 15px rgba(0,0,0,0.5);
            border-radius: 100px;
        }
        .item-overview {
            font-size: 15px;
            color: #9a9a9a;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            line-clamp: 5;
            -webkit-box-orient: vertical;
        }
        .max-two-lines {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .max-one-lines {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        .center-vertical {
            height: max-content;
            position: absolute;
            bottom: 0;
            top: 0;
            margin: auto;
        }
        .item-overview:empty, .item-genres:empty, .item-details-area:empty {
            display: none !important;
        }
        .item-similar-area:has(.item-similar-list:empty) {
            display: none !important;
        }
        .item-genres {
            margin-top: 10px;
            font-size: 13px;
            color: #9a9a9a;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .item-similar-title, .item-season-title {
            font-size: 18px;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .item-alert-area {
            pointer-events: none;
            position: fixed;
            bottom: 0;
            height: 100%;
        }
        .item-alert-message {
            text-align: center;
            font-size: 12px;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            pointer-events: all;
            position: absolute;
            width: 85%;
            height: 15px;
            padding: 10px 15px;
            background: #2a2a2a;
            border: 1px #3a3a3a solid;
            color: #ffffff;
            border-radius: 10px;
            left: 0;
            right: 0;
            bottom: -100%;
            opacity: 0;
            margin: auto;
            -webkit-box-shadow: 0px 0px 90px 15px rgba(0,0,0,0.5);
            -moz-box-shadow: 0px 0px 90px 15px rgba(0,0,0,0.5);
            box-shadow: 0px 0px 90px 15px rgba(0,0,0,0.5);
            transition: all 0.6s ease-in-out;
        }
        .darken-color{
            background-color: rgba(42, 42, 42, 50%);
            padding: 5px 10px;
            color: #f9f9f9;
        }
    
        @keyframes rotate {
            100% {
                transform: rotate(360deg);
            }
        }
        @keyframes dash {
            0% {
                stroke-dasharray: 1, 150;
                stroke-dashoffset: 0;
            }
            50% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -35;
            }
            100% {
                stroke-dasharray: 90, 150;
                stroke-dashoffset: -124;
            }
        }
        @keyframes fadeInAnimation {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
             }
        }
    
        @media screen and (orientation:portrait) {
            .enable-left-space {
                margin: 0px 10px;
            }
            .enable-space {
                margin: 10px 10px;
            }
            .enable-space-nobottom {
                margin-top: 10px;
                margin-bottom: 0px;
                margin-left: 10px;
                margin-right: 10px;
            }
            .enable-space-notop {
                margin-top: 0px;
                margin-bottom: 10px;
                margin-left: 10px;
                margin-right: 10px;
            }
            .item-alert-area {
                width: 100%;
            }
            .tumb-area {
                background: #151515;
                position: relative;
                width: 100%;
                height: 230px;
                flex: 0 0 230px;
            }
            .tumb-trailer {
                position: absolute;
                width: 100%;
                height: 100%;
            }
            .tumb-trailer iframe {
                width: 100%;
                height: 100%;
            }
            .player-img {
                position: absolute;
                bottom: 0;
                top: 0;
                left: 0;
                right: 0;
                margin: auto;
                width:65px;
                height:65px;
            }
            .tumb-img {
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 100%;
                position: relative;
                width: 100%;
                height: 100%;
            }
            .poster {
                display: none;
            }
            .content-area{
                padding-top: 10px
            }
            .item-title {
                color: #ffffff;
                font-size: 27px;
                line-height: 0.99;
                font-weight: bold;
            }
            .item-buttons-area button:first-of-type {
                margin-left: 10px;
            }
            .item-similar-list a:first-of-type {
                margin-left: 12px;
            }
            .item-season-list button:first-of-type {
                margin-left: 10px;
            }
            .semi-round-medium-button {
                height: 40px;
                padding: 10px 25px;
            }
            .round-medium-button {
                min-width: 40px;
                min-height: 40px;}
        }
        @media screen and (orientation:landscape) {
            .enable-left-space {
                margin-right: 10px;
            }
            .enable-space {
                margin-right: 10px;
                margin-top: 10px;
                margin-bottom: 5px;
            }
            .enable-space-nobottom {
                margin-top: 10px;
                margin-bottom: 0px;
                margin-left: 0px;
                margin-right: 10px;
            }
            .enable-space-notop {
                margin-top: 0px;
                margin-bottom: 10px;
                margin-left: 0px;
                margin-right: 10px;
            }
            .item-season-list button:first-of-type {
                margin-left: 0px;
            }
            .item-alert-area {
                width: 60%;
            }
            .item-title {
                color: #ffffff;
                font-size: 27px;
                font-weight: bold;
                line-height: 0.99;
            }
            .top-info-area {
                padding: 30px 0px 10px 26%;
            }
            .tumb-area {
                width:100%;
                height:100%;
                background:#151515;
                position:absolute;
            }
            .tumb-area:after {
                content: '';
                pointer-events: none;
                position: absolute;
                top: 0;
                width: 70%;
                height: 100%;
                -webkit-box-shadow: inset -200px 0px 120px 0px rgba(0,0,0,1);
                -moz-box-shadow: inset -200px 0px 120px 0px rgba(0,0,0,1);
                box-shadow: inset -200px 0px 120px 0px rgba(0,0,0,1);
            }
            .content-area {
                width:60%;
                height:100%;
                background-image: linear-gradient(90deg, transparent, black, black);
                position:absolute;
                right:0;
            }
            .tumb-img {
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 100%;
                position: relative;
                width: 70%;
                height: 100%;
            }
            .tumb-trailer {
                position: absolute;
                overflow: hidden;
                top: 0;
                width: 70%;
                height: 100%;
            }
            .tumb-trailer iframe {
                position: absolute;
                scale: 3;
                width: 70%;
                height: 100%;
                border: 0px #000000 solid;
            }
            .player-img {
                position: absolute;
                bottom: 0;
                top: 0;
                left: 0;
                right: 50%;
                margin: auto;
                width:65px;
                height:65px;
            }
        }
        @media (pointer: fine), (pointer: none) {
            ::-webkit-scrollbar {
                width: 4px;
                height: 4px;
                border-radius: 100px;
            }
            ::-webkit-scrollbar-track {
              background: transparent;
              margin: 10px 0px;
            }
            ::-webkit-scrollbar-thumb {
                background: #2a2a2a;
                border-radius: 100px;
            }
            ::-webkit-scrollbar-thumb:hover {
              background: #4a4a4a;
            }
        }
        </style>
        `;
        case valObjs.initTumbHtml: 
        return  `
        <div class="tumb-area">
        <div class="tumb-trailer">
        <div id="player"></div>
        </div>
    
        <div class="tumb-info">
        <div class="tumb-img lazy" data-lazybg="${(valueCheck(getJsonVal(initObjs.tmdbJson, 'backdrop_path'))) ? valImgObjs.tmdbFull + getJsonVal(initObjs.tmdbJson, 'backdrop_path') : valImgObjs.blankBg}"></div>
        ${(valueCheck(initObjs.tmdbYTJson.id) ? `<div class="player-img"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle></svg></div>` : ``)}
        </div>
    
        <div class="player-progress-area">
        <div class="player-progress"></div>
        </div>
        <div class="semi-round-button bottom-left-button darken-color">${initObjs.tmdbYTJson.title}</div>
        </div>
        `;
        case valObjs.initContentMovieHtml: 
        return `
        <div class="content-area">
        <div class="top-info-area">
    
        <img class="poster lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${(valueCheck(getJsonVal(initObjs.tmdbJson, 'poster_path'))) ? valImgObjs.tmdbSmall + getJsonVal(initObjs.tmdbJson, 'poster_path') : valImgObjs.blankSrc}" onload="lazyLoader()" />
        <div class="item-title enable-left-space">${diffReturnVal(getJsonVal(initObjs.tmdbJson, 'title'), toLowerCaseVal(initObjs.name))}</div>
        <div class="item-details-area enable-left-space">${requestItemHtml(getJsonVal(initObjs.tmdbJson, valObjs.voteAverage), valObjs.percentage) + requestItemHtml(getJsonVal(initObjs.tmdbJson, valObjs.voteAverage), valObjs.rate) + requestItemHtml(getJsonVal(initObjs.tmdbJson, valObjs.runtime), valObjs.duration)}</div>
    
        <div class="item-buttons-area">
        ${requestItemHtml(null, valObjs.playButton)}
        ${requestItemHtml(null, valObjs.downButton)}
        ${requestItemHtml(null, valObjs.castButton)}
        ${requestItemHtml(null, valObjs.saveButton)}
        ${requestItemHtml(null, valObjs.shareButton)}
        </div>
    
        <div class="item-desc-area enable-space-notop">
        <div class="item-overview">${diffReturnVal(getJsonVal(initObjs.tmdbJson, valObjs.overview), '')}</div>
        <div class="item-genres">${requestItemHtml(getJsonVal(initObjs.tmdbJson, valObjs.genres), valObjs.genres)}</div>
        </div>
    
        
        ${requestItemHtml(initObjs.similar, valObjs.similarList)}
    
        </div>
    
        <div class="item-alert-area">
        <div class="item-alert-message"></div>
        </div>
        </div>
        <img src="https://whos.amung.us/widget/b69af64q2l.png" style="display:none" border="0" width="0" height="0" />
        `;
        case valObjs.initContentSerieHtml: 
        return `
        <div class="content-area">
        <div class="top-info-area">
    
        <img class="poster lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${(valueCheck(getJsonVal(initObjs.tmdbJson, 'poster_path'))) ? valImgObjs.tmdbSmall + getJsonVal(initObjs.tmdbJson, 'poster_path') : valImgObjs.blankSrc}" onload="lazyLoader()" />
        <div class="item-title enable-left-space">${diffReturnVal(getJsonVal(initObjs.tmdbJson, 'title'), toLowerCaseVal(initObjs.name))}</div>
        <div class="item-details-area enable-left-space">${requestItemHtml(getJsonVal(initObjs.tmdbJson, valObjs.voteAverage), valObjs.percentage) + requestItemHtml(getJsonVal(initObjs.tmdbJson, valObjs.voteAverage), valObjs.rate) + requestItemHtml(getJsonVal(initObjs.tmdbJson, valObjs.numberOfSeasons), valObjs.seasons)}</div>
    
        <div class="item-buttons-area">
        ${requestItemHtml(null, valObjs.lastPlayButton)}
        ${requestItemHtml(null, valObjs.saveButton)}
        ${requestItemHtml(null, valObjs.shareButton)}
        </div>
    
        <div class="item-desc-area enable-space-notop">
        <div class="item-overview">${diffReturnVal(getJsonVal(initObjs.tmdbJson, valObjs.overview), '')}</div>
        <div class="item-genres">${requestItemHtml(getJsonVal(initObjs.tmdbJson, valObjs.genres), valObjs.genres)}</div>
        </div>
    
        
        ${requestItemHtml(null, valObjs.seasonsList)}
    
        </div>
    
        <div class="item-alert-area">
        <div class="item-alert-message"></div>
        </div>
        </div>
        <img src="https://whos.amung.us/widget/b69af64q2l.png" style="display:none" border="0" width="0" height="0" />
        `;
        case valObjs.initContentErrorHtml:
        return `
        <div id="loader">
        <div class="stateContent">
        <div class="stateCenterContent">
        <center>
        <img src="${valImgObjs.blankSrc}" data-lazysrc="${valImgObjs.error}" onload="lazyLoader()" class="imgMedium lazy">
        <div class="alertTitle"><b>Ocorreu um erro</b></div>
        <div class="alertMessage">Ocorreu um erro interno, verifique sua conexão com a internet e tente novamente.</div>
        </center>
        <div class="btn" onclick="window.location.reload()">Tentar novamente</div>
        </div>
        </div>
        </div>
        <img src="https://whos.amung.us/widget/oabm897h7j.png" style="display:none" border="0" width="0" height="0" />
        `;
    }
};
const requestItemHtml = (value, code) => {
    switch(code) {
        case valObjs.percentage: 
        return (valueCheck(value)) ? `<span class="likes">${percentageCaucule(value, 10)}% gostaram</span>` : '';
        case valObjs.rate: 
        return (valueCheck(value)) ? `<span class="rate">${parseFloat(value).toFixed(1)} / 10</span>` : '';
        case valObjs.duration: 
        return (valueCheck(value)) ? `<span class="timing">${value}min.</span>` : '';
        case valObjs.seasons: 
        return (valueCheck(value)) ? `<span class="dating">${value} temporadas disponíveis</span>` : '';
        case valObjs.genres: 
        return (valueCheck(value)) ? getGenres(value) : '';
        case valObjs.similarList: 
        return (valueCheck(value)) ? `<div class="item-similar-area">
        <div class="item-similar-title enable-space-nobottom">Você também pode gostar disso</div>
        <div class="item-similar-list">${getSimilarList(value)}</div>
        </div>` : '';
        case valObjs.seasonsList:
        return  `<div class="item-serie-area">
        <div class="item-season-title enable-space-nobottom">Escolha uma temporada</div>
        <div class="item-season-list"></div>
        <div class="item-episodes-list"></div>
        </div>`;
        case valObjs.ytPlayButton: 
        return `<button class="button lazy" data-lazybg="${valImgObjs.playLight}" onclick="actionClick('${valObjs.ytplay}')" ></button>`;
        case valObjs.lastPlayButton:
        return `<button class="${(initObjs.myLastViewText == valTextObjs.seasnos) ? '' : 'button'} semi-round-medium-button last-view icon-button" onclick="actionClick('${valObjs.myLastView}')">
        <img class="icon-button-image lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${valImgObjs.eye}" onload="lazyLoader()" />
        <div class="text-icon">${initObjs.myLastViewText}</div>
        </button>`;
        case valObjs.playButton:
        return `<button class="button semi-round-medium-button icon-button" onclick="actionClick('${valObjs.play}')">
        <img class="icon-button-image lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${valImgObjs.playDark}" onload="lazyLoader()" /> 
        <div class="text-icon">Assistir</div>
        </button>`;
        case valObjs.downButton: 
        return `<button class="button round-medium-button" onclick="actionClick('${valObjs.down}')">
        <img class="img-center-button lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${valImgObjs.download}" onload="lazyLoader()" /> 
        </button>`;
        case valObjs.castButton: 
        return `<button class="button round-medium-button"  onclick="actionClick('${valObjs.cast}')">
        <img class="img-center-button lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${valImgObjs.cast}" onload="lazyLoader()" />
        </button>`;
        case valObjs.saveButton: 
        return `<button id="save" class="button round-medium-button" onclick="actionClick('${valObjs.save}')">
        <img class="img-center-button lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${(requestMyList(initObjs.id, valObjs.getItem)) ? valImgObjs.saved : valImgObjs.save}" onload="lazyLoader()" />
        </button>`;
        case valObjs.saveChange: 
        return `<img class="img-center-button lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${(requestMyList(initObjs.id, valObjs.getItem)) ? valImgObjs.saved : valImgObjs.save}" onload="lazyLoader()" />`;
        case valObjs.shareButton: 
        return `<button class="button round-medium-button" onclick="actionClick('${valObjs.share}')">
        <img class="img-center-button lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${valImgObjs.share}" onload="lazyLoader()" />
        </button>`;
        case valObjs.seasonButton: 
        return (jsonCheck(value)) ? `<button class="button round-medium-button" data-season="${value.name}" data-id="${value.id}" onclick="getEpisodesList('${value.name}')">${value.name}</button>` : '';
        case valObjs.episodeButton:
        if(jsonCheck(value)) {
            elementSeasonText = $('.item-season-list .active').attr('data-season');
            elementLastViewText = $('.last-view div').text().replace(valTextObjs.lastMyView, '');
            season = elementLastViewText.replace('T:','').split('E:')[0];
            episode = elementLastViewText.replace('E','').split(':').pop();

            return `<div class="button episode-area enable-space ${(elementSeasonText == season && value.name == episode) ? 'active' : ''}" data-episode="${value.name}" data-id="${value.id}" data-url="${diffReturnVal(value.url, '')}" onclick="getEpisode(${value.name})">
            <div class="episode-image"><img class="lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${(valueCheck(value.img)) ? valImgObjs.tmdbSmall + value.img : valImgObjs.blankSrc}" onload="lazyLoader()" /></div>
            <div class="episode-info-area">
            <div class="episode-title max-one-lines">${diffReturnVal(value.title, valTextObjs.noTitle)}</div>
            <div class="episode-name max-one-lines">${valTextObjs.episode + diffReturnVal(value.name, '')}</div>
            </div>
            </div>`;
        }else {
            return '';
        }
        case valObjs.errorSeasonList:
        return `<div class="error-alert enable-left-space">
        <div class="error-message"><span class="center-vertical max-two-lines">Ocorreu um erro ao carregar as temporadas dessa série, clique no botão ao lado para tentar novamente.</span></div>
        <div class="error-retry" onclick="getSeasonsList(true)"><img class="button lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${valImgObjs.retry}" onload="lazyLoader()" /> </div>
        </div>`;
        default:
        return '';
    }
};
const requestMyList = (key, code) => {
    switch(code) {
        case valObjs.list: return (localStorage.getItem(valObjs.myList)) ? JSON.parse(localStorage.getItem(valObjs.myList)) : {};
        break;
        case valObjs.removeItem: removeMyListItem(initObjs.player + key);
        break;
        case valObjs.addItem: addMyListItem(initObjs.player + key);
        break;
        case valObjs.getItem: return (valueCheck(initObjs.player + key)) ? (getJsonVal(requestMyList(null, valObjs.list), initObjs.player + key)) ? true : false : false;
        break;
    }
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
const valImgObjs = {
    tmdbFull: 'https://image.tmdb.org/t/p/original',
    tmdbSmall: 'https://image.tmdb.org/t/p/w300',
    playDark: 'https://i.ibb.co/tZC0jkQ/play-v1.png',
    playLight: 'https://i.ibb.co/Kq7R5KK/mWpP3Ud.png',
    blankBg: 'https://i.ibb.co/RbGkjqx/360-F-562252610-Watb1rs-YXzm-Dn-CDqx-A2-CFEs-S72o8-D05-E.jpg',
    blankSrc: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D',
    download: 'https://i.ibb.co/0GwW8J9/baixar.png',
    cast: 'https://i.ibb.co/JC84vLd/tr.png',
    save: 'https://i.ibb.co/dfgH0F7/save.png',
    saved: 'https://i.ibb.co/pRCBMR9/saved.png',
    share: 'https://i.ibb.co/5B8RsPY/share.png',
    eye: 'https://i.ibb.co/bRxZxy7/eye.png',
    retry: 'https://i.ibb.co/44XyD8X/retry.png',
    error: 'https://i.ibb.co/ZYjCKBY/error.png'
};
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
    initContentErrorHtml: 'initContentErrorHtml',
    lastPlayButton: 'lastPlayButton',
    myLastView: 'myLastView',
    mv112: 'mv112',
    tmdbBusca: 'tmdbBusca',
    tmdbId: 'tmdbId',
    results: 'results',
    a: 'a',
    n: 'n',
    uxs: 'uxs',
    d: 'd',
    c: 'c',
    b: 'b',
    vizerGetFilme: `https://api.zbigz.in/vizerreq?v=videoPlayerBox&u=`,
    vizerGetEpisodes: `https://api.zbigz.in/getreq?v=%22list%22&u=https://${randomServer ? 'nplazers' : 'nplazers'}.in/log.php?g=getEpisodes=`,
    vizerGetSeasons: `https://api.zbigz.in/getreq?v=%22list%22&u=https://${randomServer ? 'nplazers' : 'nplazers'}.in/log.php?g=getSeasons=`,
    vizerGetEpisode: `https://api.zbigz.in/getreq?v=%22list%22&u=https://${randomServer ? 'nplazers' : 'nplazers'}.in/log.php?g=getEpisodeLanguages=`,
    tmdbMovieUrl: 'https://api.themoviedb.org/3/movie/$?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&language=pt-BR',
    tmdbMovieYTurl: 'https://api.themoviedb.org/3/movie/$/videos?api_key=fcc1be0c88f74c3478f6d09f36bb9a37&language=pt-BR',
    tmdbMovieSearchUrl: 'https://api.themoviedb.org/3/search/movie?api_key=fcc1be0c88f74c3478f6d09f36bb9a37&language=pt-BR&page=1&include_adult=false&query=$query&year=$year',
    tmdbTvUrl: 'https://api.themoviedb.org/3/tv/$?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&language=pt-BR',
    tmdbTvYTurl: 'https://api.themoviedb.org/3/tv/$/videos?api_key=fcc1be0c88f74c3478f6d09f36bb9a37&language=pt-BR',
    tmdbTvSearchUrl: 'https://api.themoviedb.org/3/search/tv?api_key=fcc1be0c88f74c3478f6d09f36bb9a37&language=pt-BR&page=1&include_adult=false&query=$query&year=$year',
    errorSeasonList: 'errorSeasonList'
};
const valTextObjs = {
    noTitle: 'Sem título',
    episode: 'Episódio ',
    seasnos: 'Aguardando seleção',
    lastMyView: 'Último visto ',
    ytPlayErrorAlert: 'Ocorreu um erro ao tentar reproduzir esse vídeo.',
    retryErrorAlert: 'Ocorreu um erro no servidor, tente novamente.',
    episodesErrorAlert: 'Ocorreu um erro ao carregar os episódios, tente novamente.',
    episodeErrorAlert: 'Ocorreu um erro ao carregar esse episódio, tente novamente.',
    internErrorAlert: 'Ocorreu um erro interno, tente novamente mais tarde.',
    addedMyListAlert: 'Esse item foi adicionado a sua lista com sucesso.',
    removedMyListAlert: 'Esse item foi removido da sua lista com sucesso.'
};

class YTPlayer {
    ytTag = document.createElement('script');
    ytScriptTag = document.querySelector('script');
    player;
    isError;
    elementTumbArea;
    elementPlayerImg;
    ytTimer;
    progress;
    percentage;

    constructor(){
        this.ytTag.src = 'https://www.youtube.com/iframe_api';
        this.ytScriptTag.parentNode.insertBefore(this.ytTag, this.ytScriptTag);

        this.ytTag.onload = () => {
            document.querySelector('#www-widgetapi-script').onload = () => { 
                this.player = new YT.Player('player', {
                    height: '360',
                    width: '640',
                    videoId: initObjs.tmdbYTJson.id,
                    suggestedQuality: 'hd1080',
                    playerVars: {
                        'color' : '#a900ff',
                        'controls' : 0,
                        'modestbranding' : '1',
                        'rel' : 0,
                        'autoplay' : 0,
                        'showinfo' : 0,
                        'enablejsapi' : '1',
                        'ecver' : '2'
                    },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange,
                        'onError': onPlayerError
                    }
                });  
            }
        }
    }
}

$(document).ready(() => initType(file().name));

function initType(fileName){
    switch(fileName){
        case valObjs.vizerFilme:
            initObjs.uniqId = valObjs.vizerFilme + diffReturnVal(getParam(valObjs.n, url), '');
            initObjs.player = valObjs.vizerFilme;
            initObjs.id = diffReturnVal(getParam(valObjs.n, url), '');
            initObjs.name = diffReturnVal(getParam(valObjs.uxs, url), '').replace(/ /g,'-');
            initObjs.tmdbType = valObjs.tmdbBusca;
            initObjs.tmdbSearchUrl = valObjs.tmdbMovieSearchUrl.replace('$query', diffReturnVal(getParam(valObjs.uxs, url), '')).replace('$year', diffReturnVal(getParam(valObjs.d, url), '').split(',').pop().split(' ').pop());
            initObjs.tmdbYTurl = valObjs.tmdbMovieYTurl;
            initObjs.tmdbUrl = valObjs.tmdbMovieUrl;
            initObjs.siteUrl = valObjs.vizerGetFilme + diffReturnVal(getParam(valObjs.uxs, url), '').replace(/ /g,'-');
            initObjs.similar = localStorage.getItem(valObjs.mv112);

            Promise.all([getPromise(initObjs.tmdbSearchUrl, true), getPromise(initObjs.siteUrl, false)]).then(async (data) => {
                initObjs.tmdbId = getJsonVal(parseJson(data[0], valObjs.results, 0), 'id');
                initObjs.tmdbJson = await syncTmdbJson(initObjs.tmdbUrl, false);
                initObjs.tmdbYTJson = await syncTmdbJson(initObjs.tmdbYTurl, true);
                initObjs.siteJson = parseJson(data[1]);
                initMoviePage();
            }).catch((err) => {
                initErrorPage();
            });
            break;
        case valObjs.vizerSerie:
            initObjs.uniqId = valObjs.vizerSerie + diffReturnVal(getParam(valObjs.n, url), '');
            initObjs.player = valObjs.vizerSerie;
            initObjs.id = diffReturnVal(getParam(valObjs.n, url), '');
            initObjs.name = diffReturnVal(getParam(valObjs.uxs, url), '').replace(/ /g,'-');
            initObjs.tmdbType = valObjs.tmdbBusca;
            initObjs.tmdbSearchUrl = valObjs.tmdbTvSearchUrl.replace('$query', diffReturnVal(getParam(valObjs.uxs, url), '')).replace('$year', diffReturnVal(getParam(valObjs.d, url), '').split(',').pop().split(' ').pop());
            initObjs.tmdbYTurl = valObjs.tmdbTvYTurl;
            initObjs.tmdbUrl = valObjs.tmdbTvUrl;
            initObjs.siteUrl = valObjs.vizerGetSeasons + diffReturnVal(getParam(valObjs.n, url), '');
            initObjs.similar = localStorage.getItem(valObjs.mv112);

            Promise.all([getPromise(initObjs.tmdbSearchUrl, true), getPromise(initObjs.siteUrl, false)]).then(async (data) => {
                initObjs.tmdbId = getJsonVal(parseJson(data[0], valObjs.results, 0), 'id');
                initObjs.tmdbJson = await syncTmdbJson(initObjs.tmdbUrl, false);
                initObjs.tmdbYTJson = await syncTmdbJson(initObjs.tmdbYTurl, true);
                initObjs.siteJson = parseJson(data[1]);
                initObjs.myLastViewText = (requestItemJsonStorage(valObjs.getStorage, initObjs.uniqId, valObjs.lastView)) ? valTextObjs.lastMyView + requestItemJsonStorage(valObjs.getStorage, initObjs.uniqId, valObjs.lastView) : valTextObjs.seasnos;
                initSeriePage();
            }).catch((err) => {
                initErrorPage();
            });
            break;
        case valObjs.cinemaoFilme:
            initObjs.uniqId = valObjs.cinemaoFilme + diffReturnVal(getParam(valObjs.uxs, url), '');
            initObjs.player = valObjs.cinemaoFilme;
            initObjs.id = diffReturnVal(getParam(valObjs.uxs, url), '');
            initObjs.name = diffReturnVal(getParam(valObjs.uxs, url), '');
            initObjs.tmdbType = valObjs.tmdbId;
            initObjs.tmdbSearchUrl = valObjs.tmdbMovieSearchUrl;
            initObjs.tmdbYTurl = valObjs.tmdbMovieYTurl.replace('$', diffReturnVal(getParam(valObjs.uxs, url), ''));
            initObjs.tmdbUrl = valObjs.tmdbMovieUrl.replace('$', diffReturnVal(getParam(valObjs.uxs, url), ''));
            initObjs.siteUrl = null;
            initObjs.similar = localStorage.getItem(valObjs.mv112);

            Promise.all([getPromise(initObjs.tmdbUrl, true)]).then(async (data) => {
                initObjs.tmdbId = getJsonVal(parseJson(data[0]), 'id');
                initObjs.tmdbJson = parseJson(data[0]);
                initObjs.tmdbYTJson = await syncTmdbJson(initObjs.tmdbYTurl, true);
                initObjs.siteJson = null;
                initMoviePage();
            }).catch((err) => {
                initErrorPage();
            });
            break;
        case valObjs.megaFilmes:
            initObjs.uniqId = valObjs.megaFilmes + diffReturnVal(getParam(valObjs.c, url), '');
            initObjs.player = valObjs.megaFilmes;
            initObjs.id = diffReturnVal(getParam(valObjs.c, url), '');
            initObjs.name = diffReturnVal(getParam(valObjs.b, url), '').replace(/ /g,'-');
            initObjs.tmdbType = valObjs.tmdbBusca;
            initObjs.tmdbSearchUrl = valObjs.tmdbMovieSearchUrl.replace('$query', diffReturnVal(getParam(valObjs.b, url), '')).replace('$year', diffReturnVal(getParam(valObjs.d, url), '').split(',').pop().split(' ').pop());
            initObjs.tmdbYTurl = valObjs.tmdbMovieYTurl;
            initObjs.tmdbUrl = valObjs.tmdbMovieUrl;
            initObjs.siteUrl = null;
            initObjs.similar = localStorage.getItem(valObjs.mv112);

            Promise.all([getPromise(initObjs.tmdbSearchUrl, true)]).then(async (data) => {
                initObjs.tmdbId = getJsonVal(parseJson(data[0], valObjs.results, 0), 'id');
                initObjs.tmdbJson = await syncTmdbJson(initObjs.tmdbUrl, false);
                initObjs.tmdbYTJson = await syncTmdbJson(initObjs.tmdbYTurl, true);
                initObjs.siteJson = null;
                initMoviePage();
            }).catch((err) => {
                initErrorPage();
            });
            break;
        case valObjs.megaSeries:
            initObjs.uniqId = valObjs.megaSeries + diffReturnVal(getParam(valObjs.c, url), '');
            initObjs.player = valObjs.megaSeries;
            initObjs.id = diffReturnVal(getParam(valObjs.c, url), '');
            initObjs.name = diffReturnVal(getParam(valObjs.b, url), '').replace(/ /g,'-');
            initObjs.tmdbType = valObjs.tmdbBusca;
            initObjs.tmdbSearchUrl = valObjs.tmdbTvSearchUrl.replace('$query', diffReturnVal(getParam(valObjs.b, url), '')).replace('$year', diffReturnVal(getParam(valObjs.d, url), '').split(',').pop().split(' ').pop());
            initObjs.tmdbYTurl = valObjs.tmdbTvYTurl;
            initObjs.tmdbUrl = valObjs.tmdbTvUrl;
            initObjs.siteUrl = null;
            initObjs.similar = localStorage.getItem(valObjs.mv112);

            Promise.all([getPromise(initObjs.tmdbSearchUrl, true)]).then(async (data) => {
                initObjs.tmdbId = getJsonVal(parseJson(data[0], valObjs.results, 0), 'id');
                initObjs.tmdbJson = await syncTmdbJson(initObjs.tmdbUrl, false);
                initObjs.tmdbYTJson = await syncTmdbJson(initObjs.tmdbYTurl, true);
                initObjs.siteJson = parseJson(requestItemJsonStorage(valObjs.getStorage, initObjs.uniqId, valObjs.seasonsList));
                initObjs.myLastViewText = (requestItemJsonStorage(valObjs.getStorage, initObjs.uniqId, valObjs.lastView)) ? valTextObjs.lastMyView + requestItemJsonStorage(valObjs.getStorage, initObjs.uniqId, valObjs.lastView) : valTextObjs.seasnos;
                initSeriePage();
            }).catch((err) => {
                initErrorPage();
            });
            break;
        default:
            initErrorPage();
            break;
        }
}
function initMoviePage(){
    var html = $('html');
    html.find('head').append(requestInitHtml(valObjs.initStyleHtml));
    html.find('body').html(requestInitHtml(valObjs.initTumbHtml) + requestInitHtml(valObjs.initContentMovieHtml)).ready(childInit());
}
function initSeriePage(){
    var html = $('html');
    html.find('head').append(requestInitHtml(valObjs.initStyleHtml));
    html.find('body').html(requestInitHtml(valObjs.initTumbHtml) + requestInitHtml(valObjs.initContentSerieHtml)).ready(async () => {
        await getSeasonsList(false);
        childInit();
    });
}
function initErrorPage(){
    var html = $('html');
    html.find('head').append(requestInitHtml(valObjs.initStyleHtml));
    html.find('body').html(requestInitHtml(valObjs.initContentErrorHtml)).ready(async () => childInit());
}
function initYTplayer(){
    if(valueCheck(initObjs.tmdbYTJson.id)){
        ytPlayer = new YTPlayer();
    }
}
function childInit(){
    initYTplayer();
    lazyLoader();
    try{
        window.CallToAndroidFunction.setVisible();
    }
    catch(err){}
}


async function getPromise(url, isCached) {
    body = await syncHtml(url, isCached);
    let promise = new Promise((resolve, reject) => {
        resolve(body);
    });
    return promise;
}
async function syncHtml(url, isCached) {
    try{
        options = isCached ? {credentials: 'same-origin', cache: 'force-cache'} : {credentials: 'same-origin'}
        response = await fetch(url, options);
        text = await response.text();
        return (valueCheck(text) && response.ok == true && response.status == 200) ? text : 'error';
    }
    catch(err){
        return 'error';
    }
}
async function syncJson(url, isCached) {
    try{
        options = isCached ? {credentials: 'same-origin', cache: 'force-cache'} : {credentials: 'same-origin'}
        singleResponse = await fetch(url, options);
        text = await singleResponse.json();
        return (valueCheck(text) && singleResponse.ok == true && singleResponse.status == 200) ? text : null;
    }
    catch(err){
        return null;
    }
}
async function syncTmdbJson(url, isTrailer) {
    try{
        if(valueCheck(initObjs.tmdbId)) {
            response = await syncJson(url.replace('$', initObjs.tmdbId), true);
            return isTrailer ? (valueCheck(getJsonVal(getJsonVal(response, valObjs.results, 0), 'key'))) ? {id: getJsonVal(getJsonVal(response, valObjs.results, 0), 'key'), title: 'Prévia'} : {id: null, title: 'Prévia indisponível'} : response;
        }else{
            return isTrailer ? {id: null, title: 'Prévia indisponível'} : null;
        }
    }
    catch(err){
        return isTrailer ? {id: null, title: 'Prévia indisponível'} : null;
    }
}
async function vizerPlayer(value, data) {
    if(jsonCheck(data)) {
        try{
            window.CallToAndroidFunction.data("Opções para assistir", `{"val": "${value}", "site":"vizer","id":"0","fembed":0,"streamtape":0, "type":"filme", "lang": "${window.btoa(JSON.stringify(data))}"}`, false);
        }catch(err){
            showAlert(valTextObjs.internErrorAlert);
        }
    }else {
        try {
            showAlert(valTextObjs.retryErrorAlert);
            text = await syncHtml(initObjs.siteUrl, false);
            initObjs.siteJson = parseJson(`{${text}}`);
        }catch (err) {
            showAlert(valTextObjs.internErrorAlert);
        }
    }
}
async function cinemaoPlayer(value, data){
    if(jsonCheck(value)) {
        try{
            window.CallToAndroidFunction.data("Opções para assistir", `{"val": "${value}", "site":"cinemao","id":"${data}", "type":"filme"}`, false);
        }catch(err){
            showAlert(valTextObjs.internErrorAlert);
        }
    }else { showAlert(valTextObjs.internErrorAlert); }
}
async function megaPlayer(value, data) {
    if(jsonCheck(value)) {
        try{
            window.CallToAndroidFunction.data("Opções para assistir", `{"val": "${value}", "site":"mfhd","id":"${data.replace("http:", "https:")}", "type":"filme"}`, false);
        }catch(err){
            showAlert(valTextObjs.internErrorAlert);
        }
    }else { showAlert(valTextObjs.internErrorAlert); }
}
function requestSerieJsonReturn(url, onRetrun) { 
    if(initObjs.player == valObjs.megaSeries){
        try {
            json = getJsonVal(parseJson(requestItemJsonStorage(valObjs.getStorage, initObjs.uniqId, valObjs.episodesList)), url);
            onRetrun(jsonCheck(json) ? {list: json} : null, url);
        }catch(err) {
            onRetrun(null, url);
        }
    }else {
        try {
            syncJson(url)
            .then((response) => onRetrun(jsonCheck(response) ? response : null, url))
            .catch((err) => onRetrun(null, url));
        } catch (err) {
            onRetrun(null, url);
        }
    }
}
async function getSeasonsList(isError) {
    elementSeasons = $('.item-season-list');
    html = '';

    if(isError) {
        try {
            text = await syncHtml(initObjs.siteUrl, false);
            initObjs.siteJson = parseJson(text);
            if(!jsonCheck(initObjs.siteJson)) { showAlert(valTextObjs.retryErrorAlert); }
        }catch (err) {
            showAlert(valTextObjs.internErrorAlert);
        }
    }

    try {
        jsonSeasons = getJsonVal(initObjs.siteJson, valObjs.list);
        if(jsonCheck(jsonSeasons)) {
            $.each(jsonSeasons, function(k, data) {
                html += requestItemHtml(data, valObjs.seasonButton);
            });
        }else {
            html = requestItemHtml(null, valObjs.errorSeasonList);
        }
    }catch(err) {
        html = requestItemHtml(null, valObjs.errorSeasonList);
    }
    if($(html).text() !== elementSeasons.text()) { elementSeasons.html(html); }
}
function getEpisodesList(season) {
    element = $(`[data-season='${season}']`);
    elementParent = element.parent();
    elementEpisodes = $('.item-episodes-list');
    html = '';

    if(!element.hasClass('active')) {
        elementEpisodes.html('');
        elementParent.find('button').removeClass('active');
        element.addClass('active');
    
        season = element.attr('data-season');
        id = element.attr('data-id');
        link = (initObjs.player == valObjs.megaSeries) ? id : valObjs.vizerGetEpisodes + id;
        
        requestSerieJsonReturn(link,
        (response, url) => {
            if(url == link) {
                jsonEpisodes = getJsonVal(response, valObjs.list);
                if(jsonCheck(jsonEpisodes)) {
                    $.each(jsonEpisodes, function(k, data) {
                        html += requestItemHtml(data, valObjs.episodeButton);
                    });
                    elementEpisodes.html(html);
                }else {
                    showAlert(valTextObjs.episodesErrorAlert);
                    elementParent.find('button').removeClass('active');
                }
            }
        });
    }
}
function getEpisode(episode) {
    element = $(`[data-episode='${episode}']`);
    elementParent = element.parent();

    id = element.attr('data-id');
    epiUrl = element.attr('data-url');
    link = (initObjs.player == valObjs.megaSeries) ? id : valObjs.vizerGetEpisode + id;

    if(valueCheck(epiUrl)){
        try {
            elementParent.find('div').removeClass('active');
            element.addClass('active');
            actionClick(valObjs.all, epiUrl);
        }catch(err) {
            showAlert(valTextObjs.episodeErrorAlert);
        }
    }else {
        console.log(link);
        requestSerieJsonReturn(link,
        (response, url) => {
            if(url == link) {
                jsonEpisode = response;
                if(jsonCheck(jsonEpisode)) {
                    elementParent.find('div').removeClass('active');
                    element.addClass('active');
                    actionClick(valObjs.all, jsonEpisode);
                }else {
                    showAlert(valTextObjs.episodeErrorAlert);
                }
            }
        });
    }
}
function setLastView() {
    elementLastView = $('.last-view');

    elementSeason = $('.item-season-list');
    elementEpisode = $('.item-episodes-list');
    lastViewText = 'T:' + elementSeason.find('.active').attr('data-season') + 'E:' + elementEpisode.find('.active').attr('data-episode');
    
    elementLastView.addClass('button').find('div').text(valTextObjs.lastMyView + requestItemJsonStorage(valObjs.setStorage, initObjs.uniqId, valObjs.lastView, lastViewText));

}
function valueCheck(v) {
    return (v === '' || typeof v === 'undefined' || v === null) ? false : true;
}
function diffReturnVal(oldValue, newValue) {
    return (oldValue === '' || typeof oldValue === 'undefined' || oldValue === null) ? newValue : oldValue;
}
function jsonCheck(v) {
    return (typeof v === 'undefined' || v === null) ? false : true;
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
function lazyLoader(){
    $('.lazy').filter('[data-lazybg]').each(function(){
        var element = $(this);
        var img = new Image();
        img.src = element.attr('data-lazybg');
        img.onload = () => $(this).removeAttr('data-lazybg').css('background-image', `url("${img.src}")`).css('opacity', (element.hasClass('tumb-img')) ? '0.5' : '1');
        img.onerror = () => $(this).removeAttr('data-lazybg').css('opacity', (element.hasClass('tumb-img')) ? '0.5' : '1');
    });
    $('.lazy').filter('[data-lazysrc]').each(function(){
        var element = $(this);
        var img = new Image();
        img.src = element.attr('data-lazysrc');
        img.onload = () => $(this).removeAttr('data-lazysrc').removeAttr('onload').attr('src', img.src).css('opacity',  '1');
        img.onerror = () => $(this).removeAttr('data-lazysrc').removeAttr('onload').css('opacity', '1');
    });
}
function toLowerCaseVal(str) {
    try{
        return str.toLowerCase().replace(/-/g,' ').replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
    }
    catch(err){
        return '';
    }
}
function percentageCaucule(rate, total) {
    return parseInt((rate / total) * 100).toString();
}
function getGenres(value) {
    var names = '';
    try {
         for(let i = 0; i < value.length; i++) { 
            names += (i !== value.length -1) ? `<b>${getJsonVal(value[i], 'name')}</b>  | ` : `<b>${getJsonVal(value[i], 'name')}</b>`; 
            }
    }
    catch (err) {}
    return names; 
}
function getSimilarList(value) {
    try {
        html = $(`<div>${value}</div/>`);
        newHtml = '';
        html.find('a').sort(function(){ return Math.random()*10 > 5 ? 1 : -1; }).each(function(){
            imgVal = $(this).find('img:last-of-type').attr('data-src');
            hrefVal = $(this).attr('href').replace('http://vip.tv/','?');
            newHtml += `<a href="${hrefVal}">
            <img class="lazy" src="${valImgObjs.blankSrc}" data-lazysrc="${imgVal}" onload="lazyLoader()" />
            </a>`;
        });
        return newHtml;
    } catch (err) {
        return '';
    }
}
function showAlert(message) {
    showAlertelement = $('.item-alert-message');
    showAlertelementText = $('.item-alert-message').text();
    
    if(!valueCheck(showAlertelementText)){
        showAlertelement.text(message).css('opacity','1').css('bottom','10');
        showAlertTimer = setTimeout(() => showAlertelement.text('').removeAttr('style'), 8000);
    }
    else if(showAlertelementText !== message){
        clearTimeout(showAlertTimer);
        showAlertelement.removeAttr('style');
        setTimeout(() => showAlertelement.text(message).css('opacity','1').css('bottom','10'), 200);
        showAlertTimer = setTimeout(() => showAlertelement.text('').removeAttr('style'), 8000);
    }
}
function actionClick(value, data) {
    switch(value) {
        case valObjs.ytplay: {
            try{ (ytPlayer.isError) ? showAlert(valTextObjs.ytPlayErrorAlert) : ytPlayer.player.playVideo(); }
            catch(err){ showAlert(valTextObjs.ytPlayErrorAlert); }
            break;
        }
        case valObjs.play:
        case valObjs.cast:
        case valObjs.down:
        case valObjs.all: {
            try {
                if(initObjs.player == valObjs.vizerFilme) {
                    vizerPlayer(value, initObjs.siteJson);
                }
                if(initObjs.player == valObjs.vizerSerie) {
                    setLastView();
                    vizerPlayer(value, data);
                }
                if(initObjs.player == valObjs.cinemaoFilme) {
                    cinemaoPlayer(value, initObjs.id);
                }
                if(initObjs.player == valObjs.megaFilmes) {
                    megaPlayer(value, diffReturnVal(getParam('a', url), ''));
                }
                if(initObjs.player == valObjs.megaSeries) {
                    setLastView();
                    megaPlayer(value, data);
                }
            } catch (err) {
                showAlert(valTextObjs.internErrorAlert);
            }
            break;
        }
        case valObjs.save: {
            try { (requestMyList(initObjs.id, valObjs.getItem)) ? requestMyList(initObjs.id, valObjs.removeItem) : requestMyList(initObjs.id, valObjs.addItem); }
            catch (err) { showAlert(valTextObjs.internErrorAlert); }
            break;
        }
        case valObjs.share: {
            try { window.location.href = 'https://goooog.wap.sh/'; } 
            catch (err) { showAlert(valTextObjs.internErrorAlert); }
            break;
        }
        case valObjs.myLastView: {
            try {
                season = diffReturnVal(requestItemJsonStorage(valObjs.getStorage, initObjs.uniqId, valObjs.lastView), '').replace('T:','').split('E:')[0];
                elementSeason = $(`[data-season='${season}']`);
            
                if(elementSeason[0]) {
                    elementSeason[0].click();
                    elementSeason.addClass('active').ready(() => elementSeason.get(0).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }));
                }
            }catch(err) {}
            break;
        }
    }
}
function removeMyListItem(key) {
    element = $('#save');
    myJson = requestMyList(null, valObjs.list);

    if(valueCheck(key) && getJsonVal(myJson, key)){
        delete myJson[key];
        localStorage.setItem(valObjs.myList, JSON.stringify(myJson));
    }
    element.html(requestItemHtml(null, valObjs.saveChange));
    showAlert(valTextObjs.removedMyListAlert);
}
function addMyListItem(key) {
    element = $('#save');
    myJson = requestMyList(null, valObjs.list);

    if(valueCheck(key) && getJsonVal(myJson, key)){
        delete myJson[key];
    }
    myJson[key] = {
        id: key, 
        img: (valueCheck(getJsonVal(initObjs.tmdbJson, 'poster_path'))) ? valImgObjs.tmdbSmall + getJsonVal(initObjs.tmdbJson, 'poster_path') : valImgObjs.blankSrc,
        url: (initObjs.player == valObjs.megaSeries) ? 'http://deepwebsx.tv/' + diffReturnVal(getParam(valObjs.a, url), '') : 'http://vip.tv/ux=' + url,
        added: Date.now()};
    localStorage.setItem(valObjs.myList, JSON.stringify(myJson));
    element.html(requestItemHtml(null, valObjs.saveChange));
    showAlert(valTextObjs.addedMyListAlert);
}


function onPlayerReady(event) {
    ytPlayer.elementTumbArea = $('.tumb-area');
    ytPlayer.elementPlayerImg = $('.player-img');
    ytPlayer.elementPlayerImg.html(requestItemHtml(null, valObjs.ytPlayButton)).ready(() => {
        ytPlayer.player.setPlaybackRate('highres');
        lazyLoader();
    });
}
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING){
        if(ytPlayer.elementTumbArea.find('.tumb-info').css('opacity') == '1') {
            ytPlayer.ytTimer = setInterval(() => onPlayerProgress(), 0);
        }
    }
    if(event.data === 0 || event.data == YT.PlayerState.PAUSED) {
        clearInterval(ytPlayer.ytTimer);
        ytPlayer.player.pauseVideo();
        ytPlayer.player.seekTo(0);

        if(ytPlayer.elementTumbArea.find('.tumb-info').css('opacity') == '0') {
            ytPlayer.elementTumbArea.find('.tumb-info').css('opacity', '1');
            ytPlayer.elementTumbArea.find('.player-progress-area').css('opacity', '0');
        }
    }
}
function onPlayerError(event) {
    ytPlayer.isError = true;
}
function onPlayerProgress() {
    ytPlayer.progress = ytPlayer.elementTumbArea.width() * (ytPlayer.player.getCurrentTime() / ytPlayer.player.getDuration());
    ytPlayer.percentage = parseInt((100 * parseInt(ytPlayer.progress)) / parseInt(ytPlayer.elementTumbArea.width()));
    ytPlayer.elementTumbArea.find('.tumb-info').css('opacity', (ytPlayer.percentage >= 0 && ytPlayer.percentage <= 98) ? '0' : '1');
    ytPlayer.elementTumbArea.find('.player-progress-area').css('opacity', (ytPlayer.percentage >= 0 && ytPlayer.percentage <= 98) ? '1' : '0');
    ytPlayer.elementTumbArea.find('.player-progress').css('width', ytPlayer.progress + (ytPlayer.percentage / 3));
}
check = 'true';
