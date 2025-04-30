const input = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const guessDisplay = document.querySelector(".guess");
const chancesDisplay = document.querySelector(".chances");

let randomNum = Math.floor(Math.random() * 100);
let chances = 10;

checkButton.addEventListener("click", () => {
    const userGuess = Number(input.value);
    chances--;

    if (userGuess === randomNum) {
        guessDisplay.textContent = "Parabéns! Você acertou o número!";
        checkButton.disabled = true;
    } else if (userGuess < 0 || userGuess > 99) {
        guessDisplay.textContent = "Por favor, insira um número entre 0 e 99.";
    } else if (userGuess > randomNum) {
        guessDisplay.textContent = "Seu palpite é muito alto.";
    } else {
        guessDisplay.textContent = "Seu palpite é muito baixo.";
    }

    chancesDisplay.textContent = `Você tem ${chances} chances restantes.`;

    if (chances === 0) {
        guessDisplay.textContent = `Você perdeu! O número era ${randomNum}.`;
        checkButton.disabled = true;
    }

    input.value = "";
    input.focus();
});