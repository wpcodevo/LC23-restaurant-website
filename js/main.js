/* Toogle Nav Menu */
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("show");
});

/* Testimonial Slider */
const swiper = new Swiper(".myslider", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  autoHeight: true,
  grabCursor: true,
  slidesPerView: "auto",
  navigation: {
    nextEl: ".custom-btn ion-icon, .custom-btn",
  },
});
