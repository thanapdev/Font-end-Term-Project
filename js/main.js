// nav
	let menu = document.querySelector('#menu-bars');
	let navbar = document.querySelector('header .navbar');

	menu.onclick = () =>{
		menu.classList.toggle('fa-times');
		navbar.classList.toggle('active');
	}


	let cart = document.querySelector('.shopping-cart');

	cart.onclick = () =>{
		cart.classList.toggle('active');
	}
// end nav

// cart
$(".shopping-cart").fadeOut();
  $("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
  });
// end cart

// hero
var swiper = new Swiper(".home-slider", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
	  delay: 5500,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	loop:true,
  });
// end hero
