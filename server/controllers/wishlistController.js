import Wishlist from "../models/Wishlist.js";

// Add to Wishlist
export const addToWishlist = async (req, res) => {
  try {
    const { user, product } = req.body;

    const exists = await Wishlist.findOne({
      user,
      product,
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Product already in wishlist",
      });
    }

    const wishlist = await Wishlist.create({
      user,
      product,
    });

    res.status(201).json({
      success: true,
      message: "Added to Wishlist",
      wishlist,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Wishlist
export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find({
      user: req.params.userId,
    }).populate({
      path: "product",
      populate: {
        path: "supplier",
        select: "name email",
      },
    });

    res.json({
      success: true,
      wishlist,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Remove Wishlist Item
export const removeWishlist = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Removed from Wishlist",
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};