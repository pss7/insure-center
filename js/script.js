$(function () {

  //팝업
  /* 개인정보 수집 및 이용동의 팝업 */
  $('.detailViewBtn').click(function () {
    $('#privacyPolicyPopup').addClass('active');
    $('body').addClass('popupOpen');
  });

  /* 보험가입 전 유의사항 팝업 */
  $('.footerPopupBtn').click(function () {
    $('#insuranceNoticePopup').addClass('active');
    $('body').addClass('popupOpen');
  });

  /* 팝업 닫기 */
  $('.popupCloseBtn').click(function () {
    $(this).closest('.commonPopupWrap').removeClass('active');
    $('body').removeClass('popupOpen');
  });

  /* 헤더 메뉴 */
  $('#headerWrap .headerBottomBox .headerMenu > li').mouseenter(function () {
    $('.headerSubMenu').hide();
    $(this).children('.headerSubMenu').stop().slideDown();
  });

  $('#headerWrap .headerBottomBox .headerMenu > li').mouseleave(function () {
    $(this).children('.headerSubMenu').stop().slideUp();
  });

  //공통 - 드롭다운
  $('.toggleBtn').click(function (e) {
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    if ($(this).parent().hasClass('active')) {
      $(this).attr('aria-expanded', 'true');
    } else {
      $(this).attr('aria-expanded', 'false');
    }
  });

  //모바일메뉴
  $('.mobileMenuBtn').click(function () {
    if ($(this).attr('aria-expanded') === 'false') {
      $(this).attr('aria-label', '모바일메뉴 열기');
    } else {
      $(this).attr('aria-label', '모바일메뉴 닫기');
    }
  });

  $('#mobileMenuWrap .mobileMenu > li > a').click(function () {
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(this).parent().find('.mobileSubMenu').stop().slideUp();
    } else {
      $('#mobileMenuWrap .mobileMenu > li').removeClass('active');
      $('.mobileSubMenu').stop().slideUp();
      $(this).parent().addClass('active');
      $(this).parent().find('.mobileSubMenu').stop().slideDown();
    }



  });
















});





