const { v4: uuid } = require ("uuid");
const Product = require("../database/Product");

const getAllProducts = async() => {
    const allProducts = await Product.getAllProducts();
    console.log(allProducts)
    return allProducts;
};

const getOneProduct = (productId) => {
    const product = Product.getOneProduct(productId)
    return product;
};

const createNewProduct = (newProduct) => {
    const productToInsert = {
        ...newProduct,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US",{timezone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US",{timezone: "UTC"}),
    }

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