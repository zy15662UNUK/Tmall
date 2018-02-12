// top bar css style manipulation
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
// product list show/display according to top bar selection
$(".orderType div").click(function(event) {
  if($(this).find('a').attr('orderstatus')==="all"){
    $(".orderListItemTable").show();
  }else{
    var filter = $(this).find('a').attr('orderstatus');
    $(".orderListItemTable").each(function() {
      if($(this).attr('orderstatus')===filter){
        $(this).show();
      }else{
        $(this).hide();
     }
    });
  }
});
