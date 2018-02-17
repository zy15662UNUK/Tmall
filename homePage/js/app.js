// Control carousel shifting speed
$('.carousel').carousel({
  interval: 3000
});
//side menu

function sideMenu(){
  $(".eachCategory").hover(function() {
    $(".productsAsideCategorys").toggleClass('show');
  });
  var categoryMenu_top = parseFloat($(".homePage-nav").offset().top)+$(".homePage-nav").height()+10;
  console.log(categoryMenu_top);
  $(".categoryMenu").css("top",categoryMenu_top+"px");
  $(".productsAsideCategorys").css("top", categoryMenu_top+"px");
}
sideMenu();
//cat ear
function catear(){
  $(".nav-item").hover(function() {
    var left = parseInt($(this).offset().left)+20;
    var top = parseInt($(this).offset().top)-10;
    $("#catear").css('left', left+"px");
    $("#catear").css('top', top+"px");
    $("#catear").css("display","block");
  },function(){
    $("#catear").hide();
  });
}
catear();
