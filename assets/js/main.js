(function ($) {
    "use strict";

    jQuery(document).ready(function($){

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));

$grid = $('.grid').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});


$('button').on('click', function() {
  // var a = $(this).attr('data-name')
  var a = this.dataset.name;
  $grid.isotope({
    filter: a
  });
}); 