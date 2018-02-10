
function checkbox(){
  //Click select all
    var selectAll = false;
    $(".selectAllItem").click(function(event) {
      if(!selectAll){
        $(".selectAllItem").attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
        $(".cartProductItemIfSelected").attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
        var totalNum = 
        $(".cartSumNumber").text(totalNum+"");
        selectAll = true;
      }else{
        selectAll = false;
        $(".selectAllItem").attr('src', 'http://how2j.cn/tmall/img/site/cartNotSelected.png');
        $(".cartProductItemIfSelected").attr('src', 'http://how2j.cn/tmall/img/site/cartNotSelected.png');
      }
      handleButton();
    });

  // click each check box
    var selectNum = $(".cartProductItemIfSelected").length;
  $(".cartProductItemIfSelected").each(function() {
    var select = false;
    $(this).click(function(event) {
      if(!select){
        $(this).attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
        select = true;
        selectNum--;
      }else{
        select = false;
        $(this).attr('src', 'http://how2j.cn/tmall/img/site/cartNotSelected.png');
        selectNum++;
      }
      handleButton();
    });
  });
  function handleButton(){
    if((selectAll == true) || (selectNum < $(".cartProductItemIfSelected").length)){
      $(".createOrderButton").addClass('buttonPaymentReady');
      if(selectNum === 0){
        $(".selectAllItem").attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
      }
    }else{
      $(".createOrderButton").removeClass('buttonPaymentReady');
    }
  }
}
checkbox();

//Change input box value
function handleInput(){
  //change overall num of products and overall price, when the selection has been made
  function handlePrice(){
    var totalNum = 0,totalPrice = 0;
    $(".cartProductItemTR").each(function() {
      var checkbox = $(this).find('.cartProductItemIfSelected');
      if(checkbox.attr('src')==="http://how2j.cn/tmall/img/site/cartSelected.png"){
        var plus = parseInt($(this).find(".orderItemNumberSetting").val());
        totalNum += plus;
      }

      $(".cartSumNumber").text(totalNum+"");
      $(".cartSumPriceNum").val(totalPrice+"");
    });
  }

  $(".cartProductChangeNumberDiv").each(function() {
    var num = 1;
    $(".numberMinus").click(function(event) {
      if (num>1){
        num --;
        handlePrice();
      }
      $(this).siblings('.orderItemNumberSetting').val(num+"");
    });
    $(".numberPlus").click(function(event) {
      num++;
      $(this).siblings('.orderItemNumberSetting').val(num+"");
      handlePrice();
    });
  });
}
handleInput();
