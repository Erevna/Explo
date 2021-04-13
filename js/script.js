// Navbar transition transparent to solid
$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $("nav").addClass("navbar-solid");
  } else {
    $("nav").removeClass("navbar-solid");
  }
});

// smooth scroll
var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });

    return false;
});

// image Switch
$(document).ready(function(){
  $(".features-card").click(function(){
      var imgId = "./assets/" + $(this).attr("id");
      // console.log(imgId)
      // Change src attribute of image
      //  $(".s3-mobile-img").attr("src", imgId);

       $('.s3-mobile-img').fadeOut(400, function(){
  
        $(this).attr('src',imgId).bind('onreadystatechange load', function(){
              if (this.complete) $(this).fadeIn(400);
        });
      });
      // 
       if (window.matchMedia('(max-width: 425px)').matches)
        {
          $root.animate({
            scrollTop: $('#features').offset().top
        }, 500);
        }
       
  })   
})


