import { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import AddProductModal from "./AddProductModal";

const initialProducts = [
  {
    id: 1,
    name: "Premium Cotton",
    stock: "12540 m",
    price: "₹165",
    moq: "200 m",
    status: "Available",
  },
  {
    id: 2,
    name: "Organic Linen",
    stock: "8420 m",
    price: "₹210",
    moq: "100 m",
    status: "Available",
  },
  {
    id: 3,
    name: "Stretch Denim",
    stock: "6200 m",
    price: "₹250",
    moq: "300 m",
    status: "Low Stock",
  },
];

export default function ProductTable() {
  const [products, setProducts] = useState(initialProducts);

  const [open, setOpen] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  const handleAdd = () => {
    setEditingProduct(null);
    setOpen(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      setProducts(products.filter((item) => item.id !== id));
    }
  };

  const handleSave = (product) => {
    if (editingProduct) {
      setProducts(
        products.map((item) =>
          item.id === editingProduct.id
            ? { ...product, id: editingProduct.id }
            : item
        )
      );
    } else {
      setProducts([
        ...products,
        {
          ...product,
          id: Date.now(),
        },
      ]);
    }
  };

  return (
    <>
      <section className="bg-white rounded-3xl shadow mt-12 p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold">
            Products
          </h2>

          <button
            onClick={handleAdd}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Plus size={18} />
            Add Product
          </button>

        </div>

        <table className="w-full">

          <thead>

            <tr className="border-b text-left">

              <th className="py-4">Product</th>

              <th>Price</th>

              <th>Stock</th>

              <th>MOQ</th>

              <th>Status</th>

              <th className="text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {products.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="py-5 font-semibold">
                  {item.name}
                </td>

                <td>{item.price}</td>

                <td>{item.stock}</td>

                <td>{item.moq}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-5">

                    <button
                      onClick={() => handleEdit(item)}
                    >
                      <Pencil
                        size={20}
                        className="text-blue-600 hover:text-blue-800"
                      />
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2
                        size={20}
                        className="text-red-600 hover:text-red-800"
                      />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </section>

      <AddProductModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleSave}
        editingProduct={editingProduct}
      />

    </>
  );
}