$(function () {
    var menu = $('nav ul');

    $('#nav__button').on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();

        if(w > 580 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click',function (e) {
        var w = $(window).width();
        if(w < 580){
            console.log(w);
            menu.slideToggle();
        }
    });

    $('a[href*="#"]').click(function (e) {
        e.preventDefault();


        var target = this.hash.slice(1);
         target = $('[id='+target+']');


        $('html, body').animate({
            scrollTop: target.offset().top - 50
        },1000, function () {
            var targetFocus = $(target);
            targetFocus.focus();
            if(targetFocus.is(':focus')){
                return false;
            } else{
                targetFocus.attr('tabindex', '-1');
                targetFocus.focus();
                console.log(targetFocus);
            }
        });

    });

});