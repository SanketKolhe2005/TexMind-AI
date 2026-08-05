import { useEffect, useState } from "react";
import API from "@/api/api";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  ShoppingBag,
  IndianRupee,
  User,
  Package,
} from "lucide-react";

export default function BuyerDashboard() {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (loggedUser) {
      setUser(loggedUser);
      fetchOrders(loggedUser._id);
    }
  }, []);

  const fetchOrders = async (userId) => {
    try {
      const res = await API.get(`/orders/${userId}`);
      setOrders(res.data.orders || []);
    } catch (err) {
      console.log(err);
    }
  };

  const totalOrders = orders.length;

  const totalSpent = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Buyer Dashboard
          </h1>

          <p className="text-gray-500 mt-3">
            Welcome back,
            <span className="font-semibold">
              {" "}
              {user?.name}
            </span>
          </p>

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div className="bg-white rounded-3xl shadow p-8">

              <ShoppingBag
                size={40}
                className="text-emerald-600"
              />

              <h2 className="text-4xl font-bold mt-4">
                {totalOrders}
              </h2>

              <p>Total Orders</p>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <IndianRupee
                size={40}
                className="text-emerald-600"
              />

              <h2 className="text-4xl font-bold mt-4">
                ₹{totalSpent}
              </h2>

              <p>Total Spent</p>

            </div>

            <div className="bg-white rounded-3xl shadow p-8">

              <User
                size={40}
                className="text-emerald-600"
              />

              <h2 className="text-2xl font-bold mt-4">
                {user?.name}
              </h2>

              <p>Buyer Account</p>

            </div>

          </div>

          {/* Orders */}

          <div className="bg-white rounded-3xl shadow mt-12 p-8">

            <h2 className="text-3xl font-bold">
              Recent Orders
            </h2>

            {orders.length === 0 ? (

              <div className="text-center py-20">

                <Package
                  size={70}
                  className="mx-auto text-gray-400"
                />

                <h2 className="text-2xl font-bold mt-5">
                  No Orders Found
                </h2>

              </div>

            ) : (

              <table className="w-full mt-8">

                <thead>

                  <tr className="border-b">

                    <th className="text-left py-4">
                      Product
                    </th>

                    <th>Status</th>

                    <th>Total</th>

                    <th>Date</th>

                  </tr>

                </thead>

                <tbody>

                  {orders.map((order) => (

                    <tr
                      key={order._id}
                      className="border-b"
                    >

                      <td className="py-5">

                        {order.products?.map(
                          (item, index) => (

                            <div key={index}>

                              {item.product?.name}

                              {" × "}

                              {item.quantity}

                            </div>

                          )
                        )}

                      </td>

                      <td>

                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">

                          {order.status}

                        </span>

                      </td>

                      <td>

                        ₹{order.totalAmount}

                      </td>

                      <td>

                        {new Date(
                          order.createdAt
                        ).toLocaleDateString()}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            )}

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}