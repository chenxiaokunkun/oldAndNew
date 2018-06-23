$(function(){

    //立即更换4G套餐
    $('#danniu').click(function(){
        var idVal=$("#hid").val();
        if(idVal.length==0){
            $("#hid").val(1);
            $('.clingqushibai').fadeIn();//领取失败 淡入
        }else{
            $('#loading').fadeIn();//奖品搬运中 淡入
            window.location.href='loading.html'//奖品搬运中
        }

    });






});