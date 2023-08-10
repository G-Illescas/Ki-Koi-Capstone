const {mongoose, Schema} = require("mongoose");
const connectionString = "mongodb+srv://Gus_Ill:v2pi8rp2@cluster0.t23zl.mongodb.net/ShopDB";
const cartData = "Cart";

mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", () => {
});

const cart = new Schema(
    {
        name: String,
        img: String,
        price: String,
    },
    {collection: cartData}
);
const cartModel = mongoose.model("cart", cart);

exports.DAL = {
    createCartItem: (title, url, money) => {
        let newCart = {
            name: title,
            img: url,
            price: money,
        };
        cartModel.collection.insertOne(newCart);
    },
    getCartItems: async() => {
        return await cartModel.find().exec();
    },
    deleteCartItem: async(id) => {
        return await cartModel.deleteOne({_id:id}).exec();
    }
};