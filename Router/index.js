
const express = require('express');


const route = express.Router();

const shoptypeController = require('../Controllers/shoptype');
const productController = require('../Controllers/Products');
const userController = require('../Controllers/Users');
const ordersController = require('../Controllers/Orders');
const paymentGatewayController = require('../Controllers/Payments');

route.get('/shoptype', shoptypeController.getShoptypes); // for home page 
route.get('/product', productController.getProducts);
route.get('/product/:name', productController.getProductsbyname); // for search bar
route.post('/userlogin', userController.userLogin);
route.post('/usersignup', userController.userSignUp);
route.post('/filter', productController.productsFilter);
route.get('/products/:proId', productController.getProductsByproId); //for details page
route.get('/item/:shopId',productController.getProductsByshopId);//for sort page all products by shoptype using shopId
route.post('/order',ordersController.saveorderDetails);
route.get('/orders/:userId',ordersController.getordersByUserId);
route.post('/payment', paymentGatewayController.payment);
route.post('/callback', paymentGatewayController.callback);


module.exports= route;