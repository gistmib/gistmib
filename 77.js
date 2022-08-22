$(document).ready(function () {

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
    if(localStorage.getItem('data')){
$('.normal').hide();
}else{
$('.hd').hide();
}
    
  });
});

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
if(localStorage.getItem('adult')){
        $('.matu2').hide();
}
$(".filmes1 ul li").on("click", function () {
    $(".filmes1 ul li").removeClass('selected');
    $(this).attr('class', 'selected');
});
$(".filmes2 ul li").on("click", function () {
    $(".filmes2 ul li").removeClass('selected3');
    $(this).attr('class', 'selected3');
});

$(".series1 ul li").on("click", function () {
    $(".series1 ul li").removeClass('selected2');
    $(this).attr('class', 'selected2');
});


$(".series2 ul li").on("click", function () {
    $(".series2 ul li").removeClass('selected4');
    $(this).attr('class', 'selected4');
});
});
