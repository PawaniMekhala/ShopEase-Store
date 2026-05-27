import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/products.js";


dotenv.config();



const app = express();


app.use(cors());
app.use(express.json()); // parse JSON bodies


app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log(error);
  });
