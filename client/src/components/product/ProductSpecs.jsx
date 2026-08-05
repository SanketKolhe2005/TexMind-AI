export default function ProductSpecs({ product }) {
  return (
    <section className="bg-white rounded-3xl shadow mt-20 p-10">

      <h2 className="text-3xl font-bold">
        Specifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

        <div>
          <p className="text-gray-500">
            Category
          </p>

          <h3 className="font-bold mt-2">
            {product.category}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Price
          </p>

          <h3 className="font-bold mt-2">
            ₹{product.price}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Stock
          </p>

          <h3 className="font-bold mt-2">
            {product.stock}
          </h3>
        </div>

        <div>
          <p className="text-gray-500">
            Supplier
          </p>

          <h3 className="font-bold mt-2">
            {product.supplier?.name || "Verified Supplier"}
          </h3>
        </div>

      </div>

    </section>
  );
}