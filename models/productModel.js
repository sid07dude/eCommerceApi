// importing mongoose modules
const mongoose = require('mongoose')

// import schema
const Schema = mongoose.Schema;

let productSchema = new Schema(

    {
        productId: {
            type: String,
            unique: true
        },
        productName: {
            type: String,
            default: ''
        },
        productCategory: {
            type: String,
            default: ''
        },
        productSubCategory: {
            type: String,
            default: ''
        },
         title: {
            type: String,
            default: ''
            
        },
        maximumRetailPrice: { 
           type:Number

        },
        sellingPrice: {
            type:Number
        },
        productUrl: {
            type: String,
            default: ''
        },
        inStock: {
            type: Boolean,
            default: true
        },
        codAvailable: {
            type: Boolean,
            default: true
        },
        emiAvailable: {
            type: Boolean,
            default: true
        },
        discountPercentage: {
            type: Number,
            default: 0
        },
        cashBack: {
            type: Number,
            default: null
        },
        views:{
            type:Number,
            default: 0
        },
        size: [],

        color: [],

        created:{
            type:Date
        }   
        
    }

)

//Mongoose model for Product List
mongoose.model('Product', productSchema);

