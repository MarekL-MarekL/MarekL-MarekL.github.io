const amount = document.getElementById("amount");
const people = document.getElementById("numberofpeople");
const tips = document.getElementById("tips");
const myButton = document.getElementById("btn");
const result = document.getElementById("result");
const error = document.getElementById("error");

amount.addEventListener("input", function () {
	const numericAmount = amount.value.replace(",", ".");
	if (isNaN(numericAmount) || numericAmount < 0) {
		alert("This value is not a number");
		amount.value = "";
	}
});
people.addEventListener("input", function () {
	const numericPeople = people.value.replace(",", ".");

	if (isNaN(numericPeople) || numericPeople < 1) {
		alert("This value is not a number");
		people.value = "";
	}
});
tips.addEventListener("input", function () {
	if (tips.value < 0) {
		alert("This value is wrong");
		tips.value = "";
	}
});

myButton.addEventListener("click", calculateValues);

function updateButton() {}

function calculateValues() {
	const value1 = parseFloat(amount.value);
	const value2 = parseFloat(people.value);
	const value3 = parseFloat(tips.value);
	if (amount.value == "" || people.value == "" || tips.value == "") {
		error.textContent = "Please fill all fields";
	} else {
		error.textContent = "";
		const final = (value1 + value3 / 10) / value2;
		result.textContent = final + "   $";
	}
}
