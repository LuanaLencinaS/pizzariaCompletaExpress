function auth(req, res, next){
    const usuario = typeof(req.session.user) != 'undefined'?req.session.user:false

    if(usuario){
        return next();
    }else{
        return res.redirect('/login')
    }
}

module.exports = auth