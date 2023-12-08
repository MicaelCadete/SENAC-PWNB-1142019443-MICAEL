document.addEventListener("DOMContentLoaded", function () {
    function login() {
        var fmEmail = document.getElementById("user").value; 
        var fmSenha = document.getElementById("senha").value;

        var cadastros = JSON.parse(localStorage.getItem("cadastros"));

        var usuarioEncontrado = cadastros.find(function (usuario) {
            return usuario.email === fmEmail && usuario.senha === fmSenha;
        });

        if (usuarioEncontrado) {
            alert("Login realizado com sucesso");
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
            window.location.href = "index.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    }

    var btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", function (e) {
        e.preventDefault(); 
        login();
    });
});

