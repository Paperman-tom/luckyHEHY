var per = document.getElementsByClassName("person");
var btn = document.getElementsByClassName("btn");
var lucky1=document.getElementById("lucky1");
var lucky2=document.getElementById("lucky2");
var num=0;
var timer=null;//存放定时器的容器
var nam=0;
var arr=['pp','苍娃','科娃','师傅','多多','锐子','屌丝','肥娃','林雨眠',
    '何頔翬','陈彦瑞'];
var count=0;//定义抽奖次数

$(function () {
    $('#stbtn').click(function () {
        clearInterval(timer);
        start();

    });
    $('#clbtn').click(function () {
        lucky1.innerText='';
        lucky2.innerText='';
    })
});


function start(){
    //设置定时器 setInterval 100ms
    timer=setInterval(function(){
        for(var i=0;i<per.length;i++){
            per[i].className='col-xs-6 col-md-3 person';
            per[i].test=arr[i];
        }
        num = Math.floor(Math.random()*11);//获取0-1之间中的随机数 在乘11 然后去掉小数
        per[num].className='col-xs-6 col-md-3 person active';
        nam+=10;

        if(nam>=900){//抽奖的时间限制，当nam自增到900就停止
            clearInterval(timer);//清除定时器
            if(lucky1.innerText===''){
                lucky1.innerText+=arr[num];
            }
            else if(lucky2.innerText===''){
                lucky2.innerText+=arr[num];
            }
            if(count>0){
                btn.innerText="再来一次";
            }
        }

    },100)
    nam=0;
    count++;
}