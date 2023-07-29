const bcrypt = require("bcrypt");
const express = require("express");
const cors = require("cors");
const pd = require("./product").DAL;
const User = require("./user");
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

app.get("/product/:_id", async(req, res) => {
    let products = await pd.getProduct(req.params._id);
    return res.json(products);
});

app.post("/register", (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((hashedPassword) => {
        const user = new User({
            email: req.body.email,
            password: hashedPassword,
        });
        user.save()
            .then((result) => {
                res.status(201).send({
                    message: "User created",
                    result,
                });
            })
        .catch((e) => {
            res.status(500).send({
                message:"User was not created", e
            });
        })
    })
    .catch((e) => {
        res.status(500).send({
            message: "Password was not hashed", e
        });
    });
});

app.listen(port, () => {
    console.log("Express running on:", port);
});