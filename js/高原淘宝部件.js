$(window).ready(function(){
    //需求：图片放到左右li上，中间图片相应显示，其他图片隐藏
    //步骤：获取元素
    //左侧
    //绑定事件
    $("#left11 li").mouseenter(function(){
        $("#center li").eq($(this).index()).show().siblings("li").hide();
    });
    //右侧
    $("#right11 li").mouseenter(function(){
        //书写事件驱动程序
//                $("#center li").eq($(this).index()+9).show().siblings("li").hide();
//            });
        $("#center li:eq("+($(this).index()+9)+")").show().siblings("li").hide();
    });
    //放大镜部分
    //需求：鼠标放在small小图上，mask显示，右侧相应大图区域显示
    //技术点：onmouseover--onmouseout 冒泡
    //        onmouseenter--onmouseleave  不冒泡
    //步骤：获取相关元素 小盒子 mask 大盒子 img图片
    var box12 = document.getElementsByClassName("box12")[0];
    var small = box12.children[0];
    var mask = small.children[1];
    var big = box12.children[1];
    var img = big.children[0];
    //鼠标放入 显示mask和big 移开隐藏
    small.onmouseenter = function(){
        show(mask);
        show(big);
    };
    small.onmouseleave = function(){
        hide(mask);
        hide(big);
    };
    //绑定事件,获取鼠标当前坐标位置
    small.onmousemove = function(event){
        event = event || window.event;
        var pageX = event.pageX || scroll().left + event.clientX;
        var pageY = event.pageY || scroll().top + event.clientY;
        //计算鼠标距离small盒子边缘距离
//                var x = pageX - small.offsetLeft - mask.offsetWidth/2;
//                var y = pageY - small.offsetTop - mask.offsetHeight/2;
        //这块要用box.offsetTop/left，因为small父盒子是box，而box有定位，所以计算small左侧是以父盒子box为参考的，所以要用box，才能以body网页为参考。
        var x = pageX - box12.offsetLeft - mask.offsetWidth/2;
        var y = pageY - box12.offsetTop - mask.offsetHeight/2;
        //设置移动范围
        if(x<0){
            x = 0;
        }
        if(x>small.offsetWidth-mask.offsetWidth){
            x= small.offsetWidth-mask.offsetWidth;
        }
        if(y<0){
            y = 0;
        }
        if(y>small.offsetHeight-mask.offsetHeight){
            y = small.offsetHeight-mask.offsetHeight;
        }
        //计算mask移动距离，赋值
        mask.style.left = x + "px";
        mask.style.top = y + "px";
        //大图片img等比例移动(用margin移动)
        //比例=mask走的距离/img移动的距离=（小盒子-mask）/（大图片-大盒子）=大图片/小图片
//                var s = img.offsetWidth / mask.offsetWidth;//这种放大不精确
        var s = (img.offsetWidth-big.offsetWidth)/(small.offsetWidth - mask.offsetWidth);
        img.style.marginLeft = -s*x + "px";
        img.style.marginTop  = -s*y + "px";
    };


    /*倒计时部分*/
    //需求：倒计时现在时间与未来预定时间的时间间隔
    //创建当前时间和未来时间，计算时间差值
    //创建计时器，让他隔一段时间更新一下
    var timer = setInterval(function(){
        //获取div
        var div01 = document.getElementsByClassName("release")[0];
        var nowTime = new Date();
        var futureTime = new Date("2018/04/22 12:1:50");
        var timeSum = futureTime.getTime()-nowTime.getTime();
        //获取剩余日、小时、分钟、秒、毫秒
        var day = parseInt(timeSum/1000/60/60/24);
        var hour = parseInt(timeSum/1000/60/60%24);
        var minute = parseInt(timeSum/1000/60%60);
        var sec = parseInt(timeSum/1000%60);
        var millisec = parseInt(timeSum%1000);
        //判断当日、小时、分钟、秒、毫秒的数字小于10时，前面加0，毫秒小于10，加两个0，小于100，加一个0.
        day=day<10?"0"+day:day;
        hour=hour<10?"0"+hour:hour;
        minute=minute<10?"0"+minute:minute;
        sec=sec<10?"0"+sec:sec;
        millisec=millisec>100?millisec:(millisec<10?"00"+millisec:"0"+millisec);
        //当超过预定发布时期，即时间差小于0，输出特定倒计时，并停止计时器
        if(timeSum<0){
            div01.innerHTML = "距离苹果发布会还有：00天00小时00分钟00秒000毫秒";
            clearInterval(timer);
            return;
        }
        div01.innerHTML = "距离苹果发布会还有："+day+"天"+hour+"小时"+minute+"分钟"+sec+"秒"+millisec+"毫秒";
    },0.1);
    //下拉菜单部分
    //需求：鼠标放在一级标签上，相应二级标签显示，移开隐藏
    //步骤：获取ul li ulli
    var ulli = $(".wrap22>ul>li");
    //绑定事件
    ulli.mouseenter(function(){
        //书写事件驱动程序
        $(this).children("ul").show();
    });
    ulli.mouseleave(function(){
        //书写事件驱动程序
        $(this).children("ul").hide();
    });

});