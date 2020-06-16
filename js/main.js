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

$('#view-start').on('click', function(){
    const images = $('#landing').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 2300);
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
