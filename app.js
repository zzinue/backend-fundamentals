import express from "express";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";

const app = express();

// app.use((req,res, next) => {
//     res.status(200).json({
//         message:"It worked"
//     })

// })

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

export default app;
