const path = require("path");
const fs = require("fs");
const url = require ('url');


const getAllProducts = (request, response) => {
   const products = path.join(__dirname, '../../../',  '/src/db/products', '/all-products.json');

    const answer = fs.readFileSync(products);
   fs.readFile(products, function(err, data) {
       const answer = (data);


       if(err) throw err;

        response.writeHead(200, {"Content-type" : "application/json"});
        response.end(answer);
   } );

    response.writeHead(200, {"Content-type" : "application/json"});
    response.end(answer);
};

const getIdProduct = url => {
    const lastIndex = url.lastIndexOf('=');

    if(lastIndex !== -1){
        return url.slice (lastIndex +1);
    }

};

const getProduct = (request, response) => {
    const parsedUrl = url.parse(request.url);
    const id = getIdProduct(parsedUrl.path);
    const idArray = id.split(',');
    const productsFile = path.join(__dirname, '../../../', '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);
    const allProductsJS = JSON.parse(products);


    const responseObj = {
        "status": "success",
        "products": getElementId(id)
    };
    console.log(responseObj);

  response.writeHead (200, {"Contend-type" : "application/json"});
  //response.write(JSON.stringify({ getIdProduct: id}));
    response.write(JSON.stringify(responseObj));
  response.end();


};

function getElementId(id) {
    const productsFile = path.join(__dirname, '../../../',  '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);
    const allProductsJS = JSON.parse(products);
    const objectItems = [];
    const idArray = id.split(',');

    for (let idNumber of idArray){
        for (let productItem of allProductsJS){
            idNumber = Number(idNumber);
            if(idNumber === productItem.id){
                objectItems.push(productItem);
            }
        }
    }
    console.log(objectItems);
    return objectItems;

}

function getElementByCategory(category) {
    const productsFile = path.join(__dirname, '../../../',  '/src/db/products', '/all-products.json');
    const products = fs.readFileSync(productsFile);
    const allProductsJS = JSON.parse(products);
    const objectItems = [];
    const categoryArray = category.split(',');

    for (let category of categoryArray){
        for (let productItem of allProductsJS){

            if(category === productItem.categories[0]){

                objectItems.push(productItem);
            }
        }
    }
    console.log(objectItems);
    return objectItems;

}

const getCategory = (request, response) => {

    const parsedUrl = url.parse(request.url);
    const category = getIdProduct(parsedUrl.path);
    const productsList = getElementByCategory(category);
    let responseObj = {};


    if (productsList.length !== 0){
         responseObj = {
            "status": "success",
            "products": productsList
        };
    } else {
        responseObj = {
            "status": "no products",
            "products": []
        };
    }






    response.writeHead(200, {"Contend-type": "application/json"});
    //response.write(JSON.stringify({ getIdProduct: id}));
    response.write(JSON.stringify(responseObj));
    response.end();
}


module.exports = getAllProducts;
module.exports = getProduct;
module.exports = getCategory;

