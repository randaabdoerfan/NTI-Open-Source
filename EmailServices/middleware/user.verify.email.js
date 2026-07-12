const jwt = require('jsonwebtoken')

const verifyEmailMiddleware = (type)=>{
    return(req,res,next)=>{
       try{
         const token = req.params.token
        if(!token) {throw new Error('you are not authatincated')}
        const payload = jwt.verify(token,process.env.secert_key)
        if(payload.type !== type)return res.status(400).json({message:"type token err"})
        req.usertoken = payload
        next()
       }catch(err){res.status(400).json({message:"invalid token or expire"})}
    }
}
module.exports = verifyEmailMiddleware