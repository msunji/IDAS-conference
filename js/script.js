const navLinks = document.querySelectorAll('.nav-link');
const ctaLinks = document.querySelectorAll('.cta-button');

// Smooth Scroll
function smoothScroll(e) {
	e.preventDefault();
	var element = this.getAttribute("href");
	document.querySelector(`${element}`).scrollIntoView({ behavior: 'smooth' });
}

navLinks.forEach(link => link.addEventListener('click', smoothScroll));
ctaLinks.forEach(link => link.addEventListener('click', smoothScroll));
