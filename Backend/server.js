const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3007;

app.use("/", productRoutes); // Register routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});