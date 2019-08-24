$(document).ready(function(){
  // $("h1").hover(function(){
  //   $(this).css('background-color', '#f00');
  // });
  /* Sticky Navigation */
  $('.js--section-features').waypoint(function(direction){
      if (direction == "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }

  }, {
      offset: '60px;'
  });

  /* Scroll Effect (on clicking buttons) */
  /*
     1. .animate({param}, speed, callback)
          param(required): defined the CSS properties to be animated
          speed(optional): 'slow', 'fast', or in ms
          callback(optional): function to be executed after the animation completes
     2. scrollTop() returns/sets vertical scrollbar position for the selected element
     3. offset() returns/sets offset coordinates for the selected element, relative to the document (i.e. return top, left positions in px)
  */
  $('.js--scroll-to-plans').click(function(){
      $('html, body').animate({
          scrollTop: $('.js--section-plans').offset().top
      }, 1000);
  });

  $('.js--scroll-to-start').click(function(){
      $('html, body').animate({
          scrollTop: $('.js--section-features').offset().top
      }, 1000);
  });

  /* Navigation Scroll (Smooth Scrolling) */
  /* Code snippets from CSS-Tricks */
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});
