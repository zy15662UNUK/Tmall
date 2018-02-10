//Click select all
var selectAll = false;
$(".cartFoot-left img").click(function(event) {
  if(!selectAll){
    $(this).attr('src', 'http://how2j.cn/tmall/img/site/cartSelected.png');
    selectAll = true;

  }else{
    selectAll = false;
    $(this).attr('src', 'http://how2j.cn/tmall/img/site/cartNotSelected.png');
  }
  $(".createOrderButton").toggleClass('buttonPaymentReady');
});
