import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import API from "@/api/api";

import {
  Trash2,
  ShoppingCart,
} from "lucide-react";

export default function Cart() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await API.get(`/cart/${user._id}`);

      setCart(res.data.carts);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);

      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.product.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl">
        Loading...
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <>
        <Navbar />

        <main className="pt-28 min-h-screen bg-slate-50 flex items-center justify-center">

          <div className="text-center">

            <ShoppingCart
              size={90}
              className="mx-auto text-gray-400"
            />

            <h1 className="text-4xl font-bold mt-6">
              Your Cart is Empty
            </h1>

            <button
              onClick={() => navigate("/")}
              className="mt-8 bg-emerald-600 text-white px-8 py-4 rounded-xl"
            >
              Continue Shopping
            </button>

          </div>

        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-28 bg-slate-50 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-10">
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (

                <div
                  key={item._id}
                  className="bg-white rounded-3xl shadow p-6 flex gap-6"
                >

                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-36 h-36 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {item.product.name}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      {item.product.supplier?.name}
                    </p>

                    <h3 className="text-emerald-600 text-2xl font-bold mt-4">
                      ₹{item.product.price}/meter
                    </h3>

                    <p className="mt-5">
                      Quantity : {item.quantity}
                    </p>

                  </div>

                  <div className="flex flex-col justify-between items-end">

                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500"
                    >
                      <Trash2 />
                    </button>

                    <h2 className="text-2xl font-bold">
                      ₹{item.product.price * item.quantity}
                    </h2>

                  </div>

                </div>

              ))}

            </div>

            <div className="bg-white rounded-3xl shadow p-8 h-fit">

              <h2 className="text-3xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between mt-8">
                <span>Products</span>
                <span>{cart.length}</span>
              </div>

              <div className="flex justify-between mt-5">
                <span>Shipping</span>
                <span className="text-emerald-600">
                  FREE
                </span>
              </div>

              <hr className="my-8" />

              <div className="flex justify-between text-3xl font-bold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                onClick={() => {
                  const checkoutCart = cart.map((item) => ({
                    _id: item.product._id,
                    name: item.product.name,
                    price: item.product.price,
                    quantity: item.quantity,
                  }));

                  localStorage.setItem(
                    "cart",
                    JSON.stringify(checkoutCart)
                  );

                  navigate("/checkout");
                }}
                className="w-full mt-10 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl"
              >
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}