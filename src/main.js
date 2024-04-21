
    //swiper for images

    let swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 3,
        depth: 400,
        modifier: 3,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
    });
    

    //Menu toggle

    function toggleMenu() {
      const menuToggle = document.querySelector(".toggle");
      const navigation = document.querySelector('.navigation');
      menuToggle.classList.toggle("active");
      navigation.classList.toggle("active");
    }

  

  
  