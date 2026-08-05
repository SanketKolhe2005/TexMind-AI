import { useEffect, useMemo, useState } from "react";

export default function ProductGallery({ product }) {
  if (!product) {
    return (
      <div className="w-full h-[550px] rounded-3xl bg-gray-100 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const images = useMemo(() => {
    if (product.images && product.images.length > 0) {
      return product.images;
    }

    if (product.image) {
      return [product.image];
    }

    return ["https://placehold.co/700x700?text=No+Image"];
  }, [product]);

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);

  return (
    <div>
      {/* Main Image */}
      <img
        src={selectedImage}
        alt={product.name}
        className="rounded-3xl shadow-xl w-full h-[550px] object-cover"
        onError={(e) => {
          e.target.src = "https://placehold.co/700x700?text=No+Image";
        }}
      />

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4 mt-5">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.name}-${index}`}
            onClick={() => setSelectedImage(img)}
            onError={(e) => {
              e.target.src = "https://placehold.co/150x150?text=No+Image";
            }}
            className={`rounded-xl cursor-pointer h-28 w-full object-cover border-2 transition ${
              selectedImage === img
                ? "border-emerald-600"
                : "border-gray-200 hover:border-emerald-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}