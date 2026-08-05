import Order from "../models/Order.js";

// Place Order
export const placeOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      message: "Order Placed Successfully",
      order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get User Orders
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.params.userId,
    })
      .populate("user", "name email")
      .populate("products.product");

    res.json({
      success: true,
      orders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .populate("products.product");

    res.json({
      success: true,
      orders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update Order Status
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Order Updated",
      order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};