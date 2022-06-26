function toggleCardDescription() {
  let container = $('.card__wrapper');
  let disabled = $('input:disabled');
  let selected = $('input:checked');
  
  disabled.parent().nextAll().hide();
  disabled.parent().siblings('.card__description-disabled').show();

  selected.parent().nextAll().hide();
  selected.parent().siblings('.card__description-selected').show();

  container.on('click', function() {
    if ($(this).children('input').prop('checked') == true) {
      $(this).nextAll().hide();
      $(this).siblings('.card__description-selected').show();
    } else if ($(this).children('input').prop('disabled')) {

    } else {
      $(this).nextAll().hide();
      $(this).next().show();
    }
  });
}
toggleCardDescription();
