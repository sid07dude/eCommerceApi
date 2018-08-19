// importing mongoose modules
const mongoose = require('mongoose')

// import schema
const Schema = mongoose.Schema;


//Schema for Shopping Cart
let shoppingSchema = new Schema(
    {
        
        shoppingId: {
            type: String,
            unique: true
            
        }, 
        title:{
            type:String
        },
        quantity: {
            type: Number,
            default: 1
        },
        totalPrice: {
            type: Number,
            
        },
        created:{
            type:Date
        }
       
    })

//Mongoose model for shopping cart
mongoose.model('ShoppingCart', shoppingSchema);