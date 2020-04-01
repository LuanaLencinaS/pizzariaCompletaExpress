const Cardapio = require('../models/Cardapio');

let cardapioController = {
    listarCardapio: (req, res)=>{
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {listaDePizza})
    },

    //apenas exibe o formulario através do get
    formCadastro: (req, res) => {
        // req.body.nomePizza
        // req.body.precoPizza
        res.render("cadastroCardapio");
    },

    salvarCadastro: (req, res) => {
        //name dos input
        const {nomePizza, precoPizza} = req.body;

        //importo o cardapio da model
        Cardapio.cadastrarPizza(nomePizza, precoPizza);

        //redireciona o usuario para o cardapio, poderia tbm ser criado uma nova viu com uma mensagem de sucesso
        res.redirect("/cardapio/ver");
    },

    deletarPizza: (req, res) => {
        let {posicao} = req.params;
        Cardapio.deletarPizza(posicao);
        res.redirect("/cardapio/ver");
    }

}
 
module.exports = cardapioController