/*
 * Mike Dettmer
 * http://mikedettmer.com
 * Viewport Unit Patch -- a very ugly way to use viewport units, accomplished with custom data types and jQuery.
 * GPL v2 licensed
 */

(function($) {

    var timerForResize; 
    var resizeDelay = 500;
    
    $.vuPatch = function( passHeight, passWidth, passDelay ) {
      var viewportHeight, viewportWidth;
      if(passDelay) { resizeDelay = passDelay; }
      if(!passHeight) { viewportHeight = $(window).height(); } else { viewportHeight = passHeight; }
      if(!passWidth) { viewportWidth = $(window).width(); } else { viewportWidth = passWidth; }
      var oneVH = viewportHeight / 100, oneVW = viewportWidth / 100;
      $('[data-vw], [data-vh]').each(function() {
        var $this = $(this), thisVH = $this.data("vh"), thisVW = $this.data("vw");
        if(thisVH) {
          var newVH = oneVH * thisVH;
          $this.css("height", newVH);
        }
        if(thisVW) {
          var newVW = oneVW * thisVW;
          $this.css("width", newVW);
        }
      });
    };

    $(window).resize(function() {
        clearTimeout(timerForResize);
        timerForResize = setTimeout($.vuPatch($(window).height(),$(window).width()), resizeDelay);
    });
    
})(jQuery);