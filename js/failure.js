$(function(){

    //领取失败
    $('#sok').click(function(){
        $('#chenggong').fadeIn()//领取成功 淡入
        $('#ssbai').fadeOut();//领取失败 淡出
    });

    //领取成功 确认
    $('#cok').click(function(){
        $('#yilingqu').fadeIn();//领取失败（吊牌）淡入
        window.location.href='successful.html'//领取失败（吊牌）
    });


});