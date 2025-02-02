const usersModel = require('../model/users.model.js')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.login = async (req,res) => {
    if(!req.body.userName || !req.body.password){
        res.send(404).send('Please check user name and password')
     }

     const SECRET_KEY = process.env.SECRET_KEY

     const { userName, password } = req.body;

     const user = await usersModel.findOne({'userName':userName}).lean();

     if(user && bcrypt.compare(password,user.password)){
        const token = jwt.sign({userName : user.userName},SECRET_KEY,{ expiresIn : '1hr' })
        res.json({token})
     }else [
        res.status(401).send('Invalid credentials')
     ]
}

exports.register = async (req,res) => {

    if(!req.body.userName || !req.body.password){
       res.status(404).send('Please check user name and password')
    }

    const user = new usersModel({
        userName: req.body.userName,
        password: await bcrypt.hash(req.body.password, 10)
    })
     
    await usersModel
          .create(user)
          .then(data => {
            res.status(200).send( "user sucessfully registered: " + data)
          }).catch(err => {
            res.status(500).send("there is a problem in registering the user " + err.message)
          })
}