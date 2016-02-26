
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


$(document).ready(function() {
  $('.row img').animate({
    opacity:.5
  });
  $('.row img').hover(function() {
    $(this).stop().animate({opacity:1}, 'fast');
  }, function() {
    $(this).stop().animate({opacity:.5}, 'slow');

  });
});
