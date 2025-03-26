const express = require("express");
const { productData } = require("./mongodb");

const app = express();

app.get("/products", async (req, res) => {
    try {
        const products = await productData.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
});

// POST (Only implemented in backend)
app.post("/products", async (req, res) => {
    try {
        const newProduct = new productData(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        console.error("Error adding product:", error); // Log full error
        res.status(500).json({ message: "Error adding product", error: error.message });
    }
});

module.exports = app;