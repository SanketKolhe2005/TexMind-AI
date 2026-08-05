import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import API from "@/api/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "Cotton",
    price: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await API.get(`/products/${id}`);

      setForm({
        name: res.data.product.name,
        description: res.data.product.description,
        category: res.data.product.category,
        price: res.data.product.price,
        stock: res.data.product.stock,
        image: res.data.product.image,
      });

    } catch (err) {
      console.log(err);
      toast.error("Unable to load product.");
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.put(`/products/${id}`, form);

      toast.success("Product Updated Successfully");

      navigate("/supplier");

    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data?.message ||
        "Unable to update product."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-28 bg-slate-100 min-h-screen">

        <div className="max-w-4xl mx-auto">

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h1 className="text-4xl font-bold">
              Edit Product
            </h1>

            <form
              onSubmit={updateProduct}
              className="space-y-6 mt-8"
            >

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
                placeholder="Product Name"
              />

              <textarea
                rows={4}
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
                placeholder="Description"
              />

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              >
                <option>Cotton</option>
                <option>Silk</option>
                <option>Linen</option>
                <option>Denim</option>
                <option>Polyester</option>
                <option>Wool</option>
              </select>

              <div className="grid grid-cols-2 gap-5">

                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                  placeholder="Price"
                />

                <input
                  type="number"
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  className="border rounded-xl p-4"
                  placeholder="Stock"
                />

              </div>

              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
                placeholder="Image URL"
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
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-xl text-xl font-semibold"
              >
                {loading ? "Updating..." : "Update Product"}
              </button>

            </form>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}