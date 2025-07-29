function donate() {
  let tempInput = $("<input>")
    .val("2202205040464114")
    .appendTo("body")
    .select();
  document.execCommand("copy");
  tempInput.remove();

  $(event.target)
    .attr("data-title", "Номер карты скопирован")
    .addClass("data__title-action--copied");

  $(event.target).one("mouseleave", function () {
    $(this).attr("data-title", "Нажмите, чтобы скопировать");
    $(this).removeClass("data__title-action--copied");
  });
}
