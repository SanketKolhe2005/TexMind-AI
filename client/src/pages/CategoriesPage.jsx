import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import API from "@/api/api";

export default function CategoryPage() {
  const { name } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [name]);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");

      const filtered = res.data.products.filter(
        (product) =>
          product.category.toLowerCase() ===
          name.toLowerCase()
      );

      setProducts(filtered);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-28 bg-slate-50 min-h-screen">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold capitalize">
            {name} Products
          </h1>

          <p className="text-gray-500 mt-3">
            {products.length} Products Found
          </p>

          {products.length === 0 ? (
            <div className="text-center text-3xl mt-20">
              No Products Found
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
}