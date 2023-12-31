const mongoose = require("mongoose");
const mongodb = require("mongodb");
const express = require("express");
const app = new express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/API");
var productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

app.post("/",async (req,resp)=>{

  let productModel = mongoose.model( "products" , productSchema);

  let data = new productModel(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});


app.get("/" , async (req , res)=>{
  let productModel = mongoose.model("products" , productSchema);
  let data = await productModel.find();

  res.send(data);
});



app.delete("/:id" , async (req , res)=>{
  const productModel = mongoose.model("products" , productSchema);

  let data = await productModel.deleteOne({_id : new mongodb.ObjectId(req.params.id)});
  res.send(data);
})

app.listen(3000 , ()=>{
  console.log(`Website running at : http://localhost:3000/`);
});

