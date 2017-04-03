/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */

// Universal Module Definition
;(function (window, name, fn) {
	// Node module pattern
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = fn;
    } else {
		// browser
        window[name] = fn;

        // AMD definition
        if (typeof define === "function" && define.amd) {
            define(name, [], function (module) {
                return fn;
            });
        }
    }
}(this, 'jRespond', function(win,doc,undefined) {

	'use strict';

	return function(breakpoints) {

		// array for registered functions
		var mediaListeners = [];

		// array that corresponds to mediaListeners and holds the current on/off state
		var mediaInit = [];

		// array of media query breakpoints; adjust as needed
		var mediaBreakpoints = breakpoints;

		// store the current breakpoint
		var curr = '';

		// the previous breakpoint
		var prev = '';

		// window resize event timer stuff
		var resizeTimer;
		var resizeW = 0;
		var resizeTmrFast = 100;
		var resizeTmrSlow = 500;
		var resizeTmrSpd = resizeTmrSlow;

		// cross browser window width
		var winWidth = function() {

			var w = 0;

			// IE
			if (typeof( window.innerWidth ) != 'number') {

				if (!(document.documentElement.clientWidth === 0)) {

					// strict mode
					w = document.documentElement.clientWidth;
				} else {

					// quirks mode
					w = document.body.clientWidth;
				}
			} else {

				// w3c
				w = window.innerWidth;
			}

			return w;
		};

		// determine input type
		var addFunction = function(elm) {
			if (elm.length === undefined) {
				addToStack(elm);
			} else {
				for (var i = 0; i < elm.length; i++) {
					addToStack(elm[i]);
				}
			}
		};

		// send media to the mediaListeners array
		var addToStack = function(elm) {
			var brkpt = elm['breakpoint'];
			var entr = elm['enter'] || undefined;

			// add function to stack
			mediaListeners.push(elm);

			// add corresponding entry to mediaInit
			mediaInit.push(false);

			if (testForCurr(brkpt)) {
				if (entr !== undefined) {
					entr.call(null, {entering : curr, exiting : prev});
				}
				mediaInit[(mediaListeners.length - 1)] = true;
			}
		};

		// loops through all registered functions and determines what should be fired
		var cycleThrough = function() {

			var enterArray = [];
			var exitArray = [];

			for (var i = 0; i < mediaListeners.length; i++) {
				var brkpt = mediaListeners[i]['breakpoint'];
				var entr = mediaListeners[i]['enter'] || undefined;
				var exit = mediaListeners[i]['exit'] || undefined;

				if (brkpt === '*') {
					if (entr !== undefined) {
						enterArray.push(entr);
					}
					if (exit !== undefined) {
						exitArray.push(exit);
					}
				} else if (testForCurr(brkpt)) {
					if (entr !== undefined && !mediaInit[i]) {
						enterArray.push(entr);
					}
					mediaInit[i] = true;
				} else {
					if (exit !== undefined && mediaInit[i]) {
						exitArray.push(exit);
					}
					mediaInit[i] = false;
				}
			}

			var eventObject = {
				entering : curr,
				exiting : prev
			};

			// loop through exit functions to call
			for (var j = 0; j < exitArray.length; j++) {
				exitArray[j].call(null, eventObject);
			}

			// then loop through enter functions to call
			for (var k = 0; k < enterArray.length; k++) {
				enterArray[k].call(null, eventObject);
			}
		};

		// checks for the correct breakpoint against the mediaBreakpoints list
		var returnBreakpoint = function(width) {

			var foundBrkpt = false;

			// look for existing breakpoint based on width
			for (var i = 0; i < mediaBreakpoints.length; i++) {

				// if registered breakpoint found, break out of loop
				if (width >= mediaBreakpoints[i]['enter'] && width <= mediaBreakpoints[i]['exit']) {
					foundBrkpt = true;

					break;
				}
			}

			// if breakpoint is found and it's not the current one
			if (foundBrkpt && curr !== mediaBreakpoints[i]['label']) {
				prev = curr;
				curr = mediaBreakpoints[i]['label'];

				// run the loop
				cycleThrough();

			// or if no breakpoint applies
			} else if (!foundBrkpt && curr !== '') {
				curr = '';

				// run the loop
				cycleThrough();
			}

		};

		// takes the breakpoint/s arguement from an object and tests it against the current state
		var testForCurr = function(elm) {

			// if there's an array of breakpoints
			if (typeof elm === 'object') {
				if (elm.join().indexOf(curr) >= 0) {
					return true;
				}

			// if the string is '*' then run at every breakpoint
			} else if (elm === '*') {
				return true;

			// or if it's a single breakpoint
			} else if (typeof elm === 'string') {
				if (curr === elm) {
					return true;
				}
			}
		};

		// self-calling function that checks the browser width and delegates if it detects a change
		var checkResize = function() {

			// get current width
			var w = winWidth();

			// if there is a change speed up the timer and fire the returnBreakpoint function
			if (w !== resizeW) {
				resizeTmrSpd = resizeTmrFast;

				returnBreakpoint(w);

			// otherwise keep on keepin' on
			} else {
				resizeTmrSpd = resizeTmrSlow;
			}

			resizeW = w;

			// calls itself on a setTimeout
			setTimeout(checkResize, resizeTmrSpd);
		};
		checkResize();

		// return
		return {
			addFunc: function(elm) { addFunction(elm); },
			getBreakpoint: function() { return curr; }
		};

	};

}(this,this.document)));;
(function($) {
'use strict';

// Define jRespond Media queries.
var jRes = jRespond([
  {
    label: 'mobile',
    enter: 0,
    exit: 480
  },{
    label: 'tablet',
    enter: 481,
    exit: 979
  },{
    label: 'desktop',
    enter: 980,
    exit: 9999
  }
]);

// Detect Operating system and add class to the body.
Drupal.behaviors.adminimal_os_class = {
  attach: function (context, settings) {
    // Detect if OS is mac based.
    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
      $("body").addClass("mac");
    }
  }
};

// Modify the Search field for module filter.
Drupal.behaviors.adminimal_module_filter_box = {
  attach: function (context, settings) {
    //Add default hint value using the HTML5 placeholder attribute.
    $('input#edit-module-filter-name').attr( "placeholder", Drupal.t('Search') );
  }
};

// Fix some krumo styling.
Drupal.behaviors.krumo_remove_class = {
  attach: function (context, settings) {
    // Find status messages that has krumo div inside them, and change the classes.
    $('#console .messages.status').has("div.krumo-root").removeClass().addClass( "krumo-wrapper" );
  }
};

// Add media query classes to the body tag.
Drupal.behaviors.adminimal_media_queries = {
  attach: function (context, settings) {
    jRes.addFunc([
      {
        breakpoint: 'mobile',
          enter: function() {
            $( "body" ).addClass( "mq-mobile" );
          },
          exit: function() {
            $( "body" ).removeClass( "mq-mobile" );
          }
      },{
        breakpoint: 'tablet',
          enter: function() {
            $( "body" ).addClass( "mq-tablet" );
          },
          exit: function() {
            $( "body" ).removeClass( "mq-tablet" );
          }
      },{
        breakpoint: 'desktop',
          enter: function() {
            $( "body" ).addClass( "mq-desktop" );
          },
          exit: function() {
            $( "body" ).removeClass( "mq-desktop" );
          }
      }
    ]);
  }
};

// Move the active primary tab on mobile to be displayed last.
Drupal.behaviors.adminimal_move_active_primary_tab = {
  attach: function (context, settings) {
    // Add primary tabs class to the branding div for the bottom border.
    $('#branding').has("ul.tabs.primary").addClass( "has-primary-tabs" );

    // register enter and exit functions for a single breakpoint
    jRes.addFunc({
      breakpoint: 'mobile',
        enter: function() {
          $( "ul.tabs.primary li.active" ).clone().appendTo( "ul.tabs.primary" ).removeClass( "active" ).addClass( "current" );
          $( "ul.tabs.primary li.active" ).css("display", "none");
        },
        exit: function() {
          $( "ul.tabs.primary li.active" ).css("display", "table");
          $( "ul.tabs.primary li.current" ).css("display", "none");
        }
    });
  }
};

})(jQuery);
;
