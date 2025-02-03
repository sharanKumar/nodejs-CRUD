const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
      userName: String,
      password: String,
      email: { type: String, unique: true, index: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model('users',schema)