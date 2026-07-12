
const jwt = require('jsonwebtoken')
const createToken = (dataUser)=>{
jwt.sign(dataUser,process.env.SECERT_KEY,{expiresIn:'1d'})
}