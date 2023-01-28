import createProduct from "./createProduct.js";
import db from "./db.js";

const data = db;

data.forEach(product => {
    if (product["home-page"]) {
        createProduct(product.source, product.name, product.price);
    }
})