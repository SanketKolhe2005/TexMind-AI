const orders = [
  {
    id: 1,
    product: "Premium Cotton",
    supplier: "Shree Textiles",
    quantity: "500 m",
    status: "Pending",
  },
  {
    id: 2,
    product: "Organic Linen",
    supplier: "Green Fabrics",
    quantity: "300 m",
    status: "Dispatched",
  },
  {
    id: 3,
    product: "Stretch Denim",
    supplier: "BlueTex",
    quantity: "1000 m",
    status: "Delivered",
  },
];

export default function RecentOrders() {
  return (
    <section className="bg-white rounded-3xl shadow mt-12 p-8">

      <h2 className="text-3xl font-bold mb-8">
        Recent Orders
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b text-left">

            <th className="py-4">Product</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order.id}
              className="border-b"
            >

              <td className="py-5 font-semibold">
                {order.product}
              </td>

              <td>{order.supplier}</td>

              <td>{order.quantity}</td>

              <td>

                <span
                  className={`px-3 py-1 rounded-full text-sm
                  ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : order.status === "Dispatched"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {order.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}