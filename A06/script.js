// Função para validar o E-mail
function validarEmail() {
    const emailInput = document.getElementById('email');
    // CORREÇÃO: Usamos o ID 'mensagemErro' do seu HTML
    const mensagemErro = document.getElementById('mensagemErro'); 
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValido = false;

    if (email === "") {
        mensagemErro.textContent = "Digite seu email, né";
        mensagemErro.style.color = "red";
    } else if (emailRegex.test(email)) {
        mensagemErro.textContent = "E-mail válido!";
        mensagemErro.style.color = "green";
        isValido = true;
    } else {
        mensagemErro.textContent = "E-mail inválido";
        mensagemErro.style.color = "red";
    }
    
    // Chama a validação de senha para atualizar o estado do botão
    validarSenha();
    
    return isValido;
}

// Função para validar as Senhas
function validarSenha() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErroSenha = document.getElementById('mensagemErroSenha');
    const mensagemErroConfirmarSenha = document.getElementById('mensagemErroConfirmarSenha');
    const btnEnviar = document.getElementById('btnEnviar');
    const mensagemErroEmail = document.getElementById('mensagemErro');  

    let senhasValidas = true;
    if (senha === "") {
        mensagemErroSenha.textContent = "Digite a senha";
        mensagemErroSenha.style.color = "red";
        senhasValidas = false;
    } else if (senha.length < 6) { // <-- AQUI está a validação do tamanho
        mensagemErroSenha.textContent = "A senha deve ter no mínimo 6 caracteres";
        mensagemErroSenha.style.color = "red";
        senhasValidas = false;
    } else {
        mensagemErroSenha.textContent = "";
    }



    if (confirmarSenha === "") {
        mensagemErroConfirmarSenha.textContent = "Confirme a senha";
        mensagemErroConfirmarSenha.style.color = "red";
        senhasValidas = false;
    } else if (senha !== confirmarSenha) {
        mensagemErroConfirmarSenha.textContent = "As senhas não coincidem!";
        mensagemErroConfirmarSenha.style.color = "red";
        senhasValidas = false;
    } else if (senhasValidas) {
        mensagemErroConfirmarSenha.textContent = "Senhas conferem!";
        mensagemErroConfirmarSenha.style.color = "green";
    }

    
    // 3. Controle do Botão de Envio
    const emailEstaValido = mensagemErroEmail.style.color === "green";
    if (emailEstaValido && senhasValidas) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
    return senhasValidas && emailEstaValido;
}

function redirecionarSeValido(event) {
    if (event) {
        event.preventDefault(); 
    }
    const isValido = validarEmail() && validarSenha();
    if (isValido) {
        window.location.href = 'cadastro.html'; 
        return true; 
    } else {
        // Se a validação falhar (o que não deve acontecer se o botão estiver disabled)
        return false;
    }
}
