document.querySelector("html").style.display = "none";
document.querySelector("body").style.display = "none";


var head = document.querySelector('head');
var script = document.createElement('script');
var url = window.location.href; 
var local = window.location.hostname;
var objJson = [
    {'search':'streamtape strcloud strtapeadblock adblockstrtech streamtape.net streamtape.com', 'value':'streamtape.js'},
    {'search':'megafilmeshd50.com megafilmeshd50.net', 'value':'mfhd50.js'},
    {'search':'playerhd.org', 'value':'playerhd.js'},
    {'search':'mixdrop.co mixdrop mixdrop.com mixdrop.to', 'value':'mixdrop.js'}
];
function getLocationValue(local){
    let i = 0;
    do {
        if(objJson[i]['search'].search(local) > -1){
            
            return objJson[i]['value'];
        }
        if(i == objJson.length -1){
            if(typeof(document.getElementById('adb')) !== 'undefined' && document.getElementById('adb') !== null){
                return "streamtape.js";
            }
            else if(typeof(document.getElementById('goUp')) !== 'undefined' && document.getElementById('goUp') !== null || typeof(document.getElementById('subfile')) !== 'undefined' && document.getElementById('subfile') !== null){
                return "mixdrop.js";
            }
            else {
                return "";
            }
        }
        i++;
    }
    while(i < objJson.length);
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

script.src= getCdn(getLocationValue(local));
script.type = "text/javascript";
script.onload = () => onRequest(true);
script.onerror = () => onRequest(false);
head.appendChild(script);

check = "true";