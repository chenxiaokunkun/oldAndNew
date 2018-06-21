

//只执行一次的定时器
/*var num=0;
setTimeout(function(){
    num++;
    console.log(num)
},2000);*/


//执行多次
/*
var num2=0;

var timer=setInterval(function(){
    num2++;
    console.log(num2)
},1000);
clearInterval(timer);//清除连续定时器*/




$(function(){

    var timer;
    var num=60;
    //开启时间
    $('#open').click(function(){
        timer=setInterval(function(){
            num--;
            console.log(num)
        },1000)
    });

    //关闭时间
    $('#close').click(function(){
        clearInterval(timer);
    });

});


















