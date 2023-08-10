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
    createProduct: (title, url, money, box, info, detail) => {
        let newProduct = {
            name: title,
            img: url,
            price: money,
            category: box,
            details: info,
            description: detail
        };
        productModel.collection.insertOne(newProduct);
    },
    getProducts: async() => {
        return await productModel.find().exec();
    },
    getProduct: async(id) => {
        return await productModel.findOne({_id:id}).exec();
    },
    deleteProduct: async(id) => {
        return await productModel.deleteOne({_id:id}).exec();
    }
};