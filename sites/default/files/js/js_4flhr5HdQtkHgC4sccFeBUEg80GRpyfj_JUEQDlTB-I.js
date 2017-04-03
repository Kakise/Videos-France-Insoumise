Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n>1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Une erreur HTTP AJAX s\u0027est produite.","HTTP Result Code: !status":"Code de statut HTTP : !status","An AJAX HTTP request terminated abnormally.":"Une requ\u00eate HTTP AJAX s\u0027est termin\u00e9e anormalement.","Debugging information follows.":"Informations de d\u00e9bogage ci-dessous.","Path: !uri":"Chemin : !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText : !responseText","ReadyState: !readyState":"ReadyState : !readyState","CustomMessage: !customMessage":"Message personalis\u00e9 : !customMessage","Search":"Rechercher","Loading":"En cours de chargement","(active tab)":"(onglet actif)","All":"Tout","@title dialog":"dialogue de @title","Configure":"Configurer","Re-order rows by numerical weight instead of dragging.":"R\u00e9-ordonner les lignes avec des poids num\u00e9riques plut\u00f4t qu\u0027en les d\u00e9pla\u00e7ant.","Show row weights":"Afficher le poids des lignes","Hide row weights":"Cacher le poids des lignes","Drag to re-order":"Cliquer-d\u00e9poser pour r\u00e9-organiser","Changes made in this table will not be saved until the form is submitted.":"Les changements effectu\u00e9s dans ce tableau ne seront pris en compte que lorsque la configuration aura \u00e9t\u00e9 enregistr\u00e9e.","Hide":"Masquer","Show":"Afficher","Next":"Suivant","Disabled":"D\u00e9sactiv\u00e9","Enabled":"Activ\u00e9","Edit":"Modifier","Sunday":"Dimanche","Monday":"Lundi","Tuesday":"Mardi","Wednesday":"Mercredi","Thursday":"Jeudi","Friday":"Vendredi","Saturday":"Samedi","Add":"Ajouter","Done":"Termin\u00e9","Prev":"Pr\u00e9c.","Mon":"lun","Tue":"mar","Wed":"mer","Thu":"jeu","Fri":"ven","Sat":"sam","Sun":"dim","January":"janvier","February":"F\u00e9vrier","March":"mars","April":"avril","May":"mai","June":"juin","July":"juillet","August":"ao\u00fbt","September":"septembre","October":"octobre","November":"novembre","December":"d\u00e9cembre","Select all rows in this table":"S\u00e9lectionner toutes les lignes du tableau","Deselect all rows in this table":"D\u00e9s\u00e9lectionner toutes les lignes du tableau","Today":"Aujourd\u0027hui","Jan":"jan","Feb":"f\u00e9v","Mar":"mar","Apr":"avr","Jun":"juin","Jul":"juil","Aug":"ao\u00fb","Sep":"sep","Oct":"oct","Nov":"nov","Dec":"d\u00e9c","Su":"Di","Mo":"Lu","Tu":"Ma","We":"Me","Th":"Je","Fr":"Ve","Sa":"Sa","Not published":"Non publi\u00e9","Please wait...":"Veuillez patienter...","mm\/dd\/yy":"dd\/mm\/yy","By @name on @date":"Par @name le @date","By @name":"Par @name","Not in menu":"Pas dans le menu","Alias: @alias":"Alias : @alias","No alias":"Aucun alias","New revision":"Nouvelle r\u00e9vision","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"N\u0027oubliez pas de cliquer sur \u003Cem\u003EEnregistrer les blocs\u003C\/em\u003E pour confirmer les modifications apport\u00e9es ici.","No revision":"Aucune r\u00e9vision","@number comments per page":"@number commentaires par page","Not restricted":"Non restreint","Not customizable":"Non personnalisable","Restricted to certain pages":"R\u00e9serv\u00e9 \u00e0 certaines pages","The block cannot be placed in this region.":"Le bloc ne peut pas \u00eatre plac\u00e9 dans cette r\u00e9gion.","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Le fichier s\u00e9lectionn\u00e9 %filename ne peut pas \u00eatre transf\u00e9r\u00e9. Seulement les fichiers avec les extensions suivantes sont permis : %extensions.","Autocomplete popup":"Popup d\u0027auto-compl\u00e9tion","Searching for matches...":"Recherche de correspondances...","The response failed verification so will not be processed.":"La v\u00e9rification de la r\u00e9ponse \u00e0 \u00e9chou\u00e9e, elle ne sera pas trait\u00e9e.","The callback URL is not local and not trusted: !url":"L\u0027URL de retour n\u0027est pas locale et n\u0027est pas de confiance : !url"}} };;
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

