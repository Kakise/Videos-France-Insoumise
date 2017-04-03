(function($) {
  $.fn.commerceAdminOrderUseExisting = function(uid) {
    $('[id^="edit-customer-email"]').focus();
    $('[id^="edit-customer-email"]').val(uid);
    $('[id^="edit-customer-email"]').blur();
    $('.messages').hide();
  }
})(jQuery);
