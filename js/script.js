const navLinks = document.querySelectorAll('.nav-link');

// Smooth Scroll
function smoothScroll(e) {
	e.preventDefault();
	var element = this.getAttribute("href");
	document.querySelector(`${element}`).scrollIntoView({ behavior: 'smooth' });
}

navLinks.forEach(link => link.addEventListener('click', smoothScroll));

