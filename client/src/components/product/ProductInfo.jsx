import {
  Star,
  ShieldCheck,
  Truck,
  Bot,
  ShoppingCart,
  ShoppingBag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import API from "@/api/api";
import toast from "react-hot-toast";

export default function ProductInfo({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        toast.error("Please login first");
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
          "Unable to add to cart."
      );
    }
  };

  const handleBuyNow = async () => {
    await handleAddToCart();
    navigate("/checkout");
  };

  const handleAskAI = () => {
    navigate(`/?ai=${encodeURIComponent(product.name)}`);
  };

  return (
    <div>

      {/* AI Match */}

      <div className="inline-flex bg-emerald-600 text-white px-5 py-2 rounded-full font-semibold">
        🤖 AI Match {product.aiMatch || 95}%
      </div>

      {/* Product Name */}

      <h1 className="text-5xl font-bold mt-6">
        {product.name}
      </h1>

      <p className="text-xl text-gray-500 mt-3">
        {product.category}
      </p>

      {/* Rating */}

      <div className="flex items-center gap-2 mt-5">

        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

        <span className="text-gray-500">
          {product.rating || "5.0"}
        </span>

      </div>

      {/* Supplier */}

      <div className="flex items-center gap-3 mt-6">

        <ShieldCheck className="text-emerald-600" />

        <span className="font-medium">
          {product.supplier?.name ||
            "Verified Supplier"}
        </span>

      </div>

      {/* Price */}

      <h2 className="text-5xl font-bold text-emerald-600 mt-8">
        ₹{product.price}
      </h2>

      <p className="text-gray-500 mt-1">
        Per Meter
      </p>

      {/* Description */}

      <div className="mt-8">

        <h3 className="font-bold text-xl">
          Description
        </h3>

        <p className="mt-3 text-gray-600 leading-7">
          {product.description}
        </p>

      </div>

      {/* Stock */}

      <div className="grid grid-cols-2 gap-6 mt-10">

        <div className="bg-white rounded-2xl shadow p-5">

          <p className="text-gray-500">
            Available Stock
          </p>

          <h3 className="text-3xl font-bold text-emerald-600">
            {product.stock}
          </h3>

        </div>

        <div className="bg-white rounded-2xl shadow p-5">

          <p className="text-gray-500">
            Category
          </p>

          <h3 className="text-2xl font-bold">
            {product.category}
          </h3>

        </div>

      </div>

      {/* Shipping */}

      <div className="flex items-center gap-3 mt-8 text-gray-700">

        <Truck className="text-emerald-600" />

        Ready to Dispatch

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-3 gap-4 mt-10">

        <Button
          variant="outline"
          onClick={handleAskAI}
        >
          <Bot className="mr-2 h-4 w-4" />
          Ask AI
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
          onClick={handleBuyNow}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          Buy Now
        </Button>

      </div>

    </div>
  );
}