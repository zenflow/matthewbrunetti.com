/* global apos, $ */

export default function main() {
  apos.util.widgetPlayers.mainHero = {
    selector: ".section-hero-widget",
    player(element) {
      $(element).find(".hero-image img").tilt();
    },
  };
}
