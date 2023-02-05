const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();

app.use(
  cors({
    origin:"http://localhost:3000",
    mothods:["GET,","POST","PUT","DELETE"]
  })
)

app.use(express.json())
// Connect to MongoDB
mongoose.connect("mongodb://mongo:PJkaEsurptK22YhOt59M@containers-us-west-151.railway.app:6887", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// // Define a schema for the database
// const schema = new mongoose.Schema({
//   name: String,
//   description: String,
//   date: { type: Date, default: Date.now },
// });

// // Create a model from the schema
// const Item = mongoose.model('Item', schema);

const Item=require('./models/item')

// GET all items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET a single item by ID
app.get('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST a new item
app.post('/api/items', async (req, res) => {
  try {
    const item = new Item({
      name: req.body.name,
      description: req.body.description,
    });
    await item.save();
    res.send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT (update) an existing item by ID
app.put('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) return res.status(404).send('Item not found');
    res.send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE an item by ID
app.delete('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).send('Item not found');
    res.send(item);
  } catch (error) {
    res.status(500).send(error);
  }
});




//API for customer

const Customer=require('./models/customer')

// GET all customers
app.get('/api/customers', async (req, res) => {
  try {
    const customer = await Customer.find();
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET a single customer by ID
app.get('/api/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).send('Customer not found');
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST a new customer
app.post('/api/customers', async (req, res) => {
  try {
    const customer = new Customer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    });
    await customer.save();
    res.send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT (update) an existing customer by ID
app.put('/api/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!customer) return res.status(404).send('Customer not found');
    res.send(customer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE an item by ID
app.delete('/api/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).send('Customer not found');
    res.send(customer);
  } catch (error) {
    res.status(500).send(error);
  }
});







//API for orders

const Order=require('./models/order')

// GET all orders
app.get('/api/orders', async (req, res) => {
  try {
    const order = await Order.find();
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET a single order by ID
app.get('/api/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send('Order not found');
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST a new order
app.post('/api/orders', async (req, res) => {
  try {
    const order = new Order({
      customerName: req.body.customerName,
      orderStatus: req.body.orderStatus,
      orderOccasion: req.body.orderOccasion,
      customerPhone: req.body.customerPhone,
      customerEmail:req.body.customerEmail,
      dueDate:req.body.dueDate,
      recipient: req.body.recipient,
      recipientPhone:req.body.recipientPhone,
      delivery:req.body.delivery,
      deliveryAddress:req.body.deliveryAddress,


    });
    await order.save();
    res.send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT (update) an existing order by ID
app.put('/api/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) return res.status(404).send('Order not found');
    res.send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

// DELETE an order by ID
app.delete('/api/orders/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).send('Order not found');
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
});













// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});