$(function(){

    //��ȡʧ��
    $('#sok').click(function(){
        $('#chenggong').fadeIn()//��ȡ�ɹ� ����
        $('#ssbai').fadeOut();//��ȡʧ�� ����
    });

    //��ȡ�ɹ� ȷ��
    $('#cok').click(function(){
        $('#yilingqu').fadeIn();//��ȡʧ�ܣ����ƣ�����
        window.location.href='successful.html'//��ȡʧ�ܣ����ƣ�
    });


});