/**
 * Attaches sticky table headers.
 */
Drupal.behaviors.tableHeader = {
  attach: function (context, settings) {
    if (!$.support.positionFixed) {
      return;
    }

    $('table.sticky-enabled', context).once('tableheader', function () {
      $(this).data("drupal-tableheader", new Drupal.tableHeader(this));
    });
  }
};

/**
 * Constructor for the tableHeader object. Provides sticky table headers.
 *
 * @param table
 *   DOM object for the table to add a sticky header to.
 */
Drupal.tableHeader = function (table) {
  var self = this;

  this.originalTable = $(table);
  this.originalHeader = $(table).children('thead');
  this.originalHeaderCells = this.originalHeader.find('> tr > th');
  this.displayWeight = null;

  // React to columns change to avoid making checks in the scroll callback.
  this.originalTable.bind('columnschange', function (e, display) {
    // This will force header size to be calculated on scroll.
    self.widthCalculated = (self.displayWeight !== null && self.displayWeight === display);
    self.displayWeight = display;
  });

  // Clone the table header so it inherits original jQuery properties. Hide
  // the table to avoid a flash of the header clone upon page load.
  this.stickyTable = $('<table class="sticky-header"/>')
    .insertBefore(this.originalTable)
    .css({ position: 'fixed', top: '0px' });
  this.stickyHeader = this.originalHeader.clone(true)
    .hide()
    .appendTo(this.stickyTable);
  this.stickyHeaderCells = this.stickyHeader.find('> tr > th');

  this.originalTable.addClass('sticky-table');
  $(window)
    .bind('scroll.drupal-tableheader', $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    .bind('resize.drupal-tableheader', { calculateWidth: true }, $.proxy(this, 'eventhandlerRecalculateStickyHeader'))
    // Make sure the anchor being scrolled into view is not hidden beneath the
    // sticky table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceAnchor.drupal-tableheader', function () {
      window.scrollBy(0, -self.stickyTable.outerHeight());
    })
    // Make sure the element being focused is not hidden beneath the sticky
    // table header. Adjust the scrollTop if it does.
    .bind('drupalDisplaceFocus.drupal-tableheader', function (event) {
      if (self.stickyVisible && event.clientY < (self.stickyOffsetTop + self.stickyTable.outerHeight()) && event.$target.closest('sticky-header').length === 0) {
        window.scrollBy(0, -self.stickyTable.outerHeight());
      }
    })
    .triggerHandler('resize.drupal-tableheader');

  // We hid the header to avoid it showing up erroneously on page load;
  // we need to unhide it now so that it will show up when expected.
  this.stickyHeader.show();
};

/**
 * Event handler: recalculates position of the sticky table header.
 *
 * @param event
 *   Event being triggered.
 */
