/* global apos, $ */

export default function main() {
  apos.util.widgetPlayers.percentages = {
    selector: ".block-percentages-widget",
    player(element) {
      $(element).waypoint(
        function () {
          $(element)
            .find(".progress-bar")
            .each(function () {
              $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
        },
        { offset: "80%" },
      );
    },
  };
}
