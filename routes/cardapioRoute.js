const express = require('express')
const cardapioController = require('../controllers/cardapioController');

let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})

//crud cardapio

//read
route.get('/ver', cardapioController.listarCardapio)

//cadastro get e posy
route.get("/cadastro", cardapioController.formCadastro);
//por padrao usamos o mesmo nome da view
route.post("/cadastro", cardapioController.salvarCadastro);

//delete
//para deletar especifico o que vou deletar, por hora nao temos id, entao podemos selecionar os itens pelo posição no array
route.delete("/deletar/:posicao", cardapioController.deletarPizza);

module.exports = route