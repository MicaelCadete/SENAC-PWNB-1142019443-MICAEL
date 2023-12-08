document.addEventListener("DOMContentLoaded", function () {
    // Função para verificar se o usuário está logado e exibir seu nome
    function exibirNomeUsuario() {
        var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

        if (usuarioLogado && usuarioLogado.nome) {
            var loginBtn = document.getElementById("login-btn");
            loginBtn.textContent = "👤 " + usuarioLogado.nome;

            // Adiciona um evento de clique ao nome do usuário
            loginBtn.addEventListener("click", function (event) {
                var confirmarLogout = confirm("Deseja sair?");
                if (confirmarLogout) {
                    // Limpa o usuário do localStorage se confirmar o logout
                    localStorage.removeItem("usuarioLogado");
                    loginBtn.textContent = "Login"; // Retorna o texto para "Login"
                } else {
                    event.preventDefault(); // Previne o comportamento padrão do link
                    return false; // Evita o redirecionamento
                }
            });
        }
    }

    exibirNomeUsuario(); // Chama a função ao carregar a página
});

