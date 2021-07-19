
//Content Transition

$('#creator').on('click', function() {

  $('#creator').addClass('active');
  $('#explorer').removeClass('active');
  $('.underline').addClass('switch-tab'); 

  $('.slider').html("<div class=slider-text1>Digitally-guided tours</div> <div class=slider-text2> Gated content</div>  <div class=slider-text3> Ad partners </div>")

});



$('#explorer').on('click', function() {

  $('#creator').removeClass('active');
  $('#explorer').addClass('active');
  $('.underline').removeClass('switch-tab') 

  $('.slider').html(" <div class=slider-text1> Live events.</div> <div class=slider-text2> Unique deals.</div>  <div class=slider-text3> Video-guided Experiences. </div>")
 
});


$("#creator").click(function(){
  
    $("#heading").find("span")
    .animate({opacity:0})
    .queue(function(){
         $(this).html("Turn Content Creation <br/> into Your Profession")
                .dequeue()

    })
    .animate({opacity:1});  
  
 
});


  $("#explorer").click(function(){
  
    $("#heading").find("span")
    .animate({opacity:0})
    .queue(function(){
         $(this).html("Explore with <br /> your Favorite Creators ")
                .dequeue()
  
    })
    .animate({opacity:1});  
  
  
  });

  // SwiperJs cards slider

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // spaceBetween: 56,
  
  });


  // to reload 

  var video= $('#video').get(0);   
 
video.addEventListener('ended',function(){
  $("#play").removeClass('onPlay');
  video.load();         
},false);

$("#play").click(function(){
  video.play();
  $(this).addClass('onPlay');
})  

