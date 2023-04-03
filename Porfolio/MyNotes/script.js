const notePanel = document.querySelector(".note-panel");
const deleteBtn = document.getElementsByClassName("delete-note");
const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const textarea = document.querySelector("#text");
const error = document.querySelector(".error");
const category = document.querySelector("#category");
const noteArea = document.querySelector(".note-area");
const saveBtn = document.querySelector(".save");
const deleteAll = document.querySelector(".delete-all");

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
		createNote();

		error.style.visibility = "hidden";
	} else {
		error.style.visibility = "visible";
	}
};

const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute("id", cardId);
	newNote.innerHTML = `<div class="note-header">
	<h3 class="note-title">${selectedValue}</h3>
	<button class="delete-note" onclick="deleteNote(${cardId})">
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
	changeColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const changeColor = (note) => {
	switch (selectedValue) {
		case "Shopping":
			note.style.backgroundColor = "rgb(171, 243, 178)";
			break;

		case "Work":
			note.style.backgroundColor = "rgb(249, 192, 184)";

			break;
		case "Other":
			note.style.backgroundColor = "rgb(243, 230, 171)";
			break;
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
	console.log(id);
};

const deleteAllNotes = () => {
	noteArea.textContent = "";
	cardId = 0;
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAll.addEventListener("click", deleteAllNotes);
