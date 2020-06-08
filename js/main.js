//Smooth Scroll

$('#view-work').on('click', function(){
    const images = $('#images').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
});

$('#view-mimice').on('click', function(){
    const images = $('#mimice').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 1600);
});

$('#view-poljica').on('click', function(){
    const images = $('#poljica').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 2300);
});