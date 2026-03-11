/* global apos, $ */

export default function main() {
  apos.util.widgetPlayers.sectionDummyPortfolio = {
    selector: ".section-dummy-portfolio-widget",
    player(element) {
      $(document).ready(function () {
        const isotope = $(element).find(".portfolio-container").isotope({
          itemSelector: ".portfolio-item",
          layoutMode: "fitRows",
        });
        $(element)
          .find(".portfolio-filter li")
          .on("click", function () {
            $(element).find(".portfolio-filter li").removeClass("filter-active");
            $(this).addClass("filter-active");
            isotope.isotope({ filter: $(this).data("filter") });
            return true;
          });
      });
    },
  };
}
