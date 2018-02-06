// Control carousel shifting speed
$('.carousel').carousel({
  interval: 3000
});
//side menu
$(".eachCategory").hover(function() {
  $(".productsAsideCategorys").toggleClass('show');
});
function sideMenuTop(){
  var categoryMenu_top = parseInt($(".homePage-nav").offset().top)+$(".homePage-nav").height();
  console.log(categoryMenu_top);
  $(".categoryMenu").css("top",categoryMenu_top+"px");
  $(".productsAsideCategorys").css("top", categoryMenu_top+"px");
}
sideMenuTop();
//cat ear
$(".nav-item").hover(function() {
  var left = parseInt($(this).offset().left)+20;
  var top = parseInt($(this).offset().top)-10;
  $("#catear").css('left', left+"px");
  $("#catear").css('top', top+"px");
  $("#catear").css("display","block");
},function(){
  $("#catear").hide();
});
