
function checkbox(){
  //Click select all
    $(".selectAllItem").click(function(event) {
      if($(".selectAllItem").attr('src')=='http://how2j.cn/tmall/img/site/cartNotSelected.png'){
        $(".selectAllItem").attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
        //check each check box also
        $(".cartProductItemIfSelected").attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
      }else{
        $(".selectAllItem").attr('src', 'http://how2j.cn/tmall/img/site/cartNotSelected.png');
        $(".cartProductItemIfSelected").attr('src', 'http://how2j.cn/tmall/img/site/cartNotSelected.png');
      }
      handleButton();
    });
  // click each check box
    var selectNum = $(".cartProductItemIfSelected").length;//Record num of seleted items
  $(".cartProductItemIfSelected").each(function() {
    $(this).click(function(event) {
      if($(this).attr('src')==='http://how2j.cn/tmall/img/site/cartNotSelected.png'){
        $(this).attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
        selectNum--;
      }else{
        $(this).attr('src', 'http://how2j.cn/tmall/img/site/cartNotSelected.png');
        selectNum++;
      }
      if(selectNum === 0){
        $(".selectAllItem").attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
      }else{
        $(".selectAllItem").attr('src', 'http://how2j.cn/tmall/img/site/cartNotSelected.png');
      }
      handleButton();
    });
  });
  function handleButton(){
    if(($(".selectAllItem").attr('src')=='http://how2j.cn/tmall/img/site/cartSelected.png') || (selectNum < $(".cartProductItemIfSelected").length)){
      $(".createOrderButton").addClass('buttonPaymentReady');
    }else{
      $(".createOrderButton").removeClass('buttonPaymentReady');
    }
  }
}
checkbox();
//Change input box value
function handleInput(){
  //change overall num of products and overall price, when the selection has been made
  $(".cartProductChangeNumberDiv").each(function() {
    var num = 1;
    $(".numberMinus").click(function(event) {
      if (num>1){
        num --;
      }
      $(this).siblings('.orderItemNumberSetting').val(num+"");
    });
    $(".numberPlus").click(function(event) {
      num++;
      $(this).siblings('.orderItemNumberSetting').val(num+"");
    });
  });
}
handleInput();
//change overall num of products and overall price, when the selection has been made
function priceAndNum(){
  $(".numberMinus").click(function(event){
    handlePrice();
  });

  $(".numberPlus").click(function(event){
    handlePrice();
  });
  $(".selectAllItem").click(function(event) {
    handlePrice();
  });
  $(".cartProductItemIfSelected").click(function(event) {
    handlePrice();
  });
  function handlePrice(){
    var totalNum = 0,totalPrice = 0;
    $(".cartProductItemTR").each(function() {
      var checkbox = $(this).find('.cartProductItemIfSelected');
      if(checkbox.attr('src')==="http://how2j.cn/tmall/img/site/cartSelected.png"){
        var numPlus = parseInt($(this).find(".orderItemNumberSetting").val());
        var pricePlusStr = $(this).find(".cartProductItemSmallSumPrice").text();
        //remove "," and "￥"
        pricePlusStr = pricePlusStr.replace(/,/g, '');
        pricePlusStr = pricePlusStr.replace(/￥/g, '');
        console.log(pricePlusStr);
        var pricePlus = parseFloat(pricePlusStr);
        totalNum += numPlus;
        totalPrice += pricePlus*numPlus;
      }
      $(".cartSumNumber").text(totalNum+"");
      $(".cartSumPriceNum").text(totalPrice+"");
    });
  }
}
priceAndNum();
//delete item
function deleteItem(){
  $(".deleteOrderItem").click(function(event) {
    $(this).parents(".cartProductItemTR").remove();
  });
}
deleteItem();
