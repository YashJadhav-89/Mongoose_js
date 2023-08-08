const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://127.0.0.1:27017/e-comm");

var productSchema = new mongoose.Schema({name : String , price: Number , brand : String , 
    category : String});

//to save
const saveInDb = async ()=>{

    // Using schema model connects the mongoose to the node js
    const productModel = mongoose.model("products" , productSchema);

    let data = new productModel({name : "a3" , price : 5564 , brand : "nokia" , category : "mobile"});
    let result = await data.save();
    console.log(result);
}
saveInDb();

//to update
const updateInDb = async ()=>{
    const productModel = mongoose.model("products" , productSchema);

    let data = await productModel.updateOne(
        {name : "a1"},
        {$set : {name : "S20"}}
    );

    console.warn(data);
}
updateInDb();

//to delete=
const deleteInDb = async ()=>{
    const productModel = mongoose.model("products" , productSchema);

    let data = await productModel.deleteOne({name : "V 41"}
    );

    console.warn(data);
}
deleteInDb();

//to find=
 const findInDb = async ()=>{
     const productModel = mongoose.model("products" , productSchema);

     let data = await productModel.find({name : "a3"}
     );

     console.warn(data);
 }

findInDb();
  

//above code fully working.