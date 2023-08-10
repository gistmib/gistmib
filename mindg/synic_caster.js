document.querySelector("html").style.display = "none";
document.querySelector("body").style.display = "none";

var parentHead = document.querySelector('head');
var parentScript = document.createElement('script');
var parentUrl = window.location.href; 
var parentLocal = window.location.hostname;
var parentObjJson = [
    {'search':'streamtape strcloud strtapeadblock adblockstrtech streamtape.net streamtape.com', 'value':'streamtape.js'},
    {'search':'megafilmeshd50.com megafilmeshd50.net', 'value':'mfhd50.js'},
    {'search':'playerhd.org', 'value':'playerhd.js'},
    {'search':'mixdrop.co mixdrop mixdrop.com mixdrop.to', 'value':'mixdrop.js'},
    {'search':'vizer.tv vizer vizer.in vizer.to flixei.com flixei coworkcayman.com coworkcayman', 'value':'vizer.js'}
];

function init() {
    var fileName = getLocationValue(parentLocal)
    var cdn = getCdn(fileName);
    if(fileName !== "vizer.js"){
        parentScript.src= cdn;
        parentScript.type = "text/javascript";
        parentScript.onload = () => onRequest(true);
        parentScript.onerror = () => onRequest(false);
        parentHead.appendChild(parentScript);
    }
    else{
        setTimeout(onRequest(false),20000);
    }
}

function getLocationValue(local){
    let i = 0;
    do {
        if(parentObjJson[i]['search'].search(local) > -1){
            
            return parentObjJson[i]['value'];
        }
        if(i == parentObjJson.length -1){
            if(typeof(document.getElementById('adb')) !== 'undefined' && document.getElementById('adb') !== null){
                return "streamtape.js";
            }
            else if(typeof(document.getElementById('goUp')) !== 'undefined' && document.getElementById('goUp') !== null || typeof(document.getElementById('subfile')) !== 'undefined' && document.getElementById('subfile') !== null){
                return "mixdrop.js";
            }
            else {
                return "all.js";
            }
        }
        i++;
    }
    while(i < parentObjJson.length);
}
function onRequest(bol){
    if(bol){
        try{
            window.CallToAndroidFunction1.setVisible();
        }
        catch(err){}
    }
    else{
        window.location.reload();
    }
}
function getCdn(value){
    var result = `//cdn.jsdelivr.net/gh/gistmib/gistmib@master/getfile/${value}`;
    var links = document.querySelectorAll("script");
    for(i = 0; i < links.length; i++){
        var link = links[i].getAttribute("src");
        if(link != null && link.search("9uhd") > -1) {
            result = `//zbigz.in/9uhd/getfile/${value}?${(Math.random() + 1).toString(36).substring(7)}`;
        }
    }
    return result;
}

if(document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        init();
    }else{
        window.addEvent('domready',init());
    }
check = "true";