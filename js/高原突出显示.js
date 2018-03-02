$(function(){
    //需求：鼠标放在li上，相应盒子opacity为1，其他盒子opacity为0.4；离开时，所有li的opacity为1
    //步骤：获取相关元素wrap ul li
    //绑定事件
    $(".wrap1>ul>li").mouseenter(function(){
        //书写相关事件驱动程序
        $(this).css("opacity",1).siblings("li").css("opacity",0.4);
    });
//            $(".wrap>ul").mouseleave(function(){
//                $(this).children("li").css("opacity",1);
//            });//这种情况会造成闪动，因为ul中间有wrap的部分
    $(".wrap1").mouseleave(function(){
        $(this).children().children("li").css("opacity",1);
    });

})