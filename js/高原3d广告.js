var banner=document.querySelector('.banner');
var item=document.querySelector('.item1');
var center=document.querySelector('.center');
var top1=document.querySelector('.top');
var shadow=document.querySelector('.shadow');
console.log(top);

console.log(item);
var w=item.offsetWidth;
var h=item.offsetHeight;
var centerX=w/2;
var centerY=h/2;
banner.onmousemove=function(e){

    var moveX= e.offsetX;
    var moveY= e.offsetY;
//            console.log(moveX+'----'+moveY);

    var distanceX=moveX-centerX;
    var distanceY=centerY-moveY;

    console.log(distanceX+'|---|'+distanceY);

    var rx=distanceX/centerX;
    var ry=distanceY/centerY;
//            shadow: 30 15
    //  rotate  x:8  y:6
    //  第二层  x:3 y:0.6
    //  第三层： x:4  y:1

//            item 的旋转
    var rotX=rx*6;
    var rotY=ry*8;


    item.style.transform='rotateX('+rotY+'deg) rotateY('+rotX+'deg)';
    setTimeout(function(){
        item.style.transition = 'all 0s';
    },1000)
//             第二层，第三层移动处理
    dismoveX=moveX-centerX;
    dismoveY=moveY-centerY;

    var mrx=dismoveX/centerX;
    var mry=dismoveY/centerY;

//            第二层
    var mx2=mrx*3;
    var my2=mry*1;

    center.style.transform='translateX('+(-mx2)+'px) translateY('+(-my2)+'px)';

//            第三层
    var my3=mry*1.5;
    var mx3=mrx*5;


    top1.style.transition='none';
    top1.style.transform='translateX('+mx3+'px) translateY('+my3+'px)';

//             阴影
    var mx0=mrx*30;
    var my0=mry*15;
    shadow.style.transition="none";
    shadow.style.opacity=1;
    shadow.style.transform='translateX('+(-mx0)+'px) translateY('+(-my0)+'px)';

}
console.log(w+'----'+h);

banner.onmouseout=function() {
    item.style.transition = 'all 0.3s ease-in-out';
    top1.style.transition = 'all 0.3s ease-in-out';
    center.style.transition = 'all 0.3s ese-in-out';
    item.style.transform = 'rotateX(0deg) rotateY(0deg)';
    top1.style.transform = 'none';
    center.style.transform = 'none';
//
}