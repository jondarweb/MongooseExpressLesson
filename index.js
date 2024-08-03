const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand', {useNewUrlParser: true}).then(() => 
{
  console.log("Mongo Connection Open");
}).catch(err => {
console.log("OH NO MONGO CONNECTION ERROR");
console.log(err);
})


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// route handler
app.get('/products', async (req, res) => {
  const products = await Product.find({})
    console.log(products);
  res.render('products/index.ejs', {products});
})

app.listen(3000, () => {
console.log("App is listening on port 3000)")
})
