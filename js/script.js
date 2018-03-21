const desktopNav = document.querySelector('.desktop-nav');
const navLinks = document.querySelectorAll('.nav-link');
const ctaLinks = document.querySelectorAll('.cta-button-nav');
const dropdownLink = document.querySelector('.dropdown-link');
const dropDown = document.getElementById('dropdown-desktop');
const downCarat = document.querySelector('.down-carat');

// Smooth Scroll
function smoothScroll(e) {
	e.preventDefault();
	var element = this.getAttribute("href");
	document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
}

// Dropdown Menu
function dropdownHandler(e) {
	e.stopPropagation();
	dropDown.classList.toggle('show');
}
// Hide dropdown if you click on something else
function hideMenuHandler(e) {
	dropDown.classList.remove('show');
}

// Sticky navbar 
navLinks.forEach(link => link.addEventListener('click', smoothScroll));
ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));
dropdownLink.addEventListener('click', dropdownHandler);
window.addEventListener('click', hideMenuHandler);