Drupal.tableHeader.prototype.eventhandlerRecalculateStickyHeader = function (event) {
  var self = this;
  var calculateWidth = event.data && event.data.calculateWidth;

  // Reset top position of sticky table headers to the current top offset.
  this.stickyOffsetTop = Drupal.settings.tableHeaderOffset ? eval(Drupal.settings.tableHeaderOffset + '()') : 0;
  this.stickyTable.css('top', this.stickyOffsetTop + 'px');

  // Save positioning data.
  var viewHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (calculateWidth || this.viewHeight !== viewHeight) {
    this.viewHeight = viewHeight;
    this.vPosition = this.originalTable.offset().top - 4 - this.stickyOffsetTop;
    this.hPosition = this.originalTable.offset().left;
    this.vLength = this.originalTable[0].clientHeight - 100;
    calculateWidth = true;
  }

  // Track horizontal positioning relative to the viewport and set visibility.
  var hScroll = document.documentElement.scrollLeft || document.body.scrollLeft;
  var vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - this.vPosition;
  this.stickyVisible = vOffset > 0 && vOffset < this.vLength;
  this.stickyTable.css({ left: (-hScroll + this.hPosition) + 'px', visibility: this.stickyVisible ? 'visible' : 'hidden' });

  // Only perform expensive calculations if the sticky header is actually
  // visible or when forced.
  if (this.stickyVisible && (calculateWidth || !this.widthCalculated)) {
    this.widthCalculated = true;
    var $that = null;
    var $stickyCell = null;
    var display = null;
    var cellWidth = null;
    // Resize header and its cell widths.
    // Only apply width to visible table cells. This prevents the header from
    // displaying incorrectly when the sticky header is no longer visible.
    for (var i = 0, il = this.originalHeaderCells.length; i < il; i += 1) {
      $that = $(this.originalHeaderCells[i]);
      $stickyCell = this.stickyHeaderCells.eq($that.index());
      display = $that.css('display');
      if (display !== 'none') {
        cellWidth = $that.css('width');
        // Exception for IE7.
        if (cellWidth === 'auto') {
          cellWidth = $that[0].clientWidth + 'px';
        }
        $stickyCell.css({'width': cellWidth, 'display': display});
      }
      else {
        $stickyCell.css('display', 'none');
      }
    }
    this.stickyTable.css('width', this.originalTable.outerWidth());
  }
};

})(jQuery);
;
/**
 * @file
 * Javascript enhancements for the Search API admin pages.
 */

