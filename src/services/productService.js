const { v4: uuid } = require ("uuid");
const Product = require("../database/Product");

const getAllProducts = async() => {
    const allProducts = await Product.getAllProducts();
    return allProducts;
};

const getOneProduct = async(productId) => {
    const product = await Product.getOneProduct(productId);
    return product;
};

const createNewProduct = (newProduct) => {
    const productToInsert = {
        ...newProduct
        // id: uuid(),
        // createdAt: new Date().toLocaleString("en-US",{timezone: "UTC"}),
        // updatedAt: new Date().toLocaleString("en-US",{timezone: "UTC"}),
    }
    console.log(productToInsert.id+"insert");
    const createdProduct = Product.createNewProduct(productToInsert);
    return createdProduct;
}

const updateOneProduct = (productId, changes) => {
    const updatedOneProduct = Product.updateOneProduct(productId, changes);
    return updatedOneProduct;
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct
};