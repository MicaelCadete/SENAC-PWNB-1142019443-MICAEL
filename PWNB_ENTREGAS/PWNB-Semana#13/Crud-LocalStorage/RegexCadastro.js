var regNome = new RegExp("[A-z ]{6,100}");
var regSobrenome = new RegExp("[A-z ]{6,100}");
var regCidade = new RegExp("[A-z ]{6,100}");
var regCEP = new RegExp("[0-9]{5}[-][0-9]{3}");
var regEndereco = new RegExp("[0-9A-z ]{5,100}");
var regN = new RegExp("[0-9]{1,4}");
var indice = -1;

var Vnomes = []

var Vsobrenomes = []

var Vnascimento = []

var Vcidade = []

var Vcep = []

var Vendereco = []

var Vn = []

var Vplano = []


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
    if (!regCidade.test(cidade.value)) {
        alert("Informe a CIDADE corretamente!");
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

function incluir() {
    if (testeRegex()) {
        Vnomes.push(document.getElementById("nome").value);
        Vsobrenomes.push(document.getElementById("sobrenome").value);
        Vnascimento.push(document.getElementById("nascimento").value);
        Vcidade.push(document.getElementById("cidade").value);
        Vcep.push(document.getElementById("cep").value);
        Vendereco.push(document.getElementById("endereco").value);
        Vn.push(document.getElementById("n").value);
        Vplano.push(document.getElementById("plano").value);

        var dtabela = document.getElementById("tabela");

        var linha = dtabela.insertRow();
        for (var i = 0; i < 6; i++) {
            var newCell = linha.insertCell(i);
            switch (i) {
                case 0:
                    newCell.innerHTML = Vnomes[Vnomes.length - 1];
                    break;
                case 1:
                    newCell.innerHTML = Vnascimento[Vnascimento.length - 1];
                    break;
                case 2:
                    newCell.innerHTML = Vcidade[Vcidade.length - 1];
                    break;
                case 3:
                    newCell.innerHTML = Vendereco[Vendereco.length - 1];
                    break;
                case 4:
                    var editButton = document.createElement("img");
                    editButton.src = "edit.png";
                    editButton.onclick = function () {
                        editCad(linha.rowIndex);
                        indice = linha.rowIndex;
                    }
                    newCell.appendChild(editButton);
                    break;
                case 5:
                    var deleteButton = document.createElement("img");
                    deleteButton.src = "delete.png";
                    deleteButton.onclick = function () {
                        deleteCad(linha.rowIndex);
                    }
                    newCell.appendChild(deleteButton);
                    break;
            }
        }

        alert("Cadastro adicionado ao banco de dados!")
    } else {
        alert("erro")
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
    document.getElementById("plano").value = Vplano[index];
}

function atualizar(){
    Vnomes[indice] = document.getElementById("nome").value;
    Vsobrenomes[indice] = document.getElementById("sobrenome").value;
    Vnascimento[indice] = document.getElementById("nascimento").value;
    Vcidade[indice] = document.getElementById("cidade").value;
    Vcep[indice] = document.getElementById("cep").value;
    Vendereco[indice] = document.getElementById("endereco").value;
    Vn[indice] = document.getElementById("n").value;
    Vplano[indice] = document.getElementById("plano").value;

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
    Vplano.splice(index, 1);

    alert("Cadastro excluído!")
}
