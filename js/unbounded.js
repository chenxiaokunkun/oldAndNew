$(function(){

    //立即领取 事件
    $('.aanniu').click(function(){
        $('#tanc').fadeIn();//请输入您要领取的手机号 弹窗 淡入
    });


    //锁定验证码
    $('#ma').attr('disabled',true);

    //请输入11位福建移动手机号码
    $('#phone').keyup(function(){
        var atel=$('#phone').val();//获取值
        if(atel.length==11) {
            var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if(myreg.test(atel)){
                $('#btn').attr('disabled',false);//手机到11位，并且格式正确，获取验证码按钮亮
            };
        }else{
            $('#btn').attr('disabled',true);//手机不到11位，获取验证码按钮不亮
        }
    });


    //获取手机验证码
    $('#btn').click(function(){

        var atel=$('#phone').val();//获取值
        if(atel.length==11) {
            var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
            if(!myreg.test(atel)){
                alert('请输入正确的手机号码');
                return;
            }
        }else{
            alert('请输入正确的手机号码');
            return;
        }

        var num=60;
        //锁定手机号码输入框
        $('#phone').attr('disabled',true);

        //亮起手机验证码
        $('#ma').attr('disabled',false);

        //开始倒计时
        timer=setInterval(function(){
            num--;
            if(num<=0){
                clearInterval(timer);
                $('#btn').text('获取验证码').attr('disabled',false);
                $('#phone').attr('disabled',false);
                num=60;
            }else{
                $('#btn').text(num+'s').attr('disabled',true);
            }
        },200);
    });

    //验证码
    $('#ma').keyup(function(){
        var tel=$('#phone').val();//获取手机号码值
        var ma=$('#ma').val();//获取验证码值
        if(ma.length==6){
            $('#fayq').attr('disabled',false);//验证码6位数，发起邀请按钮亮起来
        }else{
            $('#fayq').attr('disabled',true);//验证码不到6位数。发起邀请按钮不亮
        }
    });


    //立即领取 事件
    $('#fayq').click(function(){
        $('#manl').fadeIn();//手慢了 流量已被其他好友抢完 淡入
        window.location.href='bothThe.html'//手慢了 流量已被其他好友抢完
    });














});