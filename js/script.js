// text-Slider

$('.Slider').slick({
  vertical: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
});




//Content Transition

$('#creator').on('click', function() {

  $('#creator').addClass('active');
  $('#explorer').removeClass('active');
  $('.underline').addClass('switch-tab'); 

  $('.text1').text("Digitally-guided tours");
  $('.text2').text("Gated Content");
  $('.text3').text("Ad partners");

  $('.h3').css({ 'opacity': '0', 'height': '0px' });
  $('.btn').html("get exclusive access")

});



$('#explorer').on('click', function() {

  $('#creator').removeClass('active');
  $('#explorer').addClass('active');
  $('.underline').removeClass('switch-tab') 

  $('.text1').text("Live events.");
  $('.text2').text(" Unique deals.");
  $('.text3').text("Video-guided Experiences. ");
 
  $('.h3').css({ 'opacity': '1', 'height': 'auto' });
  $('.btn').html("book now")
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

// to reload video

  var video= $('#video').get(0);   
 
video.addEventListener('ended',function(){
  $('video').removeAttr("autoplay");
  $("#play").removeClass('onPlay');
  video.load();         
},false);

$("#play").click(function(){
  video.play();
  $(this).addClass('onPlay');
})  

// responsiveness

var ht = $(".main-content").height();
var win = $(window).height() - 50;

if(ht >= win) {
  $(".footer").css("position", "relative")
}


