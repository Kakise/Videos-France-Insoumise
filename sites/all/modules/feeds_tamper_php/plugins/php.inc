<?php

/**
 * @file
 */

$plugin = array(
  'form'     => 'feeds_tamper_php_form',
  'callback' => 'feeds_tamper_php_callback',
  'name'     => 'Execute php code',
  'multi'    => 'direct',
  'category' => 'Other',
);

/**
 * Implements hook_form().
 * @param unknown $importer
 * @param unknown $element_key
 * @param unknown $settings
 * @return multitype:multitype:string Ambigous <string, unknown> The Ambigous <The, string, A, Optional>
 */
function feeds_tamper_php_form($importer, $element_key, $settings) {
  $form = array();

  $form['php'] = array(
    '#type' => 'textarea',
    '#title' => t('PHP code'),
    '#default_value' => isset($settings['php']) ? $settings['php'] : '',
    '#description' => t('This code will be executed. Use $field as value of this field, $item as keyed array of the item being imported. Do not use < ?php and ? >. <br />For example, use:      return substr($field, 0, 10); <br />or:      return substr($item[\'field\'], 0, 10);'),
  );
  return $form;
}

/**
 * @param unknown $source
 * @param unknown $item_key
 * @param unknown $element_key
 * @param unknown $field
 * @param unknown $settings
 */
function feeds_tamper_php_callback($source, $item_key, $element_key, &$field, $settings) {
  $field = feeds_tamper_php_value($settings['php'], $field, $source->items[$item_key]);
}

/**
 * @param unknown $code
 * @param unknown $field
 * @param unknown $item
 * @return unknown
 */
function feeds_tamper_php_value($code, $field, $item) {
  ob_start();
  $code = eval($code);
  ob_end_clean(); 
  return $code;
}
