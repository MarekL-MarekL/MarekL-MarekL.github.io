const ball = document.querySelector(".image");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const btn = document.querySelector(".btn");

const animation = () => {
	// const ballanimation = ball;
	ball.classList.add("shake-animaton"); // const ballanimation = marek.parentElement;

	// console.log(ballanimation);
};
const randomText = () => {
	answer.innerText = "marek";
	// btn.classList.add("btn2");
};
const addbtn = () => {
	// btn.classList.add("btn2");
	console.log("blad");
};

const checkQuestion = () => {
	const re = /^\s*(?:\w+\b\s+){2,}\w+\b\s*\?$/;
	// if (question.value === "") {
	// 	console.log("You didn't write any question");
	// }
	if (re.test(question.value)) {
		animation();
		error.classList.remove("error2");

		setTimeout(function () {
			// answer.classList.add("answer2");
			answer.classList.add("answer2");
			// btn.classList.add("btn2");
			// answer.innerText = randomText;
			// addbtn();
			randomText();
		}, 1500);

		// setTimeout(function () {
		// 	// answer.classList.add("answer2");
		// 	btn.classList.add("btn2");
		// }, 4000);
	} else {
		error.classList.add("error2");
		error.innerText =
			"The user did not ask a question with at least three words, don't forget aboust question mark";
		console.log(
			"The user did not ask a question with at least three words, don't forget aboust question mark"
		);
	}
	// if (question.value.endsWith("?") == false) {
	// 	console.log("You forgot question mark");
	// }
};

// function myAnswer() => {
// 	console.log("answerr");
// 	answer.classList.add("answer2");
// };

ball.addEventListener("click", () => {
	checkQuestion();
	// animation();

	// [ball, question, answer, error].forEach((e) => {
	// 	console.log("hej");
	// });
});
// clearBtn.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	[username, pass, pass2, email].forEach((el) => {
// 		el.value = "";
// 		clearError(el);
// 	});
// });

// const username = document.querySelector("#username");
// const pass = document.querySelector("#password");
// const pass2 = document.querySelector("#password2");
// const email = document.querySelector("#email");
// const sendBtn = document.querySelector(".send");
// const clearBtn = document.querySelector(".clear");
// const popup = document.querySelector(".popup");

// const showError = (marek, msg) => {
// 	const formbox = marek.parentElement;
// 	const errorMsg = formbox.querySelector(".error-text");
// 	formbox.classList.add("error");
// 	errorMsg.textContent = msg;
// };

// const clearError = (input) => {
// 	const formbox = input.parentElement;
// 	formbox.classList.remove("error");
// };

// const checkform = (input) => {
// 	input.forEach((el) => {
// 		if (el.value === "") {
// 			showError(el, el.placeholder);
// 		} else {
// 			clearError(el);
// 		}
// 	});
// };

// const checkLength = (lukasz, min) => {
// 	if (lukasz.value.length < min) {
// 		showError(
// 			lukasz,
// 			`${lukasz.previousElementSibling.innerText.replace(
// 				":",
// 				""
// 			)} is minimum ${min} characters`
// 		);
// 	}
// };

// const checkPassword = (pass1, pass2) => {
// 	if (pass1.value !== pass2.value) {
// 		showError(pass2, "Confirm password doesn't match Password");
// 	}
// };

// const checkEmail = (email) => {
// 	const re =
// 		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/i;

// 	if (re.test(email.value)) {
// 		clearError(email);
// 	} else {
// 		showError(email, "email is invalid");
// 	}
// };

// const checkErrors = () => {
// 	const allInputs = document.querySelectorAll(".form-box");
// 	let errorCount = 0;

// 	allInputs.forEach((el) => {
// 		if (el.classList.contains("error")) {
// 			errorCount++;
// 		}
// 	});

// 	if (errorCount === 0) {
// 		popup.classList.add("show-popup");
// 	}
// 	console.log(errorCount);
// };

// sendBtn.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	checkform([username, pass, pass2, email]);
// 	checkLength(username, 4);
// 	checkLength(pass, 8);
// 	checkPassword(pass, pass2);
// 	checkEmail(email);
// 	checkErrors();
// });

// clearBtn.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	[username, pass, pass2, email].forEach((el) => {
// 		el.value = "";
// 		clearError(el);
// 	});
// });
