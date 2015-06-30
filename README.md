# viewportUnitPatch
Dirty jquery hack to use viewport units on any browser that can run jquery. This should include IE6+.

Viewport units are a godsend to front end devs. However, they are not fully supported across the spectrum of end user browsers. I'm trying to find a way to make that happen. 

The result is this library.

## Usage
Use a conditional tag to only load the scripts on older versions of IE
```
<!--[if lte IE 8]>
<script src="/js/jQuery-1.x.x.js"></script>
<script src="/js/vuPatch.min.js"></script>
<script>
  vuPatch(500);
</script>
<![endif]-->
```
Then, structure elements that you want to scale to viewport units (vh or vw in CSS3) with the data types of `data-vh=` and `data-vw=`.

Or, if you're targeting any of the browsers shown [here](http://caniuse.com/#feat=viewport-units) (iOS7, vmax in any version of IE, Opera Mini, Android 4.2 and below), don't use the IE conditional tag.
```
<script src="/js/jQuery-1.x.x.js"></script>
<script src="/js/vuPatch.min.js"></script>
<script>
  vuPatch(500);
</script>
```
### New! vmin & vmax!
Now supports `data-vmax` and `data-vmin`. If you don't specify a `data-vmin-for` or `data-vmax-for`, the library will default to assigning the calculated value to height. Valid values for `data-vmin-for` and `data-vmax-for` are `"width"` and `"height"`.
```
<div data-vh="50" data-vw="30"></div>
<div data-vw="75"></div>
<div data-vmin="20" data-vmin-for="width"></div>
<div data-vmax="40" data-vmax-for="width" data-vmin="50" data-vmin-for="height"></div>
```
The `500` in the function initializer is the delay you would like to set for the resizing event. By default the delay is 500 milliseconds, and that will be used if you do not specify a number. I wouldn't recommend setting it lower than 250.

For a more in-depth look at this library, including how it operates and when it's appropriate to use, check [my blog](http://mikedettmer.com/projects/viewportunitpatch/).

## Demo
Check [here](http://mikedettmer.com/demo/vuPatch/) for a basic example, go ahead and resize the window. Check [here](http://mikedettmer.com/demo/vuPatch/fullPage.html) for an example of how to use this to make a page behave as a set of fullscreen slides.

## Disclaimer
This library should be used sparingly, and shouldn't be relied upon to style every element on your pages. Stick with a few specific elements, or larger containers.

This project started as a "Can I actually do that?", turned into "Wow this is possible but incredibly poorly implemented" and has now turned into "I bet I can make this useful and performant".

If you have any ideas on how to improve this library, please open an issue or send a pull request!