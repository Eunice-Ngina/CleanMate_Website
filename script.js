// scripts.js

document.addEventListener("DOMContentLoaded", function () {
	console.log("Website ready!");

	// Smooth Scrolling for Navbar Links
	const scrollLinks = document.querySelectorAll('a[href^="#"]');

	scrollLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 70, // Adjust for navbar height
					behavior: "smooth",
				});
			}
		});
	});

	// play and Pause Hero section video

	

	// Back to Top Button Logic
	const backToTopButton = document.createElement("button");
	backToTopButton.innerText = "↑ Top";
	backToTopButton.classList.add("back-to-top");
	document.body.appendChild(backToTopButton);

	window.addEventListener("scroll", function () {
		if (window.scrollY > 300) {
			backToTopButton.style.display = "block";
		} else {
			backToTopButton.style.display = "none";
		}
	});

	backToTopButton.addEventListener("click", function () {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	// Dynamic Navbar on Scroll
	const navbar = document.querySelector(".navbar");

	window.addEventListener("scroll", function () {
		if (window.scrollY > 100) {
			navbar.classList.add("navbar-scrolled");
		} else {
			navbar.classList.remove("navbar-scrolled");
		}
	});
});
