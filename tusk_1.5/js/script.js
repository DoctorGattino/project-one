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


/* 	document.addEventListener("DOMContentLoaded", function(){
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
		slidesPerView: 1.2,
  });
}); */
