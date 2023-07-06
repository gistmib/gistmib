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

getLocation(local, function(position){
    init(req(position));
});

function getLocation(uri, onResult){
    let i = 0;
    do {
        if(locations[i].indexOf(uri) >= 0){
            onResult(i);
            return true;
        }
        if(i == locations.length -1){
            onResult(100);
        }
        i++;
    }
    while(i < locations.length);
}

function init(value){
    //alert(value);
    if(value === "gdriveplayer.js"){
        window.location.href = "http://cdnplayer.tv/" + window.location.href;
    }else if(value === "voe.js"){
        window.location.href = "http://cdnplayer.tv/" + window.location.href;
    }else{
        var head= document.getElementsByTagName('head')[0]; 
        var script= document.createElement('script'); 
        script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/getfile/' + value;
        script.type = "text/javascript";
        script.async = false;
        head.appendChild(script); 
    }
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
        default: if(typeof(document.getElementById('vstr')) !== 'undefined' && document.getElementById('vstr') !== null) {
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

check = "true";
