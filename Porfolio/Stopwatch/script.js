const stopwatch = document.querySelector(".stopwatch");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const time = document.querySelector(".time");
const resetBtn = document.querySelector(".reset");
const timeList = document.querySelector(".time-list");
const historyBtn = document.querySelector(".history");
const infoBtn = document.querySelector(".fa-question");
const modalBtn = document.querySelector(".modal-shadow");
const closeBtn = document.querySelector(".close");
const modalshadow = document.querySelector(".modal-shadow");
const onecolor = document.querySelector(".one");
const twocolor = document.querySelector(".two");
const threecolor = document.querySelector(".three");
const fourcolor = document.querySelector(".four");
const colorBtn = document.querySelector(".fa-paint-roller");
const colorPanel = document.querySelector(".colors");

let countTime;

let minutes = 0;
let seconds = 0;
let resultArr = [];

const handleStart = () => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `:0${seconds}`;
		}
	}, 100);
};

const handlePause = () => {
	clearInterval(countTime);
};

const handleStop = () => {
	time.innerHTML = `Last time: ${stopwatch.textContent}`;
	if (stopwatch.textContent !== "0:00") {
		time.style.visibility = "visible";
		resultArr.push(stopwatch.textContent);
		// console.log(resultArr);
	}
	clearStaff();
};

const handleReset = () => {
	time.style.visibility = "hidden";
	console.log(resultArr);
	resultArr = [];
	console.log(resultArr);

	clearStaff();
};

const clearStaff = () => {
	clearInterval(countTime);
	stopwatch.textContent = "0:00";
	timeList.textContent = "";
	minutes = 0;
	seconds = 0;
};

const handleHistory = () => {
	timeList.textContent = "";
	let num = 1;
	resultArr.forEach((time) => {
		const newTime = document.createElement("li");
		newTime.innerHTML = `Nr ${num}: <span>${time}</span>`;

		timeList.appendChild(newTime);
		num++;
	});
};

const handleModal = () => {
	if (modalBtn.style.display !== "block") {
		modalBtn.style.display = "block";
	} else {
		modalBtn.style.display = "none";
	}
	modalshadow.classList.toggle("modal-animation");
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", handleHistory);
infoBtn.addEventListener("click", handleModal);
closeBtn.addEventListener("click", handleModal);
window.addEventListener("click", (e) =>
	e.target === modalshadow ? handleModal() : false
);

colorBtn.addEventListener("click", () => {
	colorPanel.classList.toggle("show-colors");
});

onecolor.addEventListener("click", () => {
	document.documentElement.style.setProperty("--first-color", "red");
	document.documentElement.style.setProperty(
		"--third-color",
		"rgb(241, 73, 73)"
	);
});

twocolor.addEventListener("click", () => {
	document.documentElement.style.setProperty("--first-color", "blue");
	document.documentElement.style.setProperty(
		"--third-color",
		"rgb(52, 52, 242)"
	);
});

threecolor.addEventListener("click", () => {
	document.documentElement.style.setProperty("--first-color", "green");
	document.documentElement.style.setProperty(
		"--third-color",
		"rgb(64, 163, 64)"
	);
});

fourcolor.addEventListener("click", () => {
	document.documentElement.style.setProperty("--first-color", "purple");
	document.documentElement.style.setProperty(
		"--third-color",
		"rgb(146, 74, 146)"
	);
});
