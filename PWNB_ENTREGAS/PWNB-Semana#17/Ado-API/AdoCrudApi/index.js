const express = require('express');
const server = express();
const PORT = 3000;

server.use(express.json());

let cadastros = [
    {
        id: 1,
        nome: 'Cliente 1',
        dataNascimento: '1990-01-01',
        cep: '12345-678',
        endereco: 'Rua A, 123',
        cidade: 'Cidade A',
        uf: 'UF'
    },
    {
        id: 2,
        nome: 'Cliente 2',
        dataNascimento: '1995-05-05',
        cep: '54321-876',
        endereco: 'Rua B, 456',
        cidade: 'Cidade B',
        uf: 'UF'
    }
];

//localhost:3000/cadastros/idDesejado -> Lista um unico cadastro
//localhost:3000/cadastros -> Lista todos os cadastros
//localhost:3000/cadastros -> Criar um novo cadastro
//localhost:3000/cadastros/idDesejado -> alterar um cadastro
//localhost:3000/cadastros/idDesejado -> Excluir um cadastro

//Rota para consultar um unico cadastro, busca feita pelo id
server.get('/cadastros/:id', (req, res) => {
    const cad = cadastros.find(cad => cad.id === parseInt(req.params.id));
    if (!cad) {
        res.status(404).send('Cadastro não encontrado');
    } else {
        res.json(cad);
    }
});

//Rota para consultar todos os cadastros
server.get('/cadastros', (req, res) => {
    res.json(cadastros);
});

//Rota para criar um novo cadastro
server.post('/cadastros', (req, res) => {
    const novoCad = req.body;
    cadastros.push(novoCad);
    res.status(201).json(novoCad);
});

//Rota para alterar um cadastro pelo id
server.put('/cadastros/:id', (req, res) => {
    const cadId = parseInt(req.params.id);
    const cadIndex = cadastros.findIndex(cadastro => cadastro.id == cadId);
    if(cadIndex === -1){
        res.status(404).send('Cadastro não encontrado');
    } else {
        cadastros[cadIndex] = { ...cadastros[cadIndex], ...req.body };
        res.json(cadastros[cadIndex]);
    }
});

//Rota para excluir um cadastro pelo id
server.delete('/cadastros/:id', (req, res) => {
    const cadId = parseInt(req.params.id);
    cadastros = cadastros.filter(cadastro => cadastro.id !== cadId);
    res.send('Cadastro excluído com sucesso');
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
