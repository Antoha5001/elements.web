$(function () {
    $(".menuToggle").on('click',function () {

        $('.menu').slideToggle(300,function () {
            console.log($(this).css('display'));

            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        });

    });
});