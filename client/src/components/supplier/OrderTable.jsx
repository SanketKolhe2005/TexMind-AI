import { useState } from "react";

const initialOrders = [
  {
    id: 101,
    buyer: "ABC Garments Pvt. Ltd.",
    product: "Premium Cotton",
    quantity: "500 m",
    amount: "₹82,500",
    status: "Pending",
  },
  {
    id: 102,
    buyer: "Royal Fashion",
    product: "Organic Linen",
    quantity: "300 m",
    amount: "₹63,000",
    status: "Accepted",
  },
  {
    id: 103,
    buyer: "BlueTex Apparel",
    product: "Stretch Denim",
    quantity: "1000 m",
    amount: "₹2,50,000",
    status: "Dispatched",
  },
];

export default function OrderTable() {
  const [orders, setOrders] = useState(initialOrders);

  const updateStatus = (id, status) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const deleteOrder = (id) => {
    if (window.confirm("Cancel this order?")) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

  return (
    <section className="bg-white rounded-3xl shadow mt-12 mb-20 p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Incoming Orders
        </h2>

        <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
          {orders.length} Orders
        </span>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b text-left">

            <th className="py-4">Buyer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b hover:bg-slate-50"
            >

              <td className="py-5 font-semibold">
                {order.buyer}
              </td>

              <td>{order.product}</td>

              <td>{order.quantity}</td>

              <td>{order.amount}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium
                  ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "Accepted"
                      ? "bg-blue-100 text-blue-700"
                      : order.status === "Dispatched"
                      ? "bg-purple-100 text-purple-700"
                      : order.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.status}
                </span>

              </td>

              <td>

                <div className="flex flex-wrap gap-2">

                  {order.status === "Pending" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "Accepted")
                      }
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Accept
                    </button>
                  )}

                  {order.status === "Accepted" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "Dispatched")
                      }
                      className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Dispatch
                    </button>
                  )}

                  {order.status === "Dispatched" && (
                    <button
                      onClick={() =>
                        updateStatus(order.id, "Delivered")
                      }
                      className="bg-emerald-600 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Deliver
                    </button>
                  )}

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Cancel
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}