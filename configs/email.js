//configuração de email
const nodemailer = require("nodemailer");

const email = nodemailer.createTransport({
    //propria empresa:
    // host: 'smtp.mailtrap.io',
    // service: 'smtp.mailtrap.io',
    // port:'2525',
    // secure:false,
    // auth:{
    //     user:'d70ef84ae4b366',
    //     pass:'e39cf0fa9522c8'
    // }

    service: 'gmail',
    auth:{
        user:'analulencina@gmail.com',
        pass:'20000808'
    },
    tls: { 
        rejectUnauthorized: false 
    }
})

module.exports = email;