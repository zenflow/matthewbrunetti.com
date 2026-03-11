/* global apos, $ */

export default function main() {
  apos.util.widgetPlayers.sectionTestimonials = {
    selector: ".section-testimonials-widget",
    player(element) {
      const $carousel = $(element).find(".testimonials-carousel");
      if ($carousel.hasClass("owl-loaded")) return; // bail if previously loaded
      $carousel.owlCarousel({
        center: true,
        autoplay: true,
        loop: true,
        responsive: {
          0: { items: 1 },
        },
      });
    },
  };
}
