$(function(){

    //��������4G�ײ�
    $('#danniu').click(function(){
        var idVal=$("#hid").val();
        if(idVal.length==0){
            $("#hid").val(1);
            $('.clingqushibai').fadeIn();//��ȡʧ�� ����
        }else{
            $('#loading').fadeIn();//��Ʒ������ ����
            window.location.href='loading.html'//��Ʒ������
        }

    });






});