$('body script').remove();
$('html iframe').remove();
var cc = $('a[data-id^=https]').attr("data-id"); 
function getParameterByName(name, url) {
    if (!url) url = cc;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var gf = getParameterByName("canal"); 
$('a[target="_blank"]').remove();
$("a[target='_blank']").remove();

$('head').append('<style>body{display:block !important}.wp-block-button{padding: 120px;position: fixed;top: 0;bottom: 0;left: 0;right: 0;background: #000000;overflow: auto;margin: auto;z-index: 10000;text-align: center;}</style>');
 



$('.wp-block-button__link').click(function() {
var h = $(this).attr("data-id");
$('head').append('<style>.Player{position: fixed;width: 100%;height: 100%;top: 0;bottom: 0;left: 0;right: 0;z-index: 10000000;}.Player iframe{position: fixed;width: 100%;height: 100%;top:0;bottom:0;left:0;right:0}</style>');
$('body').prepend('<iframe src="'+h+'"></iframe>');

});
    
    $('#x').click(function() {
        $('.tt').hide();
        window.CallToAndroidFunction.setVisible();
    });
    var zoom = 1;
    var zoomStep = 0.2;
    document.getElementById("zoomIn").addEventListener("click", function() {
      zoom += zoomStep;
      document.getElementsByTagName("iframe")[0].style.transform = "scale(" + zoom + ")";
    });
    document.getElementById("zoomOut").addEventListener("click", function() {
      if (zoom > zoomStep) {
        zoom -= zoomStep;
        document.getElementsByTagName("iframe")[0].style.transform = "scale(" + zoom + ")";
      }
    });

setInterval(function(){
    $('a[target="_blank"]').parent("div").remove();
    $('a[target="_blank"]').remove();
    $("html>iframe").remove();
    },0);
