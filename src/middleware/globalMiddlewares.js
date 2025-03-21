exports.middlewareGlobal = (req, res, next) => {
    res.locals.user = req.session.user;
      
    next();
};

exports.loginObrigatorio = async(req, res, next) => {
    if(!req.session.user) {
        await req.flash('loginObrigatorio', 'é necessário fazer login para acessar este privilégio');
        req.session.save(() => res.redirect('/login'));
        return;
    }

    next();
}
