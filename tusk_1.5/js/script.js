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
    spaceBetween: 1,
  });
});
}

document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.getElementById('showButton');
    const brandsContainer = document.querySelector('.brands');
  
    let isHidden = false;
  
    showButton.addEventListener('click', function() {
      isHidden = !isHidden;
  
      if (isHidden) {
        // Показываем бренды
        brandsContainer.style.height = '380px';
        showButton.textContent = 'Скрыть';
        showButton.classList.remove('main__buttons--show-all');
        showButton.classList.add('main__buttons--hidden');
      } else {
        // Скрываем бренды

        brandsContainer.style.height = '190px';
        showButton.textContent = 'Показать все';
        showButton.classList.remove('main__buttons--hidden');
        showButton.classList.add('main__buttons--show-all');
      }
    });
  });