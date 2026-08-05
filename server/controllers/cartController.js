import Cart from "../models/Cart.js";

// Add to Cart
export const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    const existing = await Cart.findOne({ user, product });

    if (existing) {
      existing.quantity += quantity || 1;
      await existing.save();

      return res.json({
        success: true,
        message: "Cart Updated",
        cart: existing,
      });
    }

    const cart = await Cart.create({
      user,
      product,
      quantity,
    });

    res.status(201).json({
      success: true,
      message: "Added To Cart",
      cart,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get User Cart
export const getCart = async (req, res) => {
  try {
    const carts = await Cart.find({
      user: req.params.userId,
    }).populate("product");

    res.json({
      success: true,
      carts,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Remove Cart Item
export const removeCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Item Removed",
    });

  } catch (err) {
    console.log("========== CART ERROR ==========");
    console.error(err);
    console.log("===============================");

    res.status(500).json({
        success: false,
        message: err.message,
    });
}
};