/*
 * Mike Dettmer
 * http://mikedettmer.com
 * Viewport Unit Patch -- a very ugly way to use viewport units, accomplished with custom data types and jQuery.
 * GPL v2 licensed
 */

(function($) {

    var timerForResize; 
    var resizeDelay = 500;
    
    vuPatch = function( passDelay ) {
      var $window = $(window), viewportHeight = $window.height(), viewportWidth = $window.width();
      var oneVH = viewportHeight / 100, oneVW = viewportWidth / 100, vMax, vMin;
      if( passDelay ) { resizeDelay = passDelay; }
      if( oneVH >= oneVW ) {
        vMax = oneVH, vMin = oneVW;
      } else if( oneVH < oneVW ) {
        vMax = oneVW, vMin = oneVH;
      }
      $('[data-vw], [data-vh], [data-vmin], [data-vmax]').each(function() {
        var $this = $(this), thisVH = $this.data("vh"), thisVW = $this.data("vw"), thisVMax = $this.data("vmax"), thisVMin = $this.data("vmin"), thisVMinFor = $this.data("vmin-for"), thisVMaxFor = $this.data("vmax-for");
        if( thisVH ) {
          var newVH = oneVH * thisVH;
          $this.css("height", newVH);
        }
        if( thisVW ) {
          var newVW = oneVW * thisVW;
          $this.css("width", newVW);
        }
        if( thisVMax ) {
          var newVMax = vMax * thisVMax;
          switch(thisVMaxFor) {
            case "height":
            default:
              $this.css("height", newVMax);
              break;
            case "width":
              $this.css("width", newVMax);
          }
        }
        if ( thisVMin ) {
          var newVMin = vMin * thisVMin;
          switch(thisVMinFor) {
            case "height":
            default:
              $this.css("height", newVMin);
              break;
            case "width":
              $this.css("width", newVMin);
          }
        }
      });
    };

    $(window).resize(function() {
        clearTimeout(timerForResize);
        timerForResize = setTimeout(vuPatch(resizeDelay), resizeDelay);
    });
    
})(jQuery);