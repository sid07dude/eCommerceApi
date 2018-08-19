const express = require('express')
const router = express.Router();

//Product and Shopping controller
const productController = require('./../controllers/productController')
const shopingController = require('./../controllers/shoppingController')

const appConfig = require('./../config/appConfig')

//Middleware
const auth = require("./../middlewares/auth")

module.exports.setRouter = function (app) {

	let baseUrl = appConfig.apiVersion;

	//Product Controller starts
	app.get(baseUrl + '/all', productController.getAllProduct);

    /**
	 * @api {get} /api/v1/all Get all Products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "All Products Found",
			"status": 200,
			"data": [
						{
							productId: "string",
							productName: "string",
							productCategory: "string",
							productSubCategory: "string",
							title: "string",
							maximumRetailPrice: number,
							sellingPrice: number,
							productUrl: "string",
							inStock: boolean,
							codAvailable: boolean,
							emiAvailable: boolean,
							discountPercentage: number,
							cashBack: number,
							size: "strimg",
							color: "string",
							views: number,
							productAttributes: object(type = object),
							created: "date"
					]
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 *{
		"error": true,
		"message": "Failed To Find Products",
		"status": 500,
		"data": null
	   }
	 */


	app.get(baseUrl + '/view/:productId', productController.viewByProductId);

    /**
	 * @api {get} /api/v1/view/:productId  Get Products by its Id
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": " Product Found",
			"status": 200,
			"data": [
						{
							productId: "string",
							productName: "string",
							productCategory: "string",
							productSubCategory: "string",
							title: "string",
							maximumRetailPrice: number,
							sellingPrice: number,
							productUrl: "string",
							inStock: boolean,
							codAvailable: boolean,
							emiAvailable: boolean,
							discountPercentage: number,
							cashBack: number,
							size: "strimg",
							color: "string",
							created: "date"
						}
					]
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 *{
		"error": true,
		"message": "Failed To Find Products",
		"status": 500,
		"data": null
	   }
	 */

	app.get(baseUrl + '/view/by/productName/:productName', productController.viewByProductName);

	/**
	 * @api {get} /api/v1/view/by/productName/:productName Get Product by its name
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category category of the blog passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Product Found Successfully.",
			"status": 200,
			"data": [
						{
							
						"productName": "string",
						"productCategory": "string",
						"productSubCategory": "string",
						"title": "string",
						"productUrl": "string",
						"inStock": boolean,
						"codAvailable": boolean,
						"emiAvailable": boolean,
						"discountPercentage": number,
						"cashBack": number,
						"size": "string",
						"color": "string",
						"_id": "string",
						"productId": "string",
						"maximumRetailPrice": number,
						"sellingPrice": number,
						"created": "date"
						}
					]
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 *{
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	   }
	 */


	app.get(baseUrl + '/view/by/category/:productCategory', productController.viewByCategory);

	/**
	 * @api {get} /api/v1/view/by/category/:category Get Product by category
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category category of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Product Found Successfully.",
			"status": 200,
			"data": [
						{
							productId: "string",
							productName: "string",
							productCategory: "string",
							title: "string",
							maximumRetailPrice: number,
							sellingPrice: number,
							productUrl: "string",
							inStock: boolean,
							codAvailable: boolean,
							emiAvailable: boolean,
							discountPercentage: number,
							cashBack: number,
							size: "strimg",
							color: "string"						
							
						}
					]
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 *{
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	  }
	 */


	app.put(baseUrl + '/:productId/edit', productController.editProduct);

	/**
	 * @api {put} /api/v1/:productId/edit Edit Product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} category category of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Product Edited Successfully.",
			"status": 200,
			"data": [
						{
							productId: "string",
							productName:"string",
							productCategory:"string",
							productSubCategory:"string",
							title: "string",
							maximumRetailPrice: number,
							sellingPrice: number,
							productUrl:"string",
							inStock: boolean,
							codAvailable:boolean,
							emiAvailable:boolean,
							discountPercentage:number,
							cashBack:number,
							size:"strimg",
							color:"string"
					]
		}
		@apiErrorExample {json} Error-Response:
		*
		* {
			"error": true,
			"message": "Error Occured.,
			"status": 500,
			"data": null
		  }
		*/

	app.post(baseUrl + '/:productId/delete', productController.deleteProduct);

    /**
	 * @api {post} /api/v1/:productId/delete Delete product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Product Deleted Successfully",
			"status": 200,
	   		"data": []
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 *{
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	   }
	 */


	app.post(baseUrl + '/create', productController.createNewProduct);

    /**
	 * @api {post} /api/v1/create Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} title title of the product passed as a body parameter
	 * @apiParam {String} productName productName of the product passed as a body parameter
	 * @apiParam {String} productId productId of the product passed as a body parameter
	 * @apiParam {String} category category of the product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Blog Created successfully",
			"status": 200,
			"data": [
						{
							productId: "string",
							productName: "string",
							productCategory: "string",
							productSubCategory: "string",
							title: "string",
							maximumRetailPrice: number,
							sellingPrice: number,
							productUrl: "string",
							inStock: boolean,
							codAvailable: boolean,
							emiAvailable: boolean,
							discountPercentage: number,
							cashBack: number,
							size: "strimg",
							color: "string",
							"view": number
	    			]
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 *{
		"error": true,
		"message": "Error Occured.,
		"status": 500,
		"data": null
	   }
	 */

	app.get(baseUrl + '/:productId/count/view', productController.increaseProductView);

	/**
	 * @api {get} /api/v1/:productId/count/view Increase Product Count
	 * @apiVersion 0.0.1
	 * @apiGroup update
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Updated Successfully.",
	    "status": 200,
	    "data": [
					{
						productId: "string",
						productName:"string",
						productCategory:"string",
						productSubCategory:"string",
						title: "string",
						maximumRetailPrice: number,
						sellingPrice: number,
						productUrl:"string",
						inStock: boolean,
						codAvailable:boolean,
						emiAvailable:boolean,
						discountPercentage:number,
						cashBack:number,
						size:"strimg",
						color:"string",
						views:number
	    		]
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 *{
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


	
	 //Product Controller ends

	//Shopping Cart Controller starts
	//Add product to Shopping Cart
	app.post(baseUrl + '/:productId/addToCart', shopingController.addProductToCart);

	/**
	 * @api {get} /api/v1/:productId/addToCart	 Product added to Shopping cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId The productId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
		"error": false,
		"message": "Product Added Successfully.",
		"status": 200,
		"data": [
					{
						"name": "string",
						"quantity": number,
						"addToShoppingCart": boolean,
						"totalAmount":number,
						"shoppingId": "string",
						"created": "date"
						
					}
				]	
		}
		@apiErrorExample {json} Error-Response:
		*
		* {
		"error": true,
		"message": "Error Occured.",
		"status": 500,
		"data": null
		}
		*/



	//View product in Shopping Cart
	app.get(baseUrl + '/viewShoppingCart', shopingController.viewShoppingCart);

	/**
	 * @api {get} /api/v1/viewShoppingCart	 Get the view of Shopping cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Product Added Successfully.",
			"status": 200,
			"data": [
						{
							"name": "string",
							"quantity": number,
							"addToShoppingCart": boolean,
							"totalAmount":number,
							"shoppingId": "string",
							"created": "date"
							
						}
				]
		}
	 @apiErrorExample {json} Error-Response:
		*
		* {
			"error": true,
			"message": "Error Occured.",
			"status": 500,
			"data": null
		}
		*/

	//Delete product From Shopping Cart
	app.post(baseUrl + '/:shoppingId/deleteFromCart', shopingController.deleteProductFromCart);

	/**
	 * @api {post} /api/v1/:shoppingId/delete Delete product by shoppingId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} shoppingId shoppingId of the product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
			"error": false,
			"message": "Product Deleted From Shopping cart",
			"status": 200,
			"data": []
		}
	  @apiErrorExample {json} Error-Response:
		*
		* {
			"error": true,
			"message": "Error Occured.,
			"status": 500,
			"data": null
		}
		*/



	//Shopping Cart Controller ends

} // end setRouter function
