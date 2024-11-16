
// Perguntas do Quiz
const questions = [
    {
        question: "Qual destas fontes de energia é renovável?",
        options: ["Carvão", "Solar", "Petróleo"],
        answer: 1
    },
    {
        question: "Qual fonte de energia utiliza o vento para gerar eletricidade?",
        options: ["Hidrelétrica", "Eólica", "Nuclear"],
        answer: 1
    },
    {
        question: "Qual das seguintes opções é uma fonte de energia limpa?",
        options: ["Carvão", "Óleo Diesel", "Biomassa"],
        answer: 2
    },
    {
        question: "O que é energia solar?",
        options: ["Energia gerada pelo Sol", "Energia das ondas do mar", "Energia do vento"],
        answer: 0
    },
    {
        question: "Qual desses recursos é usado para gerar energia hidrelétrica?",
        options: ["Água", "Vento", "Sol"],
        answer: 0
    },
    {
        question: "A energia eólica é obtida a partir de qual elemento da natureza?",
        options: ["Água", "Fogo", "Vento"],
        answer: 2
    },
    {
        question: "Por que devemos economizar energia?",
        options: ["Para pagar menos", "Para ajudar o planeta", "Para ganhar mais eletricidade"],
        answer: 1
    },
    {
        question: "O que podemos fazer para economizar energia em casa?",
        options: ["Deixar luzes acesas", "Desligar aparelhos quando não usados", "Tomar banhos longos"],
        answer: 1
    },
    {
        question: "Qual das opções abaixo é uma fonte de energia limpa?",
        options: ["Carvão", "Energia solar", "Petróleo"],
        answer: 1
    },
    {
        question: "Qual é o principal benefício da energia renovável?",
        options: ["Polui mais", "Ajuda a salvar o planeta", "É mais cara"],
        answer: 1
    }
];

// Variáveis de controle
let currentQuestionIndex = 0;
let score = 0;

// Elementos da interface
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');
const scoreElement = document.getElementById('score-value');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');

// Função para iniciar o quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    feedbackElement.textContent = "Escolha uma resposta para receber o feedback!";
    loadQuestion();

    // Mostra o quiz e oculta o botão de início e o botão de reinício
    document.querySelector("#quiz-container").classList.remove("d-none");
    document.getElementById("retry-btn").classList.add("d-none");
    document.getElementById("start-btn").classList.add("d-none"); // Oculta o botão de início
}



// Função para carregar uma pergunta
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionNumberElement.textContent = currentQuestionIndex + 1;
    
    const optionsButtons = document.querySelectorAll('.options button');
    optionsButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.classList.remove('correct', 'incorrect');
        button.disabled = false; // Habilita os botões para a próxima pergunta
        button.style.display = 'inline-block'; // Garante que os botões estejam visíveis
    });

    nextButton.style.display = 'none';
    feedbackElement.textContent = ""; // Limpa o feedback da pergunta anterior
}


// Verificar resposta
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const optionsButtons = document.querySelectorAll('.options button'); // Atualiza a seleção aqui
    if (selectedOption === correctAnswer) {
        optionsButtons[selectedOption].classList.add('correct');
        feedbackElement.textContent = "Parabéns, resposta correta!";
        score++;
    } else {
        optionsButtons[selectedOption].classList.add('incorrect');
        optionsButtons[correctAnswer].classList.add('correct');
        feedbackElement.textContent = "Resposta incorreta.";
    }
    scoreElement.textContent = score;
    optionsButtons.forEach(button => button.disabled = true); // Desabilita os botões após a resposta
    nextButton.style.display = 'block'; // Certifique-se de que isso está aqui
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz(); // Chama a função de fim do quiz
    }
}

// Função para finalizar o quiz
function endQuiz() {
    questionElement.textContent = "Parabéns! Você completou o quiz.";
    feedbackElement.textContent = `Você acertou: ${score} de ${questions.length}`;

    // Oculta os botões de opções e de próxima pergunta
    const optionsButtons = document.querySelectorAll('.options button');
    optionsButtons.forEach(button => button.style.display = 'none');
    nextButton.style.display = 'none';

    // Mostra o botão de reinício
    document.getElementById("retry-btn").classList.remove("d-none");
}

// Função para reiniciar o quiz
function retryQuiz() {
    startQuiz(); // Chama a função startQuiz para reiniciar
}

