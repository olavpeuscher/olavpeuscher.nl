$(document).ready(function() {

	$('#menu-button').hover(function () {

        $('#contact-dropdown').each(function( index ) {
            $( this ).stop().animate({
                width: "200px",
                height: "200px",
                padding: "20px"
              }, 150 * (index + 1), function() {
                // Animation complete.
            });
        });
    }, function () {
        $('#contact-dropdown').each(function( index ) {
            $( this ).stop().animate({
                width: "0px",
                height: "0px",
                padding: "0"
              }, 150, function() {
                // Animation complete.
            });
        });
    });
});

