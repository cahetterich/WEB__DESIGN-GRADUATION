// Perguntas do Quiz
const questions = [
    {
        question: "Qual destas fontes de energia é renovável?",
        options: ["Carvão", "Solar", "Petróleo"],
        answer: 1
    },
    {
        question: "Qual fonte de energia utiliza vento para gerar eletricidade?",
        options: ["Hidrelétrica", "Eólica", "Nuclear"],
        answer: 1
    },
    {
        question: "Qual das seguintes opções é uma fonte de energia limpa?",
        options: ["Carvão", "Óleo Diesel", "Biomassa"],
        answer: 2
    }
];

// Variáveis de controle
let currentQuestionIndex = 0;
let score = 0;

// Elementos da interface
const questionElement = document.getElementById('question');
const optionsButtons = document.querySelectorAll('.options button');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-btn');

// Função para carregar uma pergunta
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.classList.remove('correct', 'incorrect');
    });
    nextButton.style.display = 'none';
}

// Verificar resposta
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        optionsButtons[selectedOption].classList.add('correct');
        score++;
    } else {
        optionsButtons[selectedOption].classList.add('incorrect');
        optionsButtons[correctAnswer].classList.add('correct');
    }
    scoreElement.textContent = `Pontuação: ${score}`;
    nextButton.style.display = 'block';
}

// Carregar próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Mostrar resultados
function showResults() {
    questionElement.textContent = `Quiz concluído! Sua pontuação final é: ${score} de ${questions.length}`;
    optionsButtons.forEach(button => button.style.display = 'none');
    nextButton.style.display = 'none';
}

// Inicializar quiz
loadQuestion();
