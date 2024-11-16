const icons = ["☀️", "💧", "🌬️", "🌱", "🔋", "⚡", "🌍", "🌞"];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let mistakes = 0;
let timerInterval;
let secondsElapsed = 0;

function startGame() {
    const memoryGame = document.getElementById("memory-game");
    memoryGame.innerHTML = "";
    matchedPairs = 0;
    mistakes = 0;
    secondsElapsed = 0;
    document.getElementById("mistakes").textContent = mistakes;
    document.getElementById("timer").textContent = `${secondsElapsed}s`;

    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);

    cards = [...icons, ...icons].sort(() => Math.random() - 0.5);

    cards.forEach(icon => {
        const card = document.createElement("div");
        card.classList.add("memory-card");
        card.dataset.icon = icon;

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        cardFront.textContent = "?";

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        cardBack.textContent = icon;
        cardBack.style.display = "none";

        card.appendChild(cardFront);
        card.appendChild(cardBack);
        memoryGame.appendChild(card);

        card.addEventListener("click", () => flipCard(card));
    });
}

function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains("flip")) {
        card.classList.add("flip");
        card.querySelector(".card-front").style.display = "none";
        card.querySelector(".card-back").style.display = "block";
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.icon === card2.dataset.icon) {
        matchedPairs++;
        flippedCards = [];

        if (matchedPairs === icons.length) {
            clearInterval(timerInterval);
            setTimeout(() => alert(`Parabéns! Você completou o jogo com ${mistakes} tentativas erradas em ${secondsElapsed} segundos.`), 500);
        }
    } else {
        mistakes++;
        document.getElementById("mistakes").textContent = mistakes;

        setTimeout(() => {
            card1.classList.remove("flip");
            card1.querySelector(".card-front").style.display = "block";
            card1.querySelector(".card-back").style.display = "none";
            card2.classList.remove("flip");
            card2.querySelector(".card-front").style.display = "block";
            card2.querySelector(".card-back").style.display = "none";
            flippedCards = [];
        }, 1000);
    }
}

function updateTimer() {
    secondsElapsed++;
    document.getElementById("timer").textContent = `${secondsElapsed}s`;
}

document.addEventListener("DOMContentLoaded", startGame);


function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains("flip")) {
        card.classList.add("flip");
        card.querySelector(".card-front").style.display = "none";
        card.querySelector(".card-back").style.display = "block";
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}
