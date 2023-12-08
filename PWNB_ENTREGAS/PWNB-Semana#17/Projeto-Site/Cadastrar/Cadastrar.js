var regNome = new RegExp("[A-z ]{4,100}");
var regSobrenome = new RegExp("[A-z ]{4,100}");
var regCPF = new RegExp("[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}");



function testeRegex() {
    if (regNome.test(nome.value)) {

    } else {
        alert("Informe um NOME corretamente!");
        return false;
    }
    if (!regSobrenome.test(sobrenome.value)) {
        alert("Informe o SOBRENOME corretamente!");
        return false;
    }
    if(!regCPF.test(cpf.value)){
        alert("Informe o CPF corretamente");
        return false;
    }
    
    return true;
}

document.addEventListener("DOMContentLoaded", function (event) {
    var fmCad = document.getElementById("formularioCad");
    fmCad.addEventListener("submit", function (e) {
        e.preventDefault();

        if(testeRegex()){
        var fmNome = document.getElementById("nome").value;
        var fmSnome = document.getElementById("sobrenome").value;
        var fmDn = document.getElementById("nascimento").value;
        var fmCPF = document.getElementById("cpf").value;
        var fmEmail = document.getElementById("email").value;
        var fmSenha = document.getElementById("senha").value;

        var cadastros = [];

        if (localStorage.hasOwnProperty("cadastros")) {
            cadastros = JSON.parse(localStorage.getItem("cadastros"));
        }

        cadastros.push({
            nome: fmNome,
            sobrenome: fmSnome,
            nascimento: fmDn,
            cpf: fmCPF,
            email: fmEmail,
            senha: fmSenha,
        });

        localStorage.setItem("cadastros", JSON.stringify(cadastros));
        alert("Cadastro adicionado com sucesso! \n Bem-Vindo(a) " + fmNome);
        window.location.href = "Login.html";
        } else {
            alert("Erro no formulário!");
        } 
    })
})