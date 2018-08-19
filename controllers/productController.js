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


//Get the list of all products
let getAllProduct = (req, res) => {
    ProductModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Product Controller: getAllProduct', 10)
                let apiResponse = response.generate(true, 'Failed To Find Product Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Product Found', 'Product Controller: getAllProduct')
                let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Product Details Found', 200, result)
                res.send(apiResponse)
            }
        })
} // end of get all Products


//View Product by its ID
let viewByProductId = (req, res) => {
    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {
        ProductModel.findOne({ "productId": req.params.productId }, (err, result) => {
            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "ProductController:viewByProductId", 5)
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

//View Product by Product Name
let viewByProductName = (req, res) => {
    if (check.isEmpty(req.params.productName)) {

        console.log('Product Name should be passed')
        let apiResponse = response.generate(true, 'Product Name is missing', 403, null)
        res.send(apiResponse)
    } else {
        ProductModel.find({ "productName": req.params.productName }, (err, result) => {
            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Found Successfully')
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }

}

//View Product by Category
let viewByCategory = (req, res) => {
    if (check.isEmpty(req.params.productCategory)) {

        console.log('productCategory should be passed')
        let apiResponse = response.generate(true, 'productCategory is missing', 403, null)
        res.send(apiResponse)
    } else {

        ProductModel.find({ 'productCategory': req.params.productCategory }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Found Successfully')
                let apiResponse = response.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

//Editing a Specific product
let editProduct = (req, res) => {

    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {

        let options = req.body;
        console.log(options);
        ProductModel.update({ 'productId': req.params.productId }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Edited Successfully')
                let apiResponse = response.generate(false, 'Product Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

//deleting a product
let deleteProduct = (req, res) => {
    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {
        ProductModel.remove({ 'productId': req.params.productId }, (err, result) => {
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
                console.log('Product Deletion Success')
                let apiResponse = response.generate(false, 'Product Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}
// creating a new Product 
let createNewProduct = (req, res) => {
    var today = Date.now()
    let productId = shortid.generate()

    let newProduct = new ProductModel({

        productId: productId,
        productName: req.body.productName,
        title: req.body.title,
        productCategory: req.body.productCategory,
        productSubCategory: req.body.productSubCategory,
        maximumRetailPrice: req.body.maximumRetailPrice,
        sellingPrice: req.body.sellingPrice,
        cashBack:req.body.cashBack,
        emiAvailable:req.body.emiAvailable,
        codAvailable:req.body.codAvailable,
        inStock:req.body.inStock,
        discountPercentage:req.body.discountPercentage,
        productUrl: req.body.productUrl,
        created: today

    }) // end new product model
    let size = (req.body.size != undefined && req.body.size != null && req.body.size != '') ? req.body.size.split(',') : []
    newProduct.size = size

    let color = (req.body.color != undefined && req.body.color != null && req.body.color != '') ? req.body.color.split(',') : []
    newProduct.color = color

    newProduct.save((err, result) => {
        if (err) {
            let apiResponse = response.generate(true,'Error Occured.',500,null)
            console.log(err)
            res.send(err)
        } else {
            let apiResponse = response.generate(false,'Product Created Succesfully.',200,result)
            res.send(result)

        }
    }) // end new product save
}// end create new product

//To display product view
let increaseProductView = (req, res) => {
    if (check.isEmpty(req.params.productId)) {

        console.log('productId should be passed')
        let apiResponse = response.generate(true, 'productId is missing', 403, null)
        res.send(apiResponse)
    } else {
        ProductModel.findOne({ 'productId': req.params.productId }, (err, result) => {
            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = response.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                result.views += 1;
                result.save(function (err, result) {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured While saving Product', 500, null)
                        res.send(apiResponse)
                    }
                    else {
                        console.log('Product Updated Successfully')
                        let apiResponse = response.generate(false, 'Product Updated Successfully.', 200, result)
                        res.send(apiResponse)
                    }
                });// end result
            }
        })
    }

}

module.exports = {

    getAllProduct: getAllProduct,
    createNewProduct: createNewProduct,
    viewByProductId: viewByProductId,
    viewByProductName: viewByProductName,
    viewByCategory: viewByCategory,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    increaseProductView: increaseProductView
   
}