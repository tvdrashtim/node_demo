const express = require('express');
const app = express();
const url = 'mongodb://localhost:27017/e-medical';
const mongoose = require('mongoose')

mongoose.connect(url);
const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    quantity: Number
});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "xyz",
        price: 200,
        quantity: 20,
        category: 'pills'
    });
    const result = await data.save();
    console.log(result);
}


const updateInDB = async () => {
    const ProductModel = mongoose.model('products', productSchema);
    let data = await ProductModel.updateOne(
        { name: 'tablets' },
        {
            $set: { price: 550, quantity: 80 }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'tablets'})
    console.log(data);
}

const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find()
    console.log(data);
}

findInDB();
