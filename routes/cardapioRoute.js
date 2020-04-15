const express = require('express')
const cardapioController = require('../controllers/cardapioController');
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public', 'img'))
    },
    filename: function (req, file, cb) {
        let nomeImg = Date.now() + '-' + req.body.nomePizza.replace(/\s/g, '') + path.extname(file.originalname)
        //nomeando a imagem

      cb(null, nomeImg)
    }
  })
   
  const upload = multer({ storage: storage })

let route = express.Router()
//rotas a partir daqui!

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    res.send("Cadastrou pizza com sucesso!")
})

//crud cardapio:
//read
route.get('/ver', cardapioController.listarCardapio)

//cadastro get e post
route.get("/cadastro", cardapioController.formCadastro);
//por padrao usamos o mesmo nome da view
route.post("/cadastro", upload.any(), cardapioController.salvarCadastro);

//delete
//para deletar especifico o que vou deletar, por hora nao temos id, entao podemos selecionar os itens pelo posição no array
route.delete("/deletar/:posicao", cardapioController.deletarPizza);
//update
route.get('/alterar/:posicao', cardapioController.formAlteracao)
route.put('/alterar', cardapioController.alterarPizza)

module.exports = route