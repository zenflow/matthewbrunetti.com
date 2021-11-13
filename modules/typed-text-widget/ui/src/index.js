/* global apos, Typed */

export default function main() {
  apos.util.widgetPlayers.typedText = {
    selector: ".typed-text-widget",
    player(element) {
      element.innerHTML = ""; // clear previous
      const child = document.createElement(element.dataset.widgetTag);
      child.style.display = "inline-block";
      element.append(child);
      void new Typed(child, {
        strings: element.dataset.widgetText.split(","),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    },
  };
}
