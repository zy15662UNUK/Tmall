//Js for switching img
function switchImg(){
  $(".smallImage").hover(function() {
    /* Stuff to do when the mouse enters the element */
    var imgSrc_small = $(this).attr('src');
    var imgSrc = "http://how2j.cn/tmall/img/productSingle/"+imgSrc_small.slice(imgSrc_small.length-8,imgSrc_small.length);
    $(".bigImg").attr('src', imgSrc);
  },function(){
    var imgSrc_small = $(".smallImage:first-of-type").attr('src');
    var imgSrc = "http://how2j.cn/tmall/img/productSingle/"+imgSrc_small.slice(imgSrc_small.length-8,imgSrc_small.length);
    $(".bigImg").attr('src', imgSrc);
  });
}
switchImg();
// adding/deducting number
function productNum(){
  var num = 1;
  $(".increaseNumber").click(function(event) {
    $(".productNumberSetting").css('color', 'black');
    num++;
    $(".productNumberSetting").val(num+"");
  });
  $(".decreaseNumber").click(function(event) {
    $(".productNumberSetting").css('color', 'black');

    if(num <= 1){
    $(".productNumberSetting").val("1");
    }else{
    num--;
    $(".productNumberSetting").val(num+"");
    }
  });
}
productNum();
