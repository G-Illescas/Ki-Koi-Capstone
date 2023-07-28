const {mongoose, Schema} = require("mongoose");
const connectionString = "mongodb+srv://Gus_Ill:v2pi8rp2@cluster0.t23zl.mongodb.net/ShopDB";
const productData = "ClothesDB";

mongoose.connect(connectionString, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Store is ready");
});

const product = new Schema(
    {
        name: String,
        img: String,
        price: String,
        category: Array,
        details: Array,
        description: String
    },
    {collection: productData}
);
const productModel = mongoose.model("product", product);

exports.DAL = {
    getProducts: async() => {
        return await productModel.find().exec();
    },
    getProduct: async(id) => {
        let filter = {id}
        return await productModel.find(filter)
    },
};