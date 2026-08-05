import express from "express";

import {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/search", searchProducts);

router.get("/:id", getProductById);

router.post("/", addProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;