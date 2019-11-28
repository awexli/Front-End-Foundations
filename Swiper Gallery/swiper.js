new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    effect: "coverflow",
    loop: true,
    coverflowEffect: {
        rotate: 45,
        slideShadows: false,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});