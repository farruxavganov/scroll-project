const navbar = document.querySelector(".navbar");
const content = document.querySelector(".navbar__content");
const bars = document.querySelector(".navbar__bars");
const hook = document.querySelector(".hook");
const navbarLinls = document.querySelectorAll(".navbar__link");

bars.addEventListener("click", function () {
	let navbarContent = navbar.querySelector(".navbar__content").getBoundingClientRect().height;
	let navbarItems = navbar.querySelector(".navbar__items").getBoundingClientRect().height;
	
	if(navbarContent < navbarItems) {
		content.style.height = navbarItems + "px";
		navbar.classList.add("show");
	}else {
		content.style.height = 0 + "px";
		navbar.classList.remove("show");
	}
})

navbarLinls.forEach(function (link) {
	link.addEventListener("click", function(e) {
		e.preventDefault();
		navbar.classList.remove("show");
		content.style.height = 0;
		const href = e.currentTarget.getAttribute("href");
		const element = document.querySelector(href);
		let position = element.offsetTop - navbar.offsetHeight;
		content.style.height = 0;
		navbar.classList.remove("show");
		window.scrollTo(
			{
				let: 0,
				top: position
			}
		);

	})
})
window.addEventListener("scroll", function () {

	let scrollHeight = window.pageYOffset;
	let navbarHeight = navbar.getBoundingClientRect().height;

	if(scrollHeight >= navbarHeight) {
		navbar.classList.add("active");
	}else {
		navbar.classList.remove("active");
	}
	if(window.pageYOffset > 82) {
		hook.style.display = "flex";
	}else {
		hook.style.display = "none";
	}

})

window.onresize = ()=> {
	content.style.height = 0;
	navbar.classList.remove("show");
}