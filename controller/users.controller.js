const usersModel = require('../model/users.model.js');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res, next) => {
  try {
    if (!req.body.userName || !req.body.password) {
      return res.status(400).send('Please check user name and password');
    }

    const SECRET_KEY = process.env.SECRET_KEY;
    const { userName, password } = req.body;

    const user = await usersModel.findOne({ userName }).lean();

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userName: user.userName }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      return res.status(400).send('User name and password are required');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new usersModel({ userName, password: hashedPassword });

    await newUser.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (err) {
    next(err);
  }
};