(function ($) {

/**
 * Allows the re-ordering of enabled data alterations and processors.
 */
// Copied from filter.admin.js
Drupal.behaviors.searchApiStatus = {
  attach: function (context, settings) {
    $('.search-api-status-wrapper input.form-checkbox', context).once('search-api-status', function () {
      var $checkbox = $(this);
      // Retrieve the tabledrag row belonging to this processor.
      var $row = $('#' + $checkbox.attr('id').replace(/-status$/, '-weight'), context).closest('tr');
      // Retrieve the vertical tab belonging to this processor.
      var $tab = $('#' + $checkbox.attr('id').replace(/-status$/, '-settings'), context).data('verticalTab');

      // Bind click handler to this checkbox to conditionally show and hide the
      // filter's tableDrag row and vertical tab pane.
      $checkbox.bind('click.searchApiUpdate', function () {
        if ($checkbox.is(':checked')) {
          $row.show();
          if ($tab) {
            $tab.tabShow().updateSummary();
          }
        }
        else {
          $row.hide();
          if ($tab) {
            $tab.tabHide().updateSummary();
          }
        }
        // Restripe table after toggling visibility of table row.
        Drupal.tableDrag['search-api-' + $checkbox.attr('id').replace(/^edit-([^-]+)-.*$/, '$1') + '-order-table'].restripeTable();
      });

      // Attach summary for configurable items (only for screen-readers).
      if ($tab) {
        $tab.fieldset.drupalSetSummary(function (tabContext) {
          return $checkbox.is(':checked') ? Drupal.t('Enabled') : Drupal.t('Disabled');
        });
      }

      // Trigger our bound click handler to update elements to initial state.
      $checkbox.triggerHandler('click.searchApiUpdate');
    });
  }
};

/**
 * Processes elements with the .dropbutton class on page load.
 */
Drupal.behaviors.searchApiDropButton = {
  attach: function (context, settings) {
    var $dropbuttons = $(context).find('.dropbutton-wrapper').once('dropbutton');
    if ($dropbuttons.length) {
      //$('.dropbutton-toggle', $dropbuttons).click(dropbuttonClickHandler);
      // Initialize all buttons.
      for (var i = 0, il = $dropbuttons.length; i < il; i++) {
        DropButton.dropbuttons.push(new DropButton($dropbuttons[i], settings.dropbutton));
      }
      // Adds the delegated handler that will toggle dropdowns on click.
      $('.dropbutton-toggle', $dropbuttons).click(dropbuttonClickHandler);
    }
  }
};

/**
 * Delegated callback for opening and closing dropbutton secondary actions.
 */
function dropbuttonClickHandler(e) {
  e.preventDefault();
  $(e.target).closest('.dropbutton-wrapper').toggleClass('open');
}

/**
 * A DropButton presents an HTML list as a button with a primary action.
 *
 * All secondary actions beyond the first in the list are presented in a
 * dropdown list accessible through a toggle arrow associated with the button.
 *
 * @param {jQuery} dropbutton
 *   A jQuery element.
 *
 * @param {Object} settings
 *   A list of options including:
 *    - {String} title: The text inside the toggle link element. This text is
 *      hidden from visual UAs.
 */
function DropButton(dropbutton, settings) {
  // Merge defaults with settings.
  var options = $.extend({'title': Drupal.t('List additional actions')}, settings);
  var $dropbutton = $(dropbutton);
  this.$dropbutton = $dropbutton;
  this.$list = $dropbutton.find('.dropbutton');
  // Find actions and mark them.
  this.$actions = this.$list.find('li').addClass('dropbutton-action');

  // Add the special dropdown only if there are hidden actions.
  if (this.$actions.length > 1) {
    // Identify the first element of the collection.
    var $primary = this.$actions.slice(0, 1);
    // Identify the secondary actions.
    var $secondary = this.$actions.slice(1);
    $secondary.addClass('secondary-action');
    // Add toggle link.
    $primary.after(Drupal.theme('dropbuttonToggle', options));
    // Bind mouse events.
    this.$dropbutton
      .addClass('dropbutton-multiple')
      /**
       * Adds a timeout to close the dropdown on mouseleave.
       */
      .bind('mouseleave.dropbutton', $.proxy(this.hoverOut, this))
      /**
       * Clears timeout when mouseout of the dropdown.
       */
      .bind('mouseenter.dropbutton', $.proxy(this.hoverIn, this))
      /**
       * Similar to mouseleave/mouseenter, but for keyboard navigation.
       */
      .bind('focusout.dropbutton', $.proxy(this.focusOut, this))
      .bind('focusin.dropbutton', $.proxy(this.focusIn, this));
  }
}

/**
 * Extend the DropButton constructor.
 */
$.extend(DropButton, {
  /**
   * Store all processed DropButtons.
   *
   * @type {Array}
   */
  dropbuttons: []
});

/**
 * Extend the DropButton prototype.
 */
$.extend(DropButton.prototype, {
  /**
   * Toggle the dropbutton open and closed.
   *
   * @param {Boolean} show
   *   (optional) Force the dropbutton to open by passing true or to close by
   *   passing false.
   */
  toggle: function (show) {
    var isBool = typeof show === 'boolean';
    show = isBool ? show : !this.$dropbutton.hasClass('open');
    this.$dropbutton.toggleClass('open', show);
  },

  hoverIn: function () {
    // Clear any previous timer we were using.
    if (this.timerID) {
      window.clearTimeout(this.timerID);
    }
  },

  hoverOut: function () {
    // Wait half a second before closing.
    this.timerID = window.setTimeout($.proxy(this, 'close'), 500);
  },

  open: function () {
    this.toggle(true);
  },

  close: function () {
    this.toggle(false);
  },

  focusOut: function (e) {
    this.hoverOut.call(this, e);
  },

  focusIn: function (e) {
    this.hoverIn.call(this, e);
  }
});

$.extend(Drupal.theme, {
  /**
   * A toggle is an interactive element often bound to a click handler.
   *
   * @param {Object} options
   *   - {String} title: (optional) The HTML anchor title attribute and
   *     text for the inner span element.
   *
   * @return {String}
   *   A string representing a DOM fragment.
   */
  dropbuttonToggle: function (options) {
    return '<li class="dropbutton-toggle"><button type="button" role="button"><span class="dropbutton-arrow"><span class="visually-hidden">' + options.title + '</span></span></button></li>';
  }
});

// Expose constructor in the public space.
Drupal.DropButton = DropButton;

})(jQuery);
;
;
