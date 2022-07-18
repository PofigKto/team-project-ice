var swiper = new Swiper(".mySwiper", {
        speed: 1000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        },
      });