import express from "express";
import productRoutes from "./routes/products.js";
import orderRoutes from "./routes/orders.js";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

// app.use((req,res, next) => {
//     res.status(200).json({
//         message:"It worked"
//     })

// })

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes wich should handle requests ff
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
