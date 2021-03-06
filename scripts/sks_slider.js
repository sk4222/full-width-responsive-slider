
            window.slider_loop;//used to clear slider loop
            (function($)
            {

                $.fn.moveSliderNow = function(init, this_el, movement_amout) {
                    $("ul", this_el).animate({'left': movement_amout}, {
                        duration: init.duration,
                        easing: init.effect,
                        complete: $(this_el).startSlider(init.speed, init.duration, init.effect)
                    });
                };
                $.fn.stopSlider = function() {
                    clearTimeout(slider_loop);
                };
                /**
                 * interaction on top navigation
                 * init contains current setting of slider
                 * slide contains the current slide number
                 * 
                 * @param {type} init
                 * @param {int} current_slide
                 * @param {type} this_el
                 * @returns {undefined}
                 */
                $.fn.goToSlide = function(init, current_slide, this_el, direction, go_to_slide) {
                    if (go_to_slide == undefined) {
                        if (direction == 'left') {//move to left previous button
                            if (current_slide == 0) {//we ar on first slide,go to the last slide   
                                $(".sks_slideshow ul li:nth-child(" + (($(".sks_slideshow ul li:last-child").index() + 1)) + ")").addClass('sks_current').siblings().removeClass('sks_current'); //add class to current slide li
                                $(".sks_bottom_nav span:nth-child(" + (($(".sks_slideshow ul li:last-child").index()) + 1) + ")", this_el).addClass('current').siblings().removeClass('current'); //bottom pagination color effects          
                                $(this_el).moveSliderNow(init, this_el, "-" + (window.innerWidth * $(".sks_slideshow ul li:last-child").index()) + "px");
                            }
                            else {
                                $(".sks_slideshow ul li:nth-child(" + (current_slide) + ")").addClass('sks_current').siblings().removeClass('sks_current'); //add class to current slide li
                                $(".sks_bottom_nav span:nth-child(" + (current_slide) + ")", this_el).addClass('current').siblings().removeClass('current'); //bottom pagination color effects          
                                $(this_el).moveSliderNow(init, this_el, "-" + (window.innerWidth * (current_slide - 1)) + "px");
                            }
                        } else {
                            if (current_slide == ($("ul li", this_el).length - 1)) {//we ar on last slide,go to the 1st slide   
                                $(".sks_slideshow ul li:nth-child(1)").addClass('sks_current').siblings().removeClass('sks_current'); //add class to current slide li
                                $(".sks_bottom_nav span:nth-child(1)", this_el).addClass('current').siblings().removeClass('current'); //bottom pagination color effects          
                                $(this_el).moveSliderNow(init, this_el, "-0px");
                            }
                            else {
                                $(".sks_slideshow ul li:nth-child(" + (current_slide + 2) + ")").addClass('sks_current').siblings().removeClass('sks_current'); //add class to current slide li
                                $(".sks_bottom_nav span:nth-child(" + (current_slide + 2) + ")", this_el).addClass('current').siblings().removeClass('current'); //bottom pagination color effects          
                                $(this_el).moveSliderNow(init, this_el, "-" + (window.innerWidth * (current_slide + 1)) + "px");
                            }
                        }
                    } else {
                        $(".sks_slideshow ul li:nth-child(" + (go_to_slide) + ")").addClass('sks_current').siblings().removeClass('sks_current'); //add class to current slide li
                        $(".sks_bottom_nav span:nth-child(" + (go_to_slide) + ")", this_el).addClass('current').siblings().removeClass('current'); //bottom pagination color effects          
                        $(this_el).moveSliderNow(init, this_el, "-" + (window.innerWidth * (go_to_slide - 1)) + "px");
                    }
                };
                $.fn.rotateEffect = function(startAngle, endAngle, duration, easing, complete) {
                    return this.each(function() {
                        var elem = $(this);
                        $({deg: startAngle}).animate({deg: endAngle}, {
                            duration: duration, easing: easing,
                            step: function(now) {
                                elem.css({
                                    '-moz-transform': 'rotate(' + now + 'deg)',
                                    '-webkit-transform': 'rotate(' + now + 'deg)',
                                    '-o-transform': 'rotate(' + now + 'deg)',
                                    '-ms-transform': 'rotate(' + now + 'deg)',
                                    'transform': 'rotate(' + now + 'deg)'
                                });
                            },
                            complete: complete || $.noop
                        });
                    });
                };
                $.fn.startBottomNavigation = function() {
                    $(this).append("<div class='sks_bottom_nav'></div>");
                    $("ul li", this).each(function() {
                        $(".sks_bottom_nav").append("<span></span>");
                    });
                    $(".sks_bottom_nav span:first-child", this).addClass('current');
                };
                $.fn.startTopNavigation = function() {
                    $(this).append('<div class="sks_top_nav"><div class="sks_left"><img src="./images/left.png" /></div><div class="sks_right"><img src="./images/right.png" /></div></div>');
                    $(".sks_top_nav", this).animate({'width': '94%'}, 'slow');
                };
                $.fn.makeSliderResponsive = function(this_el) {
                    $(this_el).animate({'height': parseInt((window.innerWidth / 2) + 'px')}); //assign slider windwo height
                    $("ul", this_el).animate({'width': (parseInt($("ul li", this).length) * window.innerWidth) + 'px'}); //assign ul width
                    $("ul li img", this_el).animate({'width': window.innerWidth + 'px'}); //assign slider window width
                };
                $.fn.startLoader = function() {
                    var cur_this = this;
                    setTimeout(function() {
                        $(cur_this).css({'transform': 'skew(' + (parseInt(Math.random() * 100)) + 'deg,' + (parseInt(Math.random() * 100)) + 'deg)'});
                        $(cur_this).startLoader();
                    }, 100);
                };
                $.fn.setSliderViewPort = function() {
                    if (window.innerWidth < window.innerHeight)
                    {

                    } else {
                        $(this).animate({'height': window.innerHeight}); //assign slider window height
                        $("ul li img", this).animate({'height': window.innerHeight}); //assign slider window height
                    }
                    $("ul", this).animate({'width': (parseInt($("ul li", this).length) * window.innerWidth) + 'px'}); //assign ul width
                    $("ul li img", this).animate({'width': window.innerWidth + 'px'}); //assign slider window width
                };
                $.fn.setSliderElements = function() {
                };
                /**
                 * It will be called to start the sks slider
                 * speed argument is used to set the speed of the slider
                 * duration argument is used to set the duration of a effect of a slide
                 * effect is the effect which shuld be applied
                 * 
                 * 
                 * @param {+ve integer} speed
                 * @param {+ve integer} duration
                 * @param {+ve string} effect
                 * 
                 * @returns {undefined}
                 */
                $.fn.startSlider = function(speed, duration, effect) {
                    var this_el = this; //assign current reference to a variabel
                    var movement_amout;
                    //                    $("ul li:nth-child(1)", this).addClass('sks_current'); //add class to 1st/current slide for future checks                             

                    window.slider_loop = setTimeout(function() {
                        if ($("ul", this_el).find('.sks_current').index() == 0)//means we are on 1st li of the slider
                        {
                            slide_counter = 2; //go to 2nd slide,this is for adding class to the navigations
                            movement_amout = '-' + window.innerWidth + 'px';
                        }
                        else if (($("ul", this_el).find('.sks_current').index() + 1) == $("ul li", this_el).length)//we are on last slide
                        {
                            slide_counter = 1; //go to 1st slide,this is for adding class to the navigations
                            movement_amout = '0px';
                        } else {
                            //                            slide_counter = slide_counter + 1;//go to next slide,this is for adding class to the navigations
                            slide_counter = $("ul", this_el).find('.sks_current').index() + 1 + 1; //go to next slide,this is for adding class to the navigations
                            movement_amout = '-' + (window.innerWidth * (slide_counter - 1)) + 'px';
                        }
                        $("ul li:nth-child(" + slide_counter + ")", this_el).addClass('sks_current').siblings().removeClass('sks_current'); //add class to current slide li
                        $(".sks_bottom_nav span:nth-child(" + (slide_counter) + ")", this_el).addClass('current').siblings().removeClass('current'); //bottom pagination color effects          
                        $("ul", this_el).animate({'left': movement_amout}, {
                            duration: duration,
                            easing: effect,
                            complete: $(this_el).startSlider(speed, duration, effect)
                        });
                    }, speed);
                };
                //initialize plugin
                $.fn.sks_slideshow = function(options) {
                    var this_el = this;
                    var sks_init = $.extend({
                        // These are the default plugin settings.
                        speed: 2000,
                        duration: 1500,
                        effect: 'easeInElastic',
                        top_navigation: true,
                        bottom_navigation: true
                    }, options);
                    //set the width and height of slider
//                    $(this).setSliderElements();
                    //set the width and height of slider
                    //
                    //

                    //set slider view port
                    $(this).setSliderViewPort();
                    //set slider view port
                    //
                    //
                    //loader
                    $(this).append("<div class='sks_loader' ></div>").queue(function() {
                        //$(".sks_loader", this).startLoader();
                        $(this).dequeue();
                    });
                    //loader                                        
                    //
                    //
                    //set 1st li to current slide
                    $("ul li:nth-child(1)", this).addClass('sks_current');
                    //set 1st li to current slide
                    //
                    //
                    //start slider
                    $('#sks_slideshow').imagesLoaded(function() {
                        // images have loaded       
                        $("#sks_loader").hide(function() {
                            $(this).startSlider(sks_init.speed, sks_init.duration, sks_init.effect); //    
                        });

                    });

                    //start slider
                    //
                    //
                    //slider resize responsive
                    $(window).resize(function() {
                        $(this_el).makeSliderResponsive(this_el);
                    });
                    //slider resize responsive
                    //
                    //
                    //top navigation animation
                    if (sks_init.top_navigation)
                    {
                        $(this).startTopNavigation();
                    }
                    //top navigation animation
                    //
                    //
                    //bottom navigation
                    if (sks_init.bottom_navigation)
                    {
                        $(".sks_bottom_nav span:nth-child(1)", this).addClass('sks_current'); //set 1st slide to current slide
                        $(this).startBottomNavigation();
                        $(".sks_caption").css('bottom', (parseInt($(".sks_bottom_nav").height()) + 4) + 'px');  //caption setting                        
                    } else {
                        $(".sks_caption").css('bottom', '0px');  //caption setting                                                
                    }
                    //bottom navigation
                    //
                    //
                    //slide on click
                    $(".sks_slideshow").on('click', '.sks_top_nav div', function() {
                        $.fn.stopSlider(); //stop slider
                        if ($(this).attr('class') == 'sks_left')
                        {
                            $(this).goToSlide(sks_init, ($("ul", this_el).find('.sks_current').index()), this_el, 'left');
                        } else {
                            $(this).goToSlide(sks_init, ($("ul", this_el).find('.sks_current').index()), this_el, 'right');
                        }

                    });
                    $(".sks_slideshow").on('click', '.sks_bottom_nav span', function() {
                        $.fn.stopSlider(); //stop slider
                        if (($(this).index() + 1) != ($(".sks_bottom_nav").find('.current').index() + 1))
                        {
                            $(this).goToSlide(sks_init, ($(".sks_bottom_nav").find('.current').index()), this_el, '', $(this).index() + 1);
                        }
                    });
                    //slide on click
                    //
                    //
                    //logo effect
                    //                    $(".sks_loader").rotateEffect(0, 360, 500, 'swing');
                    //logo effect

                };
                $(document).ready(function() {
                    //loader
                    var opts = {
                        lines: 15, // The number of lines to draw
                        length: 20, // The length of each line
                        width: 14, // The line thickness
                        radius: 2, // The radius of the inner circle
                        corners: 1, // Corner roundness (0..1)
                        rotate: 0, // The rotation offset
                        direction: 1, // 1: clockwise, -1: counterclockwise
                        color: '#000', // #rgb or #rrggbb or array of colors
                        speed: 1, // Rounds per second
                        trail: 95, // Afterglow percentage
                        shadow: false, // Whether to render a shadow
                        hwaccel: false, // Whether to use hardware acceleration
                        className: 'spinner', // The CSS class to assign to the spinner
                        zIndex: 2e9, // The z-index (defaults to 2000000000)
                        top: '50%', // Top position relative to parent
                        left: '50%' // Left position relative to parent
                    };
                    var target = document.getElementById('sks_loader');
                    var spinner = new Spinner(opts).spin(target);
//                    var spinner = new Spinner().spin();
//                    var el=$("#sks_loader");
//                    target.appendChild(spinner.el);
                    //loader
                });
            }
            (jQuery));


