const express = require('express');
const productRouter=require('./routes/productRouter');
const cartRouter=require('./routes/cartRouter');
const app = express();

//const ProductManager=require('./Manager/productManager.js');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//app.use(express.static(__dirname+'/public'));
app.use('/api',productRouter);
app.use('/api',cartRouter);

admin=false;


const PORT = 8080;
const server = app.listen(PORT, (req, res) => console.log(`Listening on PORT ${PORT}`))