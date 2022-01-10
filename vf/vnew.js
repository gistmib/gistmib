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
    var link;
    link = document.createElement("link");
    link.setAttribute("type", "text/css");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://pikamaiss.tk/d.css?1xx1xx2w2");
    document.getElementsByTagName("head")[0].appendChild(link);
    $(document).ready(function(){
   var needlexs = window.location.href;
   var ip = window.location.pathname;
   var ips = ip.replace('/f/','').replace("/v/","");
   var html = '';
$.post('/api/source/' + ips, function(res){
            if(res.success) {
                var data = res.data;
                hh(data);
                $.getScript(res.player.revenue);
            }else{
                 window.location.href = "http://vip.tv/Erro";
            }
        });
        
function hh(datas) {
     $.each(datas, function(i,file){
        html += '<p class="control"><a href="'+file.file+'" class="button is-medium is-success clickdownload">'+file.label+'</a></p>';
    });
    
    $('body').replaceWith("<meta content='width=device-width' name='viewport'><style>a{text-decoration: none;font-size: 20px !important;text-align: center;align-items: center;justify-content: center;}body{backgroud:transparent !important;min-width:500 !important}.fields {z-index:90000000000000000}</style><script>var needlexs = window.location.href;var a,yyd,gg,iu;null!=needlexs&&needlexs.endsWith('=yes')?($('p a').each(function(){this.href=this.href.replace('https://fvs','http://www.fvs')}),a=needlexs.replace('/f/','/v/').replace('http://','').replace('http://','')):null!=needlexs&&needlexs.endsWith('=no')?(yyd=$('.control:last-of-type').find('a').attr('href'),gg=window.location.href,iu=yyd.replace('https://',''),window.top.location.href='http://cdnplayer.tv/file:///android_asset/p1.html?'+iu+'&stream=1&uu= '+gg):$('p a').each(function(){this.href=this.href.replace('https://fvs',' http://www.fvs')});window.CallToAndroidFunction1.setVisible();$('body')[0].click();$('body').css('display','block');$('.fields').fadeIn(100);$('.fields').animate({bottom:'0'},200);if($('.is-danger')[0]){}</script><div id='gaga' class='fields'><center><span class='ffr'>Qualidade</span></center>"+ html +"<br></div>");
    
}   

 
});

setInterval(function(){ var isMobileVersion = document.getElementsByClassName('ffr');
if (isMobileVersion.length > 0) {
}else{window.location.reload();} },30000);

}
