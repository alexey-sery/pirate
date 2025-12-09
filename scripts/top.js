$('.wrapper').on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $(".top").fadeIn();
  } else {
    $(".top").fadeOut();
  }
});

$(".top").click(function () {
  $('.wrapper').animate({ scrollTop: 0 }, 800)
  return false;
});
