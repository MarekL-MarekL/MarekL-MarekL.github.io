const incomeSection = document.querySelector(".income-area");
const expensesSection = document.querySelector(".expenses-area");
const availableMoney = document.querySelector(".available-money");
const addTransactionPanel = document.querySelector(".add-transaction-panel ");

const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const categorySelect = document.querySelector("#category");

const addTransactionBtn = document.querySelector(".add-transaction");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteAllBtn = document.querySelector(".delete-all");

const deleteBtn = document.querySelector(".delete");
const lightBtn = document.querySelector(".light");
const darkBtn = document.querySelector(".dark");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moenyArr = [0];

const showPanel = () => {
	addTransactionPanel.style.display = "flex";
};

const closePanel = () => {
	addTransactionPanel.style.display = "none";
	clearInputs();
};

const checkForm = () => {
	if (
		nameInput.value !== "" &&
		amountInput.value !== "" &&
		categorySelect.value !== "none"
	) {
		// console.log("ok");
		createNewTransaction();
	} else {
		alert("Fill all inputs");
	}
};

const clearInputs = () => {
	nameInput.value = "";
	amountInput.value = "";
	categorySelect.selectedIndex = 0;
};

const createNewTransaction = () => {
	const newTransaction = document.createElement("div");
	newTransaction.classList.add('transaction"');
	newTransaction.setAttribute("id", ID);

	checkCategory(selectedCategory);

	// console.log(checkCategory);

	newTransaction.innerHTML = `
    <p class="transaction-name"> ${categoryIcon} ${nameInput.value}</p>
    <p class="transaction-amount">${amountInput.value} SEK
        <button class="delete"  onclick="deleteTransaction(${ID})">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </p>`;

	// if (amountInput.value > 0) {
	// 	incomeSection.appendChild(newTransaction);
	// 	newTransaction.classList.add("income");
	// 	console.log(amountInput.value);
	// } else {
	// 	expensesSection.appendChild(newTransaction);
	// 	newTransaction.classList.add("expense");
	// 	console.log(amountInput.vbalue);
	// }

	if (amountInput.value > 0) {
		incomeSection.appendChild(newTransaction);
		newTransaction.classList.add("income");
	} else {
		expensesSection.appendChild(newTransaction);
		newTransaction.classList.add("expense");
	}

	moenyArr.push(parseFloat(amountInput.value));
	// console.log(moenyArr);
	// console.log(amountInput.value);
	countMoney(moenyArr);

	ID++;
	closePanel();
	clearInputs();
};

const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
};

const checkCategory = (transaction) => {
	switch (transaction) {
		case "[+] Income":
			categoryIcon = '<i class="fas fa-solid fa-money-bill-1"></i>';
			break;
		case "[-] Shopping":
			categoryIcon = ' <i class="fas fa-solid fa-bag-shopping"></i';
			break;
		case "[-] Food<":
			categoryIcon = '<i class="fas fa-solid fa-utensils"></i>';
			break;
		case "[-] Cinema":
			categoryIcon = '<i class="fas fa-solid fa-film"></i>';
			break;
	}
};

const countMoney = (money) => {
	const newMoney = money.reduce((a, b) => a + b);
	availableMoney.textContent = `${newMoney} SEK`;
};
const deleteTransaction = (id) => {
	const transactionToDelete = document.getElementById(id);
	const transactionAmount = parseFloat(
		transactionToDelete.childNodes[3].innerText
	);
	// console.log(transactionAmount);
	const indexOfTransaction = moenyArr.indexOf(transactionAmount);

	moenyArr.splice(indexOfTransaction, 1);

	if (transactionToDelete.classList.contains("income")) {
		incomeSection.removeChild(transactionToDelete);
	} else {
		expensesSection.removeChild(transactionToDelete);
	}

	// console.log(transactionAmount);
	// console.log(moenyArr);
	countMoney(moenyArr);
};

const deleteAllTransactions = () => {
	incomeSection.innerHTML = "<h3>Income:</h3>";
	expensesSection.innerHTML = "<h3>Expenses:</h3>";
	availableMoney.textContent = "0 SEK";
	moenyArr = [0];
};

const changeStyleToLight = () => {
	root.style.setProperty("--first-color", "white");
	root.style.setProperty("--second-color", "black");
	root.style.setProperty("--border-color", "rgba(0, 0, 0, 0.2)");
};

const changeStyleToDark = () => {
	root.style.setProperty("--first-color", "black");
	root.style.setProperty("--second-color", "white");
	root.style.setProperty("--border-color", "rgba(255, 255, 255, 0.2)");
};

addTransactionBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", checkForm);
deleteAllBtn.addEventListener("click", deleteAllTransactions);
lightBtn.addEventListener("click", changeStyleToLight);
darkBtn.addEventListener("click", changeStyleToDark);
// const currencyOne = document.querySelector(".currency-one");
// const currencyTwo = document.querySelector(".currency-two");
// const amountOne = document.querySelector("#amount-one");
// const amountTwo = document.querySelector("#amount-two");
// const swapBtn = document.querySelector(".swap");
// const rateInfo = document.querySelector(".rate-info");

// var myHeaders = new Headers();
// myHeaders.append("apikey", "xdi8NBIW8CMlAOzjHSD08JoLkw8aE8bK");

// var requestOptions = {
// 	method: "GET",
// 	redirect: "follow",
// 	headers: myHeaders,
// };

// const calculate = () => {
// 	fetch(
// 		`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTwo.value}&from=${currencyOne.value}&amount=${amountOne.value}`,
// 		requestOptions
// 	)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			const currency1 = currencyOne.value;
// 			const currency2 = currencyTwo.value;
// 			const amount1 = amountOne.value;
// 			console.log(currency1);
// 			console.log(currency2);
// 			console.log(data);
// 			rateInfo.textContent = `1 ${currency1}=${data.info.rate} ${currency2}`;
// 			amountTwo.value = `${data.result}`;
// 		});
// 	// .then((response) => response.text())
// 	// .then((result) => console.log(result))
// 	// .catch((error) => console.log("error", error));
// };

// const swap = () => {
// 	const oldValue = currencyOne.value;
// 	currencyOne.value = currencyTwo.value;
// 	currencyTwo.value = oldValue;
// 	calculate();
// };

// currencyOne.addEventListener("change", calculate);
// currencyTwo.addEventListener("change", calculate);
// amountOne.addEventListener("input", calculate);
// swapBtn.addEventListener("click", swap);
