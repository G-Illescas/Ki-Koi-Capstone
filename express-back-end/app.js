const express = require("express");
const cors = require("cors");
const pd = require("./product").DAL;
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

app.use(cors({
    origin: `http://localhost:3000`
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

app.get("/products", async(req, res) => {
    let products = await pd.getProducts();
    return res.json(products);
});

app.listen(port, () => {
    console.log("Express running on:", port);
});