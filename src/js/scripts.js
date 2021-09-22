$(window).on("load", function () {
  // Лоадер
  $(".loader")
    .delay(400)
    .fadeOut(400, () => {
      $("body").removeClass("loading");
    });

  // Якорные ссылки
  $(".anchor").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(aid).offset().top }, "slow");
  });

  // Запуск видео на всякий случай
  $("#bcgVideo")[0].play();
});
