const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const { connectToDatabase } = require("./mongodb");

const PORT = process.env.PORT || 3007;

connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to start server", err);
});