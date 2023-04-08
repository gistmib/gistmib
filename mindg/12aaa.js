document.body.style.display = "none";
var local = window.location.hostname;
var locations = [
    "multicanais.vc bbbgratis.com", 
    "futemax.app",
    "megafilmeshd50.com megafilmeshd50.net",
    "canaisplay.com",
    "embed.warezcdn.net embed.warezcdn.com warezcdn.com warezcdn.net",
    "playerhd.org"];

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
    alert(value);
    var head= document.getElementsByTagName('head')[0]; 
    var script= document.createElement('script'); 
    script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/getplayer/' + value;
    script.type = "text/javascript";
    script.async = false;
    head.appendChild(script); 
}
function req(value){
    switch (value) {
        case 0: return "multicanaisp.js";
        case 1: return "futmaxp.js";
        case 2: return "mfhd50p.js";
        case 3: return "canaisplayp.js";
        case 4: return "warezcdn.js";
        case 5: return "playerhdx.js";
        default: return "alll.js";
    }
}

check = "true";
