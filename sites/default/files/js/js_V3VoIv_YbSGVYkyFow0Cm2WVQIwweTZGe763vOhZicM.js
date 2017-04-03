(function ($) {

/**
 * Attaches double-click behavior to toggle full path of Krumo elements.
 */
Drupal.behaviors.devel = {
  attach: function (context, settings) {

    // Add hint to footnote
    $('.krumo-footnote .krumo-call').once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="' + settings.basePath + 'misc/help.png"/>');

    var krumo_name = [];
    var krumo_type = [];

    function krumo_traverse(el) {
      krumo_name.push($(el).html());
      krumo_type.push($(el).siblings('em').html().match(/\w*/)[0]);

      if ($(el).closest('.krumo-nest').length > 0) {
        krumo_traverse($(el).closest('.krumo-nest').prev().find('.krumo-name'));
      }
    }

    $('.krumo-child > div:first-child', context).dblclick(
      function(e) {
        if ($(this).find('> .krumo-php-path').length > 0) {
          // Remove path if shown.
          $(this).find('> .krumo-php-path').remove();
        }
        else {
          // Get elements.
          krumo_traverse($(this).find('> a.krumo-name'));

          // Create path.
          var krumo_path_string = '';
          for (var i = krumo_name.length - 1; i >= 0; --i) {
            // Start element.
            if ((krumo_name.length - 1) == i)
              krumo_path_string += '$' + krumo_name[i];

            if (typeof krumo_name[(i-1)] !== 'undefined') {
              if (krumo_type[i] == 'Array') {
                krumo_path_string += "[";
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += krumo_name[(i-1)];
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += "]";
              }
              if (krumo_type[i] == 'Object')
                krumo_path_string += '->' + krumo_name[(i-1)];
            }
          }
          $(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">' + krumo_path_string + '</div>');

          // Reset arrays.
          krumo_name = [];
          krumo_type = [];
        }
      }
    );
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.textarea = {
  attach: function (context, settings) {
    $('.form-textarea-wrapper.resizable', context).once('textarea', function () {
      var staticOffset = null;
      var textarea = $(this).addClass('resizable-textarea').find('textarea');
      var grippie = $('<div class="grippie"></div>').mousedown(startDrag);

      grippie.insertAfter(textarea);

      function startDrag(e) {
        staticOffset = textarea.height() - e.pageY;
        textarea.css('opacity', 0.25);
        $(document).mousemove(performDrag).mouseup(endDrag);
        return false;
      }

      function performDrag(e) {
        textarea.height(Math.max(32, staticOffset + e.pageY) + 'px');
        return false;
      }

      function endDrag(e) {
        $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
        textarea.css('opacity', 1);
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.dateYearRange = {};

Drupal.behaviors.dateYearRange.attach = function (context, settings) {
  var $textfield, $textfields, i;

  // Turn the years back and forward fieldsets into dropdowns.
  $textfields = $('input.select-list-with-custom-option', context).once('date-year-range');
  for (i = 0; i < $textfields.length; i++) {
    $textfield = $($textfields[i]);
    new Drupal.dateYearRange.SelectListWithCustomOption($textfield);
  }
};


Drupal.dateYearRange = {};

/**
 * Constructor for the SelectListWithCustomOption object.
 *
 * This object is responsible for turning the years back and forward textfields
 * into dropdowns with an 'other' option that lets the user enter a custom
 * value.
 */
Drupal.dateYearRange.SelectListWithCustomOption = function ($textfield) {
  this.$textfield = $textfield;
  this.$description = $textfield.next('div.description');
  this.defaultValue = $textfield.val();
  this.$dropdown = this.createDropdown();
  this.$dropdown.insertBefore($textfield);
};

/**
 * Get the value of the textfield as it existed on page load.
 *
 * @param {String} type
 *   The type of the variable to be returned. Defaults to string.
 * @return
 *   The original value of the textfield. Returned as an integer, if the type
 *   parameter was 'int'.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.getOriginal = function (type) {
  var original;
  if (type === 'int') {
    original = parseInt(this.defaultValue, 10);
    if (window.isNaN(original)) {
      original = 0;
    }
  }
  else {
    original = this.defaultValue;
  }
  return original;
};

/**
 * Get the correct first value for the dropdown.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.getStartValue = function () {
  var direction = this.getDirection();
  var start;
  switch (direction) {
    case 'back':
      // For the 'years back' dropdown, the first option should be -10, unless
      // the default value of the textfield is even smaller than that.
      start = Math.min(this.getOriginal('int'), -10);
      break;
    case 'forward':
      start = 0;
      break;
  }
  return start;
};

/**
 * Get the correct last value for the dropdown.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.getEndValue = function () {
  var direction = this.getDirection();
  var end;
  var originalString = this.getOriginal();
  switch (direction) {
    case 'back':
      end = 0;
      break;
    case 'forward':
      // If the original value of the textfield is an absolute year such as
      // 2020, don't try to include it in the dropdown.
      if (originalString.indexOf('+') === -1) {
        end = 10;
      }
      // If the original value is a relative value (+x), we want it to be
      // included in the possible dropdown values.
      else {
        end = Math.max(this.getOriginal('int'), 10);
      }
      break;
  }
  return end;
};

/**
 * Create a dropdown select list with the correct options for this textfield.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.createDropdown = function () {
  var $dropdown = $('<select>').addClass('form-select date-year-range-select');
  var $option, i, value;
  var start = this.getStartValue();
  var end = this.getEndValue();
  var direction = this.getDirection();
  for (i = start; i <= end; i++) {
    // Make sure we include the +/- sign in the option value.
    value = i;
    if (i > 0) {
      value = '+' + i;
    }
    // Zero values must have a + or - in front.
    if (i === 0) {
      if (direction === 'back') {
        value = '-' + i;
      }
      else {
        value = '+' + i;
      }
    }
    $option = $('<option>' + Drupal.formatPlural(value, '@count year from now', '@count years from now') + '</option>').val(value);
    $dropdown.append($option);
  }
  // Create an 'Other' option.
  $option = $('<option class="custom-option">' + Drupal.t('Other') + '</option>').val('');
  $dropdown.append($option);

  // When the user changes the selected option in the dropdown, perform
  // appropriate actions (such as showing or hiding the textfield).
  $dropdown.bind('change', $.proxy(this.handleDropdownChange, this));

  // Set the initial value of the dropdown.
  this._setInitialDropdownValue($dropdown);
  return $dropdown;
};

Drupal.dateYearRange.SelectListWithCustomOption.prototype._setInitialDropdownValue = function ($dropdown) {
  var textfieldValue = this.getOriginal();
  // Determine whether the original textfield value exists in the dropdown.
  var possible = $dropdown.find('option[value="' + textfieldValue + '"]');
  // If the original textfield value is one of the dropdown options, preselect
  // it and hide the 'other' textfield.
  if (possible.length) {
    $dropdown.val(textfieldValue);
    this.hideTextfield();
  }
  // If the original textfield value isn't one of the dropdown options, choose
  // the 'Other' option in the dropdown.
  else {
    $dropdown.val('');
  }
};

/**
 * Determine whether this is the "years back" or "years forward" textfield.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.getDirection = function () {
  if (this.direction) {
    return this.direction;
  }
  var direction;
  if (this.$textfield.hasClass('back')) {
    direction = 'back';
  }
  else if (this.$textfield.hasClass('forward')) {
    direction = 'forward';
  }
  this.direction = direction;
  return direction;
};

/**
 * Change handler for the dropdown, to modify the textfield as appropriate.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.handleDropdownChange = function () {
  // Since the dropdown changed, we need to make the content of the textfield
  // match the (new) selected option.
  this.syncTextfield();

  // Show the textfield if the 'Other' option was selected, and hide it if one
  // of the preset options was selected.
  if ($(':selected', this.$dropdown).hasClass('custom-option')) {
    this.revealTextfield();
  }
  else {
    this.hideTextfield();
  }
};

/**
 * Display the textfield and its description.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.revealTextfield = function () {
  this.$textfield.show();
  this.$description.show();
};

/**
 * Hide the textfield and its description.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.hideTextfield = function () {
  this.$textfield.hide();
  this.$description.hide();
};

/**
 * Copy the selected value of the dropdown to the textfield.
 *
 * FAPI doesn't know about the JS-only dropdown, so the textfield needs to
 * reflect the value of the dropdown.
 */
Drupal.dateYearRange.SelectListWithCustomOption.prototype.syncTextfield = function () {
  var value = this.$dropdown.val();
  this.$textfield.val(value);
};

})(jQuery);
;
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.dateAdmin = {};

Drupal.behaviors.dateAdmin.attach = function (context, settings) {
  // Remove timezone handling options for fields without hours granularity.
  var $hour = $('#edit-field-settings-granularity-hour').once('date-admin');
  if ($hour.length) {
    new Drupal.dateAdmin.TimezoneHandler($hour);
  }
};


Drupal.dateAdmin = {};

/**
 * Constructor for the TimezoneHandler object.
 *
 * This object is responsible for showing the timezone handling options dropdown
 * when the user has chosen to collect hours as part of the date field, and
 * hiding it otherwise.
 */
Drupal.dateAdmin.TimezoneHandler = function ($checkbox) {
  this.$checkbox = $checkbox;
  this.$dropdown = $('#edit-field-settings-tz-handling');
  this.$timezoneDiv = $('.form-item-field-settings-tz-handling');
  // Store the initial value of the timezone handling dropdown.
  this.storeTimezoneHandling();
  // Toggle the timezone handling section when the user clicks the "Hour"
  // checkbox.
  this.$checkbox.bind('click', $.proxy(this.clickHandler, this));
  // Trigger the click handler so that if the checkbox is unchecked on initial
  // page load, the timezone handling section will be hidden.
  this.clickHandler();
};

/**
 * Event handler triggered when the user clicks the "Hour" checkbox.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.clickHandler = function () {
  if (this.$checkbox.is(':checked')) {
    this.restoreTimezoneHandlingOptions();
  }
  else {
    this.hideTimezoneHandlingOptions();
  }
};

/**
 * Hide the timezone handling options section of the form.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.hideTimezoneHandlingOptions = function () {
  this.storeTimezoneHandling();
  this.$dropdown.val('none');
  this.$timezoneDiv.hide();
};

/**
 * Show the timezone handling options section of the form.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.restoreTimezoneHandlingOptions = function () {
  var val = this.getTimezoneHandling();
  this.$dropdown.val(val);
  this.$timezoneDiv.show();
};

/**
 * Store the current value of the timezone handling dropdown.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.storeTimezoneHandling = function () {
  this._timezoneHandling = this.$dropdown.val();
};

/**
 * Return the stored value of the timezone handling dropdown.
 */
Drupal.dateAdmin.TimezoneHandler.prototype.getTimezoneHandling = function () {
  return this._timezoneHandling;
};

})(jQuery);
;
;
/**
 * @file
 * Attaches behaviors for the Chosen module.
 */

(function($) {
  Drupal.behaviors.chosen = {
    attach: function(context, settings) {
      settings.chosen = settings.chosen || Drupal.settings.chosen;

      // Prepare selector and add unwantend selectors.
      var selector = settings.chosen.selector;

      // Function to prepare all the options together for the chosen() call.
      var getElementOptions = function (element) {
        var options = $.extend({}, settings.chosen.options);

        // The width default option is considered the minimum width, so this
        // must be evaluated for every option.
        if (settings.chosen.minimum_width > 0) {
          if ($(element).width() < settings.chosen.minimum_width) {
            options.width = settings.chosen.minimum_width + 'px';
          }
          else {
            options.width = $(element).width() + 'px';
          }
        }

        // Some field widgets have cardinality, so we must respect that.
        // @see chosen_pre_render_select()
        if ($(element).attr('multiple') && $(element).data('cardinality')) {
          options.max_selected_options = $(element).data('cardinality');
        }

        return options;
      };

      // Process elements that have opted-in for Chosen.
      // @todo Remove support for the deprecated chosen-widget class.
      $('select.chosen-enable, select.chosen-widget', context).once('chosen', function() {
        options = getElementOptions(this);
        $(this).chosen(options);
      });

      $(selector, context)
        // Disabled on:
        // - Field UI
        // - WYSIWYG elements
        // - Tabledrag weights
        // - Elements that have opted-out of Chosen
        // - Elements already processed by Chosen.
        .not('#field-ui-field-overview-form select, #field-ui-display-overview-form select, .wysiwyg, .draggable select[name$="[weight]"], .draggable select[name$="[position]"], .chosen-disable, .chosen-processed')
        .filter(function() {
          // Filter out select widgets that do not meet the minimum number of
          // options.
          var minOptions = $(this).attr('multiple') ? settings.chosen.minimum_multiple : settings.chosen.minimum_single;
          if (!minOptions) {
            // Zero value means no minimum.
            return true;
          }
          else {
            return $(this).find('option').length >= minOptions;
          }
        })
        .once('chosen', function() {
          options = getElementOptions(this);
          $(this).chosen(options);
        });
    }
  };
})(jQuery);
;
