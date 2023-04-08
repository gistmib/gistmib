var local = window.location.hostname;
var locations = ["streamtape","strcloud","strtapeadblock","adblockstrtech","megafilmeshd50","playerhd.org","diampokusy.com","suzihaza.com","vfilmesonline.net","vanfem.com","diasfem.com","streamsb.com","sbface.com"];

getLocation(local, function(position){
    var value = "";
    if(position < 4){
        value = "streamtapes.js";
        //streamtape
    }
    else if(position == 4) {
        value = "mfhd50.js";
        // mfhd50
    }
    else if(position == 5) {
        value = "playerhdd.js";
        // playerhd
    }
    else if(position > 5 && position < 11) {
        value = "fembeed.js";
        // fembed
    }
    else if(position > 10 && position < 13) {
        value = "streamsb.js";
        // streamsb
    }
    else {
        if(typeof(document.getElementById('vstr')) !== 'undefined' && document.getElementById('vstr') !== null) {
            value = "fembeed.js"; 
            // fembed
         }
        else if(typeof(document.getElementById('adb')) !== 'undefined' && document.getElementById('adb') !== null){
            value = "streamtape.js";
            // streamtape
         }
    }
    init(value);
});

function getLocation(uri, onResult){
    let i = 0;
    do {
        console.log(locations[i]);
        if(uri.indexOf(locations[i]) !== -1){
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
