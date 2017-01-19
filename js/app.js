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

const image = document.createElement("img");
const pName = document.createElement("p");
const pEmail = document.createElement("p");
const pDate = document.createElement("p");

const newMemberData = [
	["img/diane.jpg", "Diane Chambers", "cheers@example.com", "10/15/16"],
	["img/larry.jpg", "Larry Byrd", "go.celtics@example.com", "10/15/16"],
	["img/james.jpg", "James Wood", "oooh.apieceofcandy@example.com", "10/15/16"],
	["img/jon.jpg", "Jon Oliver", "lastweek2nite@example.com", "10/15/16"]
];

const recentActivityData = [
	["commented on", "liked", "posted", "signed up"],
	["YourApp's SEO Tips", "Facebook's Changes for 2017", "with Facebook"],
	["1", "2", "3", "4", "5"],
	["hour", "hours", "day", "days"]
];

window.onload = function() {
	showAlert.style.display = "block"; //To show alert
	showTrafficHour.style.display = "block"; //To show hourly traffic line chart on pg load
	//For social widget numbers
    randomNumberT();
    randomNumberFb();
	randomNumberG();
	//For new members
    firstNewMember();
    secondNewMember();
    thirdNewMember();
    fourthNewMember();
    //Recents activity
    firstRecentActivity();
    secondRecentActivity();
    thirdRecentActivity();
    fourthRecentActivity();
};

function randomNumberT() {
	const randomNumber = Math.floor(Math.random() * 11000);	// Number for Twitter
    const paragraphT = document.createElement("p");
    paragraphT.className = "social-number";
    paragraphT.textContent = randomNumber;
    twitterNumber.appendChild(paragraphT);
};

function randomNumberFb() {
	const randomNumber1 = Math.floor(Math.random() * 11000); // Number for Facebook
    const paragraphFb = document.createElement("p");
    paragraphFb.className = "social-number";
    paragraphFb.textContent = randomNumber1;
    facebookNumber.appendChild(paragraphFb);
};

function randomNumberG() {
	const randomNumber2 = Math.floor(Math.random() * 11); // Number for Google (cause no-body uses G+)
    const paragraphG = document.createElement("p");
    paragraphG.className = "social-number";
    paragraphG.textContent = randomNumber2;
    googleNumber.appendChild(paragraphG);
};

function firstNewMember() {
	const imgParent = document.getElementById("nm-img-1"); // Appending image to new member category
	const image = document.createElement("img");
    image.src = newMemberData[0][0];
    imgParent.appendChild(image);

    const nameParent = document.getElementById("nm-info-1");
	const pName = document.createElement("p");
	pName.textContent = newMemberData[0][1];

	const pEmail = document.createElement("p");
	pEmail.textContent = newMemberData[0][2];
	nameParent.appendChild(pName);
	nameParent.appendChild(pEmail);

	const dateParent = document.getElementById("nm-date-1");
	const pDate = document.createElement("p");
	pDate.textContent = newMemberData[0][3];
	dateParent.appendChild(pDate);
};

function secondNewMember() {
	const imgParent = document.getElementById("nm-img-2"); // Appending image to new member category
	const image = document.createElement("img");
    image.src = newMemberData[1][0];
    imgParent.appendChild(image);

    const nameParent = document.getElementById("nm-info-2");
	const pName = document.createElement("p");
	pName.textContent = newMemberData[1][1];

	const pEmail = document.createElement("p");
	pEmail.textContent = newMemberData[1][2];
	nameParent.appendChild(pName);
	nameParent.appendChild(pEmail);

	const dateParent = document.getElementById("nm-date-2");
	const pDate = document.createElement("p");
	pDate.textContent = newMemberData[1][3];
	dateParent.appendChild(pDate);
}

function thirdNewMember() {
	const imgParent = document.getElementById("nm-img-3"); // Appending image to new member category
	const image = document.createElement("img");
    image.src = newMemberData[2][0];
    imgParent.appendChild(image);

    const nameParent = document.getElementById("nm-info-3");
	const pName = document.createElement("p");
	pName.textContent = newMemberData[2][1];

	const pEmail = document.createElement("p");
	pEmail.textContent = newMemberData[2][2];
	nameParent.appendChild(pName);
	nameParent.appendChild(pEmail);

	const dateParent = document.getElementById("nm-date-3");
	const pDate = document.createElement("p");
	pDate.textContent = newMemberData[2][3];
	dateParent.appendChild(pDate);
};

