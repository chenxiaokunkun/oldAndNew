$(function(){

    /*主页1 开始*/
    //活动规则 事件
    $('.huodong').click(function(){
        $('.activity_dic').fadeIn();/*活动规则 淡入*/
    });

    //立即邀请 事件
    $('.anniu').click(function(){
        $('#de_fa').fadeIn();/*登陆后发送邀请 淡入*/
        window.location.href='landing.html';
    });

    //邀请记录 事件
    $('.jilv').click(function(){
        $('#wuhaoyou').fadeIn();/*当前暂无好友接收邀请 淡入*/
        window.location.href='withoutAFriend.html';/*当前暂无好友接收邀请*/
    });
    /*主页1 结束*/






});


