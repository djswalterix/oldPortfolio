$(document).ready(function () {
  //cambio foto
  $(".progetto").hover(function () {
    var img = $(this).data("url");
    $("#preview").attr("src", "/assets/img/" + img + ".svg");
  });
  //menu a tendina che si chiude da solo
  $(".nav-link").on("click", function (event) {
    $(".fas").click();
  });

  //skills accanto a chi sono in dekstop e tablet
  $(window).on("resize", function () {
    var chiSonoSection = $("#chiSono");
    if ($(window).width() > 980) {
      chiSonoSection.addClass("panda");
    } else {
      chiSonoSection.removeClass("panda");
    }
  });

  // Esegui il controllo all'avvio
  var chiSonoSection = $("#chiSono");
  if ($(window).width() > 980) {
    var sk = $(".skills").remove();
    $(".chiSono").append(sk);
    $(".skillsp").remove();
  }
});
