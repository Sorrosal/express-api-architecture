const productService = require ("../services/productService");

const getAllProducts = async(req, res) => {
    const allProducts = await productService.getAllProducts();
    console.log(allProducts);
    res.send(allProducts);
}

const getOneProduct = (req, res) => {
    const {
        params: {productId},
    } = req;

    if(!productId)
    {
        return;
    }
    const product = productService.getOneProduct(productId);
    res.send({ status: "OK", data: product});
}

const createNewProduct = (req, res) => {
    const { body } = req;

    if(
        !body.name
    ){
        return ;
    }

    const newProduct = {
        name: body.name
    }

    const createdProduct = productService.createNewProduct(newProduct);
    res.status(201).send({status: "OK", data: createdProduct})
}

const updateOneProduct = () => {
    const {
        body, 
        params: {productId}
    } = req
    if(!productId)
    {
        return;
    }
    const updateOneProduct = productService.updateOneProduct(productId, body);
    res.send({ status:"OK", data: updateOneProduct});
};
module.exports = {
    getAllProducts, getOneProduct, createNewProduct, updateOneProduct}