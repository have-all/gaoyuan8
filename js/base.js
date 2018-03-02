//需求：点击ol中的li，屏幕滑动到对应的ul中的li的范围。
//思路：还是利用window.scrollTo();利用缓动动画原理实现屏幕滑动。
//步骤：
//0.获取元素
//1.指定ul和ol中的li的背景色，对应的li背景色相同
//2.老三步。(获取元素并绑定事件)
//3.利用缓动动画原理实现屏幕滑动
//4.用scroll事件模拟盒子距离最顶端的距离。

//0.获取元素
var ul = document.getElementsByTagName("ul")[0];
var ol = document.getElementsByTagName("ol")[0];
var ulLiArr = ul.children;
var olLiArr = ol.children;
var target = 0;var leader = 0;var timer = null;
//1.指定ul和ol中的li的背景色，对应的li背景色相同
//设置一个数组，里面装颜色，然指定的颜色给数组中的指定元素
var arrColor = ["pink","#FCFAC1","yellow","#BB74AB","#64B36B","#FCFAC1","yellow","orange","#64B26B","#36A1A4"];
//利用for循环给两个数组的元素上色
for(var i=0;i<arrColor.length;i++){
    //上色
    //ulLiArr[i].style.backgroundColor = arrColor[i];
    olLiArr[i].style.backgroundColor = arrColor[i];


    //属性绑定索引值
    olLiArr[i].index = i;
    //2.老三步。(并绑定事件)循环绑定，为每一个li绑定点击事件
    olLiArr[i].onclick = function () {
        //***获取目标位置
        //获取索引值。
        target = ulLiArr[this.index].offsetTop;

        //要用定时器，先清除定时器
        clearInterval(timer);
        //3.利用缓动动画原理实现屏幕滑动
        timer = setInterval(function () {
            //(1).获取步长
            var step = (target-leader)/10;
            //(2).二次处理步长
            step = step>0?Math.ceil(step):Math.floor(step);
            //(3).屏幕滑动
            leader = leader + step;
            window.scrollTo(0,leader);
            //(4).清除定时器
            if(Math.abs(target-leader)<=Math.abs(step)){
                window.scrollTo(0,target);
                clearInterval(timer);
            }
        },25);
    }
}

//4.用scroll事件模拟盒子距离最顶端的距离。
window.onscroll = function () {
    //每次屏幕滑动，把屏幕卷去的头部赋值给leader,模拟获取显示区域距离顶部的距离
    leader = scroll().top;
}
