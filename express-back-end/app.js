const express = require("express");
const cors = require("cors");
const pd = require("./product").DAL;
const User = require("./user");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const admin = require("./admin");

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

app.post("/add-product/", async(req, res) => {
    const {title, url, money, box, info, detail} = req.body;
    try {
        pd.createProduct(title, url, money, box, info, detail);
        console.log("Sent");
    }
    catch (e) {
        console.error(e);
    }
});

app.delete("/delete/:_id", async(req, res) => {
    let product = await pd.deleteProduct(req.params._id);
    res.json(product);
})

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

app.post("/login", (req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((passwordCheck) => {
            if(!passwordCheck) {
                return response.status(400).send({
                    message: "Password does not match", e,
                });
            }
            const token = jwt.sign(
                {
                    userId: user._id,
                    userEmail: user.email,
                },
                "RANDOM-TOKEN",
                {expiresIn: "24h"}
            );
            res.status(200).send({
                message: "Login Successful",
                email: user.email, token,
            });
        })
        .catch((e) => {
            res.status(400).send({
                message: "Password does not match", e,
            });
        });
    })
    .catch((e) => {
        res.status(404).send({
            message: "Email was not found", e,
        });
    });
});

app.get("/admin-endpoint", admin, (req, res) => {
    res.json({
        message:"User is logged in"
    });
});

app.get("/admin-products", admin, async(req, res) => {
    res.json({
        data: await pd.getProducts()
    })
});

app.listen(port, () => {
    console.log("Express running on:", port);
});