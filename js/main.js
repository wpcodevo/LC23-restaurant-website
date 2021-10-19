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

/* Scroll Reveal */
const scroll = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

scroll.reveal(`.home .col:last-child`, { delay: 600 });
scroll.reveal(`.icons .icon, .about .col:first-child, .menu .col`, {
  origin: "bottom",
  interval: 100,
});

scroll.reveal(
  `.home .col:first-child h1, .home .col:first-child .btn,.categories .col:first-child`,
  {
    origin: "left",
    interval: 150,
    delay: 600,
  }
);

scroll.reveal(
  `.about .col:last-child h2, .about .col:last-child p, .about .col:last-child .btn,.categories .col:last-child`,
  {
    origin: "right",
    interval: 100,
  }
);

scroll.reveal(`.categories .col:nth-child(2), .menu .btn, .contact .col`, {
  origin: "top",
});

scroll.reveal(`.testimonial .col:first-child`, {
  origin: "left",
});

scroll.reveal(`.testimonial .col:last-child`, {
  origin: "right",
});

scroll.reveal(`.footer .col div`, {
  origin: "top",
  interval: 100,
});
