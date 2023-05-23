function openModal() {
    $(".lightbox").css("display", "block");
}

function closeModal() {
    $(".lightbox").css("display", "none")
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var slides = $(".mySlides");
var thumbs = $(".demo");
var slidesLen = slides.length;


function showSlides(n) {

    if (n > slidesLen) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slidesLen;
    }
    $(slides).css("display", "none");
    var slideNum = slideIndex - 1;
    $(thumbs).removeClass("active");
    $(slides[slideNum]).css("display", "block");
    $(thumbs[slideNum]).addClass("active");

}

var number = 0;
function increment(n) {
    if (n === -1) {
        number = Math.max(number - 1, 0);
    } else {
        number += n;
    }
    $(".quantity").text(number);
    $(".item-quantity").css("display", "none");
    $(".item-quantity > p").text(number);
    $(".basket-quantity").text(number);
    $(".amount").text("   $" + number * 125 + ".00");
}

function addTocart() {
        $(".item-quantity").css("display", "block");
}

function openBasket() {
    if ($(".basket-quantity").text() == 0) {
        $(".empty-basket").css("display", "block");
    }
    if ($(".basket-quantity").text() > 0) {
        $(".basket").css("display", "block");
    }
}

function clearCart() {
    $(".quantity").text(0);
    $(".empty-basket").css("display", "block");
    $(".item-quantity").css("display", "none");
    $(".basket").css("display", "none");
}




