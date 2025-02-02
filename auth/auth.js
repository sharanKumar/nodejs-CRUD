require('dotenv').config();
const jwt = require('jsonwebtoken')

const generateToken = (req,res) => {
    const user = {_id: 1 , username: 'user'}
    const token = jwt.sign(user,process.env.SECRET_KEY,{expiresIn : '2h'})
    res.json({token});
}

const verifyToken = (req,res,next) => {
  const token = req.headers['authorization']
  if(!token) return res.status(403).send('Token is required')

    jwt.verify(token,process.env.SECRET_KEY,(err , decoded) =>{
        if(err) return res.status(401).send('Invalid Token')
        req.user = decoded
        next();
    })
}

module.exports ={
    generateToken,
    verifyToken
}