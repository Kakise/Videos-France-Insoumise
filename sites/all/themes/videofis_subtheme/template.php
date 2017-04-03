<?php
/**
 * @file
 * The primary PHP file for this theme.
 */
function wikilex_subtheme_preprocess_page(&$variables) {
  // Add information about the number of sidebars.
	if (!empty($variables['page']['sidebar_first']) && !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-md-6"';
	}
	elseif (!empty($variables['page']['sidebar_first']) || !empty($variables['page']['sidebar_second'])) {
    $variables['content_column_class'] = ' class="col-md-8"';
	}
	else {
    $variables['content_column_class'] = ' class="col-md-10"';
	}

  // Add information about footer regions
	if (!empty($variables['page']['footer']) && !empty($variables['page']['footer2'])) {
    $variables['footer_column_class'] = ' class="col-md-4"';
	}
	elseif (!empty($variables['page']['footer']) || !empty($variables['page']['footer2'])) {
    $variables['footer_column_class'] = ' class="col-md-6"';
	}
	else {
    $variables['footer_column_class'] = ' class="col-md-12"';
	}
}