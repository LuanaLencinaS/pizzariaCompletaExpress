const Usuario = require('../models/Usuario')

const bcrypt = require('bcrypt')

const loginController = {
    viewLogin: (req, res) => {
        return res.render('auth/login')
    },
    logar: (req, res) => {
        const {email, senha} = req.body;

        const usuarioSalvo = Usuario.buscarUsuario(email);

        console.log(usuarioSalvo)

        if(!usuarioSalvo){//falso
            return res.render('auth/login', {mensagem: 'Email ou senha inválido!'})
        }

        //bcrypt retorna true ou false
        //entao se compareSync der falso...
        if(!bcrypt.compareSync(senha, usuarioSalvo.senha)){
            return res.render('auth/login', {mensagem: 'Email ou senha inválido!'})
        }

        req.session.user = {
            nome: usuarioSalvo.nome,
            email: usuarioSalvo.email
        }

        //se chegou aqui, passou pelas verificações...
        return res.redirect("/cardapio/ver")
    },

    viewRegistro: (req, res) => {
        return res.render('auth/registro')
    },

    registrar: (req, res) => {
        let {nome, email, senha} = req.body;

        senha = bcrypt.hashSync(senha, 10)
        //gera um hash de 10 caracteres e embaralhar

        Usuario.cadastrarUsuario(nome, email, senha)

        //obj com todas as sessões
        req.session.user = {
            nome: nome,
            email: email
        }

        return res.redirect("/login")
    }
}

module.exports = loginController