
const numbers = document.querySelector("#numbers");
const maxNumber = numbers.querySelector("#max-number");
const inputNumber = numbers.querySelector("#input-number");

function play(event)
{
	const randomNumber = Math.floor(Math.random() * (Number(maxNumber.value) + 1));
	const result = document.querySelector("#result");
	const inputNumberValue = Number(inputNumber.value);
	event.preventDefault();
	result.innerText = `You chose: ${inputNumberValue}, the machine chose: ${randomNumber}.`;
	if (inputNumberValue === randomNumber)
		document.querySelector("#result-message").innerText = "You Win!";
	else
		document.querySelector("#result-message").innerText = "You lost!";
	result.classList.remove("hidden");
}

numbers.addEventListener("submit", play);