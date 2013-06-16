/*global $:true, console:true*/
/*global window */
(function (){
  'use strict';

  $(".page").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
    $(this).remove();
  });


  $('.page').click(function () {
    $(this).addClass('flip');
  });

})();
