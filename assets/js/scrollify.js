/*$(function () {
  $.scrollify({
    section: ".panel", // Selettore delle sezioni
    easing: "easeOutExpo", // Animazione di scorrimento
    scrollSpeed: 800, // Velocità di scorrimento
    setHeights: true, // Imposta l'altezza delle sezioni in base al contenuto
  });
});*/
/**/
$.scrollify({
  section: ".panel",
  interstitialSection: "",
  easing: "easeOutExpo",
  scrollSpeed: 600,
  offset: 0,
  scrollbars: true,
  standardScrollElements: "",
  setHeights: false,
  overflowScroll: true,
  updateHash: true,
  touchScroll: true,
  before: function () {},
  after: function () {},
  afterResize: function () {},
  afterRender: function () {},
});
/*if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  $.scrollify.disable();
}
*/
/*
$(function () {
  $.scrollify({
    section: ".panel",
    scrollbars: false,
    setHeights: false,

    before: function (i, panels) {
      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination")
        .find('a[href="#' + ref + '"]')
        .addClass("active");
    },
    afterRender: function () {
      var pagination = '<ul class="pagination">';
      var activeClass = "";
      $(".panel").each(function (i) {
        activeClass = "";
        if (i === $.scrollify.currentIndex()) {
          activeClass = "active";
        }
        pagination +=
          '<li><a class="' +
          activeClass +
          '" href="#' +
          $(this).attr("data-section-name") +
          '"><span class="hover-text">' +
          $(this).attr("data-section-name").charAt(0).toUpperCase() +
          $(this).attr("data-section-name").slice(1) +
          "</span></a></li>";
      });

      pagination += "</ul>";

      $(".home").append(pagination);
      /*

      Tip: The two click events below are the same:

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

     
      $(".pagination a").on("click", $.scrollify.move);
    },
  });
});
*/
