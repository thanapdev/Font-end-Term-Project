// responsive navbar
// let mainNav = document.getElementById('js-menu');
// let navbarToggle = document.getElementById('js-nav-toggle');

// navbarToggle.addEventListener("click" , function(){
//     mainNav.classList.toggle('active');
// });

// nav
	let menu = document.querySelector('#menu-bars');
	let navbar = document.querySelector('.navbar');

	menu.onclick = () =>{
		menu.classList.toggle('fa-times');
		navbar.classList.toggle('active');
	}
// end nav

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
