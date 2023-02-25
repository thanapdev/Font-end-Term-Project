// responsive navbar
// let mainNav = document.getElementById('js-menu');
// let navbarToggle = document.getElementById('js-nav-toggle');

// navbarToggle.addEventListener("click" , function(){
//     mainNav.classList.toggle('active');
// });

// nav
function toggleMenu(){
	const toggleMenu = document.querySelector(".toggleMenu");
	const navigation = document.querySelector(".navigation");
	toggleMenu.classList.toggle("active");
	navigation.classList.toggle("active");
}
// end nav