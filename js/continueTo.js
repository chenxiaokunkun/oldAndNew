$(function(){

    //领取 事件
    $('.yi').click(function(){
        $('#shibai').fadeIn();//失败弹窗 淡入
    });

    //失败弹窗 确定
    $('.okk').click(function(){
        $('#shibai').fadeOut();//失败弹窗 淡出
        $('#chengong').fadeIn();//成功弹窗 淡入
    })

    //成功弹窗 确认
    $('.ok').click(function(){
        $('#chengong').fadeOut();//成功弹窗 淡出
    })

    //返回继续邀请 按钮事件
    $('.anniu').click(function(){
        $('#shouye').fadeIn();//首页 淡入
        window.location.href='index.html'//首页
    })


});