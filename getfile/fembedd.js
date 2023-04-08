var local = window.location.href;
var head= document.getElementsByTagName('head')[0]; 
var script= document.createElement('script'); 
script.src= '//cdn.jsdelivr.net/gh/gistmib/gistmib@master/jquery.js';
script.type = "text/javascript";
script.async = false;
head.appendChild(script); 
script.onload = function(event) {
    var link;
    link = document.createElement("link");
    link.setAttribute("type", "text/css");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "//cdn.jsdelivr.net/gh/gistmib/gistmib/d.css");
    document.getElementsByTagName("head")[0].appendChild(link);
    var val = window.location.pathname.replace('/f/','').replace("/v/","");
    $.post('/api/source/' + val, function(res){
        if(res.success) {
            var data = res.data;
            hh(data);
        }
        else{
            window.location.href = "http://vip.tv/Erro";
        }
    });

}
script.onerror = function(event) {
    window.location.reload();
}
     
function hh(datas) {
    var html = "";
    $.each(datas, function(i,file){
        html += '<p class="control"><a href="'+file.file+'" class="button is-medium is-success clickdownload">'+file.label+'</a></p>';
    });
    
    $('body').html("<meta content='width=device-width' name='viewport'><style>a{text-decoration: none;font-size: 20px !important;text-align: center;align-items: center;justify-content: center;}body{backgroud:transparent !important;min-width:500 !important}.fields {z-index:90000000000000000}</style><script>var needlexs = window.location.href;var a,yyd,gg,iu;null!=needlexs&&needlexs.endsWith('=yes')?($('p a').each(function(){this.href=this.href.replace('https://fvs','http://www.fvs')}),a=needlexs.replace('/f/','/v/').replace('http://','').replace('http://','')):null!=needlexs&&needlexs.endsWith('=no')?(yyd=$('.control:last-of-type').find('a').attr('href'),gg=window.location.href,iu=yyd.replace('https://',''),window.top.location.href='http://cdnplayer.tv/file:///android_asset/p1.html?'+iu+'&stream=1&uu= '+gg):$('p a').each(function(){this.href=this.href.replace('http',' http://videomega.tv/http')});window.CallToAndroidFunction1.setVisible();$('body')[0].click();$('body').css('display','block');$('.fields').fadeIn(100);$('.fields').animate({bottom:'0'},200);if($('.is-danger')[0]){}</script><div id='gaga' class='fields'><center><span class='ffr'>Qualidade</span></center>"+ html +"<br></div>"); 
}
