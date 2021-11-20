/* global WOW, $ */

export default function main() {
  // Initiate the wowjs
  new WOW().init();

  // Loader
  $(document).ready(function () {
    setTimeout(function () {
      $("#loader").removeClass("show");
    }, 1);
  });

  // Back to top button
  $(window).scroll(function () {
    const isAtTop = $(this).scrollTop() <= 50;
    $(".back-to-top")[isAtTop ? "fadeOut" : "fadeIn"]("slow");
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000, "easeOutBounce");
    return false;
  });

  // Navbar
  $(window).scroll(setNavContainerScrolledToTop);
  $(document).ready(setNavContainerScrolledToTop);

  function setNavContainerScrolledToTop() {
    $(".navcontainer").toggleClass("navcontainer-scrolledtotop", $(this).scrollTop() === 0);
  }

  $(".navbar-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $(this.hash).offset().top - 60 }, 1000, "easeOutExpo");
      if ($(this).parents(".navbar-nav").length) {
        $(".navbar-nav .active").removeClass("active");
        $(this).closest("a").addClass("active");
      }
    }
  });
}
