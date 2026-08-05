import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "@/api/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductSpecs from "@/components/product/ProductSpecs";
import AIRecommendation from "@/components/product/AIRecommendation";
import SimilarProducts from "@/components/product/SimilarProducts";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);

      const res = await API.get(`/products/${id}`);

      if (res.data.success) {
        setProduct(res.data.product);
      }
    } catch (err) {
      console.log(err);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <main className="pt-28 min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold animate-pulse">
            Loading Product...
          </h1>
        </main>

        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />

        <main className="pt-28 min-h-screen flex items-center justify-center">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-red-500">
              Product Not Found
            </h1>

            <p className="text-gray-500 mt-5">
              This product does not exist.
            </p>

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

          <div className="grid lg:grid-cols-2 gap-14">

            <ProductGallery
              product={product}
            />

            <ProductInfo
              product={product}
            />

          </div>

          <ProductSpecs
            product={product}
          />

          <AIRecommendation
            product={product}
          />

          <SimilarProducts
            currentId={product._id}
            category={product.category}
          />

        </div>

      </main>

      <Footer />

    </>
  );
}