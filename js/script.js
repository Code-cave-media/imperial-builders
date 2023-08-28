var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2000, // Set the time (in milliseconds) between slides
    disableOnInteraction: false, // Allow user interaction to pause autoplay
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
