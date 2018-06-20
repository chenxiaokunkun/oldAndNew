$(function(){

    /*主页1 开始*/
    //活动规则 事件
    $('.huodong').click(function(){
        $('.activity_dic').fadeIn();/*活动规则 淡入*/
    });

    //立即邀请 事件
    $('.anniu').click(function(){
        $('#de_fa').fadeIn();/*登陆后发送邀请 淡入*/
        $('#shouye').fadeOut();/*主页1 淡出*/
    });

    //邀请记录 事件
    $('.jilv').click(function(){
        $('#wuhaoyou').fadeIn();/*当前暂无好友接收邀请 淡入*/
        window.location.href='withoutAFriend.html';/*当前暂无好友接收邀请*/
    });
    /*主页1 结束*/




    /*登陆后 发送邀请 开始*/

    //获取手机验证码
    $('#btn').click(function(){

        //锁定手机号码输入框
        $('#phone').attr('disabled',true);

        //开始倒计时
        timer=setInterval(function(){
            num--;
            if(num<=0){
                clearInterval(timer);
                $('#btn').text('获取手机验证码').attr('disabled',false);
                $('#phone').attr('disabled',false);
                num=60;
            }else{
                $('#btn').text('再次获取'+num+'s').attr('disabled',true);
            }
        },1000);



    });


    /*登陆后 发送邀请 结束*/






});