const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid')

// Library
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')

// importing model 
const ProductModel = mongoose.model('Product')

// importing model 
const ShoppingCartModel = mongoose.model('ShoppingCart')

// creating a Shopping cart
let viewShoppingCart = (req, res) => {

    ShoppingCartModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Shopping Controller: viewShoppingCart', 10)
                let apiResponse = response.generate(true, 'Failed To Find Shopping Cart Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No items Found in Shopping Cart', 'Shopping Controller: viewShoppingCart')
                let apiResponse = response.generate(true, 'No Blog Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Product Found  in Shopping Cart', 200, result)
                res.send(apiResponse)
            }
        })

}

// Adding product in a Shopping cart
let addProductToCart = (req, res) => {
    let shoppingId = req.params.productId
    var today = Date.now()
    
    let shoppingCart = new ShoppingCartModel({
        shoppingId: shoppingId,
        quantity: req.body.quantity,
        title:req.body.title,
        totalAmount:req.body.sellingPrice,
        created: today,
        
    }) // end shopping cart mode
    
    
        //shoppingCart.title=Product.title
        shoppingCart.save((err, result) => {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            console.log(err)
            res.send(err)
        } else {
            let apiResponse = response.generate(false,'Product Added in Shopping Cart Succesfully.',200,result)
            res.send(result)
        }
    })
}


//deleting a product from Shopping cart
let deleteProductFromCart = (req, res) => {
    if (check.isEmpty(req.params.shoppingId)) {

        console.log('shoppingId should be passed')
        let apiResponse = response.generate(true, 'shoppingId is missing', 403, null)
        res.send(apiResponse)
    } else {

        ShoppingCartModel.remove({ 'shoppingId': req.params.shoppingId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Removed Success')
                let apiResponse = response.generate(false, 'Product Removed from Cart Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

module.exports = {
    viewShoppingCart: viewShoppingCart,
    addProductToCart: addProductToCart,
    deleteProductFromCart: deleteProductFromCart

}