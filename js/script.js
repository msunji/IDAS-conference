const desktopNav = document.querySelector('.desktop-nav');
const navLinks = document.querySelectorAll('.nav-link');
const ctaLinks = document.querySelectorAll('.cta-button-nav');
// const dropdownLink = document.querySelector('.dropdown-link');
const dropDown = document.querySelector('.dropdown-menu');
const downCarat = document.querySelector('.down-carat');

// Smooth Scroll
function smoothScroll(e) {
	e.preventDefault();
	var element = this.getAttribute("href");
	console.log(element);
	document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
}

// Dropdown Menu
function dropdownMenu(e) {
	dropDown.classList.toggle("show");
}
// Hide dropdown if you click on something else
function hideMenuHandler(e) {
	console.log('test');
	// e.preventDefault();
	// if(!e.target.matches('.dropdown-link')) {
	// 	var dropdownContent = document.getElementsByClassName(".dropdown-menu");
	// 	var i;
	// 	for (i = 0; i < dropdownContent.length; i++) {
	// 		var openDropdown = dropdownContent[i];
	// 		if(openDropdown.classList.contains('show')) {
	// 			openDropdown.classList.remove('show');
	// 		}
	// 	}
	// }
}

// Sticky navbar 


navLinks.forEach(link => link.addEventListener('click', smoothScroll));
ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));
// dropdownLink.addEventListener('click', dropdownMenu);
// window.addEventListener('click', hideMenuHandler);