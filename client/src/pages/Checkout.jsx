import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "@/api/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Checkout() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [loading, setLoading] = useState(false);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const placeOrder = async () => {
    if (!user) {
      toast.error("Please login first.");
      navigate("/login");
      return;
    }

    if (!address.trim()) {
      toast.error("Please enter your shipping address.");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);

      const orderData = {
        user: user._id,
        products: cart.map((item) => ({
          product: item._id,
          quantity: item.quantity || 1,
        })),
        totalAmount,
        shippingAddress: address,
        paymentMethod,
      };

      await API.post("/orders", orderData);

      toast.success("Order Placed Successfully!");

      localStorage.removeItem("cart");

      navigate("/success");

    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message || "Order Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-slate-100">

        <div className="max-w-4xl mx-auto p-6">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h1 className="text-4xl font-bold">
              Checkout
            </h1>

            {/* Shipping Address */}

            <div className="mt-10">

              <h2 className="text-2xl font-semibold mb-4">
                Shipping Address
              </h2>

              <textarea
                rows={5}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter complete delivery address..."
                className="w-full border rounded-xl p-4 outline-none"
              />

            </div>

            {/* Payment */}

            <div className="mt-10">

              <h2 className="text-2xl font-semibold mb-4">
                Payment Method
              </h2>

              <select
                className="w-full border rounded-xl p-4"
                value={paymentMethod}
                onChange={(e) =>
                  setPaymentMethod(e.target.value)
                }
              >
                <option>Cash on Delivery</option>
                <option>UPI</option>
                <option>Credit Card</option>
                <option>Debit Card</option>
              </select>

            </div>

            {/* Order Summary */}

            <div className="mt-12">

              <h2 className="text-2xl font-semibold mb-5">
                Order Summary
              </h2>

              {cart.map((item) => (

                <div
                  key={item._id}
                  className="flex justify-between border-b py-4"
                >

                  <div>

                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p className="text-gray-500">
                      Quantity : {item.quantity || 1}
                    </p>

                  </div>

                  <div className="font-bold text-emerald-600">

                    ₹{item.price * (item.quantity || 1)}

                  </div>

                </div>

              ))}

              <div className="flex justify-between mt-8 text-3xl font-bold">

                <span>Total</span>

                <span className="text-emerald-600">
                  ₹{totalAmount}
                </span>

              </div>

            </div>

            {/* Place Order */}

            <button
              onClick={placeOrder}
              disabled={loading}
              className="w-full mt-12 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white rounded-xl py-4 text-xl font-semibold"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}