import { useEffect, useState } from "react";
import API from "@/api/api";
import ProductCard from "@/components/home/ProductCard";

export default function SimilarProducts({ currentId, category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [currentId, category]);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");

      let similar = res.data.products.filter(
        (p) =>
          p._id !== currentId &&
          p.category.toLowerCase() === category.toLowerCase()
      );

      // If fewer than 3 products in the same category,
      // fill with other products
      if (similar.length < 3) {
        const others = res.data.products.filter(
          (p) =>
            p._id !== currentId &&
            p.category.toLowerCase() !== category.toLowerCase()
        );

        similar = [...similar, ...others];
      }

      setProducts(similar.slice(0, 3));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-xl">
        Loading Similar Products...
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No Similar Products Found
      </div>
    );
  }

  return (
    <section className="mt-20 mb-20">

      <div className="mb-8">

        <h2 className="text-4xl font-bold">
          Similar Products
        </h2>

        <p className="text-gray-500 mt-2">
          Products you may also like.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}