(function ($) {
  "use strict";

  // loader
  $(document).ready(function () {
    setTimeout(function () {
      $('#loader').removeClass('show');
    }, 1);
  });


  // Initiate the wowjs
  new WOW().init();


  // Back to top button
  $(window).scroll(function () {
    const isAtTop = $(this).scrollTop() <= 50;
    $('.back-to-top')[isAtTop ? 'fadeOut' : 'fadeIn']('slow');
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1000, 'easeOutBounce');
    return false;
  });


  // Navbar
  $(window).scroll(setNavContainerScrolledToTop);
  $(document).ready(setNavContainerScrolledToTop);
  function setNavContainerScrolledToTop() {
    $('.navcontainer').toggleClass('navcontainer-scrolledtotop', $(this).scrollTop() === 0);
  }


  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 50
      }, 1000, 'easeOutExpo');

      if ($(this).parents('.navbar-nav').length) {
        $('.navbar-nav .active').removeClass('active');
        $(this).closest('a').addClass('active');
      }
    }
  });

  // Skills
  $('.skills').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {offset: '80%'});


  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    center: true,
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: { items: 1 }
    }
  });


  // Portfolio filter
  $(document).ready(function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
    $('#portfolio-filter li').on('click', function () {
      $("#portfolio-filter li").removeClass('filter-active');
      $(this).addClass('filter-active');
      portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
  });
})(jQuery);

