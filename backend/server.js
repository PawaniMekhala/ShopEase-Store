import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/products.js";


dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Connect Database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
    });
