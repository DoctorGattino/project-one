if (window.matchMedia('(max-width: 767px)').matches) {
document.addEventListener("DOMContentLoaded", function() {
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: "auto",
    spaceBetween: 16,
  });
});
}


