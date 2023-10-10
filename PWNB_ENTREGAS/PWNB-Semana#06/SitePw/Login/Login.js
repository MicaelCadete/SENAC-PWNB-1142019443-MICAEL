document.addEventListener("DOMContentLoaded", function() {
    function login(){
        var user = document.getElementById(user).value;
        var senha = document.getElementById(senha).value;

        if(login == "admin" && senha == "admin123"){
            alert("Login realizado com sucesso");
            location.href = "index.html";
        }else{
            alert("Usuario ou senha incorretos!");
        }

    }
})