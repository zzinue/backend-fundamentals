import express from "express";

const router = express.Router();
// routes get,post, patch
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Orders were fetched",
  });
});
router.post("/", (req, res) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Order were created",
    order: order,
  });
});
router.get("/:orderId", (req, res) => {
  res.status(200).json({
    message: "Order details",
    orderId: req.params.orderId,
  });
});
router.delete("/:orderId", (req, res) => {
  res.status(200).json({
    message: "Order deleted",
    orderId: req.params.orderId,
  });
});

export default router;
