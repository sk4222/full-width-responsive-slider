Full Width Responsive SKS_Slider
A simple jquery full width slider

Usage:

Include slider.css or slider.min.css and use the following html structure:

<div class="full-width">
    <div class="inner">
        <div class="slide">
            <div>
                Lorem ipsum dolor sit amet, consectetur. <br>
                Curabitur molestie elit et ultricies vehicula.
            </div>
            <img src="http://lorempixel.com/1020/400/sports" width="1020" height="400">
        </div>
        <div class="slide">
            <!-- Caption can be omitted without any change in functionality -->
            <img src="http://lorempixel.com/1020/400/cats" width="1020" height="400">
        </div>
    </div>
    <div class="controls">
        <a href="#" class="left">&lt;</a>
        <a href="#" class="right">&gt;</a>
    </div>
    <div class="slide-nav"></div>
</div>
Then include slider.js or slider.min.js and initialise it using:

$('.full-width').fullWidth();
The script automatically adds a CSS class to each slide in this format: slide-1, slide-2, slide-3 etc. These allow you to specifically target slides if you need to add custom styles.

There are two custom events - one that's fired before a slide moves and one that's fired when the slide has stopped moving. These events are triggered on the slider wrapper, in the demo this is .full-width. Here's the example code from the demo page:

$('.full-width').on('fws.start', function(e, data){
    /*
    'data' is an object with the following structure:
    {
        status: {
            current: 0, // current slide number
            previous: 0, // previous slide number
            max: 0 // slide count
        },
        direction: '' // left, right or direct
    }
    */
})
.on('fws.finish', function(e, data){
    /*
    'data' has the same structure as the data object in `fws.move` but without the direction property
    */
});
Options:

$(selector).fullWidth({
    maxHeight   :   450, // maximum height of slider, px
    minHeight   :   375, // minimum height of slider, px
    delay       :   5000, // delay between slides, ms
    transition  :   1000, // transition speed, ms
    maxFont     :   36, // maximum font size, px
    minFont     :   24 // minimum font size, px
});
