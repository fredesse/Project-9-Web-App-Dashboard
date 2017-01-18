const notifications = document.getElementById("avatar");
const showAlert = document.getElementsByClassName("hide")[0];
const closeAlert = document.getElementById("alert-delete");

const showTrafficHour = document.getElementById("traffic-h");
const showTrafficDay = document.getElementById("traffic-d");
const showTrafficWeek = document.getElementById("traffic-w");
const showTrafficMonth = document.getElementById("traffic-m");

const hourlyBtn = document.getElementById("hourly");
const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

const twitterNumber = document.getElementById("twitter");
const facebookNumber = document.getElementById("facebook");
const googleNumber = document.getElementById("google");

window.onload = function() {
	showAlert.style.display = "block"; //To show alert
	showTrafficHour.style.display = "block"; //To show hourly traffic line chart on pg load

    const randomNumber = Math.floor(Math.random() * 11000);	// Number for Twitter
    const paragraphT = document.createElement("p");
    paragraphT.className = "social-number";
    paragraphT.textContent = randomNumber;
    twitterNumber.appendChild(paragraphT);

	const randomNumber1 = Math.floor(Math.random() * 11000); // Number for Facebook
    const paragraphFb = document.createElement("p");
    paragraphFb.className = "social-number";
    paragraphFb.textContent = randomNumber1;
    facebookNumber.appendChild(paragraphFb);

    const randomNumber2 = Math.floor(Math.random() * 11); // Number for Google
    const paragraphG = document.createElement("p");
    paragraphG.className = "social-number";
    paragraphG.textContent = randomNumber2;
    googleNumber.appendChild(paragraphG);
};

//Show and hide notifications menu
notifications.addEventListener("click", (e) => {
	const showMenu = document.getElementById("dropdown").classList.toggle("show");
});

//Hide alert notification
closeAlert.addEventListener("click", (e) => {
	const tester = document.getElementById("alert");
	tester.style.display = "none";
});

// Show daily traffic line chart
hourlyBtn.addEventListener("click", (e) => {
	showTrafficDay.style.display = "none";
	showTrafficWeek.style.display = "none";
	showTrafficMonth.style.display = "none";
	showTrafficHour.style.display = "block";
});

// Show daily traffic line chart
dailyBtn.addEventListener("click", (e) => {
	showTrafficHour.style.display = "none";
	showTrafficWeek.style.display = "none";
	showTrafficMonth.style.display = "none";
	showTrafficDay.style.display = "block";
});

// Show weekly traffic line chart
weeklyBtn.addEventListener("click", (e) => {
	showTrafficHour.style.display = "none";
	showTrafficDay.style.display = "none";
	showTrafficMonth.style.display = "none";
	showTrafficWeek.style.display = "block";
});

// Show monthly traffic line chart
monthlyBtn.addEventListener("click", (e) => {
	showTrafficHour.style.display = "none";
	showTrafficDay.style.display = "none";
	showTrafficWeek.style.display = "none";
	showTrafficMonth.style.display = "block";
});


























