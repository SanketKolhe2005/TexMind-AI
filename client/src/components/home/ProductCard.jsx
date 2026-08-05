import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Star,
  ShieldCheck,
  Truck,
  Eye,
  Bot,
  ShoppingCart,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import API from "@/api/api";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleView = () => {
    if (!product?._id) {
      toast.error("Product not found.");
      return;
    }

    navigate(`/product/${product._id}`);
  };

  const handleAskAI = () => {
    navigate(`/?ai=${encodeURIComponent(product.name)}`);
  };

  const handleAddToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        toast.error("Please login first.");
        navigate("/login");
        return;
      }

      await API.post("/cart", {
        user: user._id,
        product: product._id,
        quantity: 1,
      });

      toast.success("Added to Cart");

      navigate("/cart");

    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message ||
        "Unable to add product."
      );
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">

        {/* Image */}

        <div className="relative overflow-hidden">

          <img
            src={
              product.image ||
              "https://placehold.co/600x400?text=No+Image"
            }
            alt={product.name}
            className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">

            🤖 {product.aiMatch || 95}% AI Match

          </div>

        </div>

        {/* Content */}

        <div className="p-6">

          <h2 className="text-2xl font-bold">
            {product.name}
          </h2>

          <p className="text-gray-500 mt-2">
            {product.category}
          </p>

          {/* Rating */}

          <div className="flex items-center gap-1 mt-3">

            {[...Array(5)].map((_, i) => (

              <Star
                key={i}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />

            ))}

            <span className="text-sm text-gray-500 ml-2">
              {product.rating || 5}
            </span>

          </div>

          {/* Supplier */}

          <div className="flex items-center gap-2 mt-4">

            <ShieldCheck
              size={18}
              className="text-emerald-600"
            />

            <span className="text-gray-600">
              {product.supplier?.name ||
                "Verified Supplier"}
            </span>

          </div>

          {/* Price */}

          <div className="grid grid-cols-2 mt-6">

            <div>

              <p className="text-gray-500 text-sm">
                Price
              </p>

              <h3 className="font-bold text-2xl text-emerald-600">
                ₹{product.price}
              </h3>

            </div>

            <div>

              <p className="text-gray-500 text-sm">
                Stock
              </p>

              <h3 className="font-bold text-xl">
                {product.stock}
              </h3>

            </div>

          </div>

          {/* Description */}

          <p className="text-gray-500 mt-5 line-clamp-2">
            {product.description}
          </p>

          {/* Dispatch */}

          <div className="flex items-center gap-2 mt-5">

            <Truck
              size={16}
              className="text-gray-500"
            />

            <span className="text-gray-600">
              Ready to Dispatch
            </span>

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-3 gap-3 mt-8">

            <Button
              variant="outline"
              onClick={handleAskAI}
            >
              <Bot className="mr-2 h-4 w-4" />
              AI
            </Button>

            <Button
              variant="outline"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
            </Button>

            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={handleView}
            >
              <Eye className="mr-2 h-4 w-4" />
              View
            </Button>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}