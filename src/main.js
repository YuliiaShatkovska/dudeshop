const burgerButton = document.querySelector(".burger_button");
const menu = document.querySelector(".mobile_menu");
const closeMenuBtn = document.querySelector(".button_close");

burgerButton.addEventListener("click", openMenu);

function openMenu() {
  menu.classList.toggle("is-hidden");
}

closeMenuBtn.addEventListener("click", openMenu);

const swiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  watchOverflow: true,

  autoplay: {
    delay: 3000,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
