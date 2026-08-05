import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import CategoriesPage from "./pages/CategoriesPage";
import ProductDetails from "./pages/ProductDetails";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

import BuyerDashboard from "./pages/BuyerDashboard";
import SupplierDashboard from "./pages/SupplierDashboard";

import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Categories */}
        <Route
          path="/categories"
          element={<CategoriesPage />}
        />

        <Route
          path="/category/:name"
          element={<CategoriesPage />}
        />

        {/* Product */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={<Checkout />}
        />

        {/* Order Success */}
        <Route
          path="/success"
          element={<OrderSuccess />}
        />

        {/* Buyer */}
        <Route
          path="/buyer"
          element={<BuyerDashboard />}
        />

        {/* Supplier */}
        <Route
          path="/supplier"
          element={<SupplierDashboard />}
        />

        <Route
          path="/supplier/add-product"
          element={<AddProduct />}
        />

        <Route
          path="/supplier/edit-product/:id"
          element={<EditProduct />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>
  );
}