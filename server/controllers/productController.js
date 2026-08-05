import Product from "../models/Product.js";

// Add Product
export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product Added Successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate(
      "supplier",
      "name email"
    );

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// AI Search Products
export const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
      ],
    }).populate("supplier", "name email");

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Single Product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "supplier",
      "name email"
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product Updated Successfully",
      product,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {

    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product Deleted Successfully",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};