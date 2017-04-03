/**
 * @file
 * Attaches the behaviors for the Overlay child pages.
 */

(function ($) {

/**
 * Attach the child dialog behavior to new content.
 */
Drupal.behaviors.overlayChild = {
  attach: function (context, settings) {
    // Make sure this behavior is not processed more than once.
    if (this.processed) {
      return;
    }
    this.processed = true;

    // If we cannot reach the parent window, break out of the overlay.
    if (!parent.Drupal || !parent.Drupal.overlay) {
      window.location = window.location.href.replace(/([?&]?)render=overlay&?/g, '$1').replace(/\?$/, '');
    }

    var settings = settings.overlayChild || {};

    // If the entire parent window should be refreshed when the overlay is
    // closed, pass that information to the parent window.
    if (settings.refreshPage) {
      parent.Drupal.overlay.refreshPage = true;
    }

    // If a form has been submitted successfully, then the server side script
    // may have decided to tell the parent window to close the popup dialog.
    if (settings.closeOverlay) {
      parent.Drupal.overlay.bindChild(window, true);
      // Use setTimeout to close the child window from a separate thread,
      // because the current one is busy processing Drupal behaviors.
      setTimeout(function () {
        if (typeof settings.redirect == 'string') {
          parent.Drupal.overlay.redirect(settings.redirect);
        }
        else {
          parent.Drupal.overlay.close();
        }
      }, 1);
      return;
    }

    // If one of the regions displaying outside the overlay needs to be
    // reloaded immediately, let the parent window know.
    if (settings.refreshRegions) {
      parent.Drupal.overlay.refreshRegions(settings.refreshRegions);
    }

    // Ok, now we can tell the parent window we're ready.
    parent.Drupal.overlay.bindChild(window);

    // IE8 crashes on certain pages if this isn't called; reason unknown.
    window.scrollTo(window.scrollX, window.scrollY);

    // Attach child related behaviors to the iframe document.
    Drupal.overlayChild.attachBehaviors(context, settings);

    // There are two links within the message that informs people about the
    // overlay and how to disable it. Make sure both links are visible when
    // either one has focus and add a class to the wrapper for styling purposes.
    $('#overlay-disable-message', context)
      .focusin(function () {
        $(this).addClass('overlay-disable-message-focused');
        $('a.element-focusable', this).removeClass('element-invisible');
      })
      .focusout(function () {
        $(this).removeClass('overlay-disable-message-focused');
        $('a.element-focusable', this).addClass('element-invisible');
      });
  }
};

/**
 * Overlay object for child windows.
 */
Drupal.overlayChild = Drupal.overlayChild || {
  behaviors: {}
};

Drupal.overlayChild.prototype = {};

/**
 * Attach child related behaviors to the iframe document.
 */
Drupal.overlayChild.attachBehaviors = function (context, settings) {
  $.each(this.behaviors, function () {
    this(context, settings);
  });
};

/**
 * Capture and handle clicks.
 *
 * Instead of binding a click event handler to every link we bind one to the
 * document and handle events that bubble up. This also allows other scripts
 * to bind their own handlers to links and also to prevent overlay's handling.
 */
Drupal.overlayChild.behaviors.addClickHandler = function (context, settings) {
  $(document).bind('click.drupal-overlay mouseup.drupal-overlay', $.proxy(parent.Drupal.overlay, 'eventhandlerOverrideLink'));
};

/**
 * Modify forms depending on their relation to the overlay.
 *
 * By default, forms are assumed to keep the flow in the overlay. Thus their
 * action attribute get a ?render=overlay suffix.
 */
Drupal.overlayChild.behaviors.parseForms = function (context, settings) {
  $('form', context).once('overlay', function () {
    // Obtain the action attribute of the form.
    var action = $(this).attr('action');
    // Keep internal forms in the overlay.
    if (action == undefined || (action.indexOf('http') != 0 && action.indexOf('https') != 0)) {
      action += (action.indexOf('?') > -1 ? '&' : '?') + 'render=overlay';
      $(this).attr('action', action);
    }
    // Submit external forms into a new window.
    else {
      $(this).attr('target', '_new');
    }
  });
};

/**
 * Replace the overlay title with a message while loading another page.
 */
Drupal.overlayChild.behaviors.loading = function (context, settings) {
  var $title;
  var text = Drupal.t('Loading');
  var dots = '';

  $(document).bind('drupalOverlayBeforeLoad.drupal-overlay.drupal-overlay-child-loading', function () {
    $title = $('#overlay-title').text(text);
    var id = setInterval(function () {
      dots = (dots.length > 10) ? '' : dots + '.';
      $title.text(text + dots);
    }, 500);
  });
};

/**
 * Switch active tab immediately.
 */
Drupal.overlayChild.behaviors.tabs = function (context, settings) {
  var $tabsLinks = $('#overlay-tabs > li > a');

  $('#overlay-tabs > li > a').bind('click.drupal-overlay', function () {
    var active_tab = Drupal.t('(active tab)');
    $tabsLinks.parent().siblings().removeClass('active').find('element-invisible:contains(' + active_tab + ')').appendTo(this);
    $(this).parent().addClass('active');
  });
};

/**
 * If the shortcut add/delete button exists, move it to the overlay titlebar.
 */
Drupal.overlayChild.behaviors.shortcutAddLink = function (context, settings) {
  // Remove any existing shortcut button markup from the titlebar.
  $('#overlay-titlebar').find('.add-or-remove-shortcuts').remove();
  // If the shortcut add/delete button exists, move it to the titlebar.
  var $addToShortcuts = $('.add-or-remove-shortcuts');
  if ($addToShortcuts.length) {
    $addToShortcuts.insertAfter('#overlay-title');
  }

  $(document).bind('drupalOverlayBeforeLoad.drupal-overlay.drupal-overlay-child-loading', function () {
    $('#overlay-titlebar').find('.add-or-remove-shortcuts').remove();
  });
};

/**
 * Use displacement from parent window.
 */
Drupal.overlayChild.behaviors.alterTableHeaderOffset = function (context, settings) {
  if (Drupal.settings.tableHeaderOffset) {
    Drupal.overlayChild.prevTableHeaderOffset = Drupal.settings.tableHeaderOffset;
  }
  Drupal.settings.tableHeaderOffset = 'Drupal.overlayChild.tableHeaderOffset';
};

/**
 * Callback for Drupal.settings.tableHeaderOffset.
 */
Drupal.overlayChild.tableHeaderOffset = function () {
  var topOffset = Drupal.overlayChild.prevTableHeaderOffset ? eval(Drupal.overlayChild.prevTableHeaderOffset + '()') : 0;

  return topOffset + parseInt($(document.body).css('marginTop'));
};

})(jQuery);
;
/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
;
