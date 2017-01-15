const notifications = document.getElementById("avatar");
const showAlert = document.getElementsByClassName("hide")[0];
const closeAlert = document.getElementById("alert-delete");


window.onload = function() {
	showAlert.style.display = "block";
}

//Show and hide notifications menu
notifications.addEventListener("click", (e) => {
	const showMenu = document.getElementById("dropdown").classList.toggle("show");
});

//Hide alert notification
closeAlert.addEventListener("click", (e) => {
	const tester = document.getElementById("alert");
	tester.style.display = "none";
});