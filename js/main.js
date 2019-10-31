/**First slider */

$(`.slider-one`)
.not(".slick-intialized")
.slick({

    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".slider-btn .prev",
    nextArrow:".slider-btn .next"
});