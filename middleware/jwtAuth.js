const JWT = require('jsonwebtoken')

const jwtAuth  = (req, res, next)=>{
    const token = (req.cookies && req.cookies.token) || null;
    if(!token){
        return res.status(400).json({
            success:false,
            message : 'token does not exists|| NOT AUTHORIZED'
        })
    }

    try{
        const payload = JWT.verify(token , process.env.SECRET);
        req.user = {id : payload.id , email:payload.email}
    }catch(e){
        return res.send(400)({
            success:false,
            message: e.message
        })
    }
    
    next(); //will move to next in middleware

}
module.exports = jwtAuth;