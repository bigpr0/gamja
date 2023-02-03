const mongoose =require('mongoose')



// Define a schema for the database
const schema = new mongoose.Schema({
    email: String,
    password: String,
    name:String,
    date: { type: Date, default: Date.now },
  });

  module.exports=mongoose.model('User',schema)