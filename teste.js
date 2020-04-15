const fs = require('fs')
//importa o file system

const path = require('path')

// path.join('xontroller', 'indexController.js')
//controller/indexcontrolle.js

path.join('texto.json')

//path join começa a partir da raiz do projeto e posso adicionar um arquivo.

// path.extname('controller', 'indexController.js')
//retorna a extensao: js



// fs.readfile("texto.txt")
// console.log("oi")
//readFyle é assincrono antes mesmo de terminsar de ler ou nao ele executa a proxima linha
//mais usado quando precisaos processar mutos arquivos

let conteudo = fs.readFileSync(path.join("texto.json"), {
    encoding: 'utf-8'
})
//parametro 1 é p caminho e o 2 é o objeto com a propriedae encode
conteudo = JSON.parse(conteudo)

conteudo.push('melão')
//readFyleSync é sincrono (o fs abre o arq le toda a estrutura.... e so aí a proxima coisa é exutada)

fs.writeFileSync('texto.json', JSON.stringify(conteudo))
//se n existir o arq. ele cria um.
//primeiro param o conteudo que quero alterar, e o segundo o que quero colocar nele

