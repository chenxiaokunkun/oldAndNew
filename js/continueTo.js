$(function(){

    //��ȡ �¼�
    $('.yi').click(function(){
        $('#shibai').fadeIn();//ʧ�ܵ��� ����
    });

    //ʧ�ܵ��� ȷ��
    $('.okk').click(function(){
        $('#shibai').fadeOut();//ʧ�ܵ��� ����
        $('#chengong').fadeIn();//�ɹ����� ����
    })

    //�ɹ����� ȷ��
    $('.ok').click(function(){
        $('#chengong').fadeOut();//�ɹ����� ����
    })

    //���ؼ������� ��ť�¼�
    $('.anniu').click(function(){
        $('#shouye').fadeIn();//��ҳ ����
        window.location.href='index.html'//��ҳ
    })


});