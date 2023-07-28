const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const localstrategy = require("passport-local");
const passportlocal = require("passport-local-mongoose");
const cors = require("cors");
const pd = require("./product").DAL;
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const user = require("./model/user");

mongoose.connect("mongodb://localhost/27017");

app.use(cors({
    origin: `http://localhost:3000`
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "dog",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localstrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.get("/products", async(req, res) => {
    let products = await pd.getProducts();
    return res.json(products);
});

app.get("/product/:_id", async(req, res) => {
    let products = await pd.getProduct(req.params._id);
    return res.json(products);
});

app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

app.get("/register", function (req, res) {
    res.render("register");
});

app.post("/register", async (req, res) => {
    const User = await user.create({
        username: req.body.username,
        password: req.body.password
    });
    return res.status(200).json(User);
});

app.get("/login", function (req, res) {
    res.render("login");
});

app.post("/login", async function(req, res) {
    try{
        const User = await user.findOne({username: req.body.username});
        if (User) {
            const result = req.body.password === User.password;
            if (result) {
                res.render("secret");
            } else {
                res.status(400).json({error: "password does not match"});
            }
        } else {
            res.status(400).json({error: "User does not exist"});
        }
    } catch (error) {
        res.status(400).json({error});
    }
});

app.get("/logout", function (req, res) {
    req.logout(function (err) {
        if (err) {return next(err);}
        res.redirect('/');
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}

app.listen(port, () => {
    console.log("Express running on:", port);
});