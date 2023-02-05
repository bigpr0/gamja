const mongoose =require('mongoose')



// Define a schema for the database
const itemSchema = new mongoose.Schema({

    name: String,
    qty:Number,
    price:Number,
    });
  

// Define a schema for the database
const schema = new mongoose.Schema({
    customerName: String,
    orderOccasion:String,
    orderStatus: String,
    customerPhone: String,
    customerEmail: String,
    recipient:String,
    recipientPhone:String,
    delivery:String,
    deliveryAddress:String,
    orderItems: [itemSchema],

    dueDate:Date,
    orderDate: { type: Date, default: Date.now },
  });

  module.exports=mongoose.model('Order',schema)