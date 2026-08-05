import express from "express";

import {
  addToCart,
  getCart,
  removeCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/", addToCart);

router.get("/:userId", getCart);

router.delete("/:id", removeCart);

export default router;