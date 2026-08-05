import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "@/api/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AddProduct() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "Cotton",
    price: "",
    stock: "",
    image: "",
    supplier: user?._id || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.description ||
      !form.price ||
      !form.stock ||
      !form.image
    ) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await API.post("/products", form);

      toast.success("Product Added Successfully!");

      navigate("/supplier");

    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message ||
          "Unable to add product."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-slate-100">

        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h1 className="text-4xl font-bold">
              Add Product
            </h1>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 mt-8"
            >

              <input
                name="name"
                placeholder="Product Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows={4}
                name="description"
                placeholder="Product Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              >
                <option>Cotton</option>
                <option>Silk</option>
                <option>Denim</option>
                <option>Linen</option>
                <option>Polyester</option>
                <option>Wool</option>
              </select>

              <div className="grid grid-cols-2 gap-5">

                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={form.price}
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                />

                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={form.stock}
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                />

              </div>

              <input
                name="image"
                placeholder="Image URL"
                value={form.image}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  className="w-full h-72 object-cover rounded-2xl border"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}

              <button
                disabled={loading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white rounded-xl py-4 text-xl font-semibold"
              >
                {loading ? "Adding Product..." : "Add Product"}
              </button>

            </form>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}