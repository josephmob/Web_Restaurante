// SLIDER

var slideIndex = 1;
showSlides();
setInterval(showSlides,5000);

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

function showSlides() {
    var slides = $(".slider");
    var dots = $(".dot");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    slideIndex++;
}

// NAVBAR

function checkScroll(){
    var navbar = $('#navbar');
    var startY = navbar.height() * 2;
    if($(window).scrollTop() > startY){
        navbar.addClass("scrolled");
    }else{
        navbar.removeClass("scrolled");
    }
}

$(window).on("scroll load resize", function(){
    checkScroll();
});


function scrollTo(element){
	var num= ($("#"+element).offset().top-50);
	$('body').animate({
        scrollTop: num
    }, 800);
}