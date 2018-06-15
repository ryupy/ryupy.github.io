$(function(){
  $(window).scroll(function (){
    $('.section').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100){
        $(this).addClass('scrollin');
      }
    });
  });
});

$(function() {
    var showFlag = false;
  var topBtn = $('#page_top');
  topBtn.css('bottom', '-100px');
  var showFlag = false;
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (showFlag == false) {
          showFlag = true;
          topBtn.stop().animate({'bottom' : '20px'}, 200);
      }
    } else {
      if (showFlag) {
          showFlag = false;
          topBtn.stop().animate({'bottom' : '-100px'}, 200);
      }
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
