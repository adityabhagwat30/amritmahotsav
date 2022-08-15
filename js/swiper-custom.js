var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   keyboard: {
      enabled: true,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
     640: {
       slidesPerView: 1,
       spaceBetween: 20,
     },
     768: {
       slidesPerView: 2,
       spaceBetween: 25,
     },
     1024: {
       slidesPerView: 3,
       spaceBetween: 30,
     },
   },
   
 });