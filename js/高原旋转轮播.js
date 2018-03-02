window.onload = function(){
    //需求：点击arrow（箭头的意思），轮播图左右旋转移动
    //步骤：获取相关元素arrow liArr和书写json
    var json = [
        {   //  1
            width:400,
            top:70,
            left:50,
            opacity:20,
            zIndex:2
        },
        {  // 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            zIndex:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            zIndex:4
        },
        {  // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            zIndex:3
        },
        {   //5
            width:400,
            top:70,
            left:750,
            opacity:20,
            zIndex:2
        }
    ];
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var liArr = ul.children;
    var arrow = slide.children[1];
    var arrowChild = arrow.children;
    //在页面加载的时候，先让图赋原始值
    move();
    //绑定事件，当鼠标放入slide，arrow显示，移开隐藏
    slide.onmouseenter = function(){
        animate2(arrow,{"opacity":100});
    }
    slide.onmouseleave = function(){
        animate2(arrow,{"opacity":0});
    }
    //技术点：设置bool类型标志，判断一次变化有没有执行完，执行完才可以执行下一次触发事件，避免多次点击造成图片多次赋值，和电脑的负担。
    var flag = true;
    //点击左右arrow，执行不同的旋转
    for(var k in arrowChild){
        arrowChild[k].onclick = function(){
            if(flag === true){
                if(this.className === "prev"){
                    move(true);
                    flag = false;
                }else if(this.className === "next"){
                    move(false);
                    flag = false;
                }
            }
        }
    }
    function move(bool){
        if(bool !== undefined){
            if(bool){
                //左边按钮：删除最后一个样式，加入最前边
                json.unshift(json.pop());
                //json.push();//在最后添加
                //json.pop();//在最后删除
                //json.unshift();//在最前面添加
                //json.shift();//在最前面删除
            }else{
                //右边按钮：删除第一个样式，加入最后边
                json.push(json.shift());
            }
        }
        //再次为页面的li赋值属性，利用缓动框架，因为li是个数组，座椅要用for循环
        for(var i=0;i<liArr.length;i++){
            //animate2(liArr[i],{
            //    "width":json[i].width,
            //    "top":json[i].top,
            //    "left":json[i].left,
            //    "opacity":json[i].opacity,
            //    "zIndex":json[i].z
            //},function(){
            //    //回调函数，在执行完后，在赋新的属性值，让flag=true
            //    flag = true;
            //})
            //简化写法
            animate2(liArr[i],json[i],function(){
                //回调函数，在执行完后，在赋新的属性值，让flag=true
                flag = true;
            })
        }
    }




}