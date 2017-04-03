<?php

/**
 * Implements hook_field_diff_view().
 */
function multifield_field_diff_view($items, $context) {
  $machine_name = multifield_extract_multifield_machine_name($context['field']);
  $original_items = !empty($context['old_entity']->{$context['field']['field_name']}[$context['language']]) ? $context['old_entity']->{$context['field']['field_name']}[$context['language']] : array();

  $diff = array();
  foreach ($items as $delta => $item) {
    $new_pseudo_entity = _multifield_field_item_to_entity($machine_name, $item);
    $original_item = !empty($original_items[$delta]) ? $original_items[$delta] : array();
    $old_pseudo_entity = _multifield_field_item_to_entity($machine_name, $original_item);
    $context['entity_type'] = 'multifield';
    $context['bundle'] = $machine_name;
    $context['old_entity'] = $old_pseudo_entity;
    $context['new_entity'] = $new_pseudo_entity;
    $results = diff_entity_fields_diff($old_pseudo_entity, $new_pseudo_entity, $context, $context['language']);
    $diff[$delta] = array_map(function($result) {
      return $result['#new'];
    }, $results);
  }

  return $diff;
}
