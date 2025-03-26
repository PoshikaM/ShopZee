const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productSchema = require("./schema");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URI)
    .then(() => console.log("Connected with MongoDB!!"))
    .catch((err) => console.log("Error connecting with MongoDB", err));

// Create Product Data Collection in MongoDB
const productData = mongoose.model("productData", productSchema);

module.exports = { productData };