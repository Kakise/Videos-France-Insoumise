/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 WARNING: clear browser's cache after you modify this file.
 If you don't do this, you may notice that browser is ignoring all your changes.
 */
CKEDITOR.editorConfig = function(config) {
  config.indentClasses = [ 'rteindent1', 'rteindent2', 'rteindent3', 'rteindent4' ];

  // [ Left, Center, Right, Justified ]
  config.justifyClasses = [ 'rteleft', 'rtecenter', 'rteright', 'rtejustify' ];

  // The minimum editor width, in pixels, when resizing it with the resize handle.
  config.resize_minWidth = 450;

  // Protect PHP code tags (<?...?>) so CKEditor will not break them when
  // switching from Source to WYSIWYG.
  // Uncommenting this line doesn't mean the user will not be able to type PHP
  // code in the source. This kind of prevention must be done in the server
  // side
  // (as does Drupal), so just leave this line as is.
  config.protectedSource.push(/<\?[\s\S]*?\?>/g); // PHP Code

  // [#1762328] Uncomment the line below to protect <code> tags in CKEditor (hide them in wysiwyg mode).
  // config.protectedSource.push(/<code>[\s\S]*?<\/code>/gi);
  config.extraPlugins = '';

  /*
    * Append here extra CSS rules that should be applied into the editing area.
    * Example:
    * config.extraCss = 'body {color:#FF0000;}';
    */
  config.extraCss = '';
  /**
    * Sample extraCss code for the "marinelli" theme.
    */
  if (Drupal.settings.ckeditor.theme == "marinelli") {
    config.extraCss += "body{background:#FFF;text-align:left;font-size:0.8em;}";
    config.extraCss += "#primary ol, #primary ul{margin:10px 0 10px 25px;}";
  }
  if (Drupal.settings.ckeditor.theme == "newsflash") {
    config.extraCss = "body{min-width:400px}";
  }

  /**
    * CKEditor's editing area body ID & class.
    * See http://drupal.ckeditor.com/tricks
    * This setting can be used if CKEditor does not work well with your theme by default.
    */
  config.bodyClass = '';
  config.bodyId = '';
  /**
    * Sample bodyClass and BodyId for the "marinelli" theme.
    */
  if (Drupal.settings.ckeditor.theme == "marinelli") {
    config.bodyClass = 'singlepage';
    config.bodyId = 'primary';
  }

  // Make CKEditor's edit area as high as the textarea would be.
  if (this.element.$.rows > 0) {
    config.height = this.element.$.rows * 20 + 'px';
  }
}

/*
 * Sample toolbars
 */

//Toolbar definition for basic buttons
Drupal.settings.cke_toolbar_DrupalBasic = [ [ 'Format', 'Bold', 'Italic', '-', 'NumberedList','BulletedList', '-', 'Link', 'Unlink', 'Image' ] ];

//Toolbar definition for Advanced buttons
Drupal.settings.cke_toolbar_DrupalAdvanced = [
  ['Source'],
  ['Cut','Copy','Paste','PasteText','PasteFromWord','-','SpellChecker', 'Scayt'],
  ['Undo','Redo','Find','Replace','-','SelectAll'],
  ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar'],
  ['Maximize', 'ShowBlocks'],
  '/',
  ['Format'],
  ['Bold','Italic','Underline','Strike','-','Subscript','Superscript','-','RemoveFormat'],
  ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
  ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl'],
  ['Link','Unlink','Anchor','Linkit','LinkToNode','LinkToMenu']
];

