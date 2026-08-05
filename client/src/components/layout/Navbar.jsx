import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User, LogOut, LayoutDashboard } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    navigate("/login");
  };

  const cartCount = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold text-emerald-600"
        >
          TexMind AI
        </Link>

        {/* Navigation */}

        <nav className="flex items-center gap-8">

          <Link
            to="/"
            className="hover:text-emerald-600"
          >
            Home
          </Link>

          <Link
            to="/categories"
            className="hover:text-emerald-600"
          >
            Categories
          </Link>

          <Link
            to="/about"
            className="hover:text-emerald-600"
          >
            About
          </Link>

          {/* Cart */}

          <button
            onClick={() => navigate("/cart")}
            className="relative"
          >
            <ShoppingCart size={24} />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}

          </button>

          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-emerald-600 text-white px-5 py-2 rounded-xl"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="border border-emerald-600 text-emerald-600 px-5 py-2 rounded-xl"
              >
                Register
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">

              <span className="font-semibold">
                {user.name}
              </span>

              {user.role === "buyer" && (
                <button
                  onClick={() => navigate("/buyer")}
                  className="flex items-center gap-2 text-emerald-600"
                >
                  <LayoutDashboard size={18} />
                  Buyer
                </button>
              )}

              {user.role === "supplier" && (
                <button
                  onClick={() => navigate("/supplier")}
                  className="flex items-center gap-2 text-emerald-600"
                >
                  <LayoutDashboard size={18} />
                  Supplier
                </button>
              )}

              <button
                onClick={logout}
                className="flex items-center gap-2 text-red-600"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>
          )}

        </nav>

      </div>

    </header>
  );
}