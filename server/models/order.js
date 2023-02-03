const mongoose =require('mongoose')



// Define a schema for the database
const itemSchema = new mongoose.Schema({

      name: String,
      unitCost:Number,
    });
  

// Define a schema for the database
const schema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    customerName: String,
    recipient:String,
    orderType:String,
    delivery:String,
    deliveryAddress:String,
    orderItems: [itemSchema],
    orderStatus: String,
    dueDate:Date,
    orderDate: { type: Date, default: Date.now },
  });

  module.exports=mongoose.model('Order',schema)