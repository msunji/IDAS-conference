const navLinks = document.querySelectorAll('.nav-link');
const ctaLinks = document.querySelectorAll('.cta-button-nav');
const dropdownDesktop= document.querySelectorAll('.dropdown-link');
const dropDown = document.querySelectorAll('.dropdown-desktop');
const carats = document.querySelectorAll('.down-carat');

// Slick Slider

$('.slider-wrap').slick({
	infinite: true,
	fade: true,
	speed: 300,
	dots: false
});

// Smooth Scroll
function smoothScroll(e) {
	e.preventDefault();
	var element = this.getAttribute("href");
	document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
}

// Hide dropdown if you click on something else
function hideMenuHandler(e) {
	dropdownDesktop.forEach(dropdown => {
		var dropdownNext = dropdown.nextElementSibling;
		var downCarat = dropdown.childNodes[1];

		if(dropdownNext.classList.contains('show') && dropdownNext.id !== e) {
			dropdownNext.classList.remove('show');
			downCarat.classList.remove('active');
		} 
	});
}

// Dropdown Menu
function dropdownHandlerDesktop(e) {
	var dropdownNext = this.nextElementSibling;
	var downCarat = this.childNodes[1];
	e.stopPropagation();
	e.preventDefault();
	dropdownNext.classList.toggle('show');
	downCarat.classList.toggle('active');

	// fire hide menu handler
	hideMenuHandler(dropdownNext.id);
}

// Sticky navbar
function stickyNavHandler(e) {
	const navbar = document.querySelector('.main-nav');
	const navbarLogo = document.querySelector('.nav-logo > img');
	const sticky = navbar.offsetTop;
	if(window.pageYOffset > sticky) {
		navbar.classList.add("sticky-nav");
		navbarLogo.classList.add("sticky-logo");
	}
	else {
		navbar.classList.remove("sticky-nav");
		navbarLogo.classList.remove("sticky-logo");
	}
}


// Event Listeners
// navLinks.forEach(link => link.addEventListener('click', smoothScroll));
// ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));
dropdownDesktop.forEach(link => link.addEventListener('click', dropdownHandlerDesktop));
window.addEventListener('click', hideMenuHandler);
window.addEventListener('scroll', stickyNavHandler);