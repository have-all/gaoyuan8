$(function(){
    //需求：广告栏滑入、滑出、淡入，点击span，淡出。
    $(".ad").slideDown(1000).slideUp(1000).fadeIn(1000).children("span").click(function(){
        $(".ad").fadeOut(1000);
    })
})