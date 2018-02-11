// top bar manipulation
$(".orderType div").click(function(event) {
  if(!$(this).hasClass('selectedOrderType')){
    $(".orderType div").each(function() {
      if($(this).hasClass('selectedOrderType')){
        $(this).removeClass('selectedOrderType');
      }
    });
    $(this).addClass('selectedOrderType');
  }
});
