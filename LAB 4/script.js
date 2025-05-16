const input = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const messageDisplay = document.querySelector(".message");
const chancesDisplay = document.querySelector(".chances");

let randomNum = Math.floor(Math.random() * 100); 
let chances = 10; 

checkButton.addEventListener("click", () => {
    const userGuess = Number(input.value);
    chances--;

    if (userGuess < 0 || userGuess > 99) {
        messageDisplay.textContent = "Por favor, insira um número entre 0 e 99.";
        document.body.style.setProperty("background-color", "red"); 
    } else if (userGuess === randomNum) {
        messageDisplay.textContent = "Parabéns! Você acertou o número!";
        document.body.style.setProperty("background-color", "lightgreen"); 
        checkButton.disabled = true; 
    } else if (userGuess > randomNum) {
        messageDisplay.textContent = "Seu palpite é muito alto.";
        document.body.style.setProperty("background-color", "red"); 
    } else {
        messageDisplay.textContent = "Seu palpite é muito baixo.";
        document.body.style.setProperty("background-color", "red"); 
    }

    chancesDisplay.textContent = `Você tem ${chances} chances restantes.`;

    if (chances === 0) {
        messageDisplay.textContent = `Você perdeu! O número era ${randomNum}.`;
        checkButton.disabled = true; 
    }

    input.value = ""; 
    input.focus(); 
});


    