var regNome = new RegExp("[A-z ]{6,100}");
var regSobrenome = new RegExp("[A-z ]{6,100}");
var regCEP = new RegExp("[0-9]{5}[-][0-9]{3}");
var regEndereco = new RegExp("[0-9A-z ]{5,100}");
var regN = new RegExp("[0-9]{1,4}");
var indice = -1;


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
    if (!regCEP.test(cep.value)) {
        alert("Informe o CEP corretamente!");
        return false;
    }
    if (!regEndereco.test(endereco.value)) {
        alert("Informe o ENDEREÇO corretamente!");
        return false;
    }
    if (!regN.test(n.value)) {
        alert("Informe o NÚMERO corretamente!");
        return false;
    }
    return true;
}
document.addEventListener("DOMContentLoaded", function (event) {
    var fmCad = document.getElementById("formularioCad");
    fmCad.addEventListener("submit", function (e) {
        e.preventDefault();

        if (testeRegex()) {
            var fmNome = document.getElementById("nome").value;
            var fmSnome = document.getElementById("sobrenome").value;
            var fmDn = document.getElementById("nascimento").value;
            var fmCep = document.getElementById("cep").value;
            var fmEndereco = document.getElementById("endereco").value;
            var fmN = document.getElementById("n").value;
            var fmuf = document.getElementById("uf").value;

            var cadastros = [];

            if (localStorage.hasOwnProperty("cadastros")) {
                cadastros = JSON.parse(localStorage.getItem("cadastros"));
            }

            cadastros.push({
                nome: fmNome,
                sobrenome: fmSnome,
                nascimento: fmDn,
                cep: fmCep,
                endereco: fmEndereco,
                n: fmN,
                uf: fmuf,
            });

            localStorage.setItem("cadastros", JSON.stringify(cadastros));

            alert("Cadastro adicionado ao banco de dados!");
        } else {
            alert("Erro nos dados do formulário.");
        }
        addtabela();
    });
});

function addTabela() {
    var cadastros = [];
    if (localStorage.hasOwnProperty("cadastros")) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }

    var tab = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    tab.innerHTML = '';

    for (var i = 0; i < cadastros.length; i++) {
        var linha = tab.insertRow(tab.rows.length);

        var cell1 = linha.insertCell(0);
        cell1.innerHTML = cadastros[i].nome;

        var cell2 = linha.insertCell(1);
        cell2.innerHTML = cadastros[i].uf;

        var cell3 = linha.insertCell(2);
        cell3.innerHTML = cadastros[i].endereco;

        var cell4 = linha.insertCell(3);
        cell4.innerHTML = cadastros[i].nome;

        var cell5 = linha.insertCell(4);
        var editButton = document.createElement("img");
        editButton.src = "edit.png";
        editButton.onclick = function () {
            editCad(linha.rowIndex);
            indice = linha.rowIndex;
        }
        cell5.appendChild(editButton);

        var cell6 = linha.insertCell(5);
        var deleteButton = document.createElement("img");
        deleteButton.src = "delete.png";
        deleteButton.onclick = function () {
            deleteCad(linha.rowIndex);
        }
        cell6.appendChild(deleteButton);
    }
}



function editCad(index) {
    document.getElementById("nome").value = Vnomes[index];
    document.getElementById("sobrenome").value = Vsobrenomes[index];
    document.getElementById("nascimento").value = Vnascimento[index];
    document.getElementById("cidade").value = Vcidade[index];
    document.getElementById("cep").value = Vcep[index];
    document.getElementById("endereco").value = Vendereco[index];
    document.getElementById("n").value = Vn[index];
    document.getElementById("uf").value = Vuf[index];
}

function atualizar() {
    Vnomes[indice] = document.getElementById("nome").value;
    Vsobrenomes[indice] = document.getElementById("sobrenome").value;
    Vnascimento[indice] = document.getElementById("nascimento").value;
    Vcidade[indice] = document.getElementById("cidade").value;
    Vcep[indice] = document.getElementById("cep").value;
    Vendereco[indice] = document.getElementById("endereco").value;
    Vn[indice] = document.getElementById("n").value;
    Vuf[indice] = document.getElementById("uf").value;

    var linha = document.getElementById("tabela").rows[indice];

    linha.cells[0].innerHTML = Vnomes[indice];
    linha.cells[1].innerHTML = Vnascimento[indice];
    linha.cells[2].innerHTML = Vcidade[indice];
    linha.cells[3].innerHTML = Vendereco[indice];

    indice = -1;

    alert("Cadastro atualizado");
}

function deleteCad(index) {
    document.getElementById("tabela").deleteRow(index);

    Vnomes.splice(index, 1);
    Vsobrenomes.splice(index, 1);
    Vnascimento.splice(index, 1);
    Vcep.splice(index, 1);
    Vcidade.splice(index, 1);
    Vendereco.splice(index, 1);
    Vn.splice(index, 1);
    Vuf.splice(index, 1);

    alert("Cadastro excluído!")
}
