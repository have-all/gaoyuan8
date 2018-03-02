//    获取需要的标签
var video = document.querySelector("video");
var playBtn = document.querySelector(".switch");
var currProgress = document.querySelector(".curr-progress");
var currTime = document.querySelector(".curr-time");
var totalTime = document.querySelector(".total-time");
var extend = document.querySelector(".extend");
var Ttime = 0;
//需求1：点击playBtn，播放或暂停，缓图标
playBtn.onclick = function(){
    if(video.paused){
        video.play();
        this.classList.remove("icon-play");
        this.classList.add("icon-pause");
    }  else{
        video.pause();
        this.classList.remove("icon-pause");
        this.classList.add("icon-play");
    }
};
//需求2：获取播放总时间，转化时分秒
video.oncanplay = function(){
//            获取视频的总时长
    Ttime = video.duration;
//        转化为时分秒格式
    var h = Math.floor(Ttime/3600);
    var m = Math.floor(Ttime%3600/60);
    var s = Math.floor(Ttime%60);
    h=h>=10?h:"0"+h;
    m=m>=10?m:"0"+m;
    s=s>=10?s:"0"+s;
    totalTime.innerHTML = h+":"+ m +":" + s;
};
var Ctime = 0;
//需求3：获取当前播放时间，转化时分秒
video.ontimeupdate = function(){
    Ctime = video.currentTime;
    //        转化为时分秒格式
    var h = Math.floor(Ctime/3600);
    var m = Math.floor(Ctime%3600/60);
    var s = Math.floor(Ctime%60);
    h = h>=10?h:"0"+h;
    m = m>=10?m:"0"+m;
    s = s>=10?s:"0"+s;
    currTime.innerHTML = h+":"+m+":"+s;
    //需求4：设置进度条播放宽度比例
    var value = Ctime/Ttime;
    currProgress.style.width = value*100+"%";
};
//需求5：点击extend全屏
extend.onclick = function(){
    video.webkitRequestFullscreen();
}