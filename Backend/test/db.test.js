const request = require("supertest");
const app = require("../app");
const { connectToDatabase, clearDatabase, closeDatabase } = require("../mongodb");

beforeAll(async () => {
    process.env.NODE_ENV = "test"; // Ensures in-memory DB is used
    await connectToDatabase();
});

afterEach(async () => {
    await clearDatabase(); // Clear data after each test
});

afterAll(async () => {
    await closeDatabase();
});

describe("Product Routes", () => {
    test("POST /products - should add a product", async () => {
        const product = {
            id: 1,
            name: "Test Product",
            brand: "Test Brand",
            category: "Test Category",
            price: 100,
            description: "This is a test product",
            image: "test.jpg"
        };

        const res = await request(app).post("/products").send(product);
        expect(res.statusCode).toBe(201);
        expect(res.body.product.name).toBe("Test Product");
    });

    test("GET /products - should return an array", async () => {
        const res = await request(app).get("/products");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});