const {mongoose, Schema} = require("mongoose");
const connectionString = "mongodb+srv://Gus_Ill:v2pi8rp2@cluster0.t23zl.mongodb.net/ShopDB";
const cartData = "Cart";

mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", () => {
});

const cart = new Schema(
    {
        code: String,
        name: String,
        img: String,
        price: String,
    },
    {collection: cartData}
);
const cartModel = mongoose.model("cart", cart);

exports.DAL = {
    createCartItem: (id, title, url, money) => {
        let newCart = {
            code: id,
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
    },
    deleteCart: async() => {
        return await cartModel.deleteMany({}).exec();
    }
};