document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault;
  document.querySelector('.popup').style.display = 'none';
})

let swiper = new Swiper(".main_Swiper", {
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
});

let swiperSection1 = new Swiper(".promotion .section1_sw", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
});

let swiperSection3 = new Swiper(".promotion .section3_sw", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },
});

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