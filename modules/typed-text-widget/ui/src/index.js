/* global apos, $, Typed */

export default function main() {
  apos.util.widgetPlayers.typedText = {
    selector: ".typed-text-widget",
    player(element) {
      $(element).empty(); // clear previous
      const $child = $(`<${element.dataset.widgetTag} style="display: inline-block" />`);
      $child.appendTo(element);
      void new Typed($child.get(0), {
        strings: element.dataset.widgetText.split(","),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
      const $cursor = $(element).find(".typed-cursor");
      const updateCursorStyles = () => {
        for (const prop of ["display", "font-size", "line-height", "margin-top", "margin-bottom"]) {
          $cursor.css(prop, $child.css(prop));
        }
      };
      updateCursorStyles();
      $(window).resize(updateCursorStyles);
    },
  };
}