// Toolbar definition for all buttons
Drupal.settings.cke_toolbar_DrupalFull = [
  ['Source'],
  ['Cut','Copy','Paste','PasteText','PasteFromWord','-','SpellChecker', 'Scayt'],
  ['Undo','Redo','Find','Replace','-','SelectAll'],
  ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','Iframe'],
  '/',
  ['Bold','Italic','Underline','Strike','-','Subscript','Superscript','-','RemoveFormat'],
  ['NumberedList','BulletedList','-','Outdent','Indent','Blockquote','CreateDiv'],
  ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl','-','Language'],
  ['Link','Unlink','Anchor','Linkit','LinkToNode', 'LinkToMenu'],
  '/',
  ['Format','Font','FontSize'],
  ['TextColor','BGColor'],
  ['Maximize', 'ShowBlocks'],
  ['DrupalBreak', 'DrupalPageBreak']
];;
/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function ($) {
  Drupal.ckeditor_ver = 4;

  $(document).ready(function() {
    if (typeof(CKEDITOR) == "undefined")
      return;

    // $('#edit-uicolor-textarea').show();

    if (Drupal.settings.ckeditor_version) {
      Drupal.ckeditor_ver = Drupal.settings.ckeditor_version.split('.')[0];
    }

    Drupal.editSkinEditorInit = function() {
      var skinframe_src = $('#skinframe').attr('src');
      //skinframe_src = skinframe_src.replace(/skin=[^&]+/, 'skin='+$("#edit-skin").val());
      var skin = skinframe_src.match(/skin=([^&]+)/)[1];
      if ($('#edit-uicolor').val() == 'custom') {
        skinframe_src = skinframe_src.replace(/uicolor=[^&]+/, 'uicolor='+$('input[name$="uicolor_user"]').val().replace('#', '') || 'D3D3D3');
      }
      else {
        skinframe_src = skinframe_src.replace(/uicolor=[^&]+/, 'uicolor=D3D3D3');
      }
      $('#skinframe').attr('src', skinframe_src);

      if (Drupal.ckeditor_ver == 3) {
        if (skin == "kama") {
          $("#edit-uicolor").removeAttr('disabled');
          $("#edit-uicolor").parent().removeClass('form-disabled');
        }
        else {
          $("#edit-uicolor").attr('disabled', 'disabled');
          $("#edit-uicolor").parent().addClass('form-disabled');
        }
      }
      else {
        $("#edit-uicolor").removeAttr('disabled');
        $("#edit-uicolor").parent().removeClass('form-disabled');
      }
    };

    Drupal.editSkinEditorInit();

    $("#edit-uicolor").bind("change", function() {
      Drupal.editSkinEditorInit();
    });

    $("#input-formats :checkbox").change(function() {
      $('#security-filters .filter-warning').hide();
      $('#security-filters div.filter-text-formats[filter]').html('');
      $('#security-filters ul.text-formats-config').html('');
      $('#input-formats :checked').each(function() {
        var format_name = $(this).val();
        var format_label = $('label[for="' + $(this).attr('id') + '"]').html();

        if (typeof(Drupal.settings.text_formats_config_links[format_name]) != 'undefined') {
          var text = "<li>" + format_label + " - <a href=\"" + Drupal.settings.text_formats_config_links[format_name].config_url + "\">configure</a></li>";
          var dataSel = $('#security-filters ul.text-formats-config');
          var html = dataSel.html();
          if (html == null || html.length == 0) {
            dataSel.html(text);
          }
          else {
            html += text;
            dataSel.html(html);
          }
        }

        $('#security-filters div.filter-text-formats[filter]').each(function() {
          var filter_name = $(this).attr('filter');
          var dataSel = $(this);
          var html = dataSel.html();
          var status = "enabled";
          if (typeof Drupal.settings.text_format_filters[format_name][filter_name] == 'undefined') {
            status = "disabled";
          }
          var text = "<span class=\"filter-text-format-status " + status + "\">" + format_label + ': </span><br/>';

          if (html == null || html.length == 0) {
            dataSel.html(text);
          }
          else {
            html += text;
            dataSel.html(html);
          }
        });
      });
    });
    $("#input-formats :checkbox:eq(0)").trigger('change');

    $(".cke_load_toolbar").click(function() {
      var buttons = eval('Drupal.settings.'+$(this).attr("id"));
      var text = "[\n";
      for(i in buttons) {
        if (typeof buttons[i] == 'string'){
          text = text + "    '/',\n";
        }
        else {
          text = text + "    [";
          max = buttons[i].length - 1;
          rows = buttons.length - 1;
          for (j in buttons[i]) {
            if (j < max){
              text = text + "'" + buttons[i][j] + "',";
            } else {
              text = text + "'" + buttons[i][j] + "'";
            }
          }
          if (i < rows){
            text = text + "],\n";
          } else {
            text = text + "]\n";
          }
        }
      }

      text = text + "]";
      text = text.replace(/\['\/'\]/g,"'/'");
      $("#edit-toolbar").val(text);
      if (Drupal.settings.ckeditor_toolbar_wizard == 't'){
        Drupal.ckeditorToolbarReload();
      }
      return false;
    });

    if (Drupal.settings.ckeditor_toolbar_wizard == 'f'){
      $("form#ckeditor-admin-profile-form textarea#edit-toolbar, form#ckeditor-admin-profile-form #edit-toolbar + .grippie").show();
    }
  });
})(jQuery);
;
/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/
jQuery(document).ready(function() {
    function Tools(event, ui) {
        //outer loop for rows
        var tools = "[\n";
        rows = jQuery("#groupLayout div.sortableListDiv").length;
        jQuery.each(jQuery("#groupLayout div.sortableListDiv"), function(rowIndex, rowValue) {
            if (jQuery("li",rowValue).length > 0) {
                tools = tools + "    [";
            }
            //inner loop for toolbar buttons
            jQuery.each(jQuery("li",rowValue), function(buttonIndex, buttonValue) {
                if (jQuery(buttonValue).hasClass('spacer')) {
                    tools = tools + ",'-'";
                }
                else if (jQuery(buttonValue).hasClass('group')) {
                    tools = tools + "],\n    [";
                }
                else {
                    tools = tools + ",'" + jQuery(buttonValue).attr('id') + "'" ;
                }
            });

            if (jQuery("li" ,rowValue).length > 0) {
                if (rowIndex < (rows -1)) {
                    tools = tools + "],\n    '/',\n";
                }
                else {
                    tools = tools + "]\n";
                }
            }
        });
        tools = tools + "]";
        tools = tools.replace(/\[,/g, '[');
        tools = tools.replace(/\[],/g, '');
        jQuery("#edit-toolbar").val(tools);
    }

    Drupal.ckeditorToolbaInit = function() {
        Drupal.ckeditorToolbarUsedRender();
        Drupal.ckeditorToolbarAllRender();

        var firefox = navigator.userAgent.toLowerCase().match(/firefox\/[0-9]\./);
        jQuery(".sortableList").sortable({
            connectWith: ".sortableList",
            items: "div.sortableListDiv",
            sort: function(event, ui) {
                if (firefox){
                    ui.helper.css({'top' : ui.position.top - 35 + 'px'});
                }
            },
            stop: function(event, ui) {
                Tools(event, ui);
            }
        }).disableSelection();

        jQuery(".sortableRow").sortable({
            connectWith: ".sortableRow",
            items: "li.sortableItem",
            sort: function(event, ui) {
                if (firefox){
                    ui.helper.css({'top' : ui.position.top - 35 + 'px'});
                }
            },
            stop: function(event, ui) {
                Tools(event, ui);
            }
        }).disableSelection();

        jQuery("li.sortableItem").mouseover(function(){
            jQuery(".sortableList").sortable("disable");
        });
        jQuery("li.sortableItem").mouseout(function(){
            jQuery(".sortableList").sortable("enable");
        });
    }

    Drupal.ckeditorToolbarReload = function() {
        jQuery(".sortableList").sortable('destroy');
        jQuery(".sortableRow").sortable('destroy');
        jQuery("li.sortableItem").unbind();
        Drupal.ckeditorToolbaInit();
    }

    Drupal.ckeditorToolbarUsedRender = function() {
        var toolbar = jQuery('#edit-toolbar').val();
        toolbar = eval(toolbar);
        var html = '<div class="sortableListDiv"><span class="sortableListSpan"><ul class="sortableRow">';
        var group = false;

        for (var row in toolbar) {
            if (typeof toolbar[row] == 'string' && toolbar[row] == '/') {
                group = false;
                html += '</ul></span></div><div class="sortableListDiv"><span class="sortableListSpan"><ul class="sortableRow">';
            }
            else {
                if (group == false){
                    group = true;
                }
                else {
                    html += '<li class="sortableItem group"><img src="' + Drupal.settings.cke_toolbar_buttons_all['__group']['icon'] + '" alt="group" title="group" /></li>';
                }
                for (var button in toolbar[row]) {
                    if (toolbar[row][button] == '-') {
                        html += '<li class="sortableItem spacer"><img src="' + Drupal.settings.cke_toolbar_buttons_all['__spacer']['icon'] + '" alt="spacer" title="spacer" /></li>';
                    }
                    else if (Drupal.settings.cke_toolbar_buttons_all[toolbar[row][button]]) {
                        html += '<li class="sortableItem" id="' + Drupal.settings.cke_toolbar_buttons_all[toolbar[row][button]]['name'] + '"><img src="' + Drupal.settings.cke_toolbar_buttons_all[toolbar[row][button]]['icon'] + '" alt="' + Drupal.settings.cke_toolbar_buttons_all[toolbar[row][button]]['title'] + '" title="' + Drupal.settings.cke_toolbar_buttons_all[toolbar[row][button]]['title'] + '" /></li>';
                    }
                }
            }
        }
        html += '</ul></span></div>';
        jQuery('#groupLayout').empty().append(html);
    }

    Drupal.ckeditorToolbarAllRender = function() {
        var toolbarUsed = jQuery('#edit-toolbar').val();
        var toolbarAll = Drupal.settings.cke_toolbar_buttons_all;

        var htmlArray = new Array();
        var html = '';

        for (var i in toolbarAll) {
            if (new RegExp("\'[\s]*" + toolbarAll[i].name + "[\s]*\'").test(toolbarUsed) == false) {
                if (toolbarAll[i].name == false) continue;
                if (typeof htmlArray[toolbarAll[i].row] == 'undefined') htmlArray[toolbarAll[i].row] = '';
                htmlArray[toolbarAll[i].row] += '<li class="sortableItem" id="' + toolbarAll[i].name + '"><img src="' + toolbarAll[i].icon + '" alt="' + toolbarAll[i].title + '" title="' + toolbarAll[i].title + '" /></li>';
            }
        }

        if (typeof htmlArray[5] == 'undefined') htmlArray[5] = '';
        htmlArray[5] += '<li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li><li class="sortableItem group"><img src="' + toolbarAll['__group'].icon + '" alt="' + toolbarAll['__group'].title + '" title="' + toolbarAll['__group'].title + '" /></li>';

        if (typeof htmlArray[6] == 'undefined') htmlArray[6] = '';
        htmlArray[6] += '<li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li><li class="sortableItem spacer"><img src="' + toolbarAll['__spacer'].icon + '" alt="' + toolbarAll['__spacer'].title + '" title="' + toolbarAll['__spacer'].title + '" /></li>';

        if (typeof htmlArray[7] == 'undefined') htmlArray[7] = '';

        for (var j in htmlArray){
            html += '<div class="sortableListDiv"><span class="sortableListSpan"><ul class="sortableRow">' + htmlArray[j] + '</ul></span></div>';
        }
        jQuery('#allButtons').empty().append(html);
    }

    Drupal.ckeditorToolbaInit();
});

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
