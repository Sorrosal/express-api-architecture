const productService = require ("../services/productService");

//#region Métodos get

const getAllProducts = async(req, res) => {
    const allProducts = await productService.getAllProducts();
    res.send({status:"OK", data:allProducts});
}

const getOneProduct = async(req, res) => {
    const {
        params: {productId},
    } = req;

    if(!productId)
    {
        return;
    }
    const product = await productService.getOneProduct(productId);
    res.send({ status: "OK", data: product});
}



//#endregion

//#region Métodos delete

const deleteProduct = async(req, res) => {
    const {
        params: {productId},
    } = req;

    if(!productId)
    {
        return;
    }
    const product = await productService.deleteProduct(productId);
    res.send({ status: "OK", data: product});
}

//#endregion

//#region Métodos guardado
const createNewProduct = (req, res) => {
    const {
        body
    } = req

    const newProduct = {
        name: body.name
    }
    const createdProduct = productService.createNewProduct(newProduct);
    res.status(201).send({status: "OK", message:"Se ha añadido correctamente el registro"})
}

const updateOneProduct = (req, res) => {
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
//#endregion
module.exports = {
    getAllProducts, getOneProduct, createNewProduct, updateOneProduct, deleteProduct}