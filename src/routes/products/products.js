const path = require("path");
const fs = require("fs");


const getAllProducts = (request, response) => {
   const products = path.join(__dirname, '../../../',  '/src/db/products', '/all-products.json');

    const answer = fs.readFileSync(products);
   /*fs.readFile(products, function(err, data) {
       const answer = (data);


       if(err) throw err;

        response.writeHead(200, {"Content-type" : "application/json"});
        response.end(answer);
   } )
   */
    response.writeHead(200, {"Content-type" : "application/json"});
    response.end(answer);
};

module.exports = getAllProducts;