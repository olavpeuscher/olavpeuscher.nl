/**
 * Add class to nav when page scrolls
 */
$(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
        $('li.current').removeClass('current');
    }

    var windowHeight = $(this).height();
    var headerHeight = 0.8 * windowHeight;

    if ($(this).scrollTop() < headerHeight - 60) {
        $('nav').removeClass('scrolled');
    }else {
        $('nav').addClass('scrolled');
    }

    if ($(this).scrollTop() < headerHeight){
        $('.menu').removeClass('top');
    }else {
        $('.menu').addClass('top');
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
        $('nav.menu').toggleClass('menu-open');
        $(this).toggleClass('open');
    });

    $('nav a').bind('click', function(){
        $('nav.menu').removeClass('menu-open');
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
