// <!-- JavaScript para capturar dados, alternar senha e exibir mensagens de erro -->

    // Capturar o formulário pelo ID
    const loginForm = document.getElementById('loginForm');

    // Capturar elementos de erro
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Adicionar um ouvinte de evento de submit ao formulário
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão de recarregar a página

        // Capturar valores dos campos
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        let valid = true;

        // Validação do campo username
        if (username === '') {
            usernameError.style.display = 'block';
            valid = false;
        } else {
            usernameError.style.display = 'none';
        }

        // Validação do campo password
        if (password === '') {
            passwordError.style.display = 'block';
            valid = false;
        } else {
            passwordError.style.display = 'none';
        }

        if (valid) {
            // Exibir os dados no console (substituir por chamada à API)
            console.log('Username:', username);
            console.log('Password:', password);

            // Redirecionar o usuário para outra página
            window.location.href = './inicio.html';

            // Adicionar uma lógica para enviar os dados via API
        }
    });

    // Função para alternar a exibição da senha
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');

    togglePassword.addEventListener('click', function () {
        // Alternar o tipo do input de password para text e vice-versa
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Alternar o ícone do olho
        togglePasswordIcon.classList.toggle('fa-eye-slash');
    });
