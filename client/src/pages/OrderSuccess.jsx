import { CheckCircle, ShoppingBag, LayoutDashboard } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-slate-50 flex items-center justify-center">

        <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-xl w-full text-center">

          <CheckCircle
            size={120}
            className="mx-auto text-green-500"
          />

          <h1 className="text-5xl font-bold mt-8">
            Order Successful!
          </h1>

          <p className="text-gray-500 mt-5 text-lg">
            Thank you for shopping with
            <span className="font-semibold text-emerald-600">
              {" "}TexMind AI
            </span>.
          </p>

          <p className="text-gray-500 mt-2">
            Your order has been placed successfully.
          </p>

          <div className="bg-green-50 rounded-2xl p-6 mt-10">

            <h2 className="text-xl font-bold">
              Order Status
            </h2>

            <p className="text-green-700 mt-3">
              ✔ Pending Confirmation
            </p>

            <p className="text-gray-500 mt-2">
              Our supplier will process your order shortly.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <button
              onClick={() => navigate("/")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-4 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={20} />
              Continue Shopping
            </button>

            <button
              onClick={() => navigate("/buyer")}
              className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 rounded-xl py-4 flex items-center justify-center gap-2"
            >
              <LayoutDashboard size={20} />
              Buyer Dashboard
            </button>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}