const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 5555,
    user: "postgres",
    password: "mysecretkey",
    database:"postgres"
    })
    

const  getAllProducts = async(req, res) =>{
    try{
        const products = await pool.query("select * from public.products");

        return products.rows;

    }catch (error){
        res.status(500).send(error);
    }
    
};

const createNewProduct = async(newProduct) => { 
    try{
        const product = await pool.query("INSERT INTO public.products (name) VALUES ($1)",[newProduct.name]);
        if(!product){return;}
        return "Se añadio el registro";

    } catch (error){
        res.status(500).send(error);
    }
}

const getOneProduct = async(productId) => {
    try{
        const product = await pool.query("select * from public.products where id = $1",[productId]);
        if(!product){return;}
        return product.rows[0];

    } catch (error){
        res.status(500).send(error);
    }
}

const updateOneProduct = async(productId, changes) => {
    try{
        const product = await pool.query("UPDATE public.products SET name=$1 WHERE id = $2",[changes.name,productId]);
        if(!product){return;}    
        return product.rows[0];
    } catch (error){
        res.status(500).send(error);
    }
};

module.exports = {getAllProducts, getOneProduct, createNewProduct, updateOneProduct}