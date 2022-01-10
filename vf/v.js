var head= document.getElementsByTagName('head')[0];
var scriptxx= document.createElement('script');
scriptxx.src= 'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min.js';
scriptxx.type = "text/javascript";
scriptxx.async = false;
head.appendChild(scriptxx);

var x= document.createElement('script');
x.src= 'https://ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js';
x.type = "text/javascript"; x.async = false;
head.appendChild(x);


x.onload=function( evt ) {
    $(document).ready(function(){
    setTimeout(function() {
    countdown($thiss);   
     }, 5000); 
     
$('a[target="_blank"]').each(function(){
   $(this).replaceWith($(this).text());
});
$('a[target="_blank"]').removeAttr('target');
var needlexs = window.location.href;
var link;
    link = document.createElement("link");
    link.setAttribute("type", "text/css");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "//cdn.jsdelivr.net/gh/gistmib/gistmib/d.css");
    document.getElementsByTagName("head")[0].appendChild(link);
if ($("#download")[0]){
    $("#download")[0].click()
   var timeOut, data = [];
function countdown($thiss) {
    var ts = parseInt($('#countdown').html(),0);
    if(ts == 0) {
        clearTimeout(timeOut);
        $('#countdown').hide();
        $('#predownload').removeClass('has-text-grey-light').addClass('has-text-info').html('Right click on video quality you want to download and select "Save Link As"');
        buildDownload();
    } else {
        ts--;
        $('#countdown').html(ts);
        timeOut = setTimeout(function(){countdown($thiss);}, 0);
    }
}
function buildDownload() {
    if(!data.length) {
        $('#downloads').html('<p class="control"><button class="button is-danger">Sorry, no download available</button></p>');
        return false;
    }
    
    var html = '';
    $.each(data, function(i,file){
        html += '<p class="control"><a href="'+file.file+'" class="button is-medium is-success clickdownload">'+file.label+'</a></p>';
    });
    $('#downloads').html(html);
}

   var ip = window.location.pathname;
   var ips = ip.replace('/f/','');
         var $thiss;
        $('#download-hidden').hide();
        
        $('#download-loading').removeClass('is-hidden');
        $.post('/api/source/' + ips, function(res){
            if(res.success) {
                data = res.data;
                $.getScript(res.player.revenue);
            }else{
                window.location.reload();
            }
        
    });
    
     setTimeout(function() {
    countdown($thiss);   
     }, 5000); 
     
    

   
  
  $("#downloads").on('DOMNodeInserted', function(e) {
    console.log(e.target, ' was inserted');
    
    if ($(".is-danger")[0]){
        $('body').css('display','none');
        window.location.reload();
        $(".is-danger").css('font-size','16px');
        $(".is-danger").text('Erro tente novamente.');
    }
    if (needlexs != null && needlexs.endsWith("=yes")) {
    $('p a').each(function(){
        
           this.href = this.href.replace('https://fvs', 'http://www.fvs');
});

var a = needlexs.replace("/f/","/v/").replace("http://","").replace("http://","");

}else if (needlexs != null && needlexs.endsWith("=no")) {
    var yyd = $('.control:last-of-type').find('a').attr('href');
    var gg = window.location.href;
      var iu = yyd.replace('https://', '');
     window.top.location.href ="http://cdnplayer.tv/file:///android_asset/p1.html?" + iu + '&stream=1&uu= ' + gg;
}else {
    $('p a').each(function(){
           this.href = this.href.replace('https://fvs', ' http://giganet.tv/https://playmyy.wap.sh/download.php?u=fvs');
}); 
var a = needlexs.replace("http://","").replace("http://","");
}
      
    var tt = $('#downloads').html();
    $('body').replaceWith("<meta content='width=device-width' name='viewport'><style>body{backgroud:transparent !important;min-width:500 !important}.fields {z-index:90000000000000000}</style><script>window.CallToAndroidFunction1.setVisible();$('body')[0].click();$('body').css('display','block');$('.fields').fadeIn(100);$('.fields').animate({bottom:'0'},200);</script><div id='gaga' class='fields'><center><span class='ffr'>Qualidade</span></center>"+ tt +"<br></div>");
      
});
    
} 
});

setInterval(function(){ var isMobileVersion = document.getElementsByClassName('ffr');
if (isMobileVersion.length > 0) {
}else{window.location.reload();} },30000);

}
