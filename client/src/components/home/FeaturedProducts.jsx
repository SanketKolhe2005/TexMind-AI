import { useEffect, useState } from "react";
import API from "@/api/api";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Loading Products...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center">
          Featured Products
        </h1>

        <p className="text-center text-gray-500 mt-4">
          AI recommended fabrics from verified suppliers.
        </p>

        {products.length === 0 ? (
          <div className="text-center mt-10 text-xl text-gray-500">
            No Products Found
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 mt-14">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}