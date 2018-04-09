// Variables for Desktop dropdown
const dropdownDesktopSwitch = document.querySelectorAll('.dropdown-switch');
const dropdownDesktop = document.querySelectorAll('.dropdown--desktop');
const carats = document.querySelectorAll('.down-carat');

// Variables for Mobile nav 
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinksList = document.querySelector('.mobile-nav__links');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__links li');
const mobileMenuSwitch = document.querySelector('.mobile__toggle');
const dropdownMobileSwitch = document.querySelectorAll('.dropdown--mobile__switch');

// All dropdowns
const allDropDowns = document.querySelectorAll('.dropdown--trigger');

const panelToggle = document.querySelector('.show-panels');
const showHidePanels = document.querySelector('.panel--showall');


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
	allDropDowns.forEach(dropdown => {
		var dropdownNext = dropdown.nextElementSibling;
		var downCarat = dropdown.childNodes[1];

		if(dropdownNext.classList.contains('show') && dropdownNext.id !== e) {
			dropdownNext.classList.remove('show');
			downCarat.classList.remove('active');
			mobileNavLinksList.classList.add('mobile-nav__closed');
			hamburger.classList.remove('is-active');
		} 
	});


	// if(mobileNavLinksList.classList[0] !== e || allDropDowns.id !== e) {
	// 	mobileNavLinksList.classList.add('mobile-nav__closed');
	// 	hamburger.classList.remove('is-active');		
	// }

}

// Dropdown Menu
function dropdownHandlerDesktop(e) {
	e.stopPropagation();
	e.preventDefault();

	var dropdownNext = this.nextElementSibling;
	var downCarat = this.childNodes[1];

	dropdownNext.classList.toggle('show');
	downCarat.classList.toggle('active');

	// fire hide menu handler
	hideMenuHandler(dropdownNext.id);
}

// Show mobile menu
function mobileMenuHandler(e) {
	e.stopPropagation();
	e.preventDefault();

	var mobileDropdown = mobileMenuSwitch.nextElementSibling;

	mobileDropdown.classList.toggle('mobile-nav__closed');
	hamburger.classList.toggle('is-active');
}

// Close mobile menu when you click on a link
function mobileNavLinkHandler(e) {
	var liChild = this.childNodes[0];

	if(!liChild.classList.contains('dropdown--trigger')) {
		mobileNavLinksList.classList.add('mobile-nav__closed');
		hamburger.classList.toggle('is-active');
	}
}

// Close mobile menu when you scroll down the page
function hideOnScroll(e) {
	if(!mobileNavLinksList.classList.contains('mobile-nav__closed')) {
		mobileNavLinksList.classList.add('mobile-nav__closed');
		hamburger.classList.remove('is-active');
	}
}

// Dropdown Menu for Mobile 
function dropdownHandlerMobile(e) {
	e.stopPropagation();
	e.preventDefault();

	var mobileMenu = this.nextElementSibling;
	var downCarat = this.childNodes[1];

	mobileMenu.classList.toggle('show');
	downCarat.classList.toggle('active');

	hideMenuHandler(mobileMenu.id);
}

// Sticky navbar
function stickyNavHandler(e) {
	const navbar = document.querySelector('.desktop-nav');
	const navbarLogo = document.querySelector('.nav__logo');
	const sticky = navbar.offsetTop;

	if(window.pageYOffset > sticky) {
		navbar.classList.add('sticky-nav');
		navbarLogo.classList.add('sticky-logo');
		mobileNav.classList.add('sticky--mobile');
	}
	else {
		navbar.classList.remove('sticky-nav');
		navbarLogo.classList.remove('sticky-logo');
		mobileNav.classList.remove('sticky--mobile');
	}
}

// Schedule Accordion
var acc = document.querySelectorAll('.accordion-switch');
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    var carat = this.childNodes[1];
    var panel = this.nextElementSibling;

    if (panel.classList.contains('panel--closed')) {
      	panel.classList.remove('panel--closed');
      	carat.classList.toggle("active");	
    } else {
	    panel.classList.add('panel--closed');
	    carat.classList.toggle("active");
    } 
  });
}

// Show-Hide Panel Toggle
function showHideHandler(e) {
	var state = this.textContent;

	if(state == 'Show All') {
		acc.forEach((toggle, i) => {
			var panel = toggle.nextElementSibling;
			var carats = acc[i].childNodes[1];

			if(panel.classList.contains('panel--closed')) {
				panel.classList.remove('panel--closed');
				showHidePanels.innerHTML = "Hide All";
				carats.classList.add("active");
			}
		});
	}
	else if (state == "Hide All"){
		acc.forEach((toggle, i) => {
			var panel = toggle.nextElementSibling;
			var carats = acc[i].childNodes[1];

			if(!panel.classList.contains('panel--closed')) {
				panel.classList.add('panel--closed');
				showHidePanels.innerHTML = "Show All";
				carats.classList.remove("active");
			}
		});
	}

}


// Event Listeners
// navLinks.forEach(link => link.addEventListener('click', smoothScroll));
// ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));

dropdownDesktopSwitch.forEach(link => link.addEventListener('click', dropdownHandlerDesktop));
dropdownMobileSwitch.forEach(link => link.addEventListener('click', dropdownHandlerMobile));
mobileMenuSwitch.addEventListener('click', mobileMenuHandler);
mobileNavLinks.forEach(link => link.addEventListener('click', mobileNavLinkHandler));
// showHidePanels.addEventListener('click', showHideHandler);

window.addEventListener('click', hideMenuHandler);
window.addEventListener('scroll', function() {
	stickyNavHandler();
	hideOnScroll();
});
