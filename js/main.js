//aos 효과
AOS.init();
//메인배너 슬라이드
var mainVisul = new Swiper(".main_visual", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true, //버튼 클릭 여부
  },
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
  },
  effect: "fade",
});
//시그니처메뉴 배너 슬라이드
const menuList = new Swiper('.menu_list', {
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      centeredSlides: true
    },
    1200: {
      slidesPerView: 3,
      centeredSlides: true
    },
    960: {
      slidesPerView: 1,
      centeredSlides: true
    },
    768: {
      slidesPerView: 1,
      centeredSlides: true
    },
    480: {
      slidesPerView: 1,
      centeredSlides: true
    },
    360: {
      slidesPerView: 1,
      centeredSlides: true
    }
    
  }
});