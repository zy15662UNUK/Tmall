$(".leaveMessageImg").click(function(event) {
  $(this).hide();
  $(".orderItemSumDiv").height(100);
  $(".leaveMessageTextarea").css('border-width', '1px');
  $(".leaveMessageTextarea").css('border-color', '#FFAD35');
  $(".leaveMessageTextarea").css('border-style', 'solid');
  $(".leaveMessageTextareaSpan").show();
});
