//需求：鼠标放在盒子上，宽度变大，其余盒子宽度变小
//循环给li上背景
var accor = document.getElementsByClassName("accor")[0];
    //console.log(accor);
var liArr = accor.getElementsByTagName("li");
//console.log(liArr);
//console.log(liArr[1]);
//注意：获取到的集合是伪数组，是HTMLCollection形式的，不是真正的数组，
//其具有如下特征：
//1，具有length属性
//2，按索引方式存储数据
//3，不具有数组的push,pop等方法
//那么怎么把HTMLCollection转化为数组形式？循环遍历将伪数组内容放入新创建的空数组中
var newArr = [];
for(var i=0; i<liArr.length; i++){
    newArr.push(liArr[i]);
}
console.log(newArr);
for(var i= 0;i<newArr.length;i++){
    //注意此处加双引号的位置，除了变量不加，其他作为字符串合并加
    newArr[i].style.background = "url(images/"+(i+1)+".jpg) no-repeat";

    //循环绑定事件，onmouseover时i，相应盒子变宽，其他变窄
    newArr[i].onmouseover = function(){
        //排他思想
        for(var j= 0;j<newArr.length;j++){
//            liArr[j].style.width = "100";//因为要有缓动效果，所以引用缓动函数
            animate(newArr[j],{"width":100});
        }
        animate(this,{"width":800});
    };
    newArr[i].onmouseout = function(){
        //离开，恢复原宽度
        animate(newArr[i],{"width":240});
    }
}