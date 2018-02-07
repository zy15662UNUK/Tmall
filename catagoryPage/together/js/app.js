function handleInput(){
  var low =  parseInt($(".beginPrice").val());
  var high = parseInt($(".endPrice").val());
  $(".productUnit").each(function(index) {
    var priceText = $(this).find('.productPrice').text();
    var price = parseInt(priceText.substring(1,priceText.length-1));
    if ((price >= high)||(price<=low)){
      $(this).hide();
    }else{
      $(this).show();
    }
  });
}
function init(){
  var beginPriceCheck = false;
  var endPriceCheck = false;
  $(".beginPrice").change(function(event) {
    if($(".beginPrice").val()===""){
      $(".productUnit").each(function(index) {
         $(this).show();
         beginPriceCheck = false;
      });
    }else {
      beginPriceCheck = true;
      if(beginPriceCheck&&endPriceCheck){
        handleInput();
      }
    }
  });
  $(".endPrice").change(function(event) {
    if($(".beginPrice").val()===""){
      $(".productUnit").each(function(index) {
         $(this).show();
         endPriceCheck = false;
      });
    }else {
      endPriceCheck = true;
      if(beginPriceCheck&&endPriceCheck){
        handleInput();
      }
    }
  });
}
init();
