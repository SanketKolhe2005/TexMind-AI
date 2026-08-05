import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/auth/register", form);

      alert(res.data.message);

      navigate("/login");

    } catch (err) {

      alert(err.response?.data?.message || "Registration Failed");

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mt-3">
          Join TexMind AI
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-xl p-4"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl p-4"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <select
            className="w-full border rounded-xl p-4"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option value="buyer">Buyer</option>
            <option value="supplier">Supplier</option>
          </select>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white rounded-xl py-4"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}