const express = require('express')

const methodOverride = require("method-override")

const expressSession = require('express-session')

let rotasUsuario = require('./routes/usuarioRoute')
let rotasCardapio = require('./routes/cardapioRoute')
let rotasIndex = require('./routes/indexRoute')

let rotasLogin = require('./routes/loginRoute')

let app = express()

//configurando o express para aceitar ejs
app.use(express.static('public'));

app.use(methodOverride("_method"))

app.set('view engine', 'ejs')

//antes das rotas, configuro para manipulações post
app.use(express.urlencoded({
    extended:true
}));

app.use(expressSession({
    secret:'banana',
    resave:true,
    saveUninitialized:true
}))

app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);
app.use(rotasIndex)
app.use(rotasLogin)

app.listen(3000, ()=>console.log("Servidor rodando perfeitamente 3000"))