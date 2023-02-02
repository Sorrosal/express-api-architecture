const DB = require ("./db.json");
const { saveToDatabase } = require ("./utils");

const getAllProducts = () =>{
    return DB.products;
};

const createNewProduct = (newProduct) => {
    const isAlreadyAdded =
    DB.products.findIndex((product) => product.name === newProduct.name) > -1;

    if(isAlreadyAdded){
        return ;
    }

    DB.products.push(newProduct);
    saveToDatabase(DB);
}

const getOneProduct = (productId) => {
    const product = DB.products.find((product) => product.id === productId);
    if(!product){
        return;
    }
    return product;
}

const updateOneProduct = (productId, changes) => {
    const indexForUpdated = DB.products.findIndex(
        (product) => (product.id === productId)
    );
    if(indexForUpdated === -1){
        return ;
    }
    const updatedProduct = {
        ...DB.products[indexForUpdated],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", {timezone:"UTC"}),
    };
    DB.products[indexForUpdated] = updatedProduct;
    saveToDatabase(DB);
    return updatedProduct;
};

module.exports = {getAllProducts, getOneProduct, createNewProduct, updateOneProduct}