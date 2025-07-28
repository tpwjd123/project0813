// 팝업창//
document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('.popup').style.display = 'none';
})

// main_swiper

let swiper = new Swiper(".main_Swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// section1_swiper
let swiperSection1 = new Swiper(".promotion .section1_sw", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,      /* 중앙 정렬로 버튼과 정렬 */
  loop: true,
  navigation: {
    prevEl: ".section1_sw .swiper-prev",
    nextEl: ".section1_sw .swiper-next",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});

// section3_swiper
let swiperSection3 = new Swiper(".promotion .section3_sw", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,      /* 중앙 정렬로 버튼과 정렬 */
  loop: true,
  navigation: {
    prevEl: ".section3_sw .swiper-prev",
    nextEl: ".section3_sw .swiper-next",
  },
});

// banner_swiper
let swiperBanner = new Swiper(".banner .banner_swiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})
// 스크롤시 gnb 메뉴바 스타일변경
let gnb = document.querySelector('.gnb');
let gnbTop = gnb.clientHeight;
let topBtn = document.querySelector('.topBtn');

window.addEventListener('scroll', () => {
  let currentTop = window.scrollY;
  if (currentTop > gnbTop) {
    gnb.classList.add('sticky')
  }
  else {
    gnb.classList.remove('sticky')
  }
  // topButton 표시
  if (currentTop > 300) {
    topBtn.style.opacity = '1'
  }
  else {
    topBtn.style.opacity = '0'
  }
})

topBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('html,body').scrollTo({ top: 0, behavior: 'smooth' });
})



// footer 소식
let alertSwiper = new Swiper(".alertSwiper .swiper-wrapper>.swiper-slide>a ", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
});