const navLinks = document.querySelectorAll('.nav-link');
const ctaLinks = document.querySelectorAll('.cta-button-nav');
const dropdownDesktop= document.querySelector('.dropdown-link');
const dropDown = document.getElementById('dropdown-desktop');

// Smooth Scroll
function smoothScroll(e) {
	e.preventDefault();
	var element = this.getAttribute("href");
	document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
}

// Dropdown Menu
function dropdownHandlerDesktop(e) {
	e.stopPropagation();
	const downCarat = document.querySelector('.down-carat');
	dropDown.classList.toggle('show');
	downCarat.classList.toggle('active');
}

// Hide dropdown if you click on something else
function hideMenuHandler(e) {
	dropDown.classList.remove('show');
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
navLinks.forEach(link => link.addEventListener('click', smoothScroll));
ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));
dropdownDesktop.addEventListener('click', dropdownHandlerDesktop);
window.addEventListener('click', hideMenuHandler);
window.addEventListener('scroll', stickyNavHandler);