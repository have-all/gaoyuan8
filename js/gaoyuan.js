/*Data:2017/12/25*/
/*Author:高原*/
/*Info：一些动画方面的封装*/


//显示、隐藏
function show(ele){
    ele.style.display = "block";
}
function hide(ele){
    ele.style.display = "none";
}
//scrollTop的兼容性封装
function scroll(){
    if(window.pageYOffset !==undefined){
        return{
            "top":window.pageYOffset,
            "left":window.pageXOffset
        }
    }else if(document.compatMode === "CSS1Compat"){
        return{
            "top":document.documentElement.scrollTop,
            "left":document.documentElement.scrollLeft
        }
    }else{
        return{
            "top":document.body.scrollTop,
            "left":document.body.scrollLeft
        }
    }
}
//缓动动画的封装
//function animate1(ele,target,off,leto){
//    clearInterval(ele.timer);
//    ele.timer = setInterval(function(){
//        var step = (target-ele.off)/10;
//        step = target>ele.off?Math.ceil(step):Math.floor(step);
//        ele.style.leto = ele.off + step + "px";
//        if(Math.abs(target-ele.off)<=Math.abs(step)){
//            ele.style.leto = target + "px";
//            clearInterval(ele.timer);
//        }
//    },30)
//    }
function animate1(ele,target){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var step = (target-ele.offsetTop)/10;
        step = target>ele.offsetTop?Math.ceil(step):Math.floor(step);
        ele.style.top = ele.offsetTop + step + "px";
        if(Math.abs(target-ele.offsetTop)<=Math.abs(step)){
            ele.style.top = target + "px";
            clearInterval(ele.timer);
        }
    },30)
}
//获取浏览器可视区域宽高
function client(){
    if(window.innerHeight !==undefined){
        return{
            "width":window.innerWidth,
            "height":window.innerHeight
        }
    }else if(document.compatMode ==="CSS1Compat"){
        return{
            "width":document.documentElement.clientWidth,
            "height":document.documentElement.clientHeight
        }
    }else{
        return{
            "width":document.body.clientWidth,
            "height":document.body.clientHeight
        }
    }
}

//兼容方法获取元素样式
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr];
    }
    return ele.currentStyle[attr];
}
//缓动多个参数的封装（回调函数）
function animate(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var bool = true;
        for(var k in json){
            //attr == k(键)    target == json[k](值)
            var leader = parseInt(getStyle(ele,k))||0;
            var step = (json[k]-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            ele.style[k] = leader + step + "px";
            if(json[k] !== leader){
                bool = false;
            }
        }
        if(bool){
            ele.style[k] = json[k] + "px";
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },5)
}
//包含层级、透明度的多参数缓动封装
function animate2(ele,json,fn){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        var bool = true;
        for(k in json){
            var leader;
            if(k === "opacity"){
                leader = getStyle(ele,k)*100||1;//不能取整，这样会造成小数位丢失，不精确的情况。
            }else{
                leader = parseInt(getStyle(ele,k))||0;
            }
            var step = (json[k]-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            if(k === "opacity"){
                ele.style[k] = (step+leader)/100;
            }else if(k==="zIndex"){
                ele.style[k] = json[k];
            }else{
                ele.style[k]  = leader + step +"px";
            }
            if(json[k] !== leader){
                bool = false;
            }
        }
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },25)
}
