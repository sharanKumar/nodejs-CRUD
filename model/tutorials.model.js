const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean
    },
    { timestamps: true }
);

const tut = mongoose.model('tutorials',schema)

module.exports = tut;