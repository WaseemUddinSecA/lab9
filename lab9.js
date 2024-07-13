$(document).ready(function() {
    $('#filters button').click(function() {
        var category = $(this).data('filter');
        if (category === 'all') {
            $('.image').fadeIn();
        } else {
            $('.image').fadeOut(0);
            $('.' + category).fadeIn();
        }
    });
    $('#gallery').on('click', '.image', function() {
        var imgSrc = $(this).find('img').attr('src');
        $('.lightbox-image').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });

    $('#lightbox .close').click(function() {
        $('#lightbox').fadeOut();
    });
});
