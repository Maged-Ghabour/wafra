var swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-navBtn",
    prevEl: ".swiper-navBtn",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 6,
    },
  },
});

var s7 = new Swiper(".s7", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next7",
    prevEl: ".swiper-button-prev7",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
    1300: {
      slidesPerView: 1,
    },
  },
});
