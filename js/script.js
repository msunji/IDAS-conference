const desktopNav = document.querySelector('.desktop-nav');
const navLinks = document.querySelectorAll('.nav-link');
const ctaLinks = document.querySelectorAll('.cta-button-nav');
const dropdownLink = document.querySelector('.dropdown-link');
const dropDown = document.querySelector('.dropdown-menu');
const downCarat = document.querySelector('.down-carat');

// Smooth Scroll
function smoothScroll(e) {
	e.preventDefault();
	var element = this.getAttribute("href");
	document.querySelector(`${element}`).scrollIntoView({ behavior: 'smooth' });
}

// Dropdown Menu
function dropdownMenu(e) {
	dropDown.classList.toggle("show");
}

// Sticky navbar 


navLinks.forEach(link => link.addEventListener('click', smoothScroll));
ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));
dropdownLink.addEventListener('click', dropdownMenu);