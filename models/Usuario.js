const fs = require('fs')
const path = require('path')

const arquivo = path.join('usuarios.json')

const Usuario = {
    cadastrarUsuario: (nome, email, senha) => {
        let usuariosJson = JSON.parse(fs.readFileSync(arquivo, {
            encoding:'utf-8'
        }));

        usuariosJson.push({
            nome,
            email,
            senha
        })

        fs.writeFileSync(arquivo, JSON.stringify(usuariosJson))
    },

    buscarUsuario: (email) => {
        let usuariosJson = JSON.parse(fs.readFileSync(arquivo, {
            encoding:'utf-8'
        }));

        for(let i=0; i<usuariosJson.length; i++){
            let usuario = usuariosJson[i]
            if(usuario.email == email){
                //se encontrou...
                return usuario
            }
        }

        //se não achou:
        return false
    }
}

module.exports = Usuario;