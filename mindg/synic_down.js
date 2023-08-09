document.querySelector("html").style.display = "none";
document.querySelector("body").style.display = "none";

var head = document.querySelector('head');
var script = document.createElement('script');
var url = window.location.href; 
var local = window.location.hostname;
var locations = [
    "streamtape strcloud strtapeadblock adblockstrtech streamtape.net streamtape.com",
    "megafilmeshd50.com megafilmeshd50.net",
    "playerhd.org",
    "diampokusy.com suzihaza.com vfilmesonline.net vanfem.com diasfem.com fembed.com",
    "streamsb.com sbface.com sbbrisk.com lvturbo.com",
    "gdriveplayer.us gdriveplayer.to download.gdriveplayer.us",
    "tubelessceliolymph.com voe.sx availedsmallest.com",
    "mixdrop.co mixdrop mixdrop.com mixdrop.to"];



function getLocation(uri){
    let i = 0;
    do {
        if(locations[i].search(uri) > -1){
            return init(req(i));
        }
        if(i == locations.length -1){
            return "";
        }
        i++;
    }
    while(i < locations.length);
}

function init(value){
    return `//cdn.jsdelivr.net/gh/gistmib/gistmib@master/getfile/${value}`;
}
function req(value){
    switch (value) {
        case 0: return "streamtape.js";
        case 1: return "mfhd50.js";
        case 2: return "playerhd.js";
        case 3: return "fembed.js";
        case 4: return "streamsb.js";
        case 5: return "gdriveplayer.js";
        case 6: return "voe.js";
        case 7: return "mixdrop.js";
        default:                  
        if(typeof(document.getElementById('vstr')) !== 'undefined' && document.getElementById('vstr') !== null) {
            return "fembed.js"; 
        }
        else if(typeof(document.getElementById('adb')) !== 'undefined' && document.getElementById('adb') !== null){
            return "streamtape.js";
        }
        else if(typeof(document.getElementsByClassName('modal-footer')[0]) !== 'undefined' && document.getElementsByClassName('modal-footer')[0] !== null || document.title === "StreamSB"){
            return "streamsb.js";
        }
        else if(typeof(document.getElementById('voe-player')) !== 'undefined' && document.getElementById('voe-player') !== null){
            return "voe.js";
        }
        else if(typeof(document.getElementById('goUp')) !== 'undefined' && document.getElementById('goUp') !== null || typeof(document.getElementById('subfile')) !== 'undefined' && document.getElementById('subfile') !== null){
            return "mixdrop.js";
        }
        else {
            return "";
        }
    }
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

script.src= getLocation(local);
script.type = "text/javascript";
script.onload = () => onRequest(true);
script.onerror = () => onRequest(false);
head.appendChild(script);


check = "true";
