const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

var productSchema = new mongoose.Schema({name : String , price: Number , brand : String , 
    category : String});


const findInDb = async ()=>{
    const productModel = mongoose.model("products" , productSchema);

    let data = await productModel.find({name : "a3"}
    );

    console.warn(data);
}

findInDb();
 