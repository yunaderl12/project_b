$(function() {
  $('.shuttlecock').on('click', function(e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: 1010
    }, 500);
  });
});

$(function() {
  $('.tennis-court').on('click', function(e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: 1925
    }, 500);
  });
});

$(function() {
  $('.racquet').on('click', function(e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: 2740
    }, 500);
  });
});