const jwt= require('jsonwebtoken');
const { JWT_SECRATE, JWT_EXPIRATION_TIME } = require('../config/config');

const EncodeToken= (email,user_id)=>{
    const key= JWT_SECRATE;
    const expire= JWT_EXPIRATION_TIME;
    const payload= { email:email, id:user_id}
    return jwt.sign(payload, key, { expiresIn: expire })
}


module.exports={EncodeToken}