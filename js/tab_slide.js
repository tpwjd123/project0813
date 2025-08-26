// ========== 탭 기능과 스와이퍼 통합 관리 ==========
document.addEventListener('DOMContentLoaded', function() {
    // 모든 탭 기능 초기화
    initAllTabs();
    initAllSwipers();
});

// 모든 탭 기능 초기화
function initAllTabs() {
    // Section1 탭
    initTabFunction('.section1', '[data-tab^="tab1-"]', 'btn_s1');
    
    // Section2 탭  
    initTabFunction('.section2', '[data-tab^="tab2-"]', 'btn_s2');
    
    // Section3 탭
    initTabFunction('.section3', '[data-tab^="tab3-"]', 'tab_menu');
}

// 탭 기능 구현 함수
function initTabFunction(sectionSelector, tabSelector, buttonClass) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;
    
    const tabButtons = section.querySelectorAll(tabSelector);
    const tabPanels = section.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 모든 버튼에서 active 클래스 제거
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭된 버튼에 active 클래스 추가
            this.classList.add('active');
            
            // 모든 패널 숨기기
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.style.display = 'none';
            });
            
            // 해당 패널 보이기
            const targetTab = this.getAttribute('data-tab');
            const targetPanel = section.querySelector(`#${targetTab}`);
            
            if (targetPanel) {
                targetPanel.style.display = 'block';
                targetPanel.classList.add('active');
                
                // 해당 패널의 스와이퍼 업데이트
                const swiper = targetPanel.querySelector('.swiper');
                if (swiper && swiper.swiper) {
                    setTimeout(() => {
                        swiper.swiper.update();
                    }, 100);
                }
            }
        });
    });
}

// 모든 스와이퍼 초기화
function initAllSwipers() {
    // Section1 스와이퍼들
    new Swiper(".section1_sw", createSwiperConfig(".section1_sw"));
    new Swiper(".section1_sw2", createSwiperConfig(".section1_sw2"));
    new Swiper(".section1_sw3", createSwiperConfig(".section1_sw3"));
    
    // Section2 스와이퍼들
    new Swiper(".section2_sw", createSwiperConfig(".section2_sw"));
    new Swiper(".section2_sw2", createSwiperConfig(".section2_sw2"));
    new Swiper(".section2_sw3", createSwiperConfig(".section2_sw3"));
    new Swiper(".section2_sw4", createSwiperConfig(".section2_sw4"));
    
    // Section3 스와이퍼들
    new Swiper(".section3_sw", createSwiperConfig(".section3_sw"));
    new Swiper(".section3_sw2", createSwiperConfig(".section3_sw2"));
    new Swiper(".section3_sw3", createSwiperConfig(".section3_sw3"));
    new Swiper(".section3_sw4", createSwiperConfig(".section3_sw4"));
    new Swiper(".section3_sw5", createSwiperConfig(".section3_sw5"));
    
    // 기존 스와이퍼들
    initMainSwiper();
    initBannerSwiper();
    initFooterSwiper();
}

// 스와이퍼 설정 생성 함수
function createSwiperConfig(selector) {
    return {
        slidesPerView: 5,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        navigation: {
            prevEl: `${selector} .swiper-prev`,
            nextEl: `${selector} .swiper-next`,
        }
    };
}

// 기존 스와이퍼들 초기화
function initMainSwiper() {
    new Swiper(".main_Swiper", {
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
}

function initBannerSwiper() {
    new Swiper(".banner_swiper", {
        slidesPerView: 2,
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
    });
}

function initFooterSwiper() {
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
    
    // 푸터 알림 컨트롤
    let isAutoplayRunning = true;
    
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
    
    document.querySelector('.alert-prev').addEventListener('click', function() {
        footerAlert.slidePrev();
    });
    
    document.querySelector('.alert-next').addEventListener('click', function() {
        footerAlert.slideNext();
    });
}

// 기존 기능들
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault;
    document.querySelector('.popup').style.display = 'none';
});

// 스크롤 기능
let gnb = document.querySelector('.gnb');
let gnbTop = gnb.clientHeight;
let topBtn = document.querySelector('.topBtn');

window.addEventListener('scroll', () => {
    let currentTop = window.scrollY;
    if (currentTop > gnbTop) {
        gnb.classList.add('sticky');
    } else {
        gnb.classList.remove('sticky');
    }
    
    if (currentTop > 300) {
        topBtn.style.opacity = '1';
    } else {
        topBtn.style.opacity = '0';
    }
});

topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('html,body').scrollTo({ top: 0, behavior: 'smooth' });
});
