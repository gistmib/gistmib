var local = window.location.hostname;
var locations = [
    "streamtape strcloud strtapeadblock adblockstrtech", 
    "megafilmeshd50",
    "playerhd.org",
    "diampokusy.com suzihaza.com vfilmesonline.net vanfem.com diasfem.com",
    "streamsb.com sbface.com"];

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
        i++;
    }
    while(i < locations.length);
}

function init(value){
    //alert(value);
    var head= document.getElementsByTagName('head')[0]; 
    var script= document.createElement('script'); 
    script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/getfile/' + value;
    script.type = "text/javascript";
    script.async = false;
    head.appendChild(script);
}
function req(value){
    switch (value) {
        case 0: return "streamtapes.js";
        case 1: return "mfhd50.js";
        case 2: return "playerhdd.js";
        case 3: return "fembeed.js";
        case 4: return "streamsb.js";
        default: if(typeof(document.getElementById('vstr')) !== 'undefined' && document.getElementById('vstr') !== null) {
            return "fembeed.js"; 
         }
        else if(typeof(document.getElementById('adb')) !== 'undefined' && document.getElementById('adb') !== null){
            return "streamtape.js";
         }
        else { return = ""; }
    }
}
