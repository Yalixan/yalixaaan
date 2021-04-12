'use strict';


let miniPhotoGalleryTitle = document.querySelector('.mini-photo-gallery-title');
let spslider = document.querySelector('.s-and-p-slider');

(function () {
    let burger = document.querySelector(".mini-burger-container"),
        header = document.querySelector(".mini-header");

    burger.onclick = function () {
        header.classList.toggle(".mini-menu-opened");
    };
})();

$('.s-and-p-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4
          }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});





(function () {
    let burger = document.querySelector(".mini-burger-container"),
        header = document.querySelector(".mini-header");

    burger.onclick = function () {
        header.classList.toggle("mini-menu-opened");
    };
})();

for (var i = 0, length = a.length; i < length; i++) {
  a[i].onclick = function() {
    let b = document.querySelector(".menu-bar li.li-active");
    if (b) b.classList.remove("li-active");
    this.parentNode.classList.add('li-active');
  };
}
