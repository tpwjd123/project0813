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

// section2_swiper
let swiperSection2 = new Swiper(".promotion .section2_sw", {
  slidesPerView: 5,
  spaceBetween: 20,
  centeredSlides: true,      /* 중앙 정렬로 버튼과 정렬 */
  loop: true,
  navigation: {
    prevEl: ".section3_sw .swiper-prev",
    nextEl: ".section3_sw .swiper-next",
  },
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
  slidesPerView:2,
  spaceBetween: 0,
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
var footerAlert = new Swiper(".alert-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 800,
    allowTouchMove: false,
});

let isAutoplayRunning = true;

// 재생/정지 버튼
document.querySelector('.alert-play-pause').addEventListener('click', function() {
    if (isAutoplayRunning) {
        footerAlert.autoplay.stop();
        this.innerHTML = '<img src="images/btn_notice_play.png" alt="재생">';
        isAutoplayRunning = false;
    } else {
        footerAlert.autoplay.start();
        this.innerHTML = '<img src="images/btn_notice_stop.png" alt="정지">';
        isAutoplayRunning = true;
    }
});

// 이전 버튼
document.querySelector('.alert-prev').addEventListener('click', function() {
    footerAlert.slidePrev();
});

// 다음 버튼
document.querySelector('.alert-next').addEventListener('click', function() {
    footerAlert.slideNext();
});

// 더하기 버튼 (필요시 기능 추가)
document.querySelector('.alert-add').addEventListener('click', function() {
    // 여기에 더하기 버튼 기능 추가
    console.log('더하기 버튼 클릭됨');
    // 예: 새 공지사항 추가 페이지로 이동
    // window.open('/admin/notice/add', '_blank');
});