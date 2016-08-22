$(document).ready(function() {


    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 130) {
            $('.navbar').show();
        } else {
            $('.navbar').hide();
        }
    });


    
});


