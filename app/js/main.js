/*global $:true, console:true*/
/*global window */
// (function (){
//   'use strict';

  $(".page").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
    $(this).remove();
  });


  $('.page').click(function () {
    flip();

    window.setInterval(function(){
      $('.page').last().addClass('flip');
    }, 3000);
  });

  function flip (){
    $('.page').last().addClass('flip');
  }

// /.del/ })();
