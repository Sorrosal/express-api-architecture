const express = require("express");
const v1ProductRouter = require("./v1/routes/productRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/products", v1ProductRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
    V1SwaggerDocs(app,PORT);
})