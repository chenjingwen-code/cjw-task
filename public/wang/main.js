$("#toTOP").click(function() {
    $('body,html').animate({
            scrollTop: 0
        },
        500);
});//返回顶部


$("#viewTop").click(function(){
    $("#nav--small_button").removeAttr("checked");
});//点击任意地方收回选项


