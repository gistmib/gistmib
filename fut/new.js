var g = window.location.href;
g = g.replace('https://esporteone.com/?','');

fetch("/app/stream/get_token.php",{"credentials":"omit","headers":{"accept":"application/json","accept-language":"pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7","content-type":"application/x-www-form-urlencoded","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},"referrerPolicy":"no-referrer-when-downgrade","body":"canal="+ g,"method":"POST","mode":"cors"}).then((response) => {
return response.json();})
.then((myJson5) => {
var token = myJson5['token'];
var items = Array('futebolfree.com');
var item = items[Math.floor(Math.random() * items.length)];
window.top.location = "https://live."+item+"/"+ g +"/video.m3u8?token=" + token;
});