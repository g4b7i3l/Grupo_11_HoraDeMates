module.exports = (req,res,next) => {
    if(req.session.userLogin && req.session.userLogin.rols_id === 2){
        next()
    }else{
        res.redirect('/')
    }
}