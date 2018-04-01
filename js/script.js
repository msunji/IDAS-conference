const navLinks = document.querySelectorAll('.nav-link');
const ctaLinks = document.querySelectorAll('.jumbotron__btn');
const dropdownDesktop= document.querySelectorAll('.dropdown-switch');
const dropDown = document.querySelectorAll('.dropdown--desktop');
const carats = document.querySelectorAll('.down-carat');
const showHideButton = document.querySelector('.show-panels');
const eventBox = document.querySelectorAll('.timeline__event');


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
	const navbar = document.querySelector('.desktop-nav');
	const navbarLogo = document.querySelector('.nav__logo');
	const sticky = navbar.offsetTop;
	if(window.pageYOffset > sticky) {
		navbar.classList.add('sticky-nav');
		navbarLogo.classList.add('sticky-logo');
	}
	else {
		navbar.classList.remove('sticky-nav');
		navbarLogo.classList.remove('sticky-logo');
	}
}

// Schedule Accordion
var acc = document.querySelectorAll('.accordion-switch');
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    var carat = this.childNodes[1];
    var panel = this.nextElementSibling;

    if (panel.classList.contains('panel--open')) {
      	panel.classList.remove('panel--open');
      	panel.style.maxHeight = null;
      	carat.classList.toggle("active");	
    } else {
    	var panelHeight = panel.scrollHeight + 80;
	    panel.style.maxHeight = panelHeight + "px";
	    panel.classList.add('panel--open');
	    carat.classList.toggle("active");
    } 
  });
}

// Show-Hide Panel Toggle
// function showHideHandler(e) {
// 	acc.forEach(button => {
// 		var panel = button.nextElementSibling;
// 		panel.classList.toggle('open-panel');
// 	});
// }

// Event Listeners
// navLinks.forEach(link => link.addEventListener('click', smoothScroll));
// ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));
// showHideButton.addEventListener('click', showHideHandler);
dropdownDesktop.forEach(link => link.addEventListener('click', dropdownHandlerDesktop));

window.addEventListener('click', hideMenuHandler);
window.addEventListener('scroll', stickyNavHandler);