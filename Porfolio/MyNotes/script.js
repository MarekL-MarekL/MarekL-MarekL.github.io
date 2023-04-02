const notePanel = document.querySelector(".note-panel");
const deleteBtns = document.getElementsByClassName("delete-note");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");
const category = document.querySelector("#category");
const noteArea = document.querySelector(".note-area");
const saveBtn = document.querySelector(".save");

console.log(textarea.value);

let selectedValue;
let cardId = 0;

const openPanel = () => {
	notePanel.style.display = "flex";
};

const closePanel = () => {
	notePanel.style.display = "none";
	textarea.value = "";
	error.style.visibility = "hidden";
	category.selectedIndex = 0;
};

const addNote = () => {
	if (textarea.value !== "" && category.value !== "0") {
		// category.options[category.selectedIndex].value
		createNote();
		console.log(category.value);

		error.style.visibility = "hidden";
	} else {
		error.style.visibility = "visible";
		console.log(category.value);
	}
};

const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute("id", cardId);
	newNote.innerHTML = `<div class="note-header">
	<h3 class="note-title">Note ${selectedValue}</h3>
	<button class="delete-note">
		<i class="fas fa-times icon"></i>
	</button>
	</div>
	<div class="note-body">
	${textarea.value}
	</div>`;

	noteArea.appendChild(newNote);
	cardId++;
	textarea.value = "";
	category.value = "0";
	notePanel.style.display = "none";

	// console.log(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);

// console.log(cancelBtn);

// add
// cancel

// const stopwatch = document.querySelector(".stopwatch");
// const startBtn = document.querySelector(".start");
// const pauseBtn = document.querySelector(".pause");
// const stopBtn = document.querySelector(".stop");
// const time = document.querySelector(".time");
// const resetBtn = document.querySelector(".reset");
// const timeList = document.querySelector(".time-list");
// const historyBtn = document.querySelector(".history");
// const infoBtn = document.querySelector(".fa-question");
// const modalBtn = document.querySelector(".modal-shadow");
// const closeBtn = document.querySelector(".close");
// const modalshadow = document.querySelector(".modal-shadow");
// const onecolor = document.querySelector(".one");
// const twocolor = document.querySelector(".two");
// const threecolor = document.querySelector(".three");
// const fourcolor = document.querySelector(".four");
// const colorBtn = document.querySelector(".fa-paint-roller");
// const colorPanel = document.querySelector(".colors");

// let countTime;

// let minutes = 0;
// let seconds = 0;
// let resultArr = [];

// const handleStart = () => {
// 	clearInterval(countTime);

// 	countTime = setInterval(() => {
// 		if (seconds < 9) {
// 			seconds++;
// 			stopwatch.textContent = `${minutes}:0${seconds}`;
// 		} else if (seconds >= 9 && seconds < 59) {
// 			seconds++;
// 			stopwatch.textContent = `${minutes}:${seconds}`;
// 		} else {
// 			minutes++;
// 			seconds = 0;
// 			stopwatch.textContent = `:0${seconds}`;
// 		}
// 	}, 100);
// };

// const handlePause = () => {
// 	clearInterval(countTime);
// };

// const handleStop = () => {
// 	time.innerHTML = `Last time: ${stopwatch.textContent}`;
// 	if (stopwatch.textContent !== "0:00") {
// 		time.style.visibility = "visible";
// 		resultArr.push(stopwatch.textContent);
// 		// console.log(resultArr);
// 	}
// 	clearStaff();
// };

// const handleReset = () => {
// 	time.style.visibility = "hidden";
// 	console.log(resultArr);
// 	resultArr = [];
// 	console.log(resultArr);

// 	clearStaff();
// };

// const clearStaff = () => {
// 	clearInterval(countTime);
// 	stopwatch.textContent = "0:00";
// 	timeList.textContent = "";
// 	minutes = 0;
// 	seconds = 0;
// };

// const handleHistory = () => {
// 	timeList.textContent = "";
// 	let num = 1;
// 	resultArr.forEach((time) => {
// 		const newTime = document.createElement("li");
// 		newTime.innerHTML = `Nr ${num}: <span>${time}</span>`;

// 		timeList.appendChild(newTime);
// 		num++;
// 	});
// };

// const handleModal = () => {
// 	if (modalBtn.style.display !== "block") {
// 		modalBtn.style.display = "block";
// 	} else {
// 		modalBtn.style.display = "none";
// 	}
// 	modalshadow.classList.toggle("modal-animation");
// };

// startBtn.addEventListener("click", handleStart);
// pauseBtn.addEventListener("click", handlePause);
// stopBtn.addEventListener("click", handleStop);
// resetBtn.addEventListener("click", handleReset);
// historyBtn.addEventListener("click", handleHistory);
// infoBtn.addEventListener("click", handleModal);
// closeBtn.addEventListener("click", handleModal);
// window.addEventListener("click", (e) =>
// 	e.target === modalshadow ? handleModal() : false
// );

// colorBtn.addEventListener("click", () => {
// 	colorPanel.classList.toggle("show-colors");
// });

// onecolor.addEventListener("click", () => {
// 	document.documentElement.style.setProperty("--first-color", "red");
// 	document.documentElement.style.setProperty(
// 		"--third-color",
// 		"rgb(241, 73, 73)"
// 	);
// });

// twocolor.addEventListener("click", () => {
// 	document.documentElement.style.setProperty("--first-color", "blue");
// 	document.documentElement.style.setProperty(
// 		"--third-color",
// 		"rgb(52, 52, 242)"
// 	);
// });

// threecolor.addEventListener("click", () => {
// 	document.documentElement.style.setProperty("--first-color", "green");
// 	document.documentElement.style.setProperty(
// 		"--third-color",
// 		"rgb(64, 163, 64)"
// 	);
// });

// fourcolor.addEventListener("click", () => {
// 	document.documentElement.style.setProperty("--first-color", "purple");
// 	document.documentElement.style.setProperty(
// 		"--third-color",
// 		"rgb(146, 74, 146)"
// 	);
// });
