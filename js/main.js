/**
 * Add class to nav when page scrolls
 */
$(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
        $('li.current').removeClass('current');
    }

    if ($(this).scrollTop() < 150) {
        $('nav').removeClass('scroll');
        $('section.ep').removeClass('fade-in').addClass('fade-out');
        $('header').removeClass('scroll');
    }else {
        $('nav').addClass('scroll');
        $('header').addClass('scroll');
        $('section.ep').addClass('fade-in').removeClass('fade-out');
    }

    if ($(this).scrollTop() < 500) {
        $('nav').removeClass('bg');
    }else {
        $('nav').addClass('bg');
    }
});

/**
 * Scroll to anchor om page
 */
function scrollToAnchor(anchor, offset, time){

    $('html, body').animate({
        scrollTop: $(anchor).offset().top - offset
    }, time);
    return false;
}

$(document).ready(function()
{
    /**
     * Minimized menu trigger on mobile
     **/
    $('#menu-trigger').bind('click', function(){
        $('nav').toggleClass('menu-open');
        $(this).toggleClass('open');
    });

    $('nav a').bind('click', function(){
        $('nav').removeClass('menu-open');
        $('#menu-trigger').removeClass('open');
    });

    var hash = window.location.hash;

    $('.to-anchor').bind('click', function(){
        var anchor = $(this).attr('target-anchor');

        scrollToAnchor(anchor, 180, 500);

        $(document).find('li.current').removeClass('current');
        $(this).closest('li').addClass('current');
    });

    if(hash){
        $(document).find('a.current').removeClass('current');
        $('.to-anchor[target-anchor="' + hash + '"]').addClass('current');
        setTimeout(function() {
            scrollToAnchor(hash, 180, 500);
        },50)
    }

});
