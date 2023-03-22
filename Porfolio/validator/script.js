const username = document.querySelector("#username");
const pass = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

// console.log(clearBtn);

const showError = (marek, msg) => {
	const formbox = marek.parentElement;
	// console.log(formbox);
	const errorMsg = formbox.querySelector(".error-text");
	formbox.classList.add("error");
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formbox = input.parentElement;
	formbox.classList.remove("error");
};

const checkform = (input) => {
	input.forEach((el) => {
		if (el.value === "") {
			// console.log(el);
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (lukasz, min) => {
	if (lukasz.value.length < min) {
		// console.log(lukasz.value.length);
		showError(
			lukasz,
			`${lukasz.previousElementSibling.innerText.replace(
				":",
				""
			)} is minimum ${min} characters`
		);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, "Confirm password doesn't match Password");
	}
};

const checkEmail = (email) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/i;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, "email is invalid");
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll(".form-box");
	let errorCount = 0;

	allInputs.forEach((el) => {
		if (el.classList.contains("error")) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add("show-popup");
	}
	console.log(errorCount);
};

sendBtn.addEventListener("click", (e) => {
	e.preventDefault();

	checkform([username, pass, pass2, email]);
	checkLength(username, 4);
	checkLength(pass, 8);
	checkPassword(pass, pass2);
	checkEmail(email);
	checkErrors();
});

clearBtn.addEventListener("click", (e) => {
	e.preventDefault();

	[username, pass, pass2, email].forEach((el) => {
		el.value = "";
		clearError(el);
	});
});
