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
     * Menu trigger
     **/
    $('#menu-trigger').bind('click', function(){
        $('nav.menu-open').addClass('menu-close');
        setTimeout(function() {
            $('nav').removeClass('menu-close');
        },250);

        $('nav.menu').toggleClass('menu-open');
        $(this).toggleClass('open');

    });

    $('nav a').bind('click', function(){
        $('nav.menu').removeClass('menu-open');
        $('#menu-trigger').removeClass('open');
    });

    /**
     * POrtfolio items texts
     **/
    $('.item .image').bind('click', function(){
        $(this).parent().addClass('open');
    });

    $('.item .close').bind('click', function(){
        $(this).parent().removeClass('open');
    });

    var hash = window.location.hash;

    $('.to-anchor').bind('click', function(){
        var anchor = $(this).attr('target-anchor');

        scrollToAnchor(anchor, 150, 500);

        $(document).find('li.current').removeClass('current');
        $(this).closest('li').addClass('current');
    });

    if(hash){
        $(document).find('a.current').removeClass('current');
        $('.to-anchor[target-anchor="' + hash + '"]').addClass('current');
        setTimeout(function() {
            scrollToAnchor(hash, 150, 500);
        },50)
    }

});
