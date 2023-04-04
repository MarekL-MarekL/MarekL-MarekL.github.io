const currencyOne = document.querySelector(".currency-one");
const currencyTwo = document.querySelector(".currency-two");
const amountOne = document.querySelector("#amount-one");
const amountTwo = document.querySelector("#amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

var myHeaders = new Headers();
myHeaders.append("apikey", "xdi8NBIW8CMlAOzjHSD08JoLkw8aE8bK");

var requestOptions = {
	method: "GET",
	redirect: "follow",
	headers: myHeaders,
};

const calculate = () => {
	fetch(
		`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTwo.value}&from=${currencyOne.value}&amount=${amountOne.value}`,
		requestOptions
	)
		.then((response) => response.json())
		.then((data) => {
			const currency1 = currencyOne.value;
			const currency2 = currencyTwo.value;
			const amount1 = amountOne.value;
			console.log(currency1);
			console.log(currency2);
			console.log(data);
			rateInfo.textContent = `1 ${currency1}=${data.info.rate} ${currency2}`;
			amountTwo.value = `${data.result}`;
		});
	// .then((response) => response.text())
	// .then((result) => console.log(result))
	// .catch((error) => console.log("error", error));
};

const swap = () => {
	const oldValue = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = oldValue;
	calculate();
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swapBtn.addEventListener("click", swap);
