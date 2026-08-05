import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "@/api/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  Package,
  ShoppingBag,
  IndianRupee,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";

export default function SupplierDashboard() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data.products || []);
    } catch (err) {
      console.log(err);
      toast.error("Unable to load products.");
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data.orders || []);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await API.delete(`/products/${id}`);

      toast.success("Product Deleted");

      fetchProducts();

    } catch (err) {
      console.log(err);
      toast.error("Unable to delete.");
    }
  };

  const revenue = orders.reduce(
    (sum, order) => sum + (order.totalAmount || 0),
    0
  );

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="pt-28 bg-slate-100 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Supplier Dashboard
          </h1>

          <p className="text-gray-500 mt-3">
            Manage your textile products
          </p>

          {/* Dashboard Cards */}

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white rounded-3xl shadow p-8">

              <Package
                size={45}
                className="text-emerald-600"
              />

              <h2 className="text-4xl font-bold mt-4">
                {products.length}
              </h2>

              <p>Total Products</p>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <ShoppingBag
                size={45}
                className="text-emerald-600"
              />

              <h2 className="text-4xl font-bold mt-4">
                {orders.length}
              </h2>

              <p>Total Orders</p>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <IndianRupee
                size={45}
                className="text-emerald-600"
              />

              <h2 className="text-4xl font-bold mt-4">
                ₹{revenue}
              </h2>

              <p>Total Revenue</p>

            </div>

          </div>

          {/* Search + Add */}

          <div className="flex justify-between items-center mt-12">

            <div className="relative w-96">

              <Search
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                placeholder="Search Products..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full pl-12 border rounded-xl p-4"
              />

            </div>

            <button
              onClick={() =>
                navigate("/supplier/add-product")
              }
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl"
            >
              + Add Product
            </button>

          </div>

          {/* Products Table */}

          <div className="bg-white rounded-3xl shadow mt-10 p-8">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">
                    Product
                  </th>

                  <th>Category</th>

                  <th>Price</th>

                  <th>Stock</th>

                  <th>Status</th>

                  <th>Action</th>

                </tr>

              </thead>

              <tbody>

                {filteredProducts.map((product) => (

                  <tr
                    key={product._id}
                    className="border-b"
                  >

                    <td className="py-5 font-semibold">
                      {product.name}
                    </td>

                    <td>{product.category}</td>

                    <td>
                      ₹{product.price}
                    </td>

                    <td>
                      {product.stock}
                    </td>

                    <td>

                      {product.stock < 20 ? (

                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">

                          Low Stock

                        </span>

                      ) : (

                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">

                          In Stock

                        </span>

                      )}

                    </td>

                    <td>

                      <button
                        onClick={() =>
                          navigate(
                            `/supplier/edit-product/${product._id}`
                          )
                        }
                        className="mr-4 text-blue-600"
                      >
                        <Pencil size={20} />
                      </button>

                      <button
                        onClick={() =>
                          deleteProduct(product._id)
                        }
                        className="text-red-600"
                      >
                        <Trash2 size={20} />
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}