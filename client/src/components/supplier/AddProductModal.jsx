import { useEffect, useState } from "react";

export default function AddProductModal({
  open,
  onClose,
  onSave,
  editingProduct,
}) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    moq: "",
    status: "Available",
  });

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    } else {
      setForm({
        name: "",
        price: "",
        stock: "",
        moq: "",
        status: "Available",
      });
    }
  }, [editingProduct, open]);

  if (!open) return null;

  const handleSubmit = () => {
    if (!form.name || !form.price) {
      alert("Please fill all required fields");
      return;
    }

    onSave(form);

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl w-full max-w-xl p-8">

        <h2 className="text-3xl font-bold mb-8">

          {editingProduct ? "Edit Product" : "Add Product"}

        </h2>

        <div className="space-y-5">

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="Stock"
            value={form.stock}
            onChange={(e) =>
              setForm({ ...form, stock: e.target.value })
            }
          />

          <input
            className="w-full border rounded-xl p-4"
            placeholder="MOQ"
            value={form.moq}
            onChange={(e) =>
              setForm({ ...form, moq: e.target.value })
            }
          />

          <select
            className="w-full border rounded-xl p-4"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>Available</option>
            <option>Low Stock</option>
          </select>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="border rounded-xl px-6 py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-emerald-600 text-white rounded-xl px-6 py-3"
          >
            {editingProduct ? "Update Product" : "Add Product"}
          </button>

        </div>

      </div>

    </div>
  );
}