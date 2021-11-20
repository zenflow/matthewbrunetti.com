/* global WOW, $ */

export default function main() {
  // Initiate the wowjs
  new WOW().init();

  // Loader
  $(document).ready(function () {
    setTimeout(function () {
      $("#loader").removeClass("show");
    }, 100);
  });

  // Back to top button
  $(window).scroll(function () {
    const isAtTop = $(this).scrollTop() <= 50;
    $(".back-to-top")[isAtTop ? "fadeOut" : "fadeIn"]("slow");
  });
  $(".back-to-top").click(function () {
    $("html").animate({ scrollTop: 0 }, 1000, "easeOutBounce");
    return false;
  });

  // Navbar

  const setNavContainerScrolledToTop = () => {
    $(".navcontainer").toggleClass("navcontainer-scrolledtotop", $("html").scrollTop() === 0);
  };
  $(window).scroll(setNavContainerScrolledToTop);
  $(document).ready(setNavContainerScrolledToTop);

  const isOnHomePage = window.location.pathname === "/";
  if (isOnHomePage) {
    const baseTitle = window.document.title;
    const updateState = (hash) => {
      window.history.replaceState({}, "", hash);
      const title = $(`.navbar a.nav-item[href="${hash}"]`).text();
      window.document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    };
    const scrollTo = (element) => {
      const offset = $(element).offset();
      if (!offset) return;
      const scrollTop = Math.max(offset.top, 0);
      $("html").animate({ scrollTop }, 1000, "easeOutCubic");
    };

    let hash = window.location.hash;
    if ($(`.navbar a.nav-item[href="${hash}"]`).length === 0) {
      hash = $(`.navbar a.nav-item[href]`).attr("href");
    }
    $(document).ready(function () {
      updateState(hash);
      if (!window.isEdit) scrollTo(hash);
    });

    $("body").scrollspy({
      spy: "scroll",
      target: ".navbar",
      offset: 100,
    });
    $(window).on("activate.bs.scrollspy", function (event) {
      updateState($(".navbar a.nav-item.active").attr("href"));
    });

    $(".navbar .navbar-nav a").on("click", function (event) {
      event.preventDefault();
      scrollTo(this.hash);
      $(".navbar .navbar-collapse").collapse("hide");
    });
  } else {
    // not isOnHomePage
    const rootPathPart = window.location.pathname.split("/")[1];
    $(".navbar a.nav-item").each(function () {
      $(this).toggleClass("active", this.hash.slice(1) === rootPathPart);
    });
  }
}