function fourthNewMember() {
	const imgParent = document.getElementById("nm-img-4"); // Appending image to new member category
	const image = document.createElement("img");
    image.src = newMemberData[3][0];
    imgParent.appendChild(image);

    const nameParent = document.getElementById("nm-info-4");
	const pName = document.createElement("p");
	pName.textContent = newMemberData[3][1];

	const pEmail = document.createElement("p");
	pEmail.textContent = newMemberData[3][2];
	nameParent.appendChild(pName);
	nameParent.appendChild(pEmail);

	const dateParent = document.getElementById("nm-date-4");
	const pDate = document.createElement("p");
	pDate.textContent = newMemberData[3][3];
	dateParent.appendChild(pDate);
};

function firstRecentActivity() {
	const imgParent = document.getElementById("ra-img-1"); // Appending image to new member category
	const image = document.createElement("img");
    image.src = newMemberData[0][0];
    imgParent.appendChild(image);

	const contentParent = document.getElementById("ra-info-1");
	const p1 = document.createElement("p");
    const userName = newMemberData[0][1];
    const userAction = recentActivityData[0][0];
    const userTarget = recentActivityData[1][0];
    p1.textContent = userName + ' ' + userAction + ' ' + userTarget;
    contentParent.appendChild(p1);

    const p2 = document.createElement("p");
    const timeAgo = recentActivityData[2][3] + ' ' + recentActivityData[3][1] + ' ago';
    p2.textContent = timeAgo;
    contentParent.appendChild(p2);
};

function secondRecentActivity() {
	const imgParent = document.getElementById("ra-img-2"); // Appending image to new member category
	const image = document.createElement("img");
    image.src = newMemberData[1][0];
    imgParent.appendChild(image);

	const contentParent = document.getElementById("ra-info-2");
	const p1 = document.createElement("p");
    const userName = newMemberData[1][1];
    const userAction = recentActivityData[0][1];
    const userTarget = recentActivityData[1][1];
    p1.textContent = userName + ' ' + userAction + ' ' + userTarget;
    contentParent.appendChild(p1);

    const p2 = document.createElement("p");
    const timeAgo = recentActivityData[2][4] + ' ' + recentActivityData[3][1] + ' ago';
    p2.textContent = timeAgo;
    contentParent.appendChild(p2);
};

function thirdRecentActivity() {
	const imgParent = document.getElementById("ra-img-3"); // Appending image to new member category
	const image = document.createElement("img");
    image.src = newMemberData[2][0];
    imgParent.appendChild(image);

	const contentParent = document.getElementById("ra-info-3");
	const p1 = document.createElement("p");
    const userName = newMemberData[2][1];
    const userAction = recentActivityData[0][0];
    const userTarget = recentActivityData[1][1];
    p1.textContent = userName + ' ' + userAction + ' ' + userTarget;
    contentParent.appendChild(p1);

    const p2 = document.createElement("p");
    const timeAgo = recentActivityData[2][4] + ' ' + recentActivityData[3][1] + ' ago';
    p2.textContent = timeAgo;
    contentParent.appendChild(p2);
};

function fourthRecentActivity() {
	const imgParent = document.getElementById("ra-img-4"); // Appending image to new member category
	const image = document.createElement("img");
    image.src = newMemberData[3][0];
    imgParent.appendChild(image);

	const contentParent = document.getElementById("ra-info-4");
	const p1 = document.createElement("p");
    const userName = newMemberData[3][1];
    const userAction = recentActivityData[0][3];
    const userTarget = recentActivityData[1][2];
    p1.textContent = userName + ' ' + userAction + ' ' + userTarget;
    contentParent.appendChild(p1);

    const p2 = document.createElement("p");
    const timeAgo = recentActivityData[2][0] + ' ' + recentActivityData[3][2] + ' ago';
    p2.textContent = timeAgo;
    contentParent.appendChild(p2);
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


// Search input field
const messageUser = document.getElementById("message-user");
const searchUser = document.createElement("input");
searchUser.setAttribute("id", "search-user");
searchUser.setAttribute("type", "search");
searchUser.setAttribute("placeholder", "Search for User");
messageUser.appendChild(searchUser);

// Text area input field
const writeToUser = document.createElement("textarea");
writeToUser.setAttribute("name", "textarea");
writeToUser.setAttribute("placeholder", "Message for User");
messageUser.appendChild(writeToUser);

// Send button 
const sendBtn = document.createElement("button");
sendBtn.setAttribute("type", "submit");
sendBtn.textContent = "Send";
messageUser.appendChild(sendBtn);


sendBtn.addEventListener("click", (e) => {
	messageUser.parentNode.removeChild(messageUser);
	const messageSent = document.getElementById("testing");
	const div = document.createElement("div");
	const successMessage = document.createElement("p");
	successMessage.textContent = "Your message was sent!";
	div.appendChild(successMessage);
	messageSent.appendChild(div);
});



















