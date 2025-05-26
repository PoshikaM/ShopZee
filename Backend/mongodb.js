// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const productSchema = require("./schema");

// dotenv.config();

// // Connect to MongoDB
// mongoose.connect(process.env.DATABASE_URI)
//     .then(() => console.log("Connected with MongoDB!!"))
//     .catch((err) => console.log("Error connecting with MongoDB", err));

// // Create Product Data Collection in MongoDB
// const productData = mongoose.model("productData", productSchema);

// module.exports = { productData };

const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const productSchema = require("./schema")

let mongoServer;
let productData;

const connectToDatabase = async() => {
    if(process.env.NODE_ENV == "test"){
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
        console.log("Connected to In-Memory MongoDB");
    } else{
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected to MongoDB");
    }

    if (!mongoose.models.productData) {
        productData = mongoose.model("productData", productSchema);
    } else {
        productData = mongoose.models.productData;
    }
}

const closeDatabase = async() => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    if (mongoServer) await mongoServer.stop();
}

const clearDatabase = async() => {
    const collections = mongoose.connection.collections;
    for(const key in collections){
        await collections[key].deleteMany();
    }
}

module.exports = { connectToDatabase, closeDatabase, clearDatabase, getProductModel: () => productData };