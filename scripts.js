const navBtn = document.querySelector("#nav-btns");
const main = document.querySelector("main");

navBtn.addEventListener("click", () => {
	main.classList.toggle("show-nav");
});
