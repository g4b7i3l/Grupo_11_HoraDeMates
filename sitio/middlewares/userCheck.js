
module.exports = (req,res,next) => {
    if(req.session.userLogin  === req.userLogin){
        next()
    }else{
        res.redirect('/users/login')
    }
}