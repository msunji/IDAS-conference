const navLinks = document.querySelectorAll('.nav-link');
const ctaLinks = document.querySelectorAll('.cta-button-nav');
const dropdownDesktop= document.querySelectorAll('.dropdown-link');
const dropDown = document.querySelectorAll('.dropdown-desktop');
const carats = document.querySelectorAll('.down-carat');

// Smooth Scroll
// function smoothScroll(e) {
// 	e.preventDefault();
// 	var element = this.getAttribute("href");
// 	document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
// }

// Dropdown Menu
function dropdownHandlerDesktop(e) {
	e.preventDefault();
	e.stopPropagation();
	var dropdownNext = this.nextElementSibling;
	var downCarat = this.childNodes[1];

	console.log(e.target);

	if(e.target) {
		dropdownNext.classList.toggle('show');
		downCarat.classList.toggle('active');	

	}
	else {
		dropDown.forEach(menu => menu.classList.remove('show'));
		downCarat.classList.remove('active');
	}
}

// Hide dropdown if you click on something else
function hideMenuHandler(e) {
	dropDown.forEach(menu => menu.classList.remove('show'));
	carats.forEach(carat => carat.classList.remove('active'));
}

// Sticky navbar
function stickyNavHandler(e) {
	const navbar = document.querySelector('.main-nav');
	const sticky = navbar.offsetTop;
	if(window.pageYOffset > sticky) {
		navbar.classList.add("sticky-nav");
	}
	else {
		navbar.classList.remove("sticky-nav");
	}
}

// Event Listeners
// navLinks.forEach(link => link.addEventListener('click', smoothScroll));
// ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));
dropdownDesktop.forEach(link => link.addEventListener('click', dropdownHandlerDesktop));
window.addEventListener('click', hideMenuHandler);
window.addEventListener('scroll', stickyNavHandler);