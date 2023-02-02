const Product = require("../database/Product");

const getAllProducts = async() => {
    const allProducts = await Product.getAllProducts();
    return allProducts;
};

const getOneProduct = async(productId) => {
    const product = await Product.getOneProduct(productId);
    return product;
};

const deleteProduct = async(productId) => {
    const product = await Product.deleteProduct(productId);
    return product;
};

const createNewProduct = (newProduct) => {
    const productToInsert = {
        ...newProduct,
        name: newProduct.name
    }
  
    const createdProduct = Product.createNewProduct(productToInsert);
    return createdProduct;
}

const updateOneProduct = (productId, changes) => {
    console.log(productId, changes);
    const updatedOneProduct = Product.updateOneProduct(productId, changes);
    return updatedOneProduct;
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createNewProduct,
    updateOneProduct,
    deleteProduct
};