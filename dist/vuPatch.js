/*
 * Mike Dettmer
 * http://mikedettmer.com
 * Viewport Unit Patch -- a very ugly way to use viewport units, accomplished with custom data types and jQuery.
 * GPL v2 licensed
 */

(function($) {

    var timerForResize; 

    $.vuPatch = function( passHeight, passWidth ) {
      var viewportHeight, viewportWidth;
      if(!passHeight) { viewportHeight = $(window).height(); } else { viewportHeight = passHeight; }
      if(!passWidth) { viewportWidth = $(window).width(); } else { viewportWidth = passWidth; }
      var oneVH = viewportHeight / 100, oneVW = viewportWidth / 100;
      $('body').children().each(function() {
        if( $(this).data("vh") || $(this).data("vw") ) {
          var thisVH = $(this).data("vh"), thisVW = $(this).data("vw");
          if(thisVH) {
            var newVH = oneVH * thisVH;
            $(this).css("height", newVH);
          }
          if(thisVW) {
            var newVW = oneVW * thisVW;
            $(this).css("width", newVW);
          }
        }
      });
    };

    $(window).resize(function() {
        clearTimeout(timerForResize);
        timerForResize = setTimeout($.vuPatch($(window).height(),$(window).width()), 500);
    });
    
})(jQuery);