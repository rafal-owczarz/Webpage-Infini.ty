const nav = $('.navbar');
const navLink = $('.nav-link');
const navCollapse = $('.navbar-collapse');

function navBgc() {
  const scrollValue = $(window).scrollTop();
  if (scrollValue > 300) {
    nav.addClass('active');
  } else {
    nav.removeClass('active');
  }
}

function navHide() {
  navCollapse.removeClass('show');
}

$(window).on('scroll', navBgc);
navLink.on('click', navHide);


// Slick JS
$('.slick').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  mobileFirst: true,
  adaptiveHeight: true,
  responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

// AOS
AOS.init({
  disable: 'mobile',
  startEvent: 'DOMContentLoaded',
  offset: 200,
  once: true
});