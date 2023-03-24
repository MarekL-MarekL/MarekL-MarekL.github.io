const ball = document.querySelector(".image");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

const animation = () => {
	// const ballanimation = ball;
	ball.classList.add("shake-animaton");
};
const randomText = () => {
	const randomIndex = Math.floor(Math.random() * randomAnswer.length);

	answer.innerText = randomAnswer[randomIndex];
};

const randomAnswer = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes, definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very doubtful",
];

const checkQuestion = () => {
	const re = /^\s*(?:\w+\b\s+){2,}\w+\b\s*\?$/;

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

		setTimeout(function () {
			// answer.classList.add("answer2");
			btn.classList.add("btn2");
		}, 3000);
	} else {
		error.classList.add("error2");
		error.innerText =
			"You did not ask a question with at least three words, don't forget aboust question mark";
		// console.log(
		// 	"You did not ask a question with at least three words, don't forget aboust question mark"
		// );
	}
};

ball.addEventListener("click", () => {
	checkQuestion();
	// animation();
});

btn.addEventListener("click", () => {
	btn.classList.remove("btn2");
	answer.classList.remove("answer2");
	question.value = "";
	ball.classList.remove("shake-animaton");
});
