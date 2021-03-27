$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $("nav").addClass("navbar-solid");
  } else {
    $("nav").removeClass("navbar-solid");
  }
});
