define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>productName of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\t\tproductCategory:\"string\",\n\t\t\t\t\t\tproductSubCategory:\"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tmaximumRetailPrice: number,\n\t\t\t\t\t\tsellingPrice: number,\n\t\t\t\t\t\tproductUrl:\"string\",\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcodAvailable:boolean,\n\t\t\t\t\t\temiAvailable:boolean,\n\t\t\t\t\t\tdiscountPercentage:number,\n\t\t\t\t\t\tcashBack:number,\n\t\t\t\t\t\tsize:\"strimg\",\n\t\t\t\t\t\tcolor:\"string\",\n\t\t\t\t\t\t\"view\":number\n\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "create",
    "name": "PostApiV1Create"
  },
  {
    "type": "post",
    "url": "/api/v1/:productId/delete",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/:shoppingId/delete",
    "title": "Delete product by shoppingId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shoppingId",
            "description": "<p>shoppingId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Product Deleted From Shopping cart\",\n\t\t\"status\": 200,\n\t\t\"data\": []\n\t\t\t}\n\t\t}\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.,\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "delete",
    "name": "PostApiV1ShoppingidDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/all",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Products Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\t\tproductCategory:\"string\",\n\t\t\t\t\t\tproductSubCategory:\"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tmaximumRetailPrice: number,\n\t\t\t\t\t\tsellingPrice: number,\n\t\t\t\t\t\tproductUrl:\"string\",\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcodAvailable:boolean,\n\t\t\t\t\t\temiAvailable:boolean,\n\t\t\t\t\t\tdiscountPercentage:number,\n\t\t\t\t\t\tcashBack:number,\n\t\t\t\t\t\tsize:\"strimg\",\n\t\t\t\t\t\tcolor:\"string\",\n\t\t\t\t\t\tviews: number,\n\t\t\t\t\t\tproductAttributes: object(type = object),\n\t\t\t\t\t\tcreated: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Products\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "read",
    "name": "GetApiV1All"
  },
  {
    "type": "get",
    "url": "/api/v1/:productId/addToCart",
    "title": "Product added to Shopping cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Product Added Successfully.\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"name\": \"string\",\n\t\t\t\t\t\t\"quantity\": number,\n\t\t\t\t\t\t\"addToShoppingCart\": boolean,\n\t\t\t\t\t\t\"totalAmount\":number,\n\t\t\t\t\t\t\"shoppingId\": \"string\",\n\t\t\t\t\t\t\"created\": \"date\"\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\t\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductidAddtocart"
  },
  {
    "type": "get",
    "url": "/api/v1/view/by/category/:category",
    "title": "Get Product by category",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\t\tproductCategory:\"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tmaximumRetailPrice: number,\n\t\t\t\t\t\tsellingPrice: number,\n\t\t\t\t\t\tproductUrl:\"string\",\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcodAvailable:boolean,\n\t\t\t\t\t\temiAvailable:boolean,\n\t\t\t\t\t\tdiscountPercentage:number,\n\t\t\t\t\t\tcashBack:number,\n\t\t\t\t\t\tsize:\"strimg\",\n\t\t\t\t\t\tcolor:\"string\"\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewByCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/view/by/productName/:productName",
    "title": "Get Product by its name",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\n\t\t\t\t\t\"productName\": \"string\",\n\t\t\t\t\t\"productCategory\": \"string\",\n\t\t\t\t\t\"productSubCategory\": \"string\",\n\t\t\t\t\t\"title\": \"string\",\n\t\t\t\t\t\"productUrl\": \"string\",\n\t\t\t\t\t\"inStock\": boolean,\n\t\t\t\t\t\"codAvailable\": boolean,\n\t\t\t\t\t\"emiAvailable\": boolean,\n\t\t\t\t\t\"discountPercentage\": number,\n\t\t\t\t\t\"cashBack\": number,\n\t\t\t\t\t\"size\": \"string\",\n\t\t\t\t\t\"color\": \"string\",\n\t\t\t\t\t\"_id\": \"string\",\n\t\t\t\t\t\"productId\": \"string\",\n\t\t\t\t\t\"maximumRetailPrice\": number,\n\t\t\t\t\t\"sellingPrice\": number,\n\t\t\t\t\t\"created\": \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewByProductnameProductname"
  },
  {
    "type": "get",
    "url": "/api/v1/view/:productId",
    "title": "Get Products by its Id",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \" Product Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\t\tproductCategory:\"string\",\n\t\t\t\t\t\tproductSubCategory:\"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tmaximumRetailPrice: number,\n\t\t\t\t\t\tsellingPrice: number,\n\t\t\t\t\t\tproductUrl:\"string\",\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcodAvailable:boolean,\n\t\t\t\t\t\temiAvailable:boolean,\n\t\t\t\t\t\tdiscountPercentage:number,\n\t\t\t\t\t\tcashBack:number,\n\t\t\t\t\t\tsize:\"strimg\",\n\t\t\t\t\t\tcolor:\"string\",\n\t\t\t\t\t\tcreated: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Products\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/viewShoppingCart",
    "title": "Get the view of Shopping cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Product Added Successfully.\",\n\t\t\"status\": 200,\n\t   \t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"name\": \"string\",\n\t\t\t\t\t\"quantity\": number,\n\t\t\t\t\t\"addToShoppingCart\": boolean,\n\t\t\t\t\t\"totalAmount\":number,\n\t\t\t\t\t\"shoppingId\": \"string\",\n\t\t\t\t\t\"created\": \"date\"\n\t\t\t\t\t\n\t\t\t\t}\n\t  \t\t ]\n\t\t\t}\n\t\t}\t\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\"error\": true,\n\t\t\"message\": \"Error Occured.\",\n\t\t\"status\": 500,\n\t\t\"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "read",
    "name": "GetApiV1Viewshoppingcart"
  },
  {
    "type": "put",
    "url": "/api/v1/:productId/edit",
    "title": "Edit Product by productId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\"error\": false,\n\t\t\"message\": \"Product Edited Successfully.\",\n\t\t\"status\": 200,\n\t\t\"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\t\tproductCategory:\"string\",\n\t\t\t\t\t\tproductSubCategory:\"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tmaximumRetailPrice: number,\n\t\t\t\t\t\tsellingPrice: number,\n\t\t\t\t\t\tproductUrl:\"string\",\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcodAvailable:boolean,\n\t\t\t\t\t\temiAvailable:boolean,\n\t\t\t\t\t\tdiscountPercentage:number,\n\t\t\t\t\t\tcashBack:number,\n\t\t\t\t\t\tsize:\"strimg\",\n\t\t\t\t\t\tcolor:\"string\"\n\t\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t\t\t\"error\": true,\n\t\t\t\"message\": \"Error Occured.,\n\t\t\t\"status\": 500,\n\t\t\t\"data\": null\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "read",
    "name": "PutApiV1ProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/:productId/count/view",
    "title": "Increase Product Count",
    "version": "0.0.1",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Blog Updated Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tproductId: \"string\",\n\t\t\t\t\t\tproductName:\"string\",\n\t\t\t\t\t\tproductCategory:\"string\",\n\t\t\t\t\t\tproductSubCategory:\"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tmaximumRetailPrice: number,\n\t\t\t\t\t\tsellingPrice: number,\n\t\t\t\t\t\tproductUrl:\"string\",\n\t\t\t\t\t\tinStock: boolean,\n\t\t\t\t\t\tcodAvailable:boolean,\n\t\t\t\t\t\temiAvailable:boolean,\n\t\t\t\t\t\tdiscountPercentage:number,\n\t\t\t\t\t\tcashBack:number,\n\t\t\t\t\t\tsize:\"strimg\",\n\t\t\t\t\t\tcolor:\"string\",\n\t\t\t\t\t\tviews:number\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/router.js",
    "groupTitle": "update",
    "name": "GetApiV1ProductidCountView"
  }
] });
