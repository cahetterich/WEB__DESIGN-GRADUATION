document.getElementById('contactForm').addEventListener('submit', function(e) {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (mensagem.length < 10) {
        e.preventDefault();
        alert("A mensagem deve conter pelo menos 10 caracteres.");
        return;
    }

    // Validação de e-mail simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert("Por favor, insira um e-mail válido.");
        return;
    }
});