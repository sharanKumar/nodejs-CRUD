const mongoose = require('mongoose')

const connectDB = async (mongoDBConnectionString) =>{
await mongoose.connect(mongoDBConnectionString)
  .then( () => {
    console.log('sucessfully connected to db');
   })
   .catch((err)=> {
    console.log('cannot connect to the db',err);
    process.exit();    
  })
}

module.exports = connectDB