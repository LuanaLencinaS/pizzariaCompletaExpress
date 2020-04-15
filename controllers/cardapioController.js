const Cardapio = require('../models/Cardapio');
const email = require('../configs/email');

let cardapioController = {
    listarCardapio: (req, res)=>{
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {listaDePizza})
    },

    //apenas exibe o formulario através do get
    formCadastro: (req, res) => {
        //envio de email
        let envioEmail = {
            from:'analulencina@gmail.com',
            to:'josefelipedas.santos@gmail.com',
            subject: 'Novo cadastro de pizza',
            text:'ola',
            html:'<h1>A pizza: foi cadastrada no sistema!</h1>'
        }

        email.sendMail(envioEmail, (error) => {
            if(error){
                console.log("Deu ruim!")
                console.log(error)
            }else{
                console.log("Deu bom! E-mail enviado")
            }
        })

        // req.body.nomePizza
        // req.body.precoPizza
        res.render("cadastroCardapio");
    },

    salvarCadastro: (req, res) => {
        //name dos input
        const {nomePizza, precoPizza} = req.body;

        const [fotoPizza] = req.files

        //importo o cardapio da model
        Cardapio.cadastrarPizza(nomePizza, precoPizza, fotoPizza.filename);

        //redireciona o usuario para o cardapio, poderia tbm ser criado uma nova viu com uma mensagem de sucesso
        res.redirect("/cardapio/ver");
    },

    deletarPizza: (req, res) => {
        let {posicao} = req.params;
        Cardapio.deletarPizza(posicao);
        res.redirect("/cardapio/ver");
    },

    formAlteracao: (req, res) => {
        const {posicao} = req.params;
        const pizza = Cardapio.buscarPizza(posicao);

        return res.render('alterarCardapio', {pizza, posicao})
    },
    alterarPizza: (req, res) => {
        let {nomePizza, precoPizza, posicao} = req.body;

        let pizza = Cardapio.atualizarPizza(nomePizza, precoPizza, posicao)

        return res.render('alterarCardapio', {
            pizza, posicao, msg:'pizza atualizada com sucesso!'
        })
    }
}
 
module.exports = cardapioController