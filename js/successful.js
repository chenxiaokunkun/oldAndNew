$(function(){

    //立即更换4G套餐
    $('.danniu').click(function(){
        $('.clingqushibai').fadeIn();//领取失败 淡入
    });

    //立即更换4G套餐
    $('.danniu').click(function(){
        $('#loading').fadeIn();//奖品搬运中 淡入
        window.location.href='loading.html'//奖品搬运中
    });





});