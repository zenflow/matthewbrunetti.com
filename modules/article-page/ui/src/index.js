/* global $ */

export default function articlePageInit() {
  $(".article-index").each(function () {
    const $self = $(this);
    $(document).ready(updateArticleListItems);
    $self.find(".topic-selector").on("change", updateArticleListItems);

    function updateArticleListItems() {
      const topic = $self.find(".topic-selector").get(0).elements.topic.value;
      $self.find(".article-list").isotope({
        itemSelector: ".article-list-item__wrapper",
        layoutMode: "fitRows",
        filter: topic ? `.${topic}` : "*",
      });
    }
  });
}
