$(document).on("load", function () {
  // Лоадер
  $(".loader")
    .delay(400)
    .fadeOut(400, () => {
      $("body").removeClass("loading");
    });

  // Запуск видео на всякий случай
  $("#bcgVideo")[0].play();

  // alert(1);

  // Якорные ссылки
  $(".anchor").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(aid).offset().top }, "slow");
  });
});

// var video = document.getElementById("bcgVideo");
// video.onloadeddata = function () {
//   $(".loader")
//     .delay(400)
//     .fadeOut(400, () => {
//       $("body").removeClass("loading");
//     });
//   alert(2);
// };
