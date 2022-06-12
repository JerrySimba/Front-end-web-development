const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active")
	navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(n => n.
	addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	}))

var button = document.querySelector('button');

button.onclick = function() {

	alert("Welcome! Your application has been confirmed");
}

var h3 = document.querySelector('h3');
h3.innerHTML = "I just modified this file";