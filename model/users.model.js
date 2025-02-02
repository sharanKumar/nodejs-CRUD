const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
      userName: String,
      password: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('users',schema)