$(function () {

  //보험 안내 슬라이드 텍스트
  $('#formInfoWrap .slick').slick({
    autoplay: true,
    arrows: false,
    dots: true,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 4000,
    speed: 1500,
  });

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



});