var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });

// get the third slide element
var thirdSlide = $('.blog-slider__item').eq(2);

// add variables to track the previous scroll position and direction
var prevScrollPos = 0;
var scrollUp = false;

// add a listener to the window object to detect scroll events
$(window).on('scroll', function () {
// get the current scroll position
var currentScrollPos = $(this).scrollTop();

// check if the user is scrolling up or down
if (currentScrollPos < prevScrollPos) {
scrollUp = true;
} else {
scrollUp = false;
}

// check if the third slide is being shown and the user is scrolling up
if (swiper.realIndex >= 2 && scrollUp) {
// add a CSS class to the slider element to disable its scroll interception
$('.swiper-wrapper').addClass('scrollable');
} else {
console.log("hellworld")
// remove the CSS class to enable the slider scroll interception
$('.swiper-wrapper').removeClass('scrollable');
}

// update the previous scroll position
prevScrollPos = currentScrollPos;
});