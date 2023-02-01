const express = require("express");
const router = express.Router();
const productController = require ("../../controllers/productController");

router
    .get("/", productController.getAllProducts)
    .get("/:productId", productController.getOneProduct)
    .post("/", productController.createNewProduct)
    .patch("/:productId", productController.updateOneProduct);
    

module.exports = router;