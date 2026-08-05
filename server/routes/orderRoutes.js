import express from "express";

import {
  placeOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", placeOrder);

router.get("/", getAllOrders);

router.get("/:userId", getUserOrders);

router.put("/:id", updateOrderStatus);

export default router;