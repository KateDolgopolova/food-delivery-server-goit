const express = require('express');
const mainRoute = require ('./main/main');
const signUpRoute = require ('./users/sign-up-route');
const getAllProducts = require ('./products/products');
const getProduct = require ('./products/products');
const getCategory = require ('./products/products');

const apiRoutes = express.Router();

apiRoutes
    .get('/', mainRoute)
    .get('/signup', signUpRoute)
    .get('/products', getAllProducts)
    .get('/products/get', getProduct,)
    .get('/products/getcategory', getCategory)



module.exports = apiRoutes;

