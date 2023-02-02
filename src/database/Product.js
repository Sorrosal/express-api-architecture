const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5555,
    user: "postgres",
    password: "mysecretkey",
    database:"test"
    })
    

const  getAllProducts = async() =>{
    
    const products = await pool.query("select * from dbo.products");
    console.log(products.rows)
    return products.rows;
};

const createNewProduct = async(newProduct) => {
    console.log("Nuevo"+newProduct.id);
    // const isAlreadyAdded =
    // DB.products.findIndex((product) => product.name === newProduct.name) > -1;

    // if(isAlreadyAdded){
    //     return ;
    // }

    // DB.products.push(newProduct);
    // saveToDatabase(DB);
    try{
        const product = await pool.query("INSERT INTO dbo.products VALUES ($1,'$2')",[newProduct.id,newProduct.name]);
            if(!product){
                return;}
            
        return "Se añadio el registro";

    } catch (error){
        return error;
    }
}

const getOneProduct = async(productId) => {
    try{
        const product = await pool.query("select * from dbo.products where id = $1",[productId]);
            if(!product){
                return;}
            
        return product.rows[0];

    } catch (error){
        return error;
    }
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