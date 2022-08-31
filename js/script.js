let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () => {
	navbar.classList.remove('active');
	console.log("clicked");
}
window.onscroll = () => {
	navbar.classList.remove('active');
}
let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
	search.classList.add('active');
}
document.querySelector('#close-search').onclick = () => {
	search.classList.remove('active');
	console.log("clicked");
}
window.onscroll = () => {
	search.classList.remove('active');
	if(window.scrollY > 0){
		document.querySelector(".header").classList.add('active');
	} else {
		document.querySelector(".header").classList.remove('active');
	}
};
var swiper = new Swiper(".mySwiper", {
	loop:true,
	grabCursor:true,
	pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
	navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});
var swiper = new Swiper(".product-slider", {
	loop:true,
	grabCursor:true,
	slidesPerView: 1,
    spaceBetween: 20,
	// centerInsufficientSlides: true,
	pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
	navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
});
var swiper = new Swiper(".review-slider", {
	loop:true,
	grabCursor:true,
	centeredSlides: true,
    spaceBetween: 20,
	// centerInsufficientSlides: true,
	pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
	navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    breakpoints: {
    	  0: {
    	  	slidesPerView: 1,
    	  },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        },
});
var swiper = new Swiper(".blogs-slider", {
	loop:true,
	grabCursor:true,
	centeredSlides: true,
    spaceBetween: 20,
    // slidesPerView: 1,
	// centerInsufficientSlides: true,
	pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
    breakpoints: {
    	  0: {
    	  	slidesPerView: 1,
    	  },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        },
});
var swiper = new Swiper(".clients-slider", {
	loop:true,
	grabCursor:true,
	slidesPerView: 1,
    spaceBetween: 20,
	// centerInsufficientSlides: true,
	
    breakpoints: {
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        },
});
