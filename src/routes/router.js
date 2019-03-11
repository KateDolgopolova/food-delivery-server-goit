const mainRoute = require ('./main/main');
const signUpRoute = require ('./users/sign-up-route');
const getAllProducts = require ('./products/products');
const getProduct = require ('./products/products');
const getCategory = require ('./products/products');


const router = {
  '/signup': signUpRoute,
  '/products': getAllProducts,
    '/products/get': getProduct,
    '/products/getcategory': getCategory,
    // /products/get?productId=string
  default: mainRoute
};

module.exports = router;
