$(document).ready(function() {
    $('.dropdown a .fa-bars').click(function() {
        $(".dropdown-content").toggleClass('show');
    })
});

// Slider integration

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

// Menu list changing

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
// Menu button clicked color change
$('.mini-items ul li').click(function () {
    $('.mini-items ul li').css('background-color', '#584b3b');
    $(this).css('background-color', '#9eb46a');
  });

//   Form validation

function onFormSubmit() {
    var email = document.forms['login-form']['email'].value;
    var phone = document.forms['login-form']['phone'].value;
    var message = document.getElementById("textArea").value;
    var elementas = document.getElementById('p1');


    if (email == "") {
        elementas.innerHTML = "Įveskite savo el pašto adresą!";
        elementas.className = "red-alert";
        return false;

    }else if (phone == "") {
        elementas.innerHTML = "Įveskite savo tel. numerį!";
        elementas.className = "red-alert";
        return false;

    }else if (!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone)) {
        elementas.innerHTML = "Neteisingas telefono mureis";
        elementas.className = "red-alert";
        return false;
    
    }else if (message == "") {
        elementas.innerHTML  = "Įrašykite žinutę!";
        elementas.className = "red-alert";
        return false;
    }else {
        elementas.innerHTML = "Laikas rezervuotas, greitu metu mes su jumis susisieksime!";
        elementas.className = "green-alert";
        return true;

    }
}
