const mongoose =require('mongoose')



// Define a schema for the database
const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    phoneNumber:String,
    addedDate: { type: Date, default: Date.now },
  });

  module.exports=mongoose.model('Customer',schema)