// document.addEventListener("DOMContentLoaded", function (event) {

//   // Якорные ссылки
//   document.querySelectorAll(".anchor").forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute("href")).scrollIntoView({
//         behavior: "smooth",
//       });
//     });
//   });

//   // Запуск видео на всякий случай
//   document.getElementById("bcgVideo").play();
// });

$(window).on("load", function () {
  $(".loader").delay(400).fadeOut(400);

  $(".anchor").click(function (e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(aid).offset().top }, "slow");
  });
});
