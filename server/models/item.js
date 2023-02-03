const mongoose =require('mongoose')



// Define a schema for the database
const schema = new mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    unitCost:Number,
    date: { type: Date, default: Date.now },
  });

  module.exports=mongoose.model('Item',schema)