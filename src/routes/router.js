const mainRoute = require('./main/main');
const signUpRoute = require('./users/sign-up-route');
const getAllProducts = require('./products/products');

const router = {
  '/signup': signUpRoute,
  '/products': getAllProducts,
  default: mainRoute
};

module.exports = router;
