const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".settings-btn");
const imageSection = document.querySelector(".image-section");

const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImg = document.querySelector("#event-image");

const daysCount = document.querySelector(".days-count");
const hoursCount = document.querySelector(".hours-count");
const minutesCount = document.querySelector(".minutes-count");
const secondsCount = document.querySelector(".seconds-count");

const saveBtn = document.querySelector(".save");

const eventSpan = document.querySelector(".event");
let usersTime;

const countTime = () => {
	const currentTime = new Date();
	const diffTime = usersTime - currentTime;

	const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
	const hours = Math.floor(diffTime / 1000 / 60 / 60) % 60;
	const minutes = Math.floor(diffTime / 1000 / 60) % 60;
	const seconds = Math.floor(diffTime / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;
	// console.log(diffTime);
};

const appUpdate = () => {
	eventSpan.textContent = eventName.value;
	usersTime = new Date(
		`${eventMonth.value}-${eventDay.value}-${eventYear.value}`
	);
	imageSection.style.backgroundImage = `url("${eventImg.value}")`;

	setInterval(countTime, 1000);
	countTime();
};

saveBtn.addEventListener("click", appUpdate);

settingsBtn.addEventListener("click", () => {
	settings.classList.toggle("active");
});
