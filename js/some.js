// $( ".btn-Next" ).click(function() {
//     $(".text-field" ).animate({width:'toggle'},350);
//     $(".priv-box p").text("PRIVALUMAS NR. 2"),350;
//   });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";

    var dots = document.getElementsByClassName("numbertext");
    if (n > dots.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = dots.length
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].style.display = "none";
    }
    dots[slideIndex - 1].style.display = "inline";
}

function showonlyone(thechosenone) {
    $('.x').each(function(index) {
         if ($(this).attr("id") == thechosenone) {
              $(this).slideDown(200);
         }
         else {
              $(this).hide(600);
         }
    });
}