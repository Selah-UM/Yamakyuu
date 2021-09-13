$(function() {
  $(".headNav > li").mouseover(function(){
    $(".headerInner").css('align-items','');
    $(this).find(".subMenu").show();
  });
  $(".headNav > li").mouseout(function(){
    $(".headerInner").css('align-items','center');
    $(this).find(".subMenu").hide();
  });
});