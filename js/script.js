
$(document).ready(function(){
// Navbar transition transparent to solid
$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
    $("nav").addClass("navbar-solid");
    $(".logo").css('height',3.2 + "rem");
  } else {
    $("nav").removeClass("navbar-solid");
    $(".logo").css('height',3.75 + "rem");
  }
});

$(".navlink").click(function(){

  $('#myCheckbox').prop('checked', false);
  // console.log("done")
});

if (window.matchMedia('(min-width: 769px)').matches){
  VanillaTilt.init(document.querySelector(".mobile-img"));
}

// smooth scroll
var $root = $('html, body');
if (window.matchMedia('(min-width: 426px)').matches){
  $('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });

    return false;
});
}


// image Switch
  $(".features-card").click(function(){
      var imgId = "./assets/" + $(this).attr("id");
      // console.log(imgId)
      // Change src attribute of image
      //  $(".s3-mobile-img").attr("src", imgId);

       $('.s3-mobile-img').fadeOut(100, function(){
  
        $(this).attr('src',imgId).bind('onreadystatechange load', function(){
              if (this.complete) $(this).fadeIn(100);
        });
      });
      
       
  })   